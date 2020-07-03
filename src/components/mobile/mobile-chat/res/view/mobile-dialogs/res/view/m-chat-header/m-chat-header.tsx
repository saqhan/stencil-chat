import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";

@Component({
  tag: "m-chat-header",
  styleUrl: "m-chat-header.css",
  shadow: false,
})
export class MChatHeader implements ComponentInterface {
  /**
   * массив категорий диалогов
   * */
  @Prop() categories: any;

  /**
   * clock on clickToLink
   * */
  @Event() clickToLink: EventEmitter;
  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter;
  @Event() searchContact: EventEmitter;

  @State() isShowModal = true;

  render() {
    return (
      <div class="m-chat-header">

        <div class="title-wrapper">
          <span
            class="search custom-link"
            onClick={() => this.showModal()}
          >
            <i class="fas fa-search"></i>
          </span>
          <span class="title">Messages</span>
          <span
            class="add custom-link"
            onClick={() => this.clickToLink.emit({ place: "add-dialog" })}
          >
            <i class="fas fa-plus-circle"></i>
          </span>
        </div>
        { this.isShowModal ? <div class="btns-nav">{this.getCategories(this.categories)}</div> : <div class="modal-wrapper" >
          <input type="text" placeholder="search" onInput={(e) => this.searchContact.emit(e)} /></div> }
      </div>
    );
  }
  /**
   * Метод получения названий категорий
   * */
  public getCategories(array) {
    return array.map((item) => (
      <span
        class={item.id}
        onClick={() =>
          this.clickToCategory.emit({ place: "item-category", item })
        }
      >
        {item.name}
      </span>
    ));
  }

  public showModal() {
    return this.isShowModal = !this.isShowModal;
  }

}
