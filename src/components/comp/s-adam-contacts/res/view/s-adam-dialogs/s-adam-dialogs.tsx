import {Component, ComponentInterface, Prop, h, EventEmitter, Event} from '@stencil/core';

@Component({
  tag: 's-adam-dialogs',
  styleUrl: 's-adam-dialogs.css',
  shadow: false,
})
export class SAdamDialogs implements ComponentInterface {
  /**
   * Массив с элементами диалога
   */
  @Prop() dialog: any;

  /**
   * Событие для переключения пустой страницы на личный чат
   */
  @Event() toggleChat: EventEmitter;

  render() {
    return (
      <div class="dialog" onClick={()=> this.toggleChat.emit({place: 'showChat', item: this.dialog})}>
        <div
          class="dialog-photo border-radius"
          style={{backgroundImage: 'url('+this.dialog.photo+')'}}>
        </div>
        <div class="dialog-message">
          <div class="dialog-message-caption">
            {this.dialog.name}
          </div>
          <div class="dialog-message-text">
            {this.dialog.message}
          </div>
        </div>
        <div class="message-time">
          {this.dialog.time}
        </div>
      </div>
    );
  }
}
