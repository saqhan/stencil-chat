import {
  Component,
  ComponentInterface,
  h,
  State,
  Prop,
  Method,
} from "@stencil/core";
import {
  ChatCategoryInterface,
  ChatClickToLinkEmit,
  ChatDialogInterface,
  ChatLinkTypeEnum,
  ChatMessage
} from "../../../../../../index";

@Component({
  tag: "s-saqhan-chat-wrapper",
  styleUrl: "s-saqhan-chat-wrapper.css",
  shadow: false,
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
  @Prop() messageMock: ChatMessage[];
  /**
   * массив данных для диалогов
   * */
  @Prop() dialogs: ChatDialogInterface[];

  /**
   * select content default
   * */
  @State() showSelectContent = "dialogs";
  @State() categoriesState = this.categories;
  @State() dialogsState = this.dialogs;
  @State() MessageMockState = this.messageMock;
  @State() messagesState = this.dialogs;
  /**
   * Перменная для включения/отключения показа чата в развернутом виде
   * */
  @State() showChat: boolean;

  /**
   *  Фильтр диалогов
   * */

  clickToCategory({ detail }) {
    console.log(detail)
    this.dialogsState =
      detail.id !== "all"
        ? this.dialogs.filter((dialog) => dialog.category === detail.id)
        : this.dialogs;
  }

  /**
   * Метод поиски диалогов
   * */

  searchDialog({ detail }) {
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
   * Метод поиска по чату
   * */
  @Method()
  async searchMessage({ detail }) {
    this.MessageMockState =
      detail.data !== "" && detail.data !== null
        ? this.MessageMockState.filter((item) => {
            return typeof item.content === "string"
              ? item.content.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : this.messageMock;
  }

  render() {
    return (
      <div class="wrapper-modal">
        {this.showChat ? (
          <div class="wrapper-chat">
            <module-header
              titleModule={this.titleModule}
              onClose={(item) => this.onClose(item)}
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
    console.log(
      'ShowContent',
      content
    );
    switch (content) {
      case "dialogs":
        return (
          <s-saqhan-chat-users-wrapper
            messages={this.dialogsState}
            categories={this.categoriesState}
            onClickToLink={(item) => this.clickToLink(item.detail)}
            onClickToCategory={(item) => this.clickToCategory(item)}
            onSearchDialog={(item) => this.searchDialog(item)}
          ></s-saqhan-chat-users-wrapper>
        );
      case "personal":
        return (
          // <div class='drop-file-wrapper' >
          //   <s-adam-copying></s-adam-copying>
          // </div>
          <module-personal
            onClickToLink={(item) => this.clickToLink(item.detail)}
            messageMock={this.MessageMockState}
            onSearchContact={(e) => this.searchMessage(e)}
          ></module-personal>
        );
      case "files":
        return (
          <s-saqhan-chat-files-wrapper
            onClickToLink={(item) => this.clickToLink(item.detail)}
          ></s-saqhan-chat-files-wrapper>
        );
      case "profile":
        return (
          <s-adam-profile
            theme={"module"}
            onClickToLink={(item) => this.clickToLink(item.detail)}
          ></s-adam-profile>
        );
      default:
        "dialogs";
    }
  };

  /**
   * Метод для изменения состояния чата
   * */
  public isShowChat() {
    this.showChat = !this.showChat;
  }
  /**
   * Метод для закрытия чата
   * */
  public onClose(item) {
    console.log("closeModal", item);
    this.showChat = false;
  }
  /**
   * click to Link
   * */
  public clickToLink( detail: ChatClickToLinkEmit ): string {
    console.log('clickToLink 1',this.showSelectContent, detail)
    switch (detail.place) {
      case ChatLinkTypeEnum.showFile:
        (this.showSelectContent = "files");
      break;
      case ChatLinkTypeEnum.showDialogs:
        (this.showSelectContent = "dialogs");
      break;
      case ChatLinkTypeEnum.showPersonalDialog:
        (this.showSelectContent = "personal");
      break;
      case ChatLinkTypeEnum.userNamePersonal:
        (this.showSelectContent = "profile");
      break;
      default:
        this.showSelectContent = "users";
    }

    console.log('clickToLink 2', this.showSelectContent, detail)

    return this.showSelectContent;


  }
}
