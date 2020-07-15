import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';

@Component({
  tag: 'btn-wrapper',
  styleUrl: 'btn-wrapper.css',
  shadow: false,
  scoped: true
})
export class BtnWrapper implements ComponentInterface {

  @Prop() showChat: boolean;
  @Prop() dialogs: number;
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
            <div class='counterNewMess' >{this.dialogs}</div>
          </div>
        </div>
      </div>
    );
  }

  public clickToShowChatHandler(){
    this.clickToShowChat.emit();
  }


}
