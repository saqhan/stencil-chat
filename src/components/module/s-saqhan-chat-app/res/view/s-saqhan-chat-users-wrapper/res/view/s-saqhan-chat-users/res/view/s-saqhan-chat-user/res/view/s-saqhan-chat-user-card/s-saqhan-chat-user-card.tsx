import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-user-card",
  styleUrl: "s-saqhan-chat-user-card.css",
  shadow: false,
})
export class SSaqhanChatUserCard implements ComponentInterface {

  @Prop() user:any;
  @Event() selectPersonal: EventEmitter;

  render() {
    return (
      <div>
        <div class="user-card" onClick={() => this.selectPersonal.emit() }>
          <div class="left">
            <div
              class="img-user"
              style={{ backgroundImage: "url(" + this.user.img + ")" }}></div>
          </div>
          <div class="user-right">
            <div class="user-data">
              <div class="user-name">{this.user.name}</div>
              <div class="message-date">{this.user.date}</div>
            </div>
            <div class="mess-wrapper">
              <div class="user-mess">{this.user.message}</div>
              <div class="new-mess-wrap" ><span class="new-mess">1</span></div>
            </div>
            { this.user.position ? <span class="positon-user">{this.user.position}</span> : '' }

          </div>
        </div>

      </div>
    );
  }
}
