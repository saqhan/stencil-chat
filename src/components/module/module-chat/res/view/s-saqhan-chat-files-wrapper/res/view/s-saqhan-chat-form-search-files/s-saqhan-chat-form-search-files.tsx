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
})
export class SSaqhanChatFormSearchFiles implements ComponentInterface {
  @Event() clickToLink: EventEmitter;

  render() {
    return (
      <div class="header-wrapper">
        <div class="chat-files-search">
          <div class="btn-back" onClick={() => this.clickToLink.emit({place: 'showDialogs' })}>
            <span>
              <i class="fas fa-chevron-left"></i>
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
            <i class="fas fa-filter"></i>
          </div>
        </div>
      </div>
    );
  }
}
