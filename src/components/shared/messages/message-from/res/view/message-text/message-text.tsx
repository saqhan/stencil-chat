import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MessageDirectionEnum } from "../../../../../interface/common.interface";

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

  @Prop() createSendTime: any;

  render() {
    return (
      <div class="from-mess">
        <div class="text-wrapper">
          <span class="message-text">{this.message.content}</span>
        </div>
        <div class="info-wrapper">
          <span class="personal-mess-date">{this.createSendTime}</span>
          {this.message.direction === MessageDirectionEnum.fromMe ? (
            <span class="check">
              <i class="fa fa-check-double"></i>
            </span>
          ) : (
            " "
          )}
        </div>
      </div>
    );
  }
}
