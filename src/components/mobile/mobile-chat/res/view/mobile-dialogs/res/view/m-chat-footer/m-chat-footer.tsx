import {Component, ComponentInterface, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'm-chat-footer',
  styleUrl: 'm-chat-footer.css',
  shadow: false,
})
export class MChatFooter implements ComponentInterface {

  /**
   * clock on clickToLink
   * */
  @Event() clickToLink: EventEmitter;

  render() {
    return (
      <div class="m-chat-footer">
          <span onClick={() => this.clickToLink.emit({place: 'new-mess'})}>
            <i class="far fa-comment"></i>
          </span>
        <span onClick={() => this.clickToLink.emit({place: 'contacts'})}>
            <i class="fas fa-user-friends"></i>
          </span>
        <span onClick={() => this.clickToLink.emit({place: 'menu-bar'})}>
            <i class="fas fa-bars"></i>
          </span>
      </div>
    );
  }

}
