import { Component, ComponentInterface, h, State } from "@stencil/core";
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
  @State() categories = categories;
  @State() dialogs = dialogs;
  @State() titleModule = titleModule;
  @State() MessageMock = MessageMock;

  render() {
    return (
      <s-saqhan-chat-wrapper
        categories={this.categories}
        dialogs={this.dialogs}
        titleModule={this.titleModule}
        MessageMock={this.MessageMock}
      ></s-saqhan-chat-wrapper>
    );
  }
  /**
   *  Метод поиска по чату
   * */
  public clickOnSearchChat({ detail }) {
    return console.log("clickOnSearchChat", detail.data);
  }

}
