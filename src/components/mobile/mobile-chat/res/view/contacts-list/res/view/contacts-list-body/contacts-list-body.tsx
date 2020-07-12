import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { ChatContactInterface } from "../../../../../../../../../index";

@Component({
  tag: "contacts-list-body",
  styleUrl: "contacts-list-body.css",
  shadow: true,
})
export class ContactsListBody implements ComponentInterface {
  @Prop() contacts: ChatContactInterface[];

  render() {
    return (
      <div class="contacts-list-body">
        <ContactCard contact={this.contacts}></ContactCard>
      </div>
    );
  }
}
/**
 * Компонент высшего порядка для передачи данных о контактах
 * */
const ContactCard = (array) => {
  return array.contact.map((item) => {
    return <contact-card contact={item}></contact-card>;
  });
};
