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


  render() {
    return (
      <div class={this.getClassForHost()}>
        {this.switchFooter
          ?
          <footer-text onClickOnAudio={() => this.toggleFooter()}></footer-text>
          :
          <footer-audio></footer-audio>
        }
      </div>
    );
  }

  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }
}
