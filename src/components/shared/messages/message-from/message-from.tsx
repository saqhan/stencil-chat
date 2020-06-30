import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {
  MessageDirectionEnum,
  MessageTypeEnum,
} from "../../interface/common.interface";

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

  /**
   * Определяем от кого сообщение
   * @param array
   */
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

  /**
   * Определяем тип сообщения
   * @param array
   */

  public createType(array) {
    switch (array.type) {
      case MessageTypeEnum.text:
        return (
          <message-text
            checkSendMess={this.checkSendMess(array)}
            createSendTime={this.createSendTime(array.time.created)}
            message={array}
          ></message-text>
        );
      case MessageTypeEnum.image:
        return (
          <message-img
            checkSendMess={this.checkSendMess(array)}
            message={array}
          ></message-img>
        );
    }
  }

  /**
   * Метод вывода времени отправки
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
  /**
   * Проверка статуса доставки сообщения
   * */
  public checkSendMess(array) {
    if (array.time.read) {
      return (
        <span class="check">
          <i class="fa fa-check-double"></i>
        </span>
      );
    } else if (array.time.delivery) {
      return (
        <span class="check">
          <i class="fa fa-check"></i>
        </span>
      );
    } else {
      return (
        <span class="check">
          <i class="fa fa-check"></i>
        </span>
      );
    }
  }
}
