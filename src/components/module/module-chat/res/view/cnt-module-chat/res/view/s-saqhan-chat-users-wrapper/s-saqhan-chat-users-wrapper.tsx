import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {ChatCategoryInterface, ChatDialogInterface, ChatMessage} from "../../../../../../../../../index";

@Component({
  tag: "s-saqhan-chat-users-wrapper",
  styleUrl: "s-saqhan-chat-users-wrapper.css",
  shadow: false,
  scoped: true,
})
export class SSaqhanChatUsersWrapper implements ComponentInterface {
  /**
   * Массив данных с диалогами
   * */
  @Prop() dialogs:ChatDialogInterface[] = [];

  /**
   *
   * */
  @Prop() categories: ChatCategoryInterface[] = [];

  /**
   * Массив данных с личным чатом
   * */
  @Prop() personalMessage: ChatMessage[] = [];

  /**
   *
   * */
  @Event() clickToCategory: EventEmitter<ChatCategoryInterface>;

  /**
   *
   * */
  @Event() searchDialog: EventEmitter<string>;


  /**
   * click to dialog
   * */
  @Event() clickToDialog: EventEmitter<ChatDialogInterface>;

  /**
   * click to files button
   * */
  @Event() clickToFilesBtn: EventEmitter<void>;

  /**
   * send new mess
   * */
  @Event() sendNewMessModal: EventEmitter<string>;


  render() {
    return (
      <div>
        <s-saqhan-chat-form-search
          categories={this.categories}
        ></s-saqhan-chat-form-search>

        <div class="chat-wrap">
          <s-saqhan-chat-users dialogs={this.dialogs}></s-saqhan-chat-users>
        </div>
        <s-saqhan-chat-add-question></s-saqhan-chat-add-question>
      </div>
    );
  }
}
