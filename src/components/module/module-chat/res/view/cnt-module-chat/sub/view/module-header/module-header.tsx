import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { TitleModuleInterface } from "../../../../../../../../..";

@Component({
  tag: "module-header",
  styleUrl: "module-header.css",
  shadow: false,
  scoped: true,
})
export class ModuleHeader implements ComponentInterface {
  /**
   *
   * */
  @Prop() titleModule: TitleModuleInterface;

  /**
   * close modal
   * */
  @Event() close: EventEmitter<void>;

  /**
   * Разворачивать полную версию чата при клике иконку
   * */
  @Event({bubbles: false}) showFullChat: EventEmitter<void>;

  /**
   * отключение возможности октрытие приложение чата
   * */
  @Prop() disableShowFullChatState: boolean;

  render() {
    return (
      <div class="header-chat">
        <div class="showFullChat" style={ {visibility: this.disableShowFullChatState ? 'hidden': null} } onClick={() => this.showFullChatHandler()}>
          <i class="c-chat c-chat-expand"></i>
        </div>
        <div class="header-chat-title">{this.titleModule.title} </div>
        <div class="close" onClick={() => this.close.emit()}>
          <i class="c-chat c-chat-times-circle"></i>
        </div>
      </div>
    );
  }
  /**
   * Разворачивать полную версию чата при клике иконку
   * */
  private showFullChatHandler() {
    if (!this.disableShowFullChatState) {
      this.showFullChat.emit();
    }
  }
}
