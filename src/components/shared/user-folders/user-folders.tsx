import {
  Component,
  ComponentInterface,
  Event,
  h,
  EventEmitter,
  Prop,
  State,
} from "@stencil/core";
import {ChatCategoryInterface, ChatCreateFolderOutputInterface} from "../../../index";

@Component({
  tag: "user-folders",
  styleUrl: "user-folders.css",
  shadow: false,
  scoped: true,
})
export class UserFolders implements ComponentInterface {
  /**
   * Массив категорий
   * */
  @Prop() categories: ChatCategoryInterface[];

  /**
   * Показывать/скрывать окно создания папки
   * */
  @State() showInputCreateFolderState: boolean;

  /**
   * переход на профиль пользователя
   * */
  @Event() clickToUserProfile: EventEmitter<void>;

  /**
   * создание папки
   * */
  @Event() createFolder: EventEmitter<ChatCreateFolderOutputInterface>;

  /**
   *
   * */
  public inputElement: HTMLInputElement;

  render() {
    return (
      <div class="folders-wrapper">
        <div class="folders-title">
          <div class="left" onClick={() => this.clickToUserProfileHandler()}>
            <div class="left-back">
              <i class="c-chat c-chat-arrow-left"></i>
            </div>
            <div class="title">Папки</div>
          </div>
          <div class="right">
            {this.showInputCreateFolderState ? (
              <span onClick={() => this.createFolderFromButton()}>Создать</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div class="folders-content">
          <div class="user-folder">
            {/*<div class="user-social-title">Мои папки</div>*/}
            <div class="user-folders-block">
              {this.showInputCreateFolderState ? (
                <div class="creating-folder-block">
                  <i
                    class="c-chat sc-btn-wrapper c-chat-times"
                    onClick={() => this.showInputCreateFolderHandler()}
                  ></i>
                  <form onSubmit={(e) => this.creatingFolderFromInputHandler(e)}
                  >
                    <input
                      type="text"
                      placeholder="Название папки"
                      ref={(el) => (this.inputElement = el)}
                    />
                  </form>
                </div>
              ) : (
                <div
                  class="user-folder-link"
                  onClick={() => this.showInputCreateFolderHandler()}
                >
                  <i class="c-chat c-chat-file-alt hover-link"></i>
                  <span class="user-social-name">Создать новую папку</span>
                </div>
              )}
            </div>
            <div class="advice">
              Вы можете создавать папки чатов и переключаться между ними
            </div>
          </div>
          <div class="user-folder">
            <div class="user-folders-title user-social-title">Мои папки</div>

            <div class="user-folders-blocks">
              {/*<i class="c-chat c-chat-instagram-brands hover-link"></i>*/}
              <ul>
                <Folder categories={this.categories}></Folder>
              </ul>
            </div>
          </div>
          <div class="user-folder">
            <div class="user-social-title">Рекомендованые папки</div>
            <div class="user-folders-block">
              <div class="user-folder-link">
                <i class="c-chat c-chat-file-alt hover-link"></i>
                <span class="user-social-name">Новые</span>
              </div>
              <div class="user-folder-link">
                <i class="c-chat c-chat-file-alt hover-link"></i>
                <span class="user-social-name">Личные</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * показывать инпут для создания папки
   * */
  public showInputCreateFolderHandler() {
    this.showInputCreateFolderState = !this.showInputCreateFolderState;
  }

  /**
   *
   * */
  private creatingFolderHandler() {
    const input = this.inputElement;
    if (input.value !== "") {
      this.createFolder.emit(
        {
          name: input.value,
          chats: []
        }
      )
      input.value = '';
    }
  }

  /**
   * create folder from send button
   * */
  public createFolderFromButton() {
    this.creatingFolderHandler();
  }

  /**
   *
   * */
  public creatingFolderFromInputHandler(e) {
    e.preventDefault();
    this.creatingFolderHandler();
  }

  /**
   * переход на профиль пользователя
   * */
  public clickToUserProfileHandler() {
    this.clickToUserProfile.emit();
  }
}

const Folder = (props) => {
  return props.categories.map((item) => {
    if (item.id !== "all") {
      return (
        <li>
          <div class="list-folders">
            <div class="list-item-wrapper">
              <i class="c-chat c-chat-file-alt hover-link"></i>
              <div>{item.name}</div>
            </div>
            <div class="delete-folder">
              <i class="c-chat c-chat-file-alt hover-link"></i>
            </div>
          </div>
        </li>
      );
    }
  });
};
