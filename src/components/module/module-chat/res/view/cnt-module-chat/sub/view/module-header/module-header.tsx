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
  @Event() showFullChat: EventEmitter<void>;

  render() {
    return (
      <div class="header-chat">
        <div class="showFullChat" onClick={() => this.showFullChatHandler()}>
          <i class="с-chat с-chat-expand"></i>
        </div>
        <div class="header-chat-title">{this.titleModule.title} </div>
        <div class="close" onClick={() => this.close.emit()}>
          <i class="с-chat с-chat-times-circle"></i>
        </div>
      </div>
    );
  }
  /**
   * Разворачивать полную версию чата при клике иконку
   * */
  private showFullChatHandler() {
    this.showFullChat.emit();
  }
}
