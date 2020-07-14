import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
} from "@stencil/core";
import {
  ChatCategoryInterface,
  ChatDialogInterface,
} from "../../../../../../index";

@Component({
  tag: "mobile-dialogs",
  styleUrl: "mobile-dialogs.css",
  shadow: false,
  scoped: true
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
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter<ChatCategoryInterface>;

  /**
   * clock on searchDialogs
   * */
  @Event() searchDialogs: EventEmitter<ChatDialogInterface>;
  /**
   * cancel
   * */
  @Event() cancelSearchPersonal: EventEmitter<void>;
  /**
   * click to add dialog
   * */
  @Event() clickToAddDialog: EventEmitter<string>;

  /**
   * click to dialog
   * */
  @Event() clickToDialog: EventEmitter<string>;
  /**
   * click to click To Show Dialogs
   * */
  @Event() clickToShowDialogs: EventEmitter<void>;
  /**
   * click to click To Show Contacts
   * */
  @Event() clickToShowContacts: EventEmitter<void>;
  /**
   * click to click To Show MenuBar
   * */
  @Event() clickToShowMenuBar: EventEmitter<void>;

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
