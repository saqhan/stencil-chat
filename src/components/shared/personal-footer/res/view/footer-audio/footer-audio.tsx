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
import { MouseEventUpdated } from "./res/interface/common.interface";

@Component({
  tag: "footer-audio",
  styleUrl: "footer-audio.css",
  shadow: false,
  scoped: true,
})
export class FooterAudio implements ComponentInterface {
  /**
   * Пропс с классом CSS
   */
  @Prop() theme: "comp" | "mobile" | "module" = "comp";

  /**
   * Эвент окончания записи аудио
   */
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
      <div class={this.getClassForHost()}>
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
      </div>
    );
  }

  /**
   * смена класса
   */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }

  /**
   * Старт таймера
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
   * Курсор за пределами инпута остановка таймера
   * */
  private mouseUpCallback: (event: MouseEventUpdated) => void = (event) => {
    const state = this.outInputTag.contains(event.target);
    this.recordFinished.emit(state);
  };

  /**
   * Событие при MouseLeave
   * */
  public mouseOutInput(e) {
    console.log("mouseOutInput", e);
  }
}
