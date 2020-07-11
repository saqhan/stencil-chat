import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import {ChatCategoryInterface, ChatClickToLinkEmit, ChatLinkTypeEnum} from "../../../../../../../../../index";

@Component({
  tag: "m-chat-header",
  styleUrl: "m-chat-header.css",
  shadow: false,
})
export class MChatHeader implements ComponentInterface {
  /**
   * массив категорий диалогов
   * */
  @Prop() categories: ChatCategoryInterface[];

  /**
   * clock on clickToLink
   * */
  @Event() clickToLink: EventEmitter<ChatClickToLinkEmit>;

  /**
   *
   * */
  @Event() searchContact: EventEmitter<string>;

  /**
   *
   * */
  @State() isShowModal = true;

  /**
   * Показывать/скрывать окно поиска
   * */

  public showModal() {
    return this.isShowModal = !this.isShowModal;
  }
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
            onClick={() => this.clickToLinkHandler(ChatLinkTypeEnum.addDialog) }
          >
            <i class="fas fa-plus-circle"></i>
          </span>
        </div>
        { this.isShowModal
          ? <dialog-categories theme={'mobile'} categories={this.categories} ></dialog-categories>
          : <div class="modal-wrapper" ><input type="text" placeholder="search" onInput={(e: any) => this.searchContactHandler(e)} /></div> }
      </div>
    );
  }

  public searchContactHandler (
    event: InputEvent
  )
  {
    // @ts-ignore
    this.searchContact.emit(event.target.value)
  }

  public clickToLinkHandler (
    place: ChatLinkTypeEnum
  )
  {
    this.clickToLink.emit({ place })
  }




}
