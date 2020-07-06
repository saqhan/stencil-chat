import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {
  Message
} from "../../../../../shared/interface/common.interface";
@Component({
  tag: "mobile-personal",
  styleUrl: "mobile-personal.css",
  shadow: false,
})
export class MobilePersonal implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() messageMock: Message[];

  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter;
  @Event() searchContact: EventEmitter;

  render() {
    return (
      <div class="personal-wrapper">
        <personal-header messageMock={this.messageMock} ></personal-header>
        <personal-message messageMock={this.messageMock} ></personal-message>
        <footer-common theme='mobile' ></footer-common>
      </div>
    );
  }

  /**
   * Создаем сообщение которое отправлено/прислано и сообщение по центру
   * */
  // public createMessagesElements(array) {
  //   return array.map((item) => {
  //     switch (item.direction) {
  //       //Если это сообщение для меня
  //       case MessageDirectionEnum.toMe:
  //         return <mess-to-me message={item}></mess-to-me>;
  //       //Если это сообщение от меня
  //       case MessageDirectionEnum.fromMe:
  //         return <mess-from-me message={item}></mess-from-me>;
  //       // Сообщение по центру
  //       case MessageDirectionEnum.center:
  //         return <div>Today</div>;
  //     }
  //   });
  // }

}
