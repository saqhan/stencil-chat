import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
} from "@stencil/core";

@Component({
  tag: "personal-footer",
  styleUrl: "personal-footer.css",
  shadow: false,
})
export class PersonalFooter implements ComponentInterface {
  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter;

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
            <form action="">
              <input type="text" placeholder="Type something ..." />
            </form>
          </div>
          <div
            class="audio"
            onClick={() => this.clickToLink.emit({ place: "add-audio-mess" })}
          >
            <i class="fas fa-microphone"></i>
          </div>
        </div>
      </div>
    );
  }
}
