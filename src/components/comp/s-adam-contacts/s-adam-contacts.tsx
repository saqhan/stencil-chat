import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {dialogs} from "./res/interface/common.interface";

@Component({
  tag: 's-adam-contacts',
  styleUrl: 's-adam-contacts.css',
  shadow: false,
})
export class SAdamContacts implements ComponentInterface {
  /**
   * Массив с элементами диалога
   */
  @Prop() dialogs: dialogs[]=[];

  /**
   * Событие для переключения пустой страницы на личный чат
   */
  @Event() toggleChat: EventEmitter;

  render() {
    return (
      <div class="contacts-column">
        <div class="search-contact-wrapper">
          <i class="fas fa-search"></i>
          <input  class="search-contact" type="text" placeholder="Search contact"/>
        </div>
        <div class="contacts">
          {this.dialogs.map(dialog => {
            return (
              <s-adam-dialogs dialog={dialog}></s-adam-dialogs>
            );
          })}
        </div>
      </div>
    );
  }

}
