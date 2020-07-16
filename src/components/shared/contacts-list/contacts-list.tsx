import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { ChatContactInterface } from "../../../index";

@Component({
  tag: "contacts-list",
  styleUrl: "contacts-list.css",
  shadow: false,
  scoped: true,
})
export class ContactsList implements ComponentInterface {
  @Prop() contacts: ChatContactInterface[];

  /**
   * Тема для модульного/мобильного чата
   * */

  @Prop() theme: "mobile" | "module" = "mobile";
  /**
   * clock on clickToLink
   * */
  @Event() clickToLink: EventEmitter<string>;
  /**
   * search contact
   * */
  @Event() searchContact: EventEmitter<ChatContactInterface>;
  /**
   * click to click To Show Dialogs
   * */
  @Event() clickToShowDialogs: EventEmitter<void>;
  /**
   * click to click To Show Contacts
   * */
  @Event() clickToShowContacts: EventEmitter<void>;
  /**
   * click to click To Show MenuBar
   * */
  @Event() clickToShowMenuBar: EventEmitter<void>;
  /**
   * click to click To Dialog
   * */
  @Event() clickToContact: EventEmitter<ChatContactInterface>;

  render() {
    return (

        <div class="contacts-list-wrapper">
          <contacts-list-header></contacts-list-header>
          <contacts-list-body theme={this.theme} contacts={this.contacts}></contacts-list-body>
          <m-chat-footer theme={this.theme}></m-chat-footer>
        </div>

    );
  }

}
