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
  scoped: true
})
export class ModuleChat implements ComponentInterface {
  /**
   * массив данных для диалогов
   * */
  public disableInnerSearchDialogs: boolean = false;
  public disableInnerSearchMessages: boolean = false;


  render() {
    return (
      <s-saqhan-chat-wrapper
        categories={categories}
        dialogs={dialogs}
        titleModule={titleModule}
        message={MessageMock}
        disableInnerSearchDialogs={this.disableInnerSearchDialogs}
        disableInnerSearchMessages={this.disableInnerSearchMessages}
      ></s-saqhan-chat-wrapper>
    );
  }
}
