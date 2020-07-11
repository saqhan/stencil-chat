import {Component, ComponentInterface, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 's-adam-search-contact',
  styleUrl: 's-adam-search-contact.css',
  shadow: false,
})
export class SAdamSearchContact implements ComponentInterface {
  /**
   * Поиск по контактам
   */
  @Event() searchContact: EventEmitter<any>;

  render() {
    return (
      <div class="search-contact-block">
        <div class="search-contact-wrapper">
          <i class="fas fa-search"></i>
          <input
            onInput={(e) => this.searchContact.emit(e)}
            class="search-contact"
            type="text"
            placeholder="Search contact"
          />
        </div>
      </div>
    );
  }
}
