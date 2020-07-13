import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event,
} from "@stencil/core";

import { ChatCategoryInterface, ChatDialogInterface } from "../../../index";

@Component({
  tag: "s-adam-contacts",
  styleUrl: "s-adam-contacts.css",
  shadow: false,
  scoped: true
})
export class SAdamContacts implements ComponentInterface {
  /**
   * Массив с элементами диалога
   */
  @Prop() dialogs: ChatDialogInterface[] = [];

  /**
   * массив категорий диалогов
   */
  @Prop() categories: ChatCategoryInterface[] = [];

  /**
   * Cобытие клика по диалогу
   */
  @Event() clickToDialog: EventEmitter<ChatDialogInterface>

  /**
   * Поиск по контактам
   * */
  @Event() searchDialogs: EventEmitter<ChatDialogInterface>;

  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter<ChatCategoryInterface>;

  render() {
    return (
      <div class="contacts-column">
        <s-adam-search-contact></s-adam-search-contact>
        <dialog-categories categories={this.categories}></dialog-categories>
        <div class="contacts">
          {this.dialogs.map((dialog) => {
            return <dialog-card theme={"comp"} mess={dialog}></dialog-card>;
          })}
        </div>
      </div>
    );
  }
}
