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
  @Prop() theme: "mobile" | "module" = "mobile";
  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="personal-message">
          {this.messageMock.map((message) => {
            return <message-from message={message}></message-from>;
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
