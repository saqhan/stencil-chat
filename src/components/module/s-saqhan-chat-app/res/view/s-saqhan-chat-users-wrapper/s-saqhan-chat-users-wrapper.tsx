import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-users-wrapper',
  styleUrl: 's-saqhan-chat-users-wrapper.css',
  shadow: false,
})
export class SSaqhanChatUsersWrapper implements ComponentInterface {


  @Prop() messages:any;
  @Prop() mainUser:any;

  render() {
    return (
      <div>
        <s-saqhan-chat-form-search></s-saqhan-chat-form-search>
        <div class="chat-wrap">
          <s-saqhan-chat-users messages={this.messages} mainUser={this.mainUser} ></s-saqhan-chat-users>
        </div>
        <s-saqhan-chat-add-question></s-saqhan-chat-add-question>
      </div>
    );
  }

}
