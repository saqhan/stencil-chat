import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MessageTypeEnum} from "../../mobile/mobile-chat/res/view/mobile-personal/res/interface/common.interface";

@Component({
  tag: "mess-to-me",
  styleUrl: "mess-to-me.css",
  shadow: false,
})
export class MessToMe implements ComponentInterface {
  /**
   * Принимаем сообщения от пользователя
   * */
  @Prop() message: any;

  render() {
    return (
      <div class="user-mess-wrapper">
        <div class="user-mess-wrapp">
          <span
            class="img"
            style={{ backgroundImage: `url(${this.message.sender.icon})` }}
          ></span>
          {this.createType(this.message)}
        </div>
      </div>
    );
  }

  public createType(array) {
    switch (array.type) {
      case MessageTypeEnum.text:
        return (
          <div class="user-mess">
            <div class="text-wrapper">
              <span class="message-text">{this.message.content}</span>
            </div>
            <div class="info-wrapper">
              <span class="personal-mess-date">
                {this.createSendTime(this.message.time.created)}
              </span>
            </div>
          </div>
        );
      case MessageTypeEnum.image:
        return (
          <div
            class="mess-img"
            style={{ backgroundImage: `url(${this.message.content})` }}
          ></div>
        );
    }
  }
  /**
   * Метод вывода времени отправки сообщения
   * */
  public createSendTime(array) {
    const timeNow = array;

    const hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    // add zero for minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return `${hours} : ${minutes}`;
  }
}
