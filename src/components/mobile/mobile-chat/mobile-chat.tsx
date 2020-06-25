import { Component, ComponentInterface, h, State } from "@stencil/core";
import { dialogs, categories, MessageMock } from "../../../utils/mock";

@Component({
  tag: "mobile-chat",
  styleUrl: "mobile-chat.css",
  shadow: false,
})
export class MobileChat implements ComponentInterface {
  /**
   * Выбираем какой контент показывать
   * */
  @State() showContent = "dialogs";
  /**
   * массив данных для диалогов
   * */
  @State() dialogs = dialogs;
  /**
   * массив данных личных диалогово
   * */
  @State() messageMock = MessageMock;

  render() {
    return (
      // <div class="temp">
      //  <div>{this.getContent(this.showContent)}</div>
      <div>
        {/*<mobile-dialogs*/}
        {/*  onClickToLink={(item) => this.clickToLink(item)}*/}
        {/*  onClickToCategory={(item) => this.clickToCategory(item)}*/}
        {/*  categories={categories}*/}
        {/*  dialogs={this.dialogs}*/}
        {/*></mobile-dialogs>*/}
        <mobile-personal
          onClickToLink={(item) => this.clickToLink(item)}
          messageMock={this.messageMock}
        ></mobile-personal>
      </div>
      // </div>
    );
  }
  componentWillLoad(): Promise<void> | void {
    this.dialogs = dialogs;
  }
/**
 * click to Link
 * */
  public clickToLink({ detail }) {
    console.log(detail);
  }
  /**
   * Click to category filter
   * */
  public clickToCategory({ detail }) {
    console.log(detail);
  }

  /**
   * Метод для вывода определенного контента
   * */
  // getContent(content) {
  //   switch (content) {
  //     case "dialogs":
  //       return (
  //         <mobile-dialogs
  //           onClickToLink={(item) => this.clickToLink(item)}
  //           categories={categories}
  //           dialogs={this.dialogs}
  //         ></mobile-dialogs>
  //       );
  //     case "personal":
  //       return (
  //         <mobile-personal
  //           onClickToLink={(item) => this.clickToLink(item)}
  //           messageMock={this.messageMock}
  //         ></mobile-personal>
  //       );
  //     default:
  //       return <div>no content</div>;
  //   }
  // }
}
