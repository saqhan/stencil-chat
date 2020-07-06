import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';

@Component({
  tag: 'm-chat-dialogs',
  styleUrl: 'm-chat-dialogs.css',
  shadow: false,
})
export class MChatDialogs implements ComponentInterface {

  @Prop() dialogs:any;
  @Event() clickToLink:EventEmitter;

  render() {
    return (
      <div class="m-chat-dialogs">
        <Dialog mess={this.dialogs}></Dialog>
      </div>
    );
  }

}
/**
 * Распаковка массива диалогов и выдача в компоненте <dialog-card/>
 * */
const Dialog = (array) => {
  return array.mess.map((item) => {
    return <dialog-card mess={item}></dialog-card>;
  });
};
