import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import {
  ChatCategoryInterface,
  ChatContactInterface, ChatCreateFolderOutputInterface,
  ChatDialogInterface,
  ChatMessage, ChatUserActionStatusState, ChatUserPresenceState,
  ChatViewToShowEnum,
  ChatWritingUserInterface,
  filterDialogsByCategory,
  filterDialogsBySearchValue,
  filterMessageBySearchValue,
  ShowFullChatOutputInterface,
} from "../../../../../../index";
import {
  ChatDictionaryService,
  ChatMessagesLogic,
} from "../../../../../../utils/utils";


@Component({
  tag: "cnt-module-chat",
  styleUrl: "cnt-module-chat.css",
  shadow: false,
  scoped: true,
})
export class CntModuleChat implements ComponentInterface {
  /**
   * array categories
   * */
  @Prop() categories: ChatCategoryInterface[];
  // /**
  //  * Заголовок для чата
  //  * */
  // @Prop() titleModule: TitleModuleInterface;

  /**
   * добавляем печатающий
   * */
  @Prop() writing: ChatWritingUserInterface[] = [];

  /**
   * массив данных для диалогов
   * */
  @Prop() dialogs: ChatDialogInterface[];
  /**
   * отключение поиска диалогов
   * */
  @Prop() disableInnerSearchDialogsState: boolean;
  /**
   * отключение поиска сообщений
   * */
  @Prop() disableInnerSearchMessagesState: boolean;

  /**
   * отключение поиска контактов
   * */
  @Prop() disableInnerSearchContactState: boolean;

  /**
   * отключение возможности октрытие приложение чата
   * */
  @Prop() disableShowFullChatState: boolean;

  /**
   * Разворачивать полную версию чата при клике иконку
   * */
  @Event() showFullChat: EventEmitter<ShowFullChatOutputInterface>;

  /**
   * создание папки
   * */
  @Event() createFolder: EventEmitter<ChatCreateFolderOutputInterface>;

  /**
   * видимость
   * */
  @Prop() visibleState: boolean = true;

  /**
   * Перменная для включения/отключения показа чата в развернутом виде
   * */
  @Prop() openState: boolean;
  //==================================================

  /**
   * массив данных личных сообщений
   * */
  @Prop() message: ChatMessage[];

  /**
   * масиив данных контактов
   * */
  @Prop() contacts: ChatContactInterface[];

  /**
   * словарь
   * */
  @Prop() dictionary: any;

  /**
   * click to dialog
   * */
  @Event() clickToDialog: EventEmitter<ChatDialogInterface>;

  /**
   *
   */
  @Event() sendTextMessage: EventEmitter<string>;

  /**
   * click to files button
   * */
  @Event() clickToFilesBtn: EventEmitter<void>;

  /**
   * search contact
   * */
  @Event() searchContact: EventEmitter<string>;

  /**
   *
   * */
  @Event() chatViewStateChange: EventEmitter<ChatViewToShowEnum>;

  /**
   * select content default
   * */
  @Prop() chatViewState: ChatViewToShowEnum = ChatViewToShowEnum.dialogs;

  /**
   * действие сообеседников в чате (печатает, записывает аудио и т.д.)
   * */
  @Prop() chatActionState: ChatUserActionStatusState;

  /**
   * присутствие пользователя в сети
   * */
  @Prop() chatPresenceState: ChatUserPresenceState;

  //============================================================================================
  /**
   * Возможность записи аудио
   */
  @Prop() canRecordAudio = false;

  /**
   * позволяет установить печатающие данные
   * */
  @Method() async setWritingState(item?: ChatWritingUserInterface) {
    this.writing = item ? [item] : null;
  }
  /**
   * меняет статус (присутстия собеседников или контакта) в чате
   * */
  @Method() async updateChatPresenceState(item: ChatUserPresenceState) {
    this.chatPresenceState = item;
  }

  /**
   * меняет статусы действия текущих (печатает, записывает и т.д.)
   * */
  @Method() async updateChatActionState(item: ChatUserActionStatusState) {
    this.chatActionState = item;
  }

  /**
   * скрывает весь блок что бы на экране не было вообще видно
   * */
  @Method() async hide() {
    this.visibleState = false;
  }

  /**
   * позволяет активировать/деактивароть возможность записи аудио
   * */
  @Method() async activeRecordAudioState(state: boolean) {
    this.canRecordAudio = state;
  }

  /**
   * позволяет активировать/деактивароть возможность октрытие приложение
   * */
  @Method() async activeShowFullChat(state: boolean) {
    this.disableShowFullChatState = !state;
  }

  /**
   * сменить окно показа
   * */
  @Method() async changeViewToShow(state: ChatViewToShowEnum) {
    this.chatViewState = state;
  }

  /**
   * скролит вниз окно сообщений
   * */
  @Method() async safeScrollToBotMessageView() {
    this.scrollMessageViewToBot();
  }

