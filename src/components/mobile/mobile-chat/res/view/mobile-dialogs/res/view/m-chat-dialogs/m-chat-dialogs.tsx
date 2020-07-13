import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {ChatDialogInterface} from "../../../../../../../../../index";

@Component({
  tag: "m-chat-dialogs",
  styleUrl: "m-chat-dialogs.css",
  shadow: false,
  scoped: true
})
export class MChatDialogs implements ComponentInterface {
  /**
   * массив диалогов
   * */
  @Prop() dialogs: ChatDialogInterface[];

  render() {
    return (
      <div class="m-chat-dialogs">
        <Dialog mess={this.dialogs}></Dialog>
      </div>
    );
  }
}
/**
 * Распаковка массива диалогов и выдача в компоненте <dialog-card/>
 * */
const Dialog = (array) => {
  return array.mess.map((item) => {
    return <dialog-card mess={item}></dialog-card>;
  });
};
