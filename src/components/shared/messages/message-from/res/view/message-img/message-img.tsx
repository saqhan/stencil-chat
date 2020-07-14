import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {ChatMessageDirectionEnum} from "../../../../../../../index";

@Component({
  tag: "message-img",
  styleUrl: "message-img.css",
  shadow: false,
  scoped: true
})
export class MessageImg implements ComponentInterface {
  /**
   * Принимаем сообщения для пользователя
   * */
  @Prop() message: any;
  /**
   * Проверка статуса доставки сообщения
   * */
  @Prop() checkSendMess: any;
  render() {
    return (
      <div class="mess-img-content">
        {
          this.message.direction === ChatMessageDirectionEnum.fromMe
          ? this.checkSendMess :  ''
        }
      </div>
    );
  }
}