  /**
   * показывает весь блок после скрытия
   * */
  @Method() async show() {
    // show a prompt
    this.visibleState = true;
  }

  /**
   * показывает только кнопку
   * */
  @Method() async close() {
    this.showChat(false);
  }

  /**
   * открывает блок чатов
   * */
  @Method() async open() {
    this.showChat(true);
  }

  /**
   * */
  @Method() async openDialog(dialog: ChatDialogInterface) {
    this.open();
    this.clickToDialogHandler(dialog, true);
  }

  /**
   * массив данных для контактов
   * */
  @State() contactsState = this.contacts;

  /**
   * открытый диалог
   * */
  @State() openedDialog: ChatDialogInterface;

  /**
   * массив данных категорий
   * */
  @State() categoriesState: ChatCategoryInterface[] = this.categories;

  /**
   * массив данных диалогов
   * */
  @State() dialogsState: ChatDialogInterface[] = this.dialogs;

  /**
   * массив данных персонального чата
   * */
  @State() messageState: ChatMessage[] = this.message;

  /**
   * текущий элемент
   * */
  @Element() el: HTMLElement;

  /**
   * последние данные для поиска
   * */
  public lastSearchDialog: string;

  /**
   * последняя кликнутая категория
   * */
  public lastClickedCategory: ChatCategoryInterface;

  @Watch("dictionary")
  watchDictionaryHandler(newValue: ChatDialogInterface[]) {
    this.updateDictionary(newValue);
  }

  @Watch("dialogs")
  watchDialogsHandler(newValue: ChatDialogInterface[]) {
    this.safeFiltersDialog(
      this.lastSearchDialog,
      this.lastClickedCategory,
      newValue
    );
  }

  @Watch("message")
  watchMessageHandler(newValue: boolean, oldValue: boolean) {
    console.log("The new value of activated is: ", { newValue, oldValue });
    this.messageState = this.message;
  }

  @Watch("categories")
  watchCategoriesHandler(newValue: ChatCategoryInterface[]) {
    this.categoriesState = newValue;

    this.safeFiltersDialog(
      this.lastSearchDialog,
      this.lastClickedCategory,
      this.dialogs
    );
  }

  componentDidLoad() {
    this.updateDictionary(this.dictionary);
  }

  render() {
    return (
      <Host style={{ display: !this.visibleState ? "none" : null }}>
        <div class="wrapper-modal">
          {this.openState ? (
            <div class="wrapper-chat">
              <module-header
                disableShowFullChatState={this.disableShowFullChatState}
                onShowFullChat={() => this.showFullChatHandler()}
                onClose={() => this.onClose()}
              ></module-header>
              <div class="m-chat-wrapper">
                {this.ShowContent(this.chatViewState)}
              </div>
            </div>
          ) : (
            ""
          )}
          <btn-wrapper
            onClickToShowChat={() => this.showChat()}
            showChat={this.openState}
            dialogs={this.countNewMess(this.dialogs)}
          ></btn-wrapper>
        </div>
      </Host>
    );
  }

  /**
   *
   * */
  private updateDictionary(newValue: any) {
    ChatDictionaryService.dictionary$.next(newValue);
    console.log("changed - dictionary");
  }

  public countNewMess(array) {
    let counter = 0;
    array.map((item) => {
      counter += item.newMessage;
    });
    return counter;
  }

  /**
   * */
  // public clickToCategory(value: ChatCategoryInterface) {
  //   this.dialogsState = filterDialogsByCategory(value, this.dialogs);
  // }

  /**
   * dialogue search
   * */
  public safeFiltersDialog(
    searchValue: string,
    category: ChatCategoryInterface,
    allDialogs: ChatDialogInterface[]
  ) {
    this.lastSearchDialog = searchValue;
    this.lastClickedCategory = category;

    let filteredDialogsBySearchValue = allDialogs;

    if (!this.disableInnerSearchDialogsState) {
      filteredDialogsBySearchValue = filterDialogsBySearchValue(
        searchValue,
        allDialogs
      );
    }

    this.dialogsState = filterDialogsByCategory(
      category,
      filteredDialogsBySearchValue
    );
  }

