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
  @Prop() dialogs:ChatDialogInterface[] = [];


  render() {
    return (
      <div class="user-wrapper">
        <s-saqhan-chat-user  dialogs={this.dialogs}></s-saqhan-chat-user>
      </div>
    );
  }
}
