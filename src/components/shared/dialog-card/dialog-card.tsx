import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {ChatDialogInterface} from "../interface/common.interface";

@Component({
  tag: "dialog-card",
  styleUrl: "dialog-card.css",
  shadow: false,
})
export class DialogCard implements ComponentInterface {
  /**
   * карточка диалога
   * */
  @Prop() mess: ChatDialogInterface;
  /**
   * карточка диалога
   * */
  @Prop() theme: "comp" | "mobile" = "mobile";

  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter;
  render() {
    return (
      <div class={this.getClassForHost()}>
        <div
          class="m-dialog-card"
          onClick={() =>
            this.clickToLink.emit(this.mess)
          }
        >
          <div class="img-user">
            <div
              class={this.mess.online ? "img online" : "img"}
              style={{ backgroundImage: `url(${this.mess.img})` }}
            ></div>
          </div>
          <div class="info-card">
            <div class="unfo-user">
              <div class="name-user">{this.mess.name}</div>
              <div class="message-user">{this.mess.mess}</div>
            </div>
            <div class="data-message">
              <div class="date">
                {" "}
                {this.createSendTime(this.mess.time.created)}
              </div>
              {/*<div class="new-message-from">Yesterday</div>*/}
              <span class="add-new-message">1</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   *
   * */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
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

    // выводим время в минутах/часах
    return `${hours} : ${minutes}`;
  }
}
