import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {ChatMessage} from "../../../../../../public.interface";
// import {
//   ChatMessage
// } from "../../../../../..";
@Component({
  tag: "mobile-personal",
  styleUrl: "mobile-personal.css",
  shadow: false,
})
export class MobilePersonal implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() messageMock: ChatMessage[];

  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter<string>;
  /**
   * Поиск среди контактов
   * */
  @Event() searchContact: EventEmitter<string>;

  render() {
    return (
      <div class="personal-wrapper">
        <personal-header messageMock={this.messageMock} ></personal-header>
        <personal-message theme={'mobile'} messageMock={this.messageMock} ></personal-message>
        <personal-footer theme='mobile' ></personal-footer>
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
