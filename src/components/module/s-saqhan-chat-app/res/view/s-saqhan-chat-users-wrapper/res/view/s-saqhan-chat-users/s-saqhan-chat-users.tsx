import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-users",
  styleUrl: "s-saqhan-chat-users.css",
  shadow: false,
})
export class SSaqhanChatUsers implements ComponentInterface {

  @Prop() messages:any;
  @Prop() mainUser:any;

  render() {
    return <div class="user-wrapper">
      <s-saqhan-chat-main-user mainUser={this.mainUser} ></s-saqhan-chat-main-user>
      <s-saqhan-chat-user messages={this.messages}></s-saqhan-chat-user>
    </div>;
  }
}

