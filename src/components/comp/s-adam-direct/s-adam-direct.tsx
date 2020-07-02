import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event,
} from "@stencil/core";
import { Message } from "../../shared/interface/common.interface";

@Component({
  tag: "s-adam-direct",
  styleUrl: "s-adam-direct.css",
  shadow: false,
})
export class SAdamDirect implements ComponentInterface {
  /**
   * Личный диалог
   */
  @Prop() message: Message[] = [];

  /**
   * click on navigate
   * */
  @Event() clickToLink: EventEmitter;

  /**
   * клик по имени юзера в личной переписке
   */
  @Event() clickOnUsername: EventEmitter;

  render() {
    return (
      <div class="direct-comp">
        <s-adam-personal-header message={this.message}></s-adam-personal-header>
        <div class="chat-messages">
          {this.message.map((message) => {
            return <message-from message={message}></message-from>;
          })}
        </div>
        <personal-footer></personal-footer>
      </div>
    );
  }
}
