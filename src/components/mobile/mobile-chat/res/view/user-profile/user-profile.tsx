import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
} from "@stencil/core";

@Component({
  tag: "user-profile",
  styleUrl: "user-profile.css",
  shadow: false,
})
export class UserProfile implements ComponentInterface {
  @Event() clickToLink: EventEmitter;

  render() {
    return <s-adam-profile theme={"mobile"}></s-adam-profile>;
  }
}
