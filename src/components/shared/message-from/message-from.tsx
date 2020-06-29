import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MessageTypeEnum } from "../../mobile/mobile-chat/res/view/mobile-personal/res/interface/common.interface";
import { MessageDirectionEnum } from "../../comp/s-adam-direct/res/interface/common.interface";

@Component({
  tag: "message-from",
  styleUrl: "message-from.css",
  shadow: false,
})
export class MessageFrom implements ComponentInterface {
  /**
   * Принимаем сообщения для пользователя
   * */
  @Prop() message: any;

  render() {
    return <div>{this.messageFrom(this.message)}</div>;
  }

  public messageFrom(array) {
    switch (array.direction) {
      case MessageDirectionEnum.fromMe:
        return (
          <div class="from-mess-wrapper">
            <div class="from-mess-wrap">{this.createType(this.message)}</div>
          </div>
        );
      case MessageDirectionEnum.toMe:
        return (
          <div class="to-me-mess-wrapper">
            <div class="to-me-mess-wrap">
              <span
                class="img"
                style={{
                  backgroundImage: `url(${this.message.sender.icon})`,
                }}
              ></span>
              {this.createType(this.message)}
            </div>
          </div>
        );
      case MessageDirectionEnum.center:
        return <div>Today</div>;
    }
  }

  public createType(array) {
    switch (array.type) {
      case MessageTypeEnum.text:
        return (
          <message-text message={array}></message-text>
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
  public createSendTime (array) {
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
