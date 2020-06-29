import {
  Component,
  ComponentInterface,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-user",
  styleUrl: "s-saqhan-chat-user.css",
  shadow: false,
})
export class SSaqhanChatUser implements ComponentInterface {
  /**
   * массив с диалогами
   * */
  @Prop() messages: any;



  render() {
    return (
      <div class="user-wrapper">
        <UserMessage user={this.messages}></UserMessage>
      </div>
    );
  }
}


/**
 * компонентная функция
 * */
const UserMessage = (props) => {
  return props.user.map((item) => {
    // return <chat-user-card user={item}></chat-user-card>
    return <dialog-card mess={item}></dialog-card>;
  });
};
