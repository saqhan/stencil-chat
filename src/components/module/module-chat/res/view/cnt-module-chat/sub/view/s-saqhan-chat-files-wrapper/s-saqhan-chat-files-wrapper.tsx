import {Component, ComponentInterface, EventEmitter, Event, h} from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-files-wrapper',
  styleUrl: 's-saqhan-chat-files-wrapper.css',
  shadow: false,
  scoped: true
})
export class SSaqhanChatFilesWrapper implements ComponentInterface {
  /**
   * click to link
   * */
  @Event() clickToShowDialogs: EventEmitter<void>;

  render() {
    return (
      <div>
        <s-saqhan-chat-form-search-files></s-saqhan-chat-form-search-files>
        <s-saqhan-chat-files ></s-saqhan-chat-files>
      </div>
    );
  }

}
