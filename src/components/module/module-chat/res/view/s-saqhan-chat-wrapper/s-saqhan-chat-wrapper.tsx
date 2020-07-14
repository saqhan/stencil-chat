import { Component, ComponentInterface, h, State, Prop } from "@stencil/core";
import {
  ChatCategoryInterface,
  // ChatClickToLinkEmit,
  ChatDialogInterface,
  // ChatLinkTypeEnum,
  ChatMessage,
} from "../../../../../../index";
// import { SelectChatTypeEnum } from "./res/enum/common.enum";

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
  @Prop() titleModule: any;
  /**
   * массив данных личных сообщений
   * */
  @Prop() message: ChatMessage[];
  /**
   * массив данных для диалогов
   * */
  @Prop() dialogs: ChatDialogInterface[];

  /**
   * select content default
   * */
  @State() showSelectContent: string = "dialogs";

  @State() categoriesState = this.categories;
  @State() dialogsState = this.dialogs;
  @State() messageState = this.message;
  // @State() messagesState = this.dialogs;
  /**
   * Перменная для включения/отключения показа чата в развернутом виде
   * */
  @State() showChat: boolean;

  /**
   *  Фильтр диалогов
   * */
  clickToCategory({ detail }) {
    // console.log(detail);
    this.dialogsState =
      detail.id !== "all"
        ? this.dialogs.filter((dialog) => dialog.category === detail.id)
        : this.dialogs;
  }

  /**
   * dialogue search
   * */
  public searchDialog({ detail }) {
    this.dialogsState =
      detail.data !== "" && detail.data !== null
        ? this.dialogs.filter((item) => {
            return typeof item.name === "string"
              ? item.name.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : this.dialogs;
  }

  /**
   * search for private messages
   * */
  public searchPersonalMessages({ detail }) {
    this.message =
      detail.data !== "" && detail.data !== null
        ? this.message.filter((item) => {
            return typeof item.content === "string"
              ? item.content.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : this.messageState;
  }

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
        ></btn-wrapper>
      </div>
    );
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
            messages={this.dialogsState}
            categories={this.categoriesState}
            // onClickToLink={(item) => this.clickToLink(item.detail)}
            onClickToCategory={(item) => this.clickToCategory(item)}
            onClickToDialog={(item) => this.clickToDialog(item)}
            onClickToFilesBtn={() => this.clickToFilesBtn()}
            onSearchDialog={(item) => this.searchDialog(item)}
            onSendNewMessModal={() => this.sendNewMessModal()}
          ></s-saqhan-chat-users-wrapper>
        );
      case "personal":
        return (
          // <div class='drop-file-wrapper' >
          //   <s-adam-copying></s-adam-copying>
          // </div>
          <module-personal
            message={this.message}
            onSearchPersonalMessages={(e) => this.searchPersonalMessages(e)}
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
  public sendNewMessModal() {
    console.log("sendNewMessModal");
  }

  /**
   * Метод отмена поиска
   * **/
  public cancelSearchPersonal() {
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
