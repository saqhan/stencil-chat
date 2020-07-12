import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {ChatMessage} from "../../../../../../../../../index";


@Component({
  tag: 'module-personal',
  styleUrl: 'module-personal.css',
  shadow: false,
})

export class ModulePersonal implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() messageMock: ChatMessage[];

  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter;
  @Event() searchContact: EventEmitter;
  render() {
    return (
      <div class="personal-wrapper">
        <personal-header messageMock={this.messageMock} ></personal-header>
        <personal-message theme={'module'} messageMock={this.messageMock} ></personal-message>
        <personal-footer theme='mobile' ></personal-footer>
      </div>
    );
  }

}
