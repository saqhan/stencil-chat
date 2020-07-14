import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
  Prop,
} from "@stencil/core";
import {
  ChatCategoryInterface,
  ChatDialogInterface,
} from "../../../../../../../../../../../../index";

@Component({
  tag: "s-saqhan-chat-form-search",
  styleUrl: "s-saqhan-chat-form-search.css",
  shadow: false,
  scoped: true,
})
export class SSaqhanChatFormSearch implements ComponentInterface {
  /**
   * array categories
   * */
  @Prop() categories: ChatCategoryInterface[] = [];

  /**
   * Клик по кнопке files
   * */
  @Event() clickToFilesBtn: EventEmitter<void>;

  /**
   * Клик по кнопке в чате
   * */
  @Event() searchDialog: EventEmitter<ChatDialogInterface>;

  render() {
    return (
      <div class="header-wrapper">
        <div class=" chat-files">
          <div class="block-input">
            <input
              type="text"
              class="input-search"
              placeholder="Поиск чатов и сообщений"
              onInput={(e) => this.searchDialogsHandler(e)}
            />
          </div>
          <div class="block-file" onClick={() => this.clickToFilesBtnHandler()}>
            <i class="far fa-file-alt"></i>
          </div>
        </div>
        <dialog-categories
          theme={"module"}
          categories={this.categories}
        ></dialog-categories>
      </div>
    );
  }

  /**
   * click to Files btn
   * */
  public clickToFilesBtnHandler(): void {
    this.clickToFilesBtn.emit();
  }

  public searchDialogsHandler(e) {
    this.searchDialog.emit(e);
  }
}
