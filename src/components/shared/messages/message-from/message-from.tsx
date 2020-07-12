import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import dayjs from "dayjs";
import {ChatMessageDirectionEnum, ChatMessageTypeEnum} from "../../../../index";

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
      case ChatMessageDirectionEnum.fromMe:
        return (
          <div class="from-mess-wrapper">
            <div class="from-mess-wrap">{this.createType(this.message)}</div>
          </div>
        );
      case ChatMessageDirectionEnum.toMe:
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
      case ChatMessageDirectionEnum.center:
        return (
          <div class="system-message">
            <div>{this.checkTypeSystemMessage(this.message.content)}</div>
          </div>
        );
    }
  }

  /**
   * Определяем тип сообщения
   * @param array
   */
  public createType(array) {
    switch (array.type) {
      case ChatMessageTypeEnum.text:
        return (
          <message-text
            checkSendMess={this.checkSendMess(array)}
            createSendTime={this.createSendTime(array.time.created)}
            message={array}
          ></message-text>
        );
      case ChatMessageTypeEnum.image:
        return (
          <message-img
            checkSendMess={this.checkSendMess(array)}
            message={array}
          ></message-img>
        );
      case ChatMessageTypeEnum.loading:
        return (
          <div class="from-mess">
            <div id="circleG">
              <div id="circleG_1" class="circleG"></div>
              <div id="circleG_2" class="circleG"></div>
              <div id="circleG_3" class="circleG"></div>
            </div>
          </div>
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
  /**
   * Проверка на тип полученного системного сообщения
   * */

  public checkTypeSystemMessage(message) {
    if (typeof message === "string") {
      return message;
    } else if (typeof message === "number") {
      return dayjs(message).format("DD MMMM");
    }
  }
}
