import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-adam-no-chat',
  styleUrl: 's-adam-no-chat.css',
  shadow: false,
  scoped: true
})
export class SAdamNoChat implements ComponentInterface {

  render() {
    return (
      <div class="select-chat">
        Please select a chat
      </div>
    );
  }

}
