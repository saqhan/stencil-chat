import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "personal-message",
  styleUrl: "personal-message.css",
  shadow: false,
})
export class PersonalMessage implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() messageMock: any;
  render() {
    return (
      <div class="personal-message">
        {this.messageMock.map((message) => {
          return <message-from message={message}></message-from>;
        })}
      </div>
    );
  }
}
