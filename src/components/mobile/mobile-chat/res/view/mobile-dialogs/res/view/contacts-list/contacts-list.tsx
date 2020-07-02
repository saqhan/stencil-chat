import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "contacts-list",
  styleUrl: "contacts-list.css",
  shadow: false,
})
export class ContactsList implements ComponentInterface {
  @Prop() contacts: any;
  /**
   * clock on clickToLink
   * */
  @Event() clickToLink: EventEmitter;
  /**
   * search contact
   * */
  @Event() searchContact: EventEmitter;

  render() {
    return (
      <div class="contacts-list-wrapper">
        <contacts-list-header></contacts-list-header>
        <contacts-list-body contacts={this.contacts} ></contacts-list-body>
        <m-chat-footer></m-chat-footer>
      </div>
    );
  }
}


