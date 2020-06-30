import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
  Prop,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-wrapper",
  styleUrl: "s-saqhan-chat-wrapper.css",
  shadow: false,
})
export class SSaqhanChatWrapper implements ComponentInterface {
  @Event() close: EventEmitter;
  @Event() selectPersonal: EventEmitter;
  @Event() selectUsers: EventEmitter;
  @Event() clickToLink: EventEmitter;
  @Prop() messages: any;
  @Prop() personalMessage: any;
  @Prop() showContent: string;

  render() {
    return (
      <div class="wrapper-chat">
        <div class="header-chat">
          Чат с банком
          <a href="#" onClick={() => this.close.emit()}>
            <i class="fas fa-times-circle"></i>
          </a>
        </div>

        <div class="content-chat">
          {this.ShowContent(this.showContent)}
        </div>
      </div>
    );
  }

  public ShowContent = (content) => {
    switch (content) {
      case "personal":
        // return <s-saqhan-chat-personal personalMessage={this.personalMessage}></s-saqhan-chat-personal>;
        return         <mobile-personal
          messageMock={this.personalMessage}
        ></mobile-personal>
      case "users":
        return (
          <s-saqhan-chat-users-wrapper
            messages={this.messages}
          ></s-saqhan-chat-users-wrapper>
        );
      case "files":
        return <s-saqhan-chat-files-wrapper></s-saqhan-chat-files-wrapper>;

      default:
        "files";
    }
  };
}
