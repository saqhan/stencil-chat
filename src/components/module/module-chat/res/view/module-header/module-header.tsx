import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h, Prop,
} from "@stencil/core";
import {titleModule} from "../../../../../../index";

@Component({
  tag: "module-header",
  styleUrl: "module-header.css",
  shadow: false,
  scoped: true
})
export class ModuleHeader implements ComponentInterface {
  /**
   *
   * */
  @Prop() titleModule: titleModule;

  /**
   * close modal
   * */
  @Event() close: EventEmitter<void>;

  render() {
    return (
      <div class="header-chat">
        <div class='header-chat-title'>{this.titleModule.title} </div>
        <div class='close'  onClick={() => this.close.emit()}>
          <i class="fas fa-times-circle"></i>
        </div>
      </div>
    );
  }
}
