import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
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
  @Event() searchContact: EventEmitter;

  @State() isShowDropDown = false;
  @State() isPersonalMess = true;

  render() {
    return (
      <div>
        {this.isPersonalMess ? (
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
              <span class="custom-link">
                <div class="dots-menu" onClick={() => this.showDrop()}>
                  <i class="fas fa-ellipsis-h"></i>
                </div>
                {this.isShowDropDown ? (
                  <div class="drop-down">
                    <ul>
                      <li>
                        <i
                          class="fas fa-search"
                          onClick={() => this.showInputSearchPersonalMess()}
                        ></i>
                      </li>
                      <li>
                        <i class="fas fa-trash"></i>
                      </li>
                      <li>
                        <i class="fas fa-share-alt"></i>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
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
        ) : (
          <div class="search-wrapper">
             <div class="user-name-personal" >{this.getNameUser()}</div>
            <div class="searchPersonalmess">
              <input type="text" placeholder="search" onInput={(e) => this.getValueInput(e)} /> <span onClick={()=> this.showInputSearchPersonalMess() } class="cancel-search">cancel</span>
            </div>
          </div>
        )}
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

  /**
   * show dropВщцт
   * */
  public getValueInput = (e) => {
    console.log('getValueInput', {e});
    return this.searchContact.emit({e});
  }

  public showDrop = () => (this.isShowDropDown = !this.isShowDropDown);
  public showInputSearchPersonalMess() {
    this.isPersonalMess = !this.isPersonalMess;
    this.isShowDropDown = false;
  }
}
