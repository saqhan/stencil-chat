import {Component, ComponentInterface, h, State} from '@stencil/core';
import { dialogs } from "../../../utils/mock";

@Component({
  tag: 'module-chat',
  styleUrl: 'module-chat.css',
  shadow: false,
})
export class ModuleChat implements ComponentInterface {
  /**
   * массив данных для диалогов
   * */
  @State() dialogs = dialogs;

  render() {
    return (
      <s-saqhan-chat-app
        messages={this.dialogs}
        onClickToLink={(item) => this.clickToLink(item)}
        onClickOnSearchChat={(event) => this.clickOnSearchChat(event)}
      ></s-saqhan-chat-app>
    );
  }
  /**
   *  Метод поиска по чату
   * */
  public clickOnSearchChat({detail}) {
    return console.log(detail.data);
  }
  /**
   * click to Link
   * */
  public clickToLink({ detail }) {
    console.log(detail);
  }
}
