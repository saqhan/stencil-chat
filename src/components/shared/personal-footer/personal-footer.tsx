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
   * click on navigate
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
<<<<<<< HEAD
            <form ><input type="text" placeholder="Type something ..." /></form>
=======
            <form onSubmit={(e) => this.sendingNewMess(e)}>
              <input  type="text" placeholder="Type something ..." />
            </form>
>>>>>>> 996cbb18e705ab7cd9e2d8bd797584623091cba5
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
  /**
   * when sending message-from
   * */
  public sendingNewMess(e) {
    e.preventDefault();
    console.log("sendingNewMess", e.currentTarget.querySelector('input').value);
    e.currentTarget.querySelector('input').value = '';
  }
}
