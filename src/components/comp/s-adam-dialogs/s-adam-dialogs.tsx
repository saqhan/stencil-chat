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
  tag: "s-adam-dialogs",
  styleUrl: "s-adam-dialogs.css",
  shadow: false,
  scoped: true,
})
export class SAdamDialogs implements ComponentInterface {
  /**
   * Массив с элементами диалога
   */
  @Prop() dialogs: ChatDialogInterface[] = [];

  /**
   * Тема для модульного/мобильного чата
   * */
  @Prop() theme: "mobile" | "module" | "comp" = "mobile";

  /**
   * массив категорий диалогов
   */
  @Prop() categories: ChatCategoryInterface[] = [];

  /**
   * Cобытие клика по диалогу
   */
  @Event() clickToDialog: EventEmitter<void>;

  /**
   * Поиск по контактам
   * */
  @Event() searchDialogs: EventEmitter<string>;

  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter<ChatCategoryInterface>;

  render() {
    return (
      <div class="contacts-column">
        <contacts-list-header theme={"comp"}></contacts-list-header>
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
