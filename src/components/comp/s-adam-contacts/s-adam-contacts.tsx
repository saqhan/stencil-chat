import {
  Component,
  ComponentInterface,
  h,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import {
  ChatContactInterface,
  filterContactBySearchValue,
} from "../../../index";

@Component({
  tag: "s-adam-contacts",
  styleUrl: "s-adam-contacts.css",
  shadow: false,
  scoped: true,
})
export class SAdamContacts implements ComponentInterface {
  /**
   * */
  @Prop() contacts: ChatContactInterface[];

  /**
   * отключение поиска контактов
   * */
  @Prop() disableInnerSearchContactState: boolean;

  /**
   * Тема для модульного/мобильного чата
   * */
  @Prop() theme: "mobile" | "module" | "comp" = "mobile";

  /**
   * */
  @State() contactsFiltered: ChatContactInterface[];

  /**
   * */
  @State() lastSearchValue: string;

  /**
   * при изменении входящих контактов фильтрует данные заново
   * */
  @Watch("contacts")
  watchContactsHandler(newValue: ChatContactInterface[]) {
    this.filterContacts(this.lastSearchValue, newValue);
  }

  componentWillRender(): Promise<void> | void {
    this.filterContacts(this.lastSearchValue);
  }

  render() {
    return (
      <div class="contacts-column">
        <contacts-list-header
          theme={this.theme}
          onSearchContact={(e) => this.filterContacts(e.detail)}
        ></contacts-list-header>
        {/*<contacts-list-body theme={this.theme} contacts={this.contactsFiltered}></contacts-list-body>*/}
        <div class="contacts">
          {this.contactsFiltered.map((dialog) => {
            return (
              <contact-card theme={this.theme} contact={dialog}></contact-card>
            );
          })}
        </div>
      </div>
    );
  }

  /**
   *
   * */
  public filterContacts(
    value: string,
    allContacts: ChatContactInterface[] = this.contacts
  ) {
    this.lastSearchValue = value;
    if (!this.disableInnerSearchContactState) {
      this.contactsFiltered = filterContactBySearchValue(value, allContacts);
    }
  }
}
