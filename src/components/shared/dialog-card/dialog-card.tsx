import {Component, ComponentInterface, Event, EventEmitter, h, Prop,} from "@stencil/core";
import {ChatDialogInterface} from "../../../index";

@Component({
  tag: "dialog-card",
  styleUrl: "dialog-card.css",
  shadow: false,
  scoped: true
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
  // @Event() clickToLink: EventEmitter<ChatClickToLinkEmit>;

  /**
   * clock on dialog
   * */
  @Event() clickToDialog: EventEmitter<ChatDialogInterface>;

  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="m-dialog-card" onClick={() => this.clickToDialogHandler()}>
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
              {this.showNewMess(this.mess)}
            </div>
          </div>
        </div>
      </div>
    );
  }


  public showNewMess(dialog){
    if (dialog.newMessage > 0) {
     return <span class="add-new-message"> {dialog.newMessage}</span>
    }
  }

  /**
   * Управление по клику на диалог
   * */
  public clickToDialogHandler() {
    // this.clickToDialog.emit({ data: this.mess });
    this.clickToDialog.emit(this.mess);
  }

  // public clickToLinkHandler() {
  //   this.clickToLink.emit({place: ChatLinkTypeEnum.showPersonalDialog, data: this.mess })
  // }

  /**
   * Метод выобра темы для ПК/Мобильная/Модульной версии
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
