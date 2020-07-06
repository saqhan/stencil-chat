import {Component, ComponentInterface, EventEmitter, Event, h, State} from '@stencil/core';

@Component({
  tag: 'footer-text',
  styleUrl: 'footer-text.css',
  shadow: false,
})
export class FooterText implements ComponentInterface {
  @Event() clickToLink:EventEmitter;
  @State() iconFooterInput = (<i class="fas fa-microphone"></i>);
  render() {
    return (
      <div class="personal-footer">
        <div class="footer-wrapper">
          <div
            class="file"
            onClick={() => this.clickToLink.emit({ place: "add-file-mess" })}
          >
            <i class="fas fa-paperclip"></i>
          </div>
          <div class="input-wrapper">
            <form onSubmit={(e) => this.sendingNewMess(e)}>
              <input
                type="text"
                onInput={(e) => this.swithIconInput(e)}
                placeholder="Type something ..."
              />
            </form>
          </div>
          <div
            class="audio"
            id="audio"
            onClick={() => this.clickToLink.emit({ place: "add-audio-mess" })}
          >
            {this.iconFooterInput}
          </div>
        </div>
      </div>
    );
  }
  /**
   * when sending message-from
   * */
  public sendingNewMess(e) {
    e.preventDefault();

    if (e.currentTarget.querySelector("input").value === "") {
      return false;
    } else {
      console.log("send mess:", e.currentTarget.querySelector("input").value);
      e.currentTarget.querySelector("input").value = "";
      this.iconFooterInput = <i class="fas fa-microphone"></i>;
    }
  }

  /**
   * Функция для для отправки сообщения
   * */
  public swithIconInput(e) {
    e.target.value === ""
      ? (this.iconFooterInput = (
        <i
          class="fas fa-microphone"
          onClick={() =>
            this.clickToLink.emit({ place: "clickSendAudio" })
          }
        ></i>
      ))
      : (this.iconFooterInput = (
        <i
          class="fas fa-location-arrow"
          onClick={() =>
            this.clickToLink.emit({ place: "clickSendMess" })
          }
        ></i>
      ));
  }

}
