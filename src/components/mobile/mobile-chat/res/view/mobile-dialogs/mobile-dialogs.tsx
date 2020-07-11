import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
} from "@stencil/core";
// import { dialogs } from "./res/interface/common.interface";
import {
  ChatDialogInterface,
  ChatCategoryInterface,
} from "../../../../../shared/interface/common.interface";
@Component({
  tag: "mobile-dialogs",
  styleUrl: "mobile-dialogs.css",
  shadow: false,
})
export class MobileDialogs implements ComponentInterface {
  /**
   * массив сообщений
   * */
  @Prop() dialogs: ChatDialogInterface[];
  // @Prop() messages: any;
  /**
   * массив категорий диалогов
   * */
  @Prop() categories: ChatCategoryInterface[];

  /**
   * clock on clickToLink
   * */
  @Event() clickToLink: EventEmitter<string>;
  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter<ChatCategoryInterface>;
  /**
   * clock on Category
   * */
  @Event() searchContact: EventEmitter<ChatCategoryInterface>;

  render() {
    return (
      <div class="m-chat-wrapper">
        <m-chat-header categories={this.categories}></m-chat-header>
        <m-chat-dialogs dialogs={this.dialogs}></m-chat-dialogs>
        <m-chat-footer></m-chat-footer>
      </div>
    );
  }
}
