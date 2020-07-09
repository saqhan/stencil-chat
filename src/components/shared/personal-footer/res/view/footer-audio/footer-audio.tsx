import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import { Timer } from "../../../../../../utils/utils";

@Component({
  tag: "footer-audio",
  styleUrl: "footer-audio.css",
  shadow: false,
})
export class FooterAudio implements ComponentInterface {
  // private inputTag: any;
  @Event() clickOnAudio: EventEmitter;
  @Event() recordFinished: EventEmitter<boolean>;
  @Prop() switchFooter: any;
  @State() outInputTag: HTMLElement;

  public timerElement: HTMLElement;

  private startTimer() {
    const timer = new Timer();
    timer.start((time: string) => {
      {
        this.timerElement.innerText = time;
      }
    });
  }

  private mouseUpCallback: (event: MouseEvent) => void = (event) => {
    // @ts-ignore
    const state = this.outInputTag.contains(event.target);
    console.log("mouseup", state);
    this.recordFinished.emit(state);
  };

  public mouseOutInput(e) {
    console.log("mouseOutInput", e);
  }

  componentDidLoad() {
    console.log("created");
    //onMouseUp={(e) => this.onMouseUp.emit(e)}
    document.addEventListener("mouseup", this.mouseUpCallback);
    this.startTimer();
  }

  disconnectedCallback() {
    console.log("removed");
    document.removeEventListener("mouseup", this.mouseUpCallback);
  }

  render() {
    return (
      <div class="personal-footer">
        <div
          class="footer-wrapper"
          onMouseLeave={(e) => this.mouseOutInput(e)}
          ref={(el) => (this.outInputTag = el)}
        >
          <div class="record-audio">
            <div class="record-dot"></div>
            <div class="timer" ref={(el) => (this.timerElement = el)}></div>
          </div>
          <div class="input-wrapper">
            <form>
              <input
                class="input-audio"
                type="text"
                placeholder="Release outside this field to cancel"
                readonly
              />
            </form>
          </div>
          <div class="audio" id="audio">
            <i class="fas fa-microphone"></i>
          </div>
          <div class="recording-btn"></div>
        </div>
      </div>
    );
  }
}
