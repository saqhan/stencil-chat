import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {MessageTypeEnum} from "../../mobile/mobile-chat/res/view/mobile-personal/res/interface/common.interface";


@Component({
  tag: "mess-from-me",
  styleUrl: "mess-from-me.css",
  shadow: false,
})
export class MessFromMe implements ComponentInterface {
  /**
   * Принимаем сообщения для пользователя
   * */
  @Prop() message: any;
  render() {
    return (
      <div class="admin-mess-wrapper">
        <div class="admin-mess-wrapp">{this.createType(this.message)}</div>
      </div>
    );
  }
  public createType(array) {
    switch (array.type) {
      case MessageTypeEnum.text:
        return (
          <div class="admin-mess">
            <div class="text-wrapper">
              <span class="message-text">{this.message.content}</span>
            </div>
            <div class="info-wrapper">
              <span class="personal-mess-date">
                {this.createSendTime(this.message.time.created)}
              </span>
              <span class="check">
                <i class="fa fa-check-double"></i>
              </span>
            </div>
          </div>
        );
      case MessageTypeEnum.image:
        return (
          <div
            class="mess-img"
            style={{ backgroundImage: `url(${this.message.content})` }}
          >
            <span class="check">
              <i class="fa fa-check-double"></i>
            </span>
          </div>
        );
    }
  }

  /**
   * Метод вывода времени отправки сообщения
   * */
  public createSendTime(array) {
    const timeNow = array;

    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();

    // add zero for minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }


    return `${hours} : ${minutes}`;
  }
}
