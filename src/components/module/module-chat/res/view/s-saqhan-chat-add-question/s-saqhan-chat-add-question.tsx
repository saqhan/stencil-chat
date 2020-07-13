import {Component, ComponentInterface, EventEmitter, Event, h} from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-add-question',
  styleUrl: 's-saqhan-chat-add-question.css',
  shadow: false,
})
export class SSaqhanChatAddQuestion implements ComponentInterface {

  @Event() sendNewMessModal: EventEmitter<void>

  render() {
    return (
      <div class="btn-new-wrap">
        <div class="btn-new-ask">
          <button class="btn-add-question custom-link "
            onClick={()=> this.sendNewMessModalHandler()}
          >Написать нам</button>
        </div>
      </div>
    );
  }

  public sendNewMessModalHandler() {
    this.sendNewMessModal.emit()
  }

}
