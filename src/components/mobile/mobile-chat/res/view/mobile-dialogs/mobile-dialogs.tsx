import {Component, ComponentInterface, EventEmitter, Event,  h, Prop} from "@stencil/core";
import { dialogs, categories } from "./res/interface/common.interface";
@Component({
  tag: "mobile-dialogs",
  styleUrl: "mobile-dialogs.css",
  shadow: false,
})
export class MobileDialogs implements ComponentInterface {
  /**
   * массив сообщений
   * */
  @Prop() dialogs: dialogs[];
  // @Prop() messages: any;
  /**
   * массив категорий диалогов
   * */
  @Prop() categories: categories[];

  /**
   * clock on clickToLink
   * */
  @Event() clickToLink: EventEmitter;
  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter;

  @Event() searchContact: EventEmitter;



  render() {
    return (
      <div class="m-chat-wrapper">
        <m-chat-header categories={this.categories} ></m-chat-header>
        <m-chat-dialogs dialogs={this.dialogs}></m-chat-dialogs>
        <m-chat-footer></m-chat-footer>
      </div>
    );
  }


}


