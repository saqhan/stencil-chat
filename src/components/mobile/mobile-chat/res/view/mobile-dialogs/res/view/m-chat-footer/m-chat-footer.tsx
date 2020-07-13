import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "m-chat-footer",
  styleUrl: "m-chat-footer.css",
  shadow: false,
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

  render() {
    return (
      <div class="m-chat-footer">
        <span onClick={() => this.clickToShowDialogsHandler()}>
          <i class="far fa-comment"></i>
        </span>
        <span onClick={() => this.clickToShowContactsHandler()}>
          <i class="fas fa-user-friends"></i>
        </span>
        <span onClick={() => this.clickToShowMenuBarHandler()}>
          <i class="fas fa-bars"></i>
        </span>
      </div>
    );
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
