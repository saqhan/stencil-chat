import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import {Message, MessageDirectionEnum} from "./res/interface/common.interface";

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

  render() {
    return (
      <div>
        <div class="header">
          <div class="search-message">
            <i class="fas fa-search hover-link"></i>
          </div>
          <div class="user">
            <div class="user-name">Tim Ostin</div>
            <div class="online-marker">
            </div>
          </div>
          <div class="settings">
            <i class="fas fa-cog hover-link"></i>
          </div>
        </div>
        <div class="chat-messages">
          {this.message.map(message => {
            switch (message.direction) {
              case MessageDirectionEnum.toMe:
                return <mess-to-me message={message}></mess-to-me>;
              case MessageDirectionEnum.fromMe:
                return <mess-from-me message={message}></mess-from-me>;
              case MessageDirectionEnum.center:
                return <div>Today</div>
            }
          })
          }
        </div>
        <personal-footer></personal-footer>

      </div>

    );
  }

}
