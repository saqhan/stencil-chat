import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Event,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-form-search-files",
  styleUrl: "s-saqhan-chat-form-search-files.css",
  shadow: false,
  scoped: true,
})
export class SSaqhanChatFormSearchFiles implements ComponentInterface {
  @Event() clickToShowDialogs: EventEmitter<void>;

  render() {
    return (
      <div class="header-wrapper">
        <div class="chat-files-search">
          <div
            class="btn-back"
            onClick={() => this.clickToShowDialogsHandler()}
          >
            <span>
              <i class="с-chat с-chat-chevron-left"></i>
            </span>
          </div>
          <div class="block-input-files">
            <input
              type="text"
              class="input-search-files"
              placeholder="Поиск файлов"
            />
          </div>
          <div class="block-file">
            <i class="с-chat с-chat-filter"></i>
          </div>
        </div>
      </div>
    );
  }
  /**
   * show Dialogs
   * */
  public clickToShowDialogsHandler(): void {
    this.clickToShowDialogs.emit();

  }
}
