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



  render() {
    return (
      <div class="m-chat-wrapper">
        <div class="m-chat-header">
          <div class="title-wrapper">
            <span class="search custom-link" onClick={() => this.clickToLink.emit({place: 'search-dialog'})}>
              <i class="fas fa-search"></i>
            </span>
            <span class="title">Messages</span>
            <span class="add custom-link" onClick={() => this.clickToLink.emit({place: 'add-dialog'})}>
              <i class="fas fa-plus-circle"></i>
            </span>
          </div>
          <div class="btns-nav">{this.getCategories(this.categories)}</div>
        </div>
        <div class="m-chat-dialogs">
          <Dialog mess={this.dialogs}></Dialog>
        </div>
        <div class="m-chat-footer">
          <span onClick={() => this.clickToLink.emit({place: 'new-mess'})}>
            <i class="far fa-comment"></i>
          </span>
          <span onClick={() => this.clickToLink.emit({place: 'contacts'})}>
            <i class="fas fa-user-friends"></i>
          </span>
          <span onClick={() => this.clickToLink.emit({place: 'menu-bar'})}>
            <i class="fas fa-bars"></i>
          </span>
        </div>
      </div>
    );
  }

  /**
   * Метод получения названий категорий
   * */
  public getCategories(array) {
    return array.map((item) => (
      <span class={item.id} onClick={() => this.clickToLink.emit({place: 'item-category', item})}>
        {item.name}
      </span>
    ));
  }
}

/**
 * Распаковка массива диалогов и выдача в компоненте <dialog-card/>
 * */
const Dialog = (array) => {
  return array.mess.map((item) => {
    return <dialog-card mess={item}></dialog-card>;
  });
};
