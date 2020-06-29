import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-user",
  styleUrl: "s-saqhan-chat-user.css",
  shadow: false,
})
export class SSaqhanChatUser implements ComponentInterface {
  @Prop() messages: any;

  // getUser(arr): any[] {
  //   return arr.map((item) => item.main);
  // }

  render() {
    return (
      <div class="user-wrapper">
        <UserMessage user={this.messages}></UserMessage>
      </div>
    );
  }
}

const UserMessage = (props) => {
  return props.user.map(item => {
    return <s-saqhan-chat-user-card user={item}></s-saqhan-chat-user-card>
  })
}
