import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'dialog-card',
  styleUrl: 'dialog-card.css',
  shadow: false,
})
export class DialogCard implements ComponentInterface {
  /**
   * карточка диалога
   * */
  @Prop() mess:any;
  /**
   * clock on navigate
   * */
  @Event() selectDialog: EventEmitter;
  render() {
    return (
      <div class="m-dialog-card" onClick={()=> this.selectDialog.emit({place:'showPersonal'})} >
        <div class="img-user">
          <div class={this.mess.online ? 'img online': 'img'}
          style={{backgroundImage: `url(${this.mess.img})`}}></div>
        </div>
        <div class="info-card">
          <div class="unfo-user">
            <div class="name-user">{this.mess.name}</div>
            <div class="message-user">{this.mess.mess}</div>
          </div>
          <div class="data-message">
            <div class="date"> {this.createSendTime(this.mess.time.created)}</div>
            {/*<div class="new-message">Yesterday</div>*/}
            <span class="add-new-message">1</span>
          </div>
        </div>
      </div>
    );
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

