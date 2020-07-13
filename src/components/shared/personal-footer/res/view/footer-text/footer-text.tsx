import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  State,
} from "@stencil/core";

@Component({
  tag: "footer-text",
  styleUrl: "footer-text.css",
  shadow: false,
  scoped:true
})
export class FooterText implements ComponentInterface {
  @State() showAudioSendButton = true;

  @Event() showSendFileFooter: EventEmitter<void>;
  @Event() showRecordAudioFooter: EventEmitter<void>;

  /**
   *
   * */
  public inputElement: HTMLInputElement;

  /**
   *
   * */
  public mouseEnter(event) {
    console.log("mouseEnter", event);
  }

  render() {
    return (
      <div class="personal-footer">
        <div class="footer-wrapper">
          <div
            class="file"
            onClick={() => this.showSendFileFooter.emit()}
          >
            <i class="fas fa-paperclip"></i>
          </div>
          <div class="input-wrapper">
            <form onSubmit={(e) => this.sendMessageFromForm(e)}>
              <input
                type="text"
                ref={ (el) => this.inputElement = el}
                onInput={(e: any) => this.switchIconInput(e.target.value)}
                placeholder="Type something ..."
              />
            </form>
          </div>
          <div class="audio" id="audio">
            <SendButtonTag showAudio={this.showAudioSendButton} sendMessageFromButton={this.sendMessageFromButton.bind(this)} clickOnAudio={this.showRecordAudioFooter}></SendButtonTag>
          </div>
        </div>
      </div>
    );
  }
  /**
   * when sending message-from
   * */
  private sendingNewMess() {
    const input = this.inputElement;
    if (input.value === "") {
      return false;
    } else {
      // скрипт отправки сообщения
      console.log("send mess:", input.value);
      // скрипт отправки сообщения
      this.switchIconInput(input.value = "")
    }
  }

  /**
   * send message from form
   * */
  public sendMessageFromForm (e)
  {
    e.preventDefault();
    this.sendingNewMess();
  }

  /**
   * send message from send button
   * */
  public sendMessageFromButton ()
  {
    this.sendingNewMess();
  }

  /**
   * Функция для для отправки сообщения
   * */
  public switchIconInput(value: string) {
    this.showAudioSendButton = !value.replace(/[\t\n\r ]+/g, '').length;
  }
}


/**
 *
 * */
const SendButtonTag = (
  props: any
) => {
  return (props?.showAudio)
  ? (
      <i
        class="fas fa-microphone"
        onMouseDown={() => props.clickOnAudio.emit()}
      ></i>
  )
  : (
      <i
        class="fas fa-location-arrow"
        onClick={() => props.sendMessageFromButton()}
      ></i>
  )
}
