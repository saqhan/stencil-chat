import { Component, ComponentInterface, h } from "@stencil/core";
import {
  categories,
  dialogs,
  MessageMock,
  titleModule,
} from "../../../utils/mock";
@Component({
  tag: "module-chat",
  styleUrl: "module-chat.css",
  shadow: false,
})
export class ModuleChat implements ComponentInterface {
  /**
   * массив данных для диалогов
   * */

  render() {
    return (
      <s-saqhan-chat-wrapper
        categories={categories}
        dialogs={dialogs}
        titleModule={titleModule}
        MessageMock={MessageMock}
      ></s-saqhan-chat-wrapper>
    );
  }
}
