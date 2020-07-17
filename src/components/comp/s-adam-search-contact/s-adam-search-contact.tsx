import {Component, ComponentInterface, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 's-adam-search-contact',
  styleUrl: 's-adam-search-contact.css',
  shadow: false,
  // scoped: true
})
export class SAdamSearchContact implements ComponentInterface {
  /**
   * Поиск по контактам
   */
  @Event() searchDialogs: EventEmitter<string>;

  render() {
    return (
      <div class="search-contact-block">
        <div class="search-contact-wrapper">
          <i class="c-chat c-chat-search"></i>
          <input
            onInput={(e) => this.searchDialogHandler(e)}
            class="search-contact"
            type="text"
            placeholder="Search dialogs"
          />
        </div>
      </div>
    );
  }

  /**
   * Фильтрация диалогов
   */
  public searchDialogHandler(e) {
    this.searchDialogs.emit(e)
  }
}