  /**
   * search for private messages
   * */
  public searchPersonalMessages(value: string) {
    if (!this.disableInnerSearchMessagesState) {
      this.messageState = filterMessageBySearchValue(value, this.message);
    }
  }
  /**
   * Select show content
   * */
  public ShowContent = (content) => {
    // console.log("ShowContent", content);
    switch (content) {
      case "dialogs":
        return (
          <s-saqhan-chat-users-wrapper
            dialogs={this.dialogsState}
            categories={this.categoriesState}
            onClickToCategory={(item: CustomEvent<ChatCategoryInterface>) =>
              this.safeFiltersDialog(
                this.lastSearchDialog,
                item.detail,
                this.dialogs
              )
            }
            onClickToDialog={(item: CustomEvent<ChatDialogInterface>) =>
              this.clickToDialogHandler(item.detail)
            }
            onClickToFilesBtn={() => this.clickToFilesBtnHandler()}
            onSearchDialog={(item: CustomEvent<string>) =>
              this.safeFiltersDialog(
                item.detail,
                this.lastClickedCategory,
                this.dialogs
              )
            }
            onSendNewMessModal={() => this.sendNewMessModal()}
          ></s-saqhan-chat-users-wrapper>
        );
      case "personal":
        return (
          // <div class='drop-file-wrapper' >
          //   <s-adam-copying></s-adam-copying>
          // </div>
          <module-personal
            chatPresenceState={this.chatPresenceState}
            openedDialog={this.openedDialog}
            chatActionState={this.chatActionState}
            writing={this.writing}
            canRecordAudio={this.canRecordAudio}
            onSendTextMessage={() => this.scrollMessageViewToBot()}
            dialogs={this.dialogsState}
            message={this.messageState}
            onSearchPersonalMessages={(e: CustomEvent<string>) =>
              this.searchPersonalMessages(e.detail)
            }
            onClickToShowDialogs={() => this.clickToShowDialogsHandler()}
            onClickToUserProfile={() => this.clickToUserProfileHandler()}
            onCancelSearchPersonal={() => this.cancelSearchPersonal()}
          ></module-personal>
        );
      case "files":
        return (
          <s-saqhan-chat-files-wrapper
            // onClickToLink={(item) => this.clickToLink(item.detail)}
            onClickToShowDialogs={() => this.clickToShowDialogsHandler()}
          ></s-saqhan-chat-files-wrapper>
        );
      case "profile":
        return (
          <s-adam-profile
            theme={"module"}
            categories={this.categoriesState}
            onClickToShowDialogs={() => this.clickToShowDialogsHandler()}
            onClickToShowFolders={() => this.clickToShowFoldersHandler()}
          ></s-adam-profile>
        );
      case "contacts":
        return (
          <contacts-list
            theme={"module"}
            contacts={this.contacts}
            // onSearchContact={(detail) => this.searchContact({ detail })}
            onClickToShowDialogs={() => this.clickToShowDialogsHandler()}
            // onClickToShowContacts={() => this.clickToShowContacts()}
            // onClickToShowMenuBar={() => this.clickToShowMenuBar()}
            // onClickToContact={(item) => this.clickToContact(item)}
          ></contacts-list>
        );
      case "folders":
        return (
          <user-folders
            onCreateFolder={(e: CustomEvent<ChatCreateFolderOutputInterface>) =>
              this.createFolderHandler(e.detail)
            }
            dialogs={this.dialogsState}
            onClickToUserProfile={() => this.clickToUserProfileHandler()}
          ></user-folders>
        );
      default:
        "dialogs";
    }
  };

  public createFolderHandler(item: ChatCreateFolderOutputInterface): void {
    console.log("createFolderHandler", item);
  }

  /**
   * Метод отмена поиска
   * **/
  public cancelSearchPersonal(): void {
    this.messageState = this.message;
  }
  /**
   * Метод для изменения состояния чата
   * */
  public showChat(state = !this.openState): void {
    this.openState = state;
  }
  /**
   * Метод для закрытия чата
   * */
  public onClose(): void {
    this.openState = false;
  }
  /**
   * click to Link
   * */
  public clickToLinkHandler(): string {
    return this.chatViewState;
  }

  /**
   *
   * */
  public clickToDialogHandler(
    dialog: ChatDialogInterface,
    pseudoClick?: boolean
  ): void {
    dialog;
    if (pseudoClick) {
      this.clickToDialog.emit(dialog);
    }
    this.openedDialog = dialog;
    this.updateViewState(ChatViewToShowEnum.personal);
  }

  /**
   *
   * */
  public clickToFilesBtnHandler(): void {
    this.updateViewState(ChatViewToShowEnum.files);
  }

  /**
   *
   * */
  public showFullChatHandler(): void {
    this.showFullChat.emit({
      view: this.chatViewState,
      data:
        this.chatViewState === ChatViewToShowEnum.personal
          ? this.openedDialog
          : null,
    });
  }

  /**
   *
   * */
  public clickToShowDialogsHandler(): void {
    this.updateViewState(ChatViewToShowEnum.dialogs);
  }

  /**
   *
   * */
  public clickToUserProfileHandler(): void {
    this.updateViewState(ChatViewToShowEnum.profile);
  }
  /**
   *
   * */
  public sendNewMessModal(): void {
    this.updateViewState(ChatViewToShowEnum.contacts);
  }

  /**
   *
   * */
  public clickToShowFoldersHandler(): void {
    this.updateViewState(ChatViewToShowEnum.folders);
  }

  /**
   *
   * */
  public scrollMessageViewToBot(): void {
    ChatMessagesLogic.safeScrollToBot();
  }

  /**
   * */
  private updateViewState(state: ChatViewToShowEnum) {
    this.chatViewStateChange.emit((this.chatViewState = state));
  }
}
