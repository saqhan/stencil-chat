import {Component, ComponentInterface, h, State} from "@stencil/core";
import { categories } from "../../../utils/mock";
@Component({
  tag: "module-chat",
  styleUrl: "module-chat.css",
  shadow: false,
})
export class ModuleChat implements ComponentInterface {


  /**
   * массив данных для диалогов
   * */
  @State() categories = categories;

  render() {
    return (
      <s-saqhan-chat-wrapper
        categories={this.categories}
      ></s-saqhan-chat-wrapper>
    );
  }
  /**
   *  Метод поиска по чату
   * */
  public clickOnSearchChat({ detail }) {
    return console.log('clickOnSearchChat',detail.data);
  }

}
