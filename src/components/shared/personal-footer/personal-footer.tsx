import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h, Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "personal-footer",
  styleUrl: "personal-footer.css",
  shadow: false,
})
export class PersonalFooter implements ComponentInterface {

  @Prop() theme: 'comp' | 'mobile' = 'comp';

  /**
   * click on navigate
   * */
  @Event() clickToLink: EventEmitter;

  @State() iconFooterInput = (<i class="fas fa-microphone"></i>);

  /**
   * audio animation state
   */
  @State() audioAnimation = false;

  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="personal-footer">
          <div class="footer-wrapper">
            <div
              class="file"
              onClick={() => this.clickToLink.emit({ place: "add-file-mess" })}
            >
              <i class="fas fa-paperclip"></i>
            </div>
            <div class="input-wrapper" >
              <form onSubmit={(e) => this.sendingNewMess(e)}>
                <input
                  type="text"
                  onInput={(e) => this.swithIconInput(e)}
                  placeholder="Type something ..."
                />
              </form>
            </div>
            <div
              class="audio" id="audio"
              onClick={() => this.clickToLink.emit({ place: "add-audio-mess" })}
            >
              {this.iconFooterInput}
            </div>
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

    if (e.currentTarget.querySelector("input").value === '') {
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
    e.target.value === ''
      ? (this.iconFooterInput = <i class="fas fa-microphone"></i>)
      : (this.iconFooterInput = <i class="fas fa-location-arrow"></i>);
  }
  public getClassForHost ()
  {
    return {
      [this.theme]: true
    }
  }
}
