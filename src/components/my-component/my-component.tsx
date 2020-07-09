import { Component, h } from "@stencil/core";
@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {
  render() {

    return <mobile-chat></mobile-chat>;
    // return <s-adam-chat></s-adam-chat>;
    // return <module-chat></module-chat>;


  }
}
