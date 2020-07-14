import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  State,
} from "@stencil/core";
import { Timer } from "../../../../../../utils/utils";
import {MouseEventUpdated} from "./res/interface/common.interface";

@Component({
  tag: "footer-audio",
  styleUrl: "footer-audio.css",
  shadow: false,
  scoped:true
})
export class FooterAudio implements ComponentInterface {
  @Event() recordFinished: EventEmitter<boolean>;

  @State() outInputTag: HTMLElement;

  public timerElement: HTMLElement;

  componentDidLoad() {
    document.addEventListener("mouseup", this.mouseUpCallback);
    this.startTimer();
  }

  disconnectedCallback() {
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


  /**
   *
   * */
  private startTimer() {
    const timer = new Timer();
    timer.start((time: string) => {
      {
        this.timerElement.innerText = time;
      }
    });
  }

  /**
   *
   * */
  private mouseUpCallback: (event: MouseEventUpdated) => void = (event) => {
    const state = this.outInputTag.contains(event.target);
    this.recordFinished.emit(state);
  };

  /**
   *
   * */
  public mouseOutInput(e) {
    console.log("mouseOutInput", e);
  }
}
