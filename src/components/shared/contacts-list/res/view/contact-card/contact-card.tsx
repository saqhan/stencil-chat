import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { ChatContactInterface } from "../../../../../../index";

@Component({
  tag: "contact-card",
  styleUrl: "contact-card.css",
  shadow: false,
  scoped: true
})
export class ContactCard implements ComponentInterface {
  /**
   * Принимаем контакт
   * */
  @Prop() contact: ChatContactInterface;
  /**
   * clock on navigate
   * */
  @Event() clickToContact: EventEmitter<ChatContactInterface>;
  render() {
    return (
      <div class="contacts-list-card">
        <div class="m-contact-card" onClick={() => this.clickToDialogHandler()}>
          <div class="img-user">
            <div
              class="img"
              style={{ backgroundImage: `url(${this.contact.img})` }}
            ></div>
          </div>
          <div class="info-card">
            <div class="unfo-user">
              <div class="name-user">{this.contact.name}</div>
              <div class="message-user">
                {" "}
                last seen {this.createSendTime(this.contact.time.created)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * click to contact
   * */
  public clickToDialogHandler(): void {
    this.clickToContact.emit(this.contact);
  }

  /*
   * last visit time
   * **/
  public createSendTime(array): string {
    const timeNow = array;

    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();

    // add zero for minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // выводим время в минутах/часах
    return `${hours} : ${minutes}`;
  }
}
