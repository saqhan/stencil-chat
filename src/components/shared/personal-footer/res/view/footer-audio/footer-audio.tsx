import {
  Component,
  ComponentInterface,
  h,
} from "@stencil/core";

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
          <div class="input-wrapper">
            <form>
              <input
                type="text"
                placeholder="Release outside this field to cancel"
                readonly
              />
            </form>
          </div>
          <i class="fas fa-microphone"></i>
          <div class="recording-btn"></div>
        </div>
      </div>
    );
  }
}
