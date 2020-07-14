import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';

@Component({
  tag: 'btn-wrapper',
  styleUrl: 'btn-wrapper.css',
  shadow: false,
  scoped: true
})
export class BtnWrapper implements ComponentInterface {

  @Prop() showChat: boolean;
  @Prop() dialogs: any;
  /**
   * clock on clickToLink
   * */
  @Event() clickToShowChat: EventEmitter<void>;

  render() {
    return (
      <div class="btn-wrapper">
        <div class="open-chat">
          <div class='btn-green'>
            <button onClick={() => this.clickToShowChatHandler()} class="btn-open">
              <span>
                {this.showChat ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="far fa-comment-dots"></i>
                )}
              </span>
            </button>
            <span class='counterNewMess' >{this.countNewMess(this.dialogs)}</span>
          </div>
        </div>
      </div>
    );
  }

  public clickToShowChatHandler(){
    this.clickToShowChat.emit();
  }

  public countNewMess(array) {
    let counter = 0;
    array.map((item) => {
      counter += item.newMessage;
    });
    return counter;
  }

}
