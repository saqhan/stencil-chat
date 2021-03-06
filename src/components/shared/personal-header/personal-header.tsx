import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import {
  ChatClickToLinkEmit,
  ChatDialogInterface,
  ChatMessage, ChatUserActionStatusState, ChatUserPresenceState,
} from "../../../index";


@Component({
  tag: "personal-header",
  styleUrl: "personal-header.css",
  shadow: false,
  scoped: true,
})
export class PersonalHeader implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() message: ChatMessage[];

  /**
   *
   * */
  @Prop() openedDialog: ChatDialogInterface;

  /**
   * array data dialogs
   * */
  @Prop() dialogs: ChatDialogInterface[];

  /**
   * */
  @Prop() chatActionState: ChatUserActionStatusState;

  /**
   * */
  @Prop() chatPresenceState: ChatUserPresenceState;


  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter<void>;
  @Event() clickToUserProfile: EventEmitter<void>;
  @Event() searchContact: EventEmitter;

  /**
   * search for private messages
   * */
  @Event() searchPersonalMessages: EventEmitter<string>;
  /**
   * click to show user profile
   * */
  @Event() clickToShowDialogs: EventEmitter<string>;
  /**
   * отмена поиска
   * */
  @Event() cancelSearchPersonal: EventEmitter<void>;
  /**
   * Клик по диалогу
   * */
  @Event() clickToDialog: EventEmitter<ChatClickToLinkEmit>;
  /**
   * Показывать/скрывать меню
   * */
  @State() isShowDropDown = false;
  /**
   * Переключение поиска и окна с диалогами в шапке
   * */
  @State() isPersonalMess = true;

  render() {
    return (
      <div>
        <div class="personal-header">
          <div class="header-nav">
            <span
              class="custom-link"
              onClick={() => this.clickToShowDialogsHandler()}
            >
              <i class="c-chat c-chat-arrow-left"></i>
            </span>
            <span class=" user-name-personal-wrapper">
              <span
                class="custom-link user-name-personal"
                onClick={() => this.clickToUserProfileHandler()}
              >
                {this.getNameUser()}
                {
                  this.chatPresenceState === ChatUserPresenceState.online
                  ? (
                    <span class="user-online-status"></span>
                  )
                  : (
                    <span class="user-ofline-status"></span>
                  )
                }
              </span>

            </span>
            <span
              class="custom-link"
              onClick={() => this.showInputSearchPersonalMess()}
            >
              {this.isPersonalMess ? (
                <i class="c-chat c-chat-search"></i>
              ) : (
                <i class="c-chat c-chat-times"></i>
              )}
            </span>
          </div>
          <div class="users-nav">
            <div class="user-active">
              {this.isPersonalMess ? (
                <user-status
                  theme={"module"}
                  chatActionState={this.chatActionState}
                  chatPresenceState={this.chatPresenceState}
                ></user-status>
              ) : (
                <div class="search-wrapper">
                  <div class="searchPersonalmess">
                    <input
                      type="text"
                      placeholder="search"
                      onInput={(e: KeyboardEvent) =>
                        this.searchPersonalMessagesHandler(e.target["value"])
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  /**
   * get name user
   * */
  public getNameUser(): string {
    return this.openedDialog?.name;
  }

  public showDrop = () => (this.isShowDropDown = !this.isShowDropDown);

  public showInputSearchPersonalMess(): void {
    this.isPersonalMess = !this.isPersonalMess;
    this.cancelSearchPersonal.emit();
  }

  /**
   * show Dialogs
   * */
  public clickToShowDialogsHandler(): void {
    this.clickToShowDialogs.emit();
  }

  /**
   * click to show user profile
   * */
  public clickToUserProfileHandler(): void {
    this.clickToUserProfile.emit();
  }

  /**
   * search for private messages
   * */
  public searchPersonalMessagesHandler(value: string): void {
    this.searchPersonalMessages.emit(value);
  }
  /**
   * TODO
   * Метод для получения изображений предыдущих и следующих диалогов
   * */
  public getIconUsers(array) {
    array.sender.icon;
  }

  /**
   * Управление по клику на диалог
   * */
  public clickToDialogHandler(item) {
    this.clickToDialog.emit({ data: item });
    console.log(item);
  }

  /**
   * Метод получения названий категорий
   * */
  public getIconDialogs(array) {
    return array
      .map((item) => (
        <div class="img-user-other">
          <div
            class="img online"
            onClick={() => this.clickToDialogHandler(item)}
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
        </div>
      ))
      .slice(5);
  }
}
