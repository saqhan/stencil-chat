import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-adam-copying',
  styleUrl: 's-adam-copying.css',
  shadow: false,
})
export class SAdamCopying implements ComponentInterface {

  render() {
    return (
      <div class="copying-file-wrap">
        <div class="copying-file">
          <h2 class="drop-file">Drop filles here</h2>
          <span>to send them as documents</span>
        </div>
      </div>
    );
  }

}
