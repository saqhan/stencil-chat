import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h, Prop,
} from "@stencil/core";

@Component({
  tag: "personal-header",
  styleUrl: "personal-header.css",
  shadow: false,
})
export class PersonalHeader implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() messageMock: any;
  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter;

  render() {
    return (
      <div class="personal-header">
        <div class="header-nav">
          <span
            class="custom-link"
            onClick={() => this.clickToLink.emit({ place: "showDialogs" })}
          >
            <i class="fas fa-arrow-left"></i>
          </span>
          <span
            class="custom-link user-name-personal"
            onClick={() =>
              this.clickToLink.emit({ place: "user-name-personal" })
            }
          >
            {this.getNameUser()}
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
    );
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
