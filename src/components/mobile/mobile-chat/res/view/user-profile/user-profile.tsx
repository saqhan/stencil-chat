import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h, Prop,
} from "@stencil/core";

@Component({
  tag: "user-profile",
  styleUrl: "user-profile.css",
  shadow: false,
})
export class UserProfile implements ComponentInterface {
  @Event() clickToLink: EventEmitter;
  @Prop()  theme:any;

  render() {
    return <s-adam-profile theme={this.theme}></s-adam-profile>;
  }
}
