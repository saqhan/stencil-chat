import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {ChatLogo} from "../../../index";

@Component({
  tag: 's-adam-navigate',
  styleUrl: 's-adam-navigate.css',
  shadow: false,
  scoped: true
})
export class SAdamNavigate implements ComponentInterface {
  /**
   * Логотип
   */
  @Prop() logo: ChatLogo;

  /**
   * клик по имени юзера в личной переписке
   */
  @Event() visibleContacts: EventEmitter<void>;

  render() {
    return (
      <div class="nav-column">
        <div class="logo border-radius" style={{backgroundImage: 'url('+this.logo.logo+')'}}>
        </div>
        <s-adam-nav-item></s-adam-nav-item>
      </div>
    );
  }

}
