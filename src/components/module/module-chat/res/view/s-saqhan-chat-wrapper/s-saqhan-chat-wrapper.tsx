import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
  State,
  Prop,
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
  @Prop() titleModule;
  @Prop() MessageMock;
  /**
   * массив данных для диалогов
   * */
  @Prop() dialogs;

  /**
   * select content default
   * */
  @State() showContent = "dialogs";


  @Event() selectPersonal: EventEmitter;
  @Event() selectUsers: EventEmitter;
  @Event() clickToCategory: EventEmitter;
  @State() messages = this.dialogs;
  @State() messageMock = this.MessageMock;
  /**
   * Перменная для включения/отключения показа чата в развернутом виде
   * */
  @State() showChat: boolean;


  render() {
    return (
      <div class="wrapper-modal">

        {this.showChat
          ? (<div class="wrapper-chat">
            <module-header
              titleModule={this.titleModule}
              onClose={(item) => this.onClose(item)}
            ></module-header>
            <div class="m-chat-wrapper">
              {this.ShowContent(this.showContent)}
            </div>
          </div>)
          : ""}
        <btn-wrapper
          onClickToShowChat={(item) => this.isShowChat(item)}
          showChat={this.showChat}
        ></btn-wrapper>
      </div>
    );
  }

  public ShowContent = (content) => {
    switch (content) {
      case "dialogs":
        return (
          <s-saqhan-chat-users-wrapper
            messages={this.messages}
            categories={this.categories}
            onClickToLink={(item) => this.clickToLink(item)}
          ></s-saqhan-chat-users-wrapper>
        );
      case "personal":
        return (
          // <div class='drop-file-wrapper' >
          //   <s-adam-copying></s-adam-copying>
          // </div>
          <module-personal
            onClickToLink={(item) => this.clickToLink(item)}
            messageMock={this.messageMock}
            onSearchContact={(e) =>
              console.log("mobile-personal", e.detail.data)
            }
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
            theme={"mobile"}
            onClickToLink={(item) => this.clickToLink(item)}
          ></s-adam-profile>
        );
      default:
        "files";
    }
  };

  public searchContact({ detail }) {
    console.log("searchContact", detail.data);
  }
  /**
   * Если кликнули на диалог и открываем личные сообщения пользователя
   * */
  public onSelectPersonal() {
    return (this.showContent = "personal");
  }
  /**
   * Метод для открывания диалогов
   * */
  public onSelectUsers() {
    return (this.showContent = "users");
  }
  /**
   * Метод для изменения состояния чата
   * */
  public isShowChat(item) {
    console.log("isShowChat", item);
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
