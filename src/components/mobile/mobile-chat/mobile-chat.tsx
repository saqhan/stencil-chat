import { Component, ComponentInterface, h, State } from "@stencil/core";
import {
  dialogs,
  categories,
  MessageMock,
  contacts,
} from "../../../utils/mock";

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
   * массив данных для контактов
   * */
  @State() contacts = contacts;
  /**
   * массив данных личных диалогово
   * */
  @State() messageMock = MessageMock;

  render() {
    return <div>{this.getContent("dialogs")}</div>;
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
   * Поиск контактов
   * */
  public searchContact(e) {
    console.log("searchContact", e.currentTarget.querySelector("input").value);
  }

  /**
   * Метод для вывода определенного контента
   * */
  getContent(content) {
    switch (content) {
      case "dialogs":
        return (
          <mobile-dialogs
            onClickToLink={(item) => this.clickToLink(item)}
            onClickToCategory={(item) => this.clickToCategory(item)}
            categories={categories}
            dialogs={this.dialogs}
          ></mobile-dialogs>
        );
      case "personal":
        return (
          <mobile-personal
            onClickToLink={(item) => this.clickToLink(item)}
            messageMock={this.messageMock}
          ></mobile-personal>
        );
      case "profile":
        return (
          <user-profile
            onClickToLink={(item) => this.clickToLink(item)}
          ></user-profile>
        );
      case "contacts":
        return (
          <contacts-list
            onClickToLink={(item) => this.clickToLink(item)}
            contacts={this.contacts}
            onSearchContact={(item) => this.searchContact(item)}
          ></contacts-list>
        );
      default:
        return <div>no content</div>;
    }
  }
}
