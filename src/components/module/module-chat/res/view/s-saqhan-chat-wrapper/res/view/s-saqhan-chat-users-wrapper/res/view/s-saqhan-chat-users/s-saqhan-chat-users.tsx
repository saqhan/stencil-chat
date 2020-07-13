import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {ChatDialogInterface} from "../../../../../../../../../../../../index";

@Component({
  tag: "s-saqhan-chat-users",
  styleUrl: "s-saqhan-chat-users.css",
  shadow: false,
  scoped: true
})
export class SSaqhanChatUsers implements ComponentInterface {
  /**
   * Массив данных с диалогами
   * */
  @Prop() messages:ChatDialogInterface;


  render() {
    return (
      <div class="user-wrapper">
        <s-saqhan-chat-user  messages={this.messages}></s-saqhan-chat-user>
      </div>
    );
  }
}
