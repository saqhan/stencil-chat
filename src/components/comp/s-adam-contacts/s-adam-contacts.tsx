import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event,
} from "@stencil/core";
import { dialogs } from "./res/interface/common.interface";

@Component({
  tag: "s-adam-contacts",
  styleUrl: "s-adam-contacts.css",
  shadow: false,
})
export class SAdamContacts implements ComponentInterface {
  /**
   * Массив с элементами диалога
   */
  @Prop() dialogs: dialogs[] = [];

  /**
  * массив категорий диалогов
 */
  @Prop() categories: any;

  /**
   * Событие для переключения пустой страницы на личный чат
   */
  @Event() clickToLink: EventEmitter;

  /**
   * search contact
   * */
  @Event() searchContact: EventEmitter;

  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter<any>;

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
