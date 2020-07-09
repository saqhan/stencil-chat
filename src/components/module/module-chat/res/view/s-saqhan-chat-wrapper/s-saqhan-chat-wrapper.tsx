import {
  Component,
  ComponentInterface,
  h,
  State,
  Prop,
  Method,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-wrapper",
  styleUrl: "s-saqhan-chat-wrapper.css",
  shadow: false,
})
export class SSaqhanChatWrapper implements ComponentInterface {
  /**
   * array categories
   * */
  @Prop() categories;
  /**
   * Заголовок для чата
   * */
  @Prop() titleModule;
  /**
   * массив данных личных сообщений
   * */
  @Prop() MessageMock;
  /**
   * массив данных для диалогов
   * */
  @Prop() dialogs;

  /**
   * select content default
   * */
  @State() showContent = "dialogs";
  @State() categoriesState = this.categories;
  @State() dialogsState = this.dialogs;
  @State() MessageMockState = this.MessageMock;
  @State() messagesState = this.dialogs;
  /**
   * Перменная для включения/отключения показа чата в развернутом виде
   * */
  @State() showChat: boolean;


  /**
   *  Фильтр диалогов
   * */
  @Method()
  async clickToCategory({ detail }) {
    this.dialogsState =
      detail.item.id !== "all"
        ? this.dialogs.filter((dialog) => dialog.category === detail.item.id)
        : this.dialogs;
  }

  /**
   * Метод поиски диалогов
   * */
  @Method()
  async searchDialog({ detail }) {
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
      detail.data !== '' && detail.data !== null
        ? this.MessageMockState.filter((item) => {
          return typeof item.content === "string"
            ? item.content.toLowerCase().includes(detail.data.toLowerCase())
            : false;
        })
        : this.MessageMock;
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
              {this.ShowContent(this.showContent)}
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
    switch (content) {
      case "dialogs":
        return (
          <s-saqhan-chat-users-wrapper
            messages={this.dialogsState}
            categories={this.categoriesState}
            onClickToLink={(item) => this.clickToLink(item)}
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
            onClickToLink={(item) => this.clickToLink(item)}
            messageMock={this.MessageMockState}
            onSearchContact={(e) => this.searchMessage(e)}
          ></module-personal>
        );

      case "files":
        return (
          <s-saqhan-chat-files-wrapper
            onClickToLink={(item) => this.clickToLink(item)}
          ></s-saqhan-chat-files-wrapper>
        );
      case "profile":
        return (
          <s-adam-profile
            theme={"module"}
            onClickToLink={(item) => this.clickToLink(item)}
          ></s-adam-profile>
        );
      default:
        "files";
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
  public clickToLink({ detail }) {
    console.log(detail.place);
    switch (detail.place) {
      case "showFile":
        return (this.showContent = "files");
      case "showDialogs":
        return (this.showContent = "dialogs");
      case "showPersonalDialog":
        return (this.showContent = "personal");
      case "user-name-personal":
        return (this.showContent = "profile");
      default:
        this.showContent = "users";
    }
  }
}
