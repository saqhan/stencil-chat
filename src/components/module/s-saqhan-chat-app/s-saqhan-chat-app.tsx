import {
  Component,
  ComponentInterface,
  h,
  State,
  Event,
  Prop,
  EventEmitter,
} from "@stencil/core";
import {
  mainUser,
  messages,
} from "../s-saqhan-component/res/interface/common.interface";

@Component({
  tag: "s-saqhan-chat-app",
  styleUrl: "s-saqhan-chat-app.css",
  shadow: false,
})
export class SSaqhanChatApp implements ComponentInterface {
  /**
   * Массив данных для главного пользователя (админа)
   **/
  @Prop() mainUser: mainUser[];
  /**
   * Массив данных для обычных пользователей
   * */
  @Prop() messages: messages[];
  /**
   * Перменная для включения/отключения показа чата в развернутом виде
   * */
  @State() showChat: boolean;
  /**
   * По умолчанию отображается вид с диалогами
   * */
  @State() showContent = "users";
  /**
   * Переменная для закрытия модального чата
   **/
  @Event() close: boolean;
  /**
   * Событие при клике на диалог, открываем личные сообщения
   * */
  @Event() selectPersonal: string;
  /**
   * Открываем диалоги
   * */
  @Event() selectUsers: string;
  /**
   * Открываем файлы чата
   * */
  @Event() selectFiles: string;
  /**
   * Клик по кнопке в чате
   * */
  @Event() clickOnSearchChat: EventEmitter;

  render() {
    return (
      <div class="wrapper-modal">
        {this.showChat ? (
          <s-saqhan-chat-wrapper
            onSelectPersonal={() => this.onSelectPersonal()}
            onSelectUsers={() => this.onSelectUsers()}
            onSelectFiles={() => this.onSelectFiles()}
            onClose={() => this.onClose()}
            showContent={this.showContent}
          ></s-saqhan-chat-wrapper>
        ) : (
          ""
        )}
        <div class="btn-wrapper">
          <div class="open-chat">
            <button onClick={() => this.isShowChat()} class="btn-open">
              <span>
                {this.showChat ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="far fa-comment-dots"></i>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  /**
   * Метод для изменения состояния чата
   * */
  public isShowChat() {
    this.showChat = !this.showChat;
  }
  /**
   * Метод для закрытия чата
   * */
  public onClose() {
    this.showChat = false;
  }
  /**
   * Если кликнули на диалог и открываем личные сообщения пользователя
   * */
  public onSelectPersonal() {
    return (this.showContent = "personal");
  }
  /**
   * Метод для открывания диалогов
   * */
  public onSelectUsers() {
    return (this.showContent = "users");
  }
  /**
   * Метод для выбора раздела файлов
   * */
  public onSelectFiles() {
    return (this.showContent = "files");

  }
}
