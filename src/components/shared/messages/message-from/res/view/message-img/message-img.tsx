import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MessageDirectionEnum } from "../../../../../interface/common.interface";

@Component({
  tag: "message-img",
  styleUrl: "message-img.css",
  shadow: false,
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
      <div
        class="mess-img"
        style={{ backgroundImage: `url(${this.message.content})` }}
      >
        {
          this.message.direction === MessageDirectionEnum.fromMe
          ? this.checkSendMess :  ''
        }
      </div>
    );
  }
}
