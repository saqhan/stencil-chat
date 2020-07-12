import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
} from "@stencil/core";

@Component({
  tag: "contacts-list-header",
  styleUrl: "contacts-list-header.css",
  shadow: false,
})
export class ContactsListHeader implements ComponentInterface {

  /**
   * clock on clickToLink
   * */
  @Event() clickToShowDialogs: EventEmitter;

  /**
   * search contact
   * */
  @Event() searchContact: EventEmitter;

  render() {
    return (
      <div class="contacts-list-header">
        <div class="contacts-list-description">
          <div
            class="contacts-list-arraw-back custom-link "
            onClick={() => this.clickToShowDialogsHandler()}
          >
            <i class="fas fa-arrow-left"></i>
          </div>
          <div class="contacts-list-title">Contacts</div>
        </div>
        <div class="contacts-list-input">
          {/*<i class="fas fa-search"></i>*/}
          <input
            type="text"
            placeholder="Search.."
            onInput={(e) => this.searchContact.emit(e)}
          />
        </div>
      </div>
    );
  }
  /**
   * show Dialogs
   * */
  public clickToShowDialogsHandler(){
    this.clickToShowDialogs.emit();
  }

}
