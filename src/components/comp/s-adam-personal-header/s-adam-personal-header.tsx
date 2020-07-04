import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {Message} from "../../..";

@Component({
  tag: 's-adam-personal-header',
  styleUrl: 's-adam-personal-header.css',
  shadow: false,
})
export class SAdamPersonalHeader implements ComponentInterface {

  /**
   * клик по имени юзера в личной переписке
   */
  @Event() clickOnUsername: EventEmitter;

  /**
   * Личный диалог
   */
  @Prop() message: Message[] = [];

  render() {
    return (
      <div class="header">
        <div class="search-message">
          <i class="fas fa-search hover-link"></i>
        </div>
        <div class="user">
          <div
            class="user-name"
            onClick={(item) =>
              this.clickOnUsername.emit({ place: "userName", item })
            }
          >
            {this.getNameUser()}
          </div>
          <div class="online-marker"></div>
        </div>
        <div class="settings">
          <i class="fas fa-cog hover-link"></i>
        </div>
      </div>
    );
  }

  /**
   * get name user
   * */
  public getNameUser() {
    let name = "";

    this.message.forEach((item) => {
      if (name.indexOf(item.sender.name) === -1) {
        name = item.sender.name;
      }
    });

    return name;
  }

}
