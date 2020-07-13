import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {ChatMessage} from "../../../../../../../../../index";

@Component({
  tag: "personal-message",
  styleUrl: "personal-message.css",
  shadow: false,
})
export class PersonalMessage implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() message: ChatMessage[];
  @Prop() theme: "mobile" | "module" | "comp" = "mobile";
  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="personal-message">
          {this.message.map((message) => {
            return <message-from  message={message}></message-from>;
          })}
        </div>
      </div>
    );
  }
  /**
   *
   * */
  public getClassForHost ()
  {
    return {
      [this.theme]: true
    }
  }
}
