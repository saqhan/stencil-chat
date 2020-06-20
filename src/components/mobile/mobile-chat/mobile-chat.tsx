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
        <mobile-dialogs
          onClickToLink={(item) => this.clickToLink(item)}
          categories={categories}
          dialogs={this.dialogs}
        ></mobile-dialogs>
        {/*<mobile-personal*/}
        {/*  onClickToLink={(item) => this.clickToLink(item)}*/}
        {/*  messageMock={this.messageMock}*/}
        {/*></mobile-personal>*/}
      </div>
      // </div>
    );
  }
  componentWillLoad(): Promise<void> | void {
    this.dialogs = dialogs;
  }

  /**
   * Функция переключения между диалогами и личными сообщениями
   **/
  // public selectDialog({ detail }) {
  //   if (detail.place === "showPersonal") {
  //     return (this.showContent = "personal");
  //   } else if (detail.place === "showDialogs") {
  //     return (this.showContent = "dialogs");
  //   }
  // }

  /**
   * Фильтруем по кликнутой категории
   * */
  // public clickCategory({ detail }) {
  //   this.dialogs =
  //     detail !== "all"
  //       ? dialogs.filter((item) => item.category === detail)
  //       : dialogs;
  // }
  public clickToLink({ detail }) {
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
