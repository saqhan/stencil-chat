import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { ChatMessageDirectionEnum } from "../../../../../interface/common.interface";

@Component({
  tag: "message-text",
  styleUrl: "message-text.css",
  shadow: false,
})
export class MessageText implements ComponentInterface {
  /**
   * Принимаем сообщения для пользователя
   * */
  @Prop() message: any;
  /**
   * Получаем время оттправки сообщения
   * */
  @Prop() createSendTime: any;
  /**
   * Проверка статуса доставки сообщения
   * */
  @Prop() checkSendMess: any;
  render() {
    return (
      <div class="from-mess">
        <div class="text-wrapper">
          <span class="message-text">{this.message.content}</span>
        </div>
        <div class="info-wrapper">
          <span class="personal-mess-date">{this.createSendTime}</span>
          {this.message.direction === ChatMessageDirectionEnum.fromMe
            ? this.checkSendMess
            : ""}
        </div>
      </div>
    );
  }
}
