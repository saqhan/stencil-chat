import { Component, ComponentInterface, h } from "@stencil/core";
import dayjs from "dayjs";

@Component({
  tag: "footer-audio",
  styleUrl: "footer-audio.css",
  shadow: false,
})
export class FooterAudio implements ComponentInterface {
  render() {
    return (
      <div class="personal-footer">
        <div class="footer-wrapper">
          <div class="record-dot"></div>
          <div class="timer">
            <span id="selector"></span>
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

  componentDidLoad() {
    const stopWatch = document.getElementById("selector");
    const timer = new Timer();
    console.log("didload");
    timer.start((time: string, startedTime: Date) => {
      {
        (stopWatch.innerText = time), startedTime;
      }
    });
  }
}

class Timer {
  /**
   * started time
   */
  private startedTime: Date;

  /**
   * Current work interval id
   */
  private intervalId;

  /**
   * Passed callback func
   */
  private callbackFunction: (time: string, startedTime: Date) => void;

  /**
   * Start timer
   */
  public start(cb: (time: string, startedTime: Date) => void) {
    this.startedTime = new Date();
    this.callbackFunction = cb;
    this.intervalId = setInterval(() => {
      const timeInMinutes = dayjs(
        Date.now() - this.startedTime.getTime()
      ).format("mm:ss");
      cb(timeInMinutes, this.startedTime);
    }, 0);
  }

  /**
   * Reset timer
   */
  public reset() {
    this.start(this.callbackFunction);
  }

  /**
   * Stop timer
   */
  public stop() {
    clearInterval(this.intervalId);
  }
}
