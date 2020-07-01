import { Component, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {
  render() {
<<<<<<< HEAD

    return <mobile-chat></mobile-chat>;
    // return <s-adam-chat></s-adam-chat>
=======
    // return <mobile-chat></mobile-chat>;
    // return <s-adam-chat></s-adam-chat>;
    return <module-chat></module-chat>;
>>>>>>> 996cbb18e705ab7cd9e2d8bd797584623091cba5
  }
}
