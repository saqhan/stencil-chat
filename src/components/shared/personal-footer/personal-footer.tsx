import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "personal-footer",
  styleUrl: "personal-footer.css",
  shadow: false,
  scoped:true
})
export class PersonalFooter implements ComponentInterface {
  @Prop() theme: "comp" | "mobile" = "comp";

  /**
   * click on navigate
   * */
  @Event() clickToLink: EventEmitter;

  /**
   * audio animation state
   */
  @State() switchFooter = true;

  public toggleFooter() {
    this.switchFooter = !this.switchFooter;
  }

  public onMouseUp(e) {
    console.log("onMouseUp", e.target);
  }

  render() {
    return (
      <div>
        {this.switchFooter ? (
          <footer-text onShowRecordAudioFooter={() => this.toggleFooter()}></footer-text>
        ) : (
          <footer-audio
            onRecordFinished={(state) => this.recordFinished(state.detail)}
          ></footer-audio>
        )}
      </div>
    );
  }

  public recordFinished(state: boolean) {
    this.toggleFooter();
    console.log("recordFinished", { state });
  }
}
