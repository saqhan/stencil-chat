import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State,} from "@stencil/core";
import {ChatDialogInterface, ChatMessage, ChatUserActionStatusState, ChatUserPresenceState} from "../../../index";

@Component({
  tag: "s-adam-personal-header",
  styleUrl: "s-adam-personal-header.css",
  shadow: false,
  scoped: true,
})
export class SAdamPersonalHeader implements ComponentInterface {
  /**
   * Личный диалог
   */
  @Prop() message: ChatMessage[];

  /**
   *
   * */
  @Prop() openedDialog: ChatDialogInterface;

  /**
   * */
  @Prop() chatPresenceState: ChatUserPresenceState;

  /**
   * */
  @Prop() chatActionState: ChatUserActionStatusState;

  /**
   * Стейт для переключения окна поиска сообщений
   */
  @State() searchVisible = false;

  /**
   * клик по имени юзера в личной переписке
   */
  @Event() visibleUserProfile: EventEmitter<void>;

  /**
   * Клик по иконке поиска
   */
  @Event() searchPersonalMessage: EventEmitter<string>;

  /**
   * Сброс фильтра сообщений
   */
  @Event() resetMessagesFilter: EventEmitter<void>;

  render() {
    return <div>{this.toggleHeader()}</div>;
  }

  /**
   * Переключатель стейта
   */
  public toggleSearchVisible() {
    this.searchVisible = !this.searchVisible;
    this.resetMessagesFilter.emit();
  }

  /**
   * Переключение шапки в личной переписке
   */
  public toggleHeader() {
    if (this.searchVisible === false) {
      return (
        <div class="header">
          <div
            class="search-message"
            onClick={() => this.toggleSearchVisible()}
          >
            <i class="c-chat c-chat-search hover-link"></i>
          </div>
          <div class="user">
            <div class="user-name-wrapper">
              <div class="user-name">{this.getNameUser()}</div>
              {this.chatPresenceState === ChatUserPresenceState.online
                ? (
                <div class="online-marker"></div>
              ) : (
                <div class="offline-marker"></div>
              )}
            </div>
            <user-status
              chatActionState={this.chatActionState}
              chatPresenceState={this.chatPresenceState}
            ></user-status>
          </div>
          <div
            class="settings"
            onClick={() => this.visibleUserProfileHandler()}
          >
            <i class="c-chat c-chat-cog hover-link"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div class="header-search-block">
          <div class="search-message-wrapper">
            <i
              class="c-chat c-chat-arrow-left hover-link"
              onClick={() => this.toggleSearchVisible()}
            ></i>
            <input
              onInput={(e) => this.searchPersonalMessageHandler(e)}
              type="text"
              placeholder="Search messages"
            />
          </div>
        </div>
      );
    }
  }

  /**
   * Вывод имени юзера в шапке личной переписки
   * */
  public getNameUser() {
    return this.openedDialog?.name;
    // let name = "";
    //
    // this.message.forEach((item) => {
    //   if (name.indexOf(item.sender.name) === -1) {
    //     name = item.sender.name;
    //   }
    // });
    //
    // return name;
  }

  /**
   * Показать личный профиль юзера
   */
  public visibleUserProfileHandler() {
    this.visibleUserProfile.emit();
    console.log(this.chatPresenceState)
  }

  /**
   * Поиск сообщений в личной переписке
   * @param e
   */
  public searchPersonalMessageHandler(e) {
    this.searchPersonalMessage.emit(e);
  }
}
