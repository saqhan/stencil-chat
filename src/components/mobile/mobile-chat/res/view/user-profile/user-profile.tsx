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
  scoped: true
})
export class UserProfile implements ComponentInterface {
  @Event() clickToShowDialogs: EventEmitter;


  render() {
    return <s-adam-profile theme={'mobile'}></s-adam-profile>;
  }
}
