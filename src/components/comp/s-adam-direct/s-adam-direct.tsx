import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {Message} from "../../shared/interface/common.interface";

@Component({
  tag: 's-adam-direct',
  styleUrl: 's-adam-direct.css',
  shadow: false,
})
export class SAdamDirect implements ComponentInterface {
  /**
   * Личный диалог
   */
  @Prop() message: Message[]=[];

  /**
   * клик по имени юзера в личной переписке
   */
  @Event() clickOnUsername: EventEmitter;

  /**
   * click on navigate
   * */
  @Event() clickToLink: EventEmitter;

  render() {
    return (
      <div>
        <div class="header">
          <div class="search-message">
            <i class="fas fa-search hover-link"></i>
          </div>
          <div class="user">
            <div class="user-name" onClick={(item) => this.clickOnUsername.emit({place: 'userName', item}) }>Tim Ostin</div>
            <div class="online-marker">
            </div>
          </div>
          <div class="settings">
            <i class="fas fa-cog hover-link"></i>
          </div>
        </div>
        <div class="chat-messages">
          {this.message.map(message => {
              return <message-from message={message}></message-from>;
          })
          }
        </div>
        <personal-footer></personal-footer>
      </div>

    );
  }

}
