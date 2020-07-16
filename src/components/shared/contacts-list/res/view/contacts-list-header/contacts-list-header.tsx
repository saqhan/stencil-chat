import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "contacts-list-header",
  styleUrl: "contacts-list-header.css",
  shadow: false,
  scoped: true,
})
export class ContactsListHeader implements ComponentInterface {
  /**
   * Данные выбора темы для Мобильная/Модульной версии
   * */
  @Prop() theme: "mobile" | "module" | "comp" = "mobile";

  /**
   * clock on clickToLink
   * */
  @Event() clickToShowDialogs: EventEmitter;

  /**
   * search contact
   * */
  @Event() searchContact: EventEmitter<string>;

  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="contacts-list-header">
          <div class="contacts-list-description">
            <div
              class="contacts-list-arraw-back custom-link "
              onClick={() => this.clickToShowDialogsHandler()}
            >
              <i class="c-chat c-chat-arrow-left"></i>
            </div>
            <div class="contacts-list-title">Contacts</div>
          </div>
          <div class="contacts-list-input">
            {/*<i class="c-chat c-chat-search"></i>*/}
            <input
              type="text"
              placeholder="Search.."
              onInput={(e: any) => this.searchContactHandler(e.target.value)}
            />
          </div>
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

  /**
   * show Dialogs
   * */
  public clickToShowDialogsHandler() {
    this.clickToShowDialogs.emit();
  }

  /**
   *
   * */
  public searchContactHandler(value: string) {
    this.searchContact.emit(value);
  }
}
