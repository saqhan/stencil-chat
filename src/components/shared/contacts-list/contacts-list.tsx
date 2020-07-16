import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop, State, Watch,
} from "@stencil/core";
import {ChatContactInterface, filterContactBySearchValue} from "../../../index";

@Component({
  tag: "contacts-list",
  styleUrl: "contacts-list.css",
  shadow: false,
  scoped: true,
})
export class ContactsList implements ComponentInterface {

  /**
   * */
  @Prop() contacts: ChatContactInterface[];

  /**
   * Тема для модульного/мобильного чата
   * */
  @Prop() theme: "mobile" | "module" = "mobile";

  /**
   * отключение поиска контактов
   * */
  @Prop() disableInnerSearchContactState: boolean;

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
    this.filterContacts(
      this.lastSearchValue,
      newValue
    )
  }

  componentWillRender(): Promise<void> | void {
    this.filterContacts(
      this.lastSearchValue
    )
  }


  render() {
    return (

        <div class="contacts-list-wrapper">
          <contacts-list-header onSearchContact={(e) => this.filterContacts(e.detail)}></contacts-list-header>
          <contacts-list-body theme={this.theme} contacts={this.contactsFiltered}></contacts-list-body>
          <m-chat-footer theme={this.theme}></m-chat-footer>
        </div>

    );
  }

  /**
   *
   * */
  public filterContacts (
    value: string,
    allContacts: ChatContactInterface[] = this.contacts
  )
  {
    this.lastSearchValue = value;
    if (!this.disableInnerSearchContactState) {
      this.contactsFiltered = filterContactBySearchValue(
        value,
        allContacts
      )
    }
  }

}
