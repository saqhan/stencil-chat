import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h, Prop,
} from "@stencil/core";

@Component({
  tag: "module-header",
  styleUrl: "module-header.css",
  shadow: false,
})
export class ModuleHeader implements ComponentInterface {
  /**
   * close modal
   * */
  @Event() close: EventEmitter;
  @Prop() titleModule: any;

  render() {
    return (
      <div class="header-chat">
        {this.titleModule.title}
        <span  onClick={() => this.close.emit({place: 'closeModal'})}>
          <i class="fas fa-times-circle"></i>
        </span>
      </div>
    );
  }
}
