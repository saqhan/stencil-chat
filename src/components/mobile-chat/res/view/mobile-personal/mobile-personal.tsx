import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
} from "@stencil/core";

@Component({
  tag: "mobile-personal",
  styleUrl: "mobile-personal.css",
  shadow: false,
})
export class MobilePersonal implements ComponentInterface {
  /**
   * clock on navigate
   * */
  @Event() selectDialog: EventEmitter;

  render() {
    return (
      <div class="personal-wrapper">
        <div class="personal-header">
          <div class="header-nav">
            <span class="custom-link"
                  onClick={()=> this.selectDialog.emit({place:'showDialogs'})}
            >
              <i class="fas fa-arrow-left"></i>
            </span>
            <span class="title">Tim Ostin</span>
            <span class="custom-link">
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
          <div class="user-mess-wrapper">
            <div class="user-mess-wrapp">
              <span class="img"></span>
              <div class="user-mess">
                <span class="message-text">Wazzup, how are you? Mmm?</span>
                <span class="personal-mess-date"> 9:36</span>
                <span class="check">
                  <i class="fa fa-check-double"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="admin-mess-wrapper">
            <div class="admin-mess-wrapp">
              <div class="admin-mess">
                <span class="message-text">Wazzup, how are you? Mmm?</span>
                <span class="personal-mess-date"> 9: 36</span>
                <span class="check">
                  <i class="fa fa-check-double"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="user-mess-wrapper">
            <div class="user-mess-wrapp">
              <span class="img"></span>
              <div class="user-mess">
                <span class="message-text">Wazzup?</span>
                <span class="personal-mess-date"> 12: 00</span>
                <span class="check">
                  <i class="fa fa-check-double"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="admin-mess-wrapper">
            <div class="admin-mess-wrapp">
              <div class="admin-mess">
                <span class="message-text">Wazzup, how are you? Mmm?</span>
                <span class="personal-mess-date"> 9: 36</span>
                <span class="check">
                  <i class="fa fa-check-double"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="admin-mess-wrapper">
            <div class="mess-img-admin">
              <span class="check">
                <i class="fa fa-check-double"></i>
              </span>
            </div>
          </div>
          <div class="user-mess-wrapper">
            <div class="user-mess-wrapp">
              <span class="img"></span>
              <div class="user-mess">
                <span class="message-text">
                  it's a Joke? Really? it's a Joke? Really? it's a Joke? Really?
                </span>
                <span class="personal-mess-date"> 12:00</span>
                <span class="check">
                  <i class="fa fa-check-double"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="user-mess-wrapper">
            <div class="user-mess-wrapp">
              <span class="img"></span>
              <div class="user-mess">
                <span class="message-text">Wazzup, how are you? Mmm?</span>
                <span class="personal-mess-date"> 9:36</span>
                <span class="check">
                  <i class="fa fa-check-double"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="admin-mess-wrapper">
            <div class="admin-mess-wrapp">
              <div class="admin-mess">
                <span class="message-text">Wazzup, how are you? Mmm?</span>
                <span class="personal-mess-date"> 9: 36</span>
                <span class="check">
                  <i class="fa fa-check-double"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="personal-footer">
          <div class="footer-wrapper">
            <div class="file">
              <i class="fas fa-file-alt"></i>
            </div>
            <div class="input-wrapper">
              <input type="text" placeholder="Type something ..." />{" "}
            </div>
            <div class="audio">
              <i class="fas fa-microphone"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
