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
  scoped:true
})
export class MobileChat implements ComponentInterface {
  /**
   * Выбираем какой контент показывать
   * */
  @State() showContent = "contacts";

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
  @State() message = MessageMock;

  /**
   * click to Link
   * */
  public clickToLink({ detail }) {
    console.log(detail);
  }
  /**
   * click to Link
   * */
  public clickToDialog({ detail }) {
    console.log("clickToDialog", detail);
  }
  /**
   * click to Link
   * */
  public clickToContact({ detail }) {
    console.log("clickToContact", detail);
  }
  /**
   * Click to category filter
   * */
  public clickToCategory({ detail }) {
    console.log("clickToCategory", detail);
  }

  /**
   * Поиск контактов
   * */
  public searchContact(e) {
    console.log("searchContact", e);
  }

  /**
   * Поиск среди диалогов
   * */
  public searchDialogs(e) {
    console.log("searchDialogs", e);
  }

  /**
   * Поиск среди диалогов
   * */
  public searchPersonalMessages(e) {
    console.log("searchPersonalMessages", e);
  }

  /**
   * click to add dialog
   * */

  public clickToAddDialog() {
    console.log("clickToAddDialog");
  }

  /**
   * click to click To Show Dialogs
   * */
  public clickToShowDialogs() {
    console.log("clickToShowDialogs");
  }
  /**
   * click to click To Show Contacts
   * */
  public clickToShowContacts() {
    console.log("clickToShowContacts");
  }

  /**
   * click to click To Show MenuBar
   * */
  public clickToShowMenuBar() {
    console.log("clickToShowMenuBar");
  }

  // personal chat


  /**
   * click to click To Show MenuBar
   * */
  public clickToUserProfile() {
    console.log("clickToUserProfile");
  }

  render() {
    return <div>{this.getContent(this.showContent)}</div>;
  }

  componentWillLoad(): Promise<void> | void {
    this.dialogs = dialogs;
  }

  /**
   * Метод для вывода определенного контента
   * */
  getContent(content) {
    switch (content) {
      case "dialogs":
        return (
          <mobile-dialogs
            onClickToAddDialog={() => this.clickToAddDialog()}
            onClickToDialog={(item) => this.clickToDialog(item)}
            onClickToCategory={(item) => this.clickToCategory(item)}
            onClickToShowDialogs={() => this.clickToShowDialogs()}
            onClickToShowContacts={() => this.clickToShowContacts()}
            onClickToShowMenuBar={() => this.clickToShowMenuBar()}
            onSearchDialogs={(detail) => this.searchDialogs({ detail })}
            categories={categories}
            dialogs={this.dialogs}
          ></mobile-dialogs>
        );
      case "personal":
        return (
          <mobile-personal
            onClickToShowDialogs={() => this.clickToShowDialogs()}
            onClickToUserProfile={() => this.clickToUserProfile()}
            message={this.message}
            // onSearchContact={(e) => console.log("mobile-personal", e)}
            onSearchPersonalMessages={(detail) => this.searchPersonalMessages({detail})}
          ></mobile-personal>
        );
      case "profile":
        return (
          <user-profile
            onClickToShowDialogs={() => this.clickToShowDialogs()}
          ></user-profile>
        );
      case "contacts":
        return (
          <contacts-list
            contacts={this.contacts}
            onSearchContact={(detail) => this.searchContact({ detail })}
            onClickToShowDialogs={() => this.clickToShowDialogs()}
            onClickToShowContacts={() => this.clickToShowContacts()}
            onClickToShowMenuBar={() => this.clickToShowMenuBar()}
            onClickToContact={(item) => this.clickToContact(item)}
          ></contacts-list>
        );
      default:
        return <div>no content</div>;
    }
  }
}
