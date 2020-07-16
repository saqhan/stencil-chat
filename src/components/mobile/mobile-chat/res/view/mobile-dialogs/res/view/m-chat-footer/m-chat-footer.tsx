import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter, Prop,
} from "@stencil/core";

@Component({
  tag: "m-chat-footer",
  styleUrl: "m-chat-footer.css",
  shadow: false,
  scoped: true
})
export class MChatFooter implements ComponentInterface {
  /**
   * click to click To Show Dialogs
   * */
  @Event() clickToShowDialogs: EventEmitter<void>;
  /**
   * click to click To Show Contacts
   * */
  @Event() clickToShowContacts: EventEmitter<void>;
  /**
   * click to click To Show Contacts
   * */
  @Event() clickToShowMenuBar: EventEmitter<void>;

  /**
   * Данные выбора темы для Мобильная/Модульной версии
   * */
  @Prop() theme: "mobile" | "module" = "mobile";

  render() {
    return (
      <div class={this.getClassForHost()}>
      <div class="m-chat-footer">
        <span class="showDialogs" onClick={() => this.clickToShowDialogsHandler()}>
          <i class="far fa-comment"></i>
        </span>
        <span class="showContacts" onClick={() => this.clickToShowContactsHandler()}>
          <i class="fas fa-user-friends"></i>
        </span>
        <span class="showMenuBar" onClick={() => this.clickToShowMenuBarHandler()}>
          <i class="fas fa-bars"></i>
        </span>
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
   * click to show dialogs
   * */
  public clickToShowDialogsHandler() {
    this.clickToShowDialogs.emit();
  }
  /**
   * click to show Contacts
   * */
  public clickToShowContactsHandler() {
    this.clickToShowContacts.emit();
  }
  /**
   * click to show Contacts
   * */
  public clickToShowMenuBarHandler() {
    this.clickToShowMenuBar.emit();
  }
}
