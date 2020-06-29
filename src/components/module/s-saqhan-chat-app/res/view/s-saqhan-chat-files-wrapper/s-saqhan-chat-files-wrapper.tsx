import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-files-wrapper',
  styleUrl: 's-saqhan-chat-files-wrapper.css',
  shadow: false,
})
export class SSaqhanChatFilesWrapper implements ComponentInterface {

  render() {
    return (
      <div>
        <s-saqhan-chat-form-search-files></s-saqhan-chat-form-search-files>
        <s-saqhan-chat-files ></s-saqhan-chat-files>
      </div>
    );
  }

}
