import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'message-text',
  styleUrl: 'message-text.css',
  shadow: false,
})
export class MessageText implements ComponentInterface {

  @Prop() createSendTime: any;
  @Prop() message: any;

  render() {
    return (
      <div class="from-mess">
        <div class="text-wrapper">
              <span class="message-text">
                {this.message.content}
              </span>
        </div>
        <div class="info-wrapper">
              <span class="personal-mess-date">
                  15:40
              </span>
          <span class="check">
                <i class="fa fa-check-double"></i>
              </span>
        </div>
      </div>
    );
  }

}
