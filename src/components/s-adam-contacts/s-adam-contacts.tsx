import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-adam-contacts',
  styleUrl: 's-adam-contacts.css',
  shadow: true,
})
export class SAdamContacts implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
