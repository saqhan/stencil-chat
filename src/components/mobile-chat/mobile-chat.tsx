import { Component, ComponentInterface, h, State } from "@stencil/core";
import { messages, categories } from "../../utils/mock";

@Component({
  tag: "mobile-chat",
  styleUrl: "mobile-chat.css",
  shadow: false,
})
export class MobileChat implements ComponentInterface {
  /**
   * Выбираем какой контент показывать
   * */
  @State() showContent = "dialogs";

  render() {
    return (
      //<div class="temp">
      <div>{this.getContent(this.showContent)}</div>
      // </div>
    );
  }

  /**
   * Функция переключения между диалогами и личными сообщениями
   **/
  public selectDialog({detail}) {
    console.log('click', detail)
    if (detail.place === "showPersonal") {
      return (this.showContent = "personal");
    } else if (detail.place === "showDialogs") {
      return (this.showContent = "dialogs");
    }
  }

  /**
   * Фильтруем по кликнутой категории
   * */
  public clickCategory({ detail }) {

    console.log("click category", detail);
    if (detail !== "all") {
      return messages.filter(item => item.category === detail);

    } else {
      return messages;
    }
  }

  /**
   * Метод для вывода определенного контента
   * */
  getContent(content) {
    switch (content) {
      case "dialogs":
        return (
          <mobile-dialogs
            onSelectDialog={(item) => this.selectDialog(item)}
            onClickCategory={(item) => this.clickCategory(item)}
            categories={categories}
            messages={messages}
          ></mobile-dialogs>
        );
      case "personal":
        return (
          <mobile-personal
            onSelectDialog={(item) => this.selectDialog(item)}
          ></mobile-personal>
        );
      default:
        "no content";
    }
  }
}
