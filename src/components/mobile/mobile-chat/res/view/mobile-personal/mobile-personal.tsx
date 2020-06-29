import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {Message, MessageDirectionEnum} from "../../../../../shared/interface/common.interface";
;

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

  render() {
    return (
      <div class="personal-wrapper">
        <div class="personal-header">
          <div class="header-nav">
            <span
              class="custom-link"
              onClick={() => this.clickToLink.emit({ place: "showDialogs" })}
            >
              <i class="fas fa-arrow-left"></i>
            </span>
            <span
              class="user-name-personal"
              onClick={() =>
                this.clickToLink.emit({ place: "user-name-personal" })
              }
            >
              {this.getNameUser()}

              {/*{this.messageMock*/}
              {/*  .map((item) =>*/}
              {/*    item.direction === MessageDirectionEnum.toMe*/}
              {/*      ? item.sender.name*/}
              {/*      : "no name"*/}
              {/*  )*/}
              {/*  .slice(0, 1)}*/}
            </span>
            <span
              class="custom-link"
              onClick={() => this.clickToLink.emit({ place: "showDetails" })}
            >
              <i class="fas fa-ellipsis-h"></i>
            </span>
          </div>
          <div class="users-nav">
            <div class="img-user-other">
              <div class="img online"></div>
            </div>
            <div class="img-user-other">
              <div class="img online"></div>
            </div>
            <div class="img-user-current">
              <div class="img online"></div>
            </div>
            <div class="img-user-other">
              <div class="img online"></div>
            </div>
            <div class="img-user-other">
              <div class="img online"></div>
            </div>
          </div>
        </div>
        <div class="personal-message">
          {this.createMessagesElements(this.messageMock)}
        </div>
        <personal-footer></personal-footer>
      </div>
    );
  }

  /**
   * Создаем сообщение которое отправлено/прислано и сообщение по центру
   * */
  public createMessagesElements(array) {
    return array.map((item) => {
      switch (item.direction) {
        //Если это сообщение для меня
        case MessageDirectionEnum.toMe:
          return <mess-to-me message={item}></mess-to-me>;
        //Если это сообщение от меня
        case MessageDirectionEnum.fromMe:
          return <mess-from-me message={item}></mess-from-me>;
        // Сообщение по центру
        case MessageDirectionEnum.center:
          return <div>Today</div>;
      }
    });
  }
  /**
   * get name user
   * */
  public getNameUser() {
    let name = "";

    this.messageMock.forEach((item) => {
      if (name.indexOf(item.sender.name) === -1) {
        name = item.sender.name;
      }
    });

    return name;
  }
}
