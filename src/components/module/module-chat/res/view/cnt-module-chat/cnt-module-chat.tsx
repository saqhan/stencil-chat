import {Component, ComponentInterface, EventEmitter, Event, h, Prop, State, Watch, Method, Host,} from "@stencil/core";
import {
  ChatCategoryInterface,
  ChatDialogInterface,
  ChatMessage, ChatViewToShowEnum, ChatWritingUserInterface,
  filterDialogsByCategory,
  filterDialogsBySearchValue,
  filterMessageBySearchValue,
  TitleModuleInterface,
} from "../../../../../../index";
import {ChatMessagesLogic} from "../../../../../../utils/utils";

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
  /**
   * Заголовок для чата
   * */
  @Prop() titleModule: TitleModuleInterface;

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
  @Prop() contacts: any;

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
   *
   * */
  @Event() chatViewStateChange: EventEmitter<ChatViewToShowEnum>;

  /**
   * select content default
   * */
  @Prop() chatViewState: ChatViewToShowEnum = ChatViewToShowEnum.dialogs;
//============================================================================================
  /**
   * Возможность записи аудио
   */
  @Prop() canRecordAudio = false;

  /**
   * позволяет установить печатающие данные
   * */
  @Method() async setWritingState (
    item?: ChatWritingUserInterface
  ) {
    this.writing = item ? [item] : null;
  }

  /**
   * скрывает весь блок что бы на экране не было вообще видно
   * */
  @Method() async hide () {
    this.visibleState = false;
  }

  /**
   * позволяет активировать/деактивароть возможность записи аудио
   * */
  @Method() async activeRecordAudioState (state: boolean) {
    this.canRecordAudio = state;
  }
  /**
   * сменить окно показа
   * */
  @Method() async changeViewToShow (
    state: ChatViewToShowEnum
  ) {
    this.chatViewState = state;
  }

  /**
   * скролит вниз окно сообщений
   * */
  @Method() async safeScrollToBotMessageView () {
    this.scrollMessageViewToBot()
  }

  /**
   * показывает весь блок после скрытия
   * */
  @Method() async show () {
    // show a prompt
    this.visibleState = true;
  }

  /**
   * показывает только кнопку
   * */
  @Method() async close () {
    this.showChat(false);
  }

  /**
   * открывает блок чатов
   * */
  @Method() async open () {
    this.showChat(true);
  }

  /**
   * */
  @Method() async openDialog (
    dialog: ChatDialogInterface
  ) {
    this.open();
    this.clickToDialogHandler(dialog, true);
  }

  /**
   * массив данных для контактов
   * */
  @State() contactsState = this.contacts;

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
   * массив данных персонального чата
   * */
  @State() showFullChatState: boolean;

  @Watch("dialogs")
  watchDialogsHandler(newValue: boolean, oldValue: boolean) {
    console.log("The new value of activated is: ", { newValue, oldValue });
    this.dialogsState = this.dialogs;
  }

  @Watch("message")
  watchMessageHandler(newValue: boolean, oldValue: boolean) {
    console.log("The new value of activated is: ", { newValue, oldValue });
    this.messageState = this.message;
  }

  @Watch("categories")
  watchCategoriesHandler(newValue: boolean, oldValue: boolean) {
    console.log("The new value of activated is: ", { newValue, oldValue });
    this.categoriesState = this.categories;
  }

  render() {
    return (
      <Host style={{display: !this.visibleState ? 'none' : null}}>
        <div class="wrapper-modal">
          {this.openState ? (
            <div class="wrapper-chat">
              <module-header
                onShowFullChat={() => this.showFullChat()}
                titleModule={this.titleModule}
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
   * Разворачивание полной версии чата
   * */

  public showFullChat(){
    this.showFullChatState = true;
    console.log('showFullChat');
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
  public clickToCategory(value: ChatCategoryInterface) {
    this.dialogsState = filterDialogsByCategory(value, this.dialogs);
  }

  /**
   * dialogue search
   * */
  public searchDialog(value: string) {
    if (!this.disableInnerSearchDialogsState) {
      this.dialogsState = filterDialogsBySearchValue(value, this.dialogs);
    }
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
              this.clickToCategory(item.detail)
            }
            onClickToDialog={(item: CustomEvent<ChatDialogInterface>) => this.clickToDialogHandler(item.detail)}
            onClickToFilesBtn={() => this.clickToFilesBtnHandler()}
            onSearchDialog={(item: CustomEvent<string>) =>
              this.searchDialog(item.detail)
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
            onClickToShowDialogs={() => this.clickToShowDialogsHandler()}
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
      default:
        "dialogs";
    }
  };


  /**
   * Метод отмена поиска
   * **/
  public cancelSearchPersonal(): void {
    this.message = this.messageState;
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
  public clickToDialogHandler(dialog: ChatDialogInterface, pseudoClick?: boolean): void {
    dialog;
    if (pseudoClick) {
      this.clickToDialog.emit(dialog);
    }
    this.updateViewState(ChatViewToShowEnum.personal);
  }

  /**
   *
   * */
  public clickToFilesBtnHandler(): void {
    this.updateViewState(ChatViewToShowEnum.files)
  }

  /**
   *
   * */
  public clickToShowDialogsHandler(): void {
    this.updateViewState(ChatViewToShowEnum.dialogs)
  }

  /**
   *
   * */
  public clickToUserProfileHandler(): void {
    this.updateViewState(ChatViewToShowEnum.profile)
  }

  public sendNewMessModal(): void {
    this.updateViewState(ChatViewToShowEnum.contacts)
    console.log("sendNewMessModal");
  }


  /**
   *
   * */
  public scrollMessageViewToBot(): void {
    ChatMessagesLogic.safeScrollToBot()
  }

  /**
   * */
  private updateViewState (
    state: ChatViewToShowEnum
  )
  {
    this.chatViewStateChange.emit(this.chatViewState = state)
  }
}
