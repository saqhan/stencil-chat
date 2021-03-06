import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import {
  ChatCategoryInterface,
  ChatDialogInterface,
} from "../../../../../../../../../index";

@Component({
  tag: "m-chat-header",
  styleUrl: "m-chat-header.css",
  shadow: false,
  scoped: true,
})
export class MChatHeader implements ComponentInterface {
  /**
   * массив категорий диалогов
   * */
  @Prop() categories: ChatCategoryInterface[];

  /**
   * clock on searchDialogs
   * */
  @Event() searchDialogs: EventEmitter<ChatDialogInterface>;
  /**
   * cancel search
   * */
  @Event() cancelSearchPersonal: EventEmitter<void>;
  /**
   *
   * */
  @State() isShowModal = true;

  /**
   * Показывать/скрывать окно поиска
   * */

  public showModal() {
    this.isShowModal = !this.isShowModal;
  }

  public cancelSearchPersonalHandler() {
    this.cancelSearchPersonal.emit();
  }

  /**
   * click to add dialog
   * */
  @Event() clickToAddDialog: EventEmitter<void>;

  render() {
    return (
      <div class="m-chat-header">
        <div class="title-wrapper">
          <span class="search custom-link" onClick={() => this.showModal()}>
            {this.isShowModal ? (
              <i class="c-chat c-chat-search"></i>
            ) : (
              <i
                class="c-chat c-chat-times"
                onClick={() => this.cancelSearchPersonalHandler()}
              ></i>
            )}
          </span>
          <span class="title">Messages</span>
          <span
            class="add custom-link"
            onClick={() => this.clickToAddDialogHandler()}
          >
            <i class="c-chat c-chat-cog hover-link"></i>
          </span>
        </div>
        {this.isShowModal ? (
          this.categories.length ? (
            <dialog-categories
              theme={"mobile"}
              categories={this.categories}
            ></dialog-categories>
          ) : (
            ""
          )
        ) : (
          <div class="modal-wrapper">
            <input
              type="text"
              placeholder="search"
              onInput={(e: any) => this.searchDialogsHandler(e)}
            />
          </div>
        )}
      </div>
    );
  }

  /**
   * search Dialogs
   * */
  public searchDialogsHandler(event: InputEvent) {
    // @ts-ignore
    this.searchDialogs.emit(event.target.value);
  }
  /**
   * Add dialog method
   * */
  public clickToAddDialogHandler() {
    this.clickToAddDialog.emit();
  }
}
