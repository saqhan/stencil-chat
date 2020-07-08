import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';

@Component({
  tag: 'btn-wrapper',
  styleUrl: 'btn-wrapper.css',
  shadow: false,
})
export class BtnWrapper implements ComponentInterface {

  @Prop() showChat;
  /**
   * clock on clickToLink
   * */
  @Event() clickToShowChat: EventEmitter;

  render() {
    return (
      <div class="btn-wrapper">
        <div class="open-chat">
          <button onClick={() => this.clickToShowChat.emit({place: 'toggleShowChat'})} class="btn-open">
              <span>
                {this.showChat ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="far fa-comment-dots"></i>
                )}
              </span>
          </button>
        </div>
      </div>
    );
  }

}