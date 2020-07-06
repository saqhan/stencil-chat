import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "module-chat",
  styleUrl: "module-chat.css",
  shadow: false,
})
export class ModuleChat implements ComponentInterface {


  render() {
    return (
      <s-saqhan-chat-wrapper></s-saqhan-chat-wrapper>
    );
  }
  /**
   *  Метод поиска по чату
   * */
  public clickOnSearchChat({ detail }) {
    return console.log('clickOnSearchChat',detail.data);
  }

}
