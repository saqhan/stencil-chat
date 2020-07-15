import {
  Component,
  ComponentInterface,
  h,
  State,
  Prop,
  Watch,
} from "@stencil/core";
import {
  ChatCategoryInterface,
  // ChatClickToLinkEmit,
  ChatDialogInterface,
  // ChatLinkTypeEnum,
  ChatMessage,
  titleModule,
  filterDialogsByCategory,
  filterDialogsBySearchValue,
  filterMessageBySearchValue,
} from "../../../../../../index";

@Component({
  tag: "s-saqhan-chat-wrapper",
  styleUrl: "s-saqhan-chat-wrapper.css",
  shadow: false,
  scoped: true,
})
export class SSaqhanChatWrapper implements ComponentInterface {
  /**
   * array categories
   * */
  @Prop() categories: ChatCategoryInterface[];
  /**
   * Заголовок для чата
   * */
  @Prop() titleModule: titleModule;
  /**
   * массив данных личных сообщений
   * */
  @Prop() message: ChatMessage[];

  /**
   * массив данных для диалогов
   * */
  @Prop() dialogs: ChatDialogInterface[];
  /**
   * отключение поиска диалогов
   * */
  @Prop() disableInnerSearchDialogs: boolean;
  /**
   * отключение поиска сообщений
   * */
  @Prop() disableInnerSearchMessages: boolean;

  /**
   * select content default
   * */
  @State() showSelectContent: string = "dialogs";

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

  /**
   * Перменная для включения/отключения показа чата в развернутом виде
   * */
  @State() showChat: boolean;

  render() {
    return (
      <div class="wrapper-modal">
        {this.showChat ? (
          <div class="wrapper-chat">
            <module-header
              titleModule={this.titleModule}
              onClose={() => this.onClose()}
            ></module-header>
            <div class="m-chat-wrapper">
              {this.ShowContent(this.showSelectContent)}
            </div>
          </div>
        ) : (
          ""
        )}
        <btn-wrapper
          onClickToShowChat={() => this.isShowChat()}
          showChat={this.showChat}
          dialogs={this.countNewMess(this.dialogs)}
        ></btn-wrapper>
      </div>
    );
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
    if (!this.disableInnerSearchDialogs) {
      this.dialogsState = filterDialogsBySearchValue(value, this.dialogs);
    }
  }

  /**
   * search for private messages
   * */
  public searchPersonalMessages(value: string) {
    if (!this.disableInnerSearchMessages) {
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
            onClickToDialog={(item) => this.clickToDialog(item)}
            onClickToFilesBtn={() => this.clickToFilesBtn()}
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
            dialogs={this.dialogsState}
            message={this.messageState}
            onSearchPersonalMessages={(e: CustomEvent<string>) =>
              this.searchPersonalMessages(e.detail)
            }
            onClickToShowDialogs={() => this.clickToShowDialogs()}
            onClickToUserProfile={() => this.clickToUserProfile()}
            onCancelSearchPersonal={() => this.cancelSearchPersonal()}
          ></module-personal>
        );
      case "files":
        return (
          <s-saqhan-chat-files-wrapper
            // onClickToLink={(item) => this.clickToLink(item.detail)}
            onClickToShowDialogs={() => this.clickToShowDialogs()}
          ></s-saqhan-chat-files-wrapper>
        );
      case "profile":
        return (
          <s-adam-profile
            theme={"module"}
            onClickToShowDialogs={() => this.clickToShowDialogs()}
          ></s-adam-profile>
        );
      default:
        "dialogs";
    }
  };
  public sendNewMessModal(): void {
    console.log("sendNewMessModal");
  }

  /**
   * Метод отмена поиска
   * **/
  public cancelSearchPersonal(): void {
    this.message = this.messageState;
  }
  /**
   * Метод для изменения состояния чата
   * */
  public isShowChat(): void {
    this.showChat = !this.showChat;
  }
  /**
   * Метод для закрытия чата
   * */
  public onClose(): void {
    this.showChat = false;
  }
  /**
   * click to Link
   * */
  public clickToLink(): string {
    return this.showSelectContent;
  }
  public clickToDialog({ detail }): void {
    console.log("clickToDialog", detail);
    this.showSelectContent = "personal";
  }
  public clickToFilesBtn(): void {
    this.showSelectContent = "files";
  }
  public clickToShowDialogs(): void {
    this.showSelectContent = "dialogs";
  }
  public clickToUserProfile(): void {
    this.showSelectContent = "profile";
  }
}
