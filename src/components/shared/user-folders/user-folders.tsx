import {
  Component,
  ComponentInterface,
  Event,
  h,
  EventEmitter,
  Prop,
  State,
} from "@stencil/core";
import {
  ChatCreateFolderOutputInterface,
  ChatDialogInterface,
} from "../../../index";

@Component({
  tag: "user-folders",
  styleUrl: "user-folders.css",
  shadow: false,
  scoped: true,
})
export class UserFolders implements ComponentInterface {
  /**
   * Массив dialogs
   * */
  @Prop() dialogs: ChatDialogInterface[];

  /**
   * Задаем стиль для мобильной/пк версии
   * */
  @Prop() theme: "comp" | "mobile" | "module" = "mobile";

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
      <div class={this.getClassForHost()}>
        <div class="folders-wrapper">
          <div class="folders-title">
            <div class="left" onClick={() => this.clickToUserProfileHandler()}>
              <div class="left-back">
                <i class="c-chat c-chat-arrow-left"></i>
              </div>
              <div class="title">Папки</div>
            </div>
            <div class="right">
              <span onClick={() => this.createFolderFromButton()}>Создать</span>
            </div>
          </div>
          {/*<div class="advice">*/}
          {/*  Вы можете создавать папки чатов и переключаться между ними*/}
          {/*</div>*/}
          <div class="main-icon">
            <img src="http://cdn.ramman.net/connect/assets/app/chat/folder.svg" alt=""/>
            {/*<i class="c-chat sc-btn-wrapper c-chat-folder"></i>*/}
          </div>
          <div class="folders-content">
            <div class="user-folder">
              {/*<div class="user-social-title">Мои папки</div>*/}
              <div class="user-folders-block">
                {/*{this.showInputCreateFolderState ? (*/}
                <div class="creating-folder-block">
                  <form onSubmit={(e) => this.creatingFolderFromInputHandler(e)}>
                    <input
                      type="text"
                      placeholder="Название папки"
                      ref={(el) => (this.inputElement = el)}
                    />
                  </form>
                  <div class="icon-new-folder">
                    <i
                      class="c-chat sc-btn-wrapper c-chat-folder"
                      onClick={() => this.showInputCreateFolderHandler()}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="user-folder">
              <div class="user-folders-title user-social-title">
                Выберите чаты
              </div>

              <div class="user-folders-blocks">
                {/*<i class="c-chat c-chat-instagram-brands hover-link"></i>*/}
                <ul>
                  <Dialogs dialog={this.dialogs}></Dialogs>
                </ul>
              </div>
            </div>
            {/*<div class="user-folder">*/}
            {/*  <div class="user-social-title">Рекомендованые папки</div>*/}
            {/*  <div class="user-folders-block">*/}
            {/*    <div class="user-folder-link">*/}
            {/*      <i class="c-chat c-chat-file-alt hover-link"></i>*/}
            {/*      <span class="user-social-name">Новые</span>*/}
            {/*    </div>*/}
            {/*    <div class="user-folder-link">*/}
            {/*      <i class="c-chat c-chat-file-alt hover-link"></i>*/}
            {/*      <span class="user-social-name">Личные</span>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>

      </div>
    );
  }

  /**
   * показывать инпут для создания папки
   * */
  public showInputCreateFolderHandler(): void {
    this.showInputCreateFolderState = !this.showInputCreateFolderState;
  }

  /**
   *проверка и отправка данных на создание папки
   * */
  private creatingFolderHandler(): void {
    const input = this.inputElement;
    if (input.value !== "") {
      this.createFolder.emit({
        name: input.value,
        chats: [],
      });
      input.value = "";
    }
  }

  /**
   * create folder from send button
   * */
  public createFolderFromButton(): void {
    this.creatingFolderHandler();
  }

  /**
   *
   * */
  public creatingFolderFromInputHandler(e): void {
    e.preventDefault();
    this.creatingFolderHandler();
  }

  /**
   * переход на профиль пользователя
   * */
  public clickToUserProfileHandler(): void {
    this.clickToUserProfile.emit();
  }

  /**
   * выводим класс
   * */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }
}


const Dialogs = (props) => {
  return props.dialog.map((item ) => {
    // if (item.id !== "all") {
    return (
      <li>
        <div class="list-folders">
          <div class="list-item-wrapper">
            <input type="checkbox" id={item.name} />
            <label htmlFor={item.name}>
              <div>{item.name}</div>
            </label>
          </div>
          {/*<div class="delete-folder">*/}
          {/*  <i class="c-chat c-chat-file-alt hover-link"></i>*/}
          {/*</div>*/}
        </div>
      </li>
    );
    // }
  });
};
