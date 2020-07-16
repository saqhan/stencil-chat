import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { ChatContactInterface } from "../../../../../../index";

@Component({
  tag: "contacts-list-body",
  styleUrl: "contacts-list-body.css",
  shadow: false,
  scoped: true,
})
export class ContactsListBody implements ComponentInterface {

  /**
   * массив данных контактов
   * */
  @Prop() contacts: ChatContactInterface[];

  /**
   * Данные выбора темы для Мобильная/Модульной версии
   * */
  @Prop() theme: "mobile" | "module" = "mobile";

  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="contacts-list-body">
          <ContactCard contacts={this.contacts}></ContactCard>
        </div>
      </div>
    );
  }
  /**
   * Метод выобра темы для Мобильная/Модульной версии
   * */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }
}
/**
 * Компонент высшего порядка для передачи данных о контактах
 * */
const ContactCard = (props: {contacts: ChatContactInterface[]}) => {
  return props.contacts.map((item) => {
    return <contact-card contact={item}></contact-card>;
  });
};
