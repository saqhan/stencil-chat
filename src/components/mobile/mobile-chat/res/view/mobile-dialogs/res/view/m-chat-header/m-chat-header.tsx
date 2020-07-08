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
            { this.isShowModal ? <i class="fas fa-search"></i> : <i class="fas fa-times"></i> }
          </span>
          <span class="title">Messages</span>
          <span
            class="add custom-link"
            onClick={() => this.clickToLink.emit({ place: "add-dialog" })}
          >
            <i class="fas fa-plus-circle"></i>
          </span>
        </div>
        { this.isShowModal
          ? <dialog-categories theme={'mobile'} categories={this.categories} ></dialog-categories>
          : <div class="modal-wrapper" ><input type="text" placeholder="search" onInput={(e) => this.searchContact.emit(e)} /></div> }
      </div>
    );
  }


  public showModal() {
    return this.isShowModal = !this.isShowModal;
  }

}