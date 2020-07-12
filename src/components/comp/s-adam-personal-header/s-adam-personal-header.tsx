import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import {ChatMessage} from "../../../index";

@Component({
  tag: "s-adam-personal-header",
  styleUrl: "s-adam-personal-header.css",
  shadow: false,
})
export class SAdamPersonalHeader implements ComponentInterface {
  /**
   * клик по имени юзера в личной переписке
   */
  @Event() clickOnUsername: EventEmitter<any>;

  /**
   * Клик по иконке поиска
   */
  @Event() clickOnSearchMessage: EventEmitter<any>;

  /**
   * Личный диалог
   */
  @Prop() message: ChatMessage[] = [];

  /**
   * Стейт для переключения окна поиска сообщений
   */
  @State() searchWisible = false;

  /**
   * Переключатель стейта
   */
  public toggleSearchWisible() {
    this.searchWisible = !this.searchWisible;
  }

  render() {
    return <div>{this.toggleHeader()}</div>;
  }

  /**
   * header or search block
   */
  public toggleHeader() {
    if (this.searchWisible === false) {
      return (
        <div class="header">
          <div
            class="search-message"
            onClick={() => this.toggleSearchWisible()}
          >
            <i class="fas fa-search hover-link"></i>
          </div>
          <div class="user">
            <div class="user-name">{this.getNameUser()}</div>
            <div class="online-marker"></div>
          </div>
          <div
            class="settings"
            onClick={(item) =>
              this.clickOnUsername.emit({ place: "userName", item })
            }
          >
            <i class="fas fa-cog hover-link"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div class="header-search-block">
          <div class="search-message-wrapper">
            <i
              class="fas fa-arrow-left hover-link"
              onClick={() => this.toggleSearchWisible()}
            ></i>
            <input
              onInput={(e) => this.clickOnSearchMessage.emit(e)}
              type="text"
              placeholder="Search messages"
            />
          </div>
        </div>
      );
    }
  }

  /**
   * get name user
   * */
  public getNameUser() {
    let name = "";

    this.message.forEach((item) => {
      if (name.indexOf(item.sender.name) === -1) {
        name = item.sender.name;
      }
    });

    return name;
  }
}
