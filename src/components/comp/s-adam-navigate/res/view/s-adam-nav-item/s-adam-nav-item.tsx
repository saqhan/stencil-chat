import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
} from "@stencil/core";

@Component({
  tag: "s-adam-nav-item",
  styleUrl: "s-adam-nav-item.css",
  shadow: false,
  scoped: true,
})
export class SAdamNavItem implements ComponentInterface {
  /**
   * клик по имени юзера в личной переписке
   */
  @Event() visibleContacts: EventEmitter<void>;

  render() {
    return (
      <div class="nav-item-wrapper">
        <div class="nav-item">
          <i
            onClick={() => this.visibleContactsHandler()}
            class="c-chat c-chat-comment-alt hover-link"
          ></i>
        </div>
        <div class="nav-item">
          <i class="c-chat c-chat-shopping-bag hover-link"></i>
        </div>
        <div class="nav-item">
          <i class="c-chat c-chat-cart-arrow-down hover-link"></i>
        </div>
        <div class="nav-item">
          <i class="c-chat c-chat-calendar-alt hover-link"></i>
        </div>
        <div class="nav -item">
          <i class="c-chat c-chat-cog hover-link"></i>
        </div>
      </div>
    );
  }
  /**
   * Показать личный профиль юзера
   */
  public visibleContactsHandler() {
    this.visibleContacts.emit();
  }
}
