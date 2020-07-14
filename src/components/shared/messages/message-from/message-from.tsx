import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import dayjs from "dayjs";
import {ChatMessage, ChatMessageDirectionEnum, ChatMessageTypeEnum, ChatWritingUserInterface,} from "../../../../index";

@Component({
  tag: "message-from",
  styleUrl: "message-from.css",
  shadow: false,
  scoped: true,
})
export class MessageFrom implements ComponentInterface {
  /**
   * Принимаем сообщения для пользователя
   * */
  @Prop() message?: ChatMessage;


  render() {
    return <div>
      {this.message ? this.renderMessage(this.message) : ''}
    </div>;
  }

  /**
   * */
  public getWritingMessage (
    writing: ChatWritingUserInterface[]
  )
  {
    if (!writing?.length) {
      return '';
    }

    // @ts-ignore
    const message: any = (
      {
        sender: {
          icon: writing[0].icon
        },
        type: ChatMessageTypeEnum.loading
      }
    );

    return this.getToMeMessage(
      message
    )
  }

  /**
   *
   * */
  private getToMeMessage (
    message: ChatMessage
  )
  {
    return (
      <div class="to-me-mess-wrapper">
        <div class="to-me-mess-wrap">
        <span
          class="img"
          style={{
            backgroundImage: `url(${message.sender.icon})`,
          }}
        ></span>
          {this.createType(message)}
        </div>
      </div>
    );
  }

  /**
   *
   * */
  private getCenterMeMessage (
    message: ChatMessage
  )
  {
    return (
      <div class="system-message">
        <div>{this.checkTypeSystemMessage(message.content)}</div>
      </div>
    )
  }

  /**
   *
   * */
  private getFromMeMessage (
    message: ChatMessage
  )
  {
    return (
      <div>
        <div class="from-mess-wrapper ">
          <div class="from-mess-wrap">{this.createType(message)}</div>
        </div>
      </div>
    );
  }

  /**
   * Определяем от кого сообщение
   * @param message
   */
  public renderMessage(
    message: ChatMessage
  ) {
    switch (message.direction) {
      case ChatMessageDirectionEnum.fromMe:
        return this.getFromMeMessage(message);
      case ChatMessageDirectionEnum.toMe:
        return this.getToMeMessage(message)
      case ChatMessageDirectionEnum.center:
        return this.getCenterMeMessage(message);
    }
  }

  /**
   * Определяем тип сообщения
   * @param message
   */
  public createType(message) {
    switch (message.type) {
      case ChatMessageTypeEnum.text:
        return (
          <div class="from-mess">
            <message-text
              checkSendMess={this.checkSendMess(message)}
              createSendTime={this.createSendTime(message.time.created)}
              message={message}
            ></message-text>
          </div>
        );
      case ChatMessageTypeEnum.image:
        return (
          <div
            class="mess-img"
            style={{ backgroundImage: `url(${this.message.content})` }}
          >
            <message-img
              checkSendMess={this.checkSendMess(message)}
              message={message}
            ></message-img>
          </div>
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
