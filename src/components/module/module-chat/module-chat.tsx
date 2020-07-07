import { Component, ComponentInterface, h, State } from "@stencil/core";
import {
  categories,
  dialogs,
  MessageMock,
  titleModule,
} from "../../../utils/mock";
@Component({
  tag: "module-chat",
  styleUrl: "module-chat.css",
  shadow: false,
})
export class ModuleChat implements ComponentInterface {
  /**
   * массив данных для диалогов
   * */
  @State() categories = categories;
  @State() dialogs = dialogs;
  @State() titleModule = titleModule;
  @State() MessageMock = MessageMock;

  render() {
    return (
      <s-saqhan-chat-wrapper
        categories={this.categories}
        dialogs={this.dialogs}
        titleModule={this.titleModule}
        MessageMock={this.MessageMock}
        onClickToCategory={(item) => this.clickToCategory(item)}
        onSearchDialog={(item) => this.searchDialog(item)}
      ></s-saqhan-chat-wrapper>
    );
  }

  public searchDialog({ detail }) {
    this.dialogs =
      detail.data !== "" && detail.data !== null
        ? dialogs.filter((item) => {
            return typeof item.name === "string"
              ? item.name.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : dialogs;
    console.log("searchContact", detail.data, this.dialogs);
  }
  /**
   *  Фильтр диалогов
   * */
  public clickToCategory({ detail }) {
    this.dialogs =
      detail.item.id !== "all"
        ? dialogs.filter((dialog) => dialog.category === detail.item.id)
        : dialogs;

    console.log(detail.item.id, this.dialogs);
  }
}
