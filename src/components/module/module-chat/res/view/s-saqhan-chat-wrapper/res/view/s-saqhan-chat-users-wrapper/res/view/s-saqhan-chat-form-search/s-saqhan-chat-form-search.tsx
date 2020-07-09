import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter, Prop,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-form-search",
  styleUrl: "s-saqhan-chat-form-search.css",
  shadow: false,
})
export class SSaqhanChatFormSearch implements ComponentInterface {
  /**
   * */
  @Prop() categories: any;

  /**
   * Клик по кнопке files
   * */
  @Event() clickToLink: EventEmitter;

  /**
   * Клик по кнопке в чате
   * */
  @Event() searchDialog: EventEmitter;

  render() {
    return (
      <div class="header-wrapper">
        <div class=" chat-files">
          <div class="block-input">
            <input
              type="text"
              class="input-search"
              placeholder="Поиск чатов и сообщений"
              onInput={(e) => this.searchDialog.emit(e)}
            />
          </div>
          <div class="block-file" onClick={() => this.clickToLink.emit({place: 'showFile'})} >
            <i class="far fa-file-alt"></i>
          </div>
        </div>
        <dialog-categories theme={'module'} categories={this.categories} ></dialog-categories>
      </div>
    );
  }
}
