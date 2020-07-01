import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-users",
  styleUrl: "s-saqhan-chat-users.css",
  shadow: false,
})
export class SSaqhanChatUsers implements ComponentInterface {
  /**
   * Массив данных с диалогами
   * */
  @Prop() messages:any;
  /**
   * Массив данных с личным чатом
   * */
  @Prop() personalMessage:any;

  render() {
    return (
      <div class="user-wrapper">
        <s-saqhan-chat-user personalMessage={this.personalMessage} messages={this.messages}></s-saqhan-chat-user>
      </div>
    );
  }
}
