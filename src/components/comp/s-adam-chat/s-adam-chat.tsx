import { Component, ComponentInterface, h, State } from "@stencil/core";
import {
  logo,
  navItems,
  dialogs,
  MessageMock,
  categories,
} from "../../../utils/mock";

@Component({
  tag: "s-adam-chat",
  styleUrl: "s-adam-chat.css",
  shadow: false,
})
export class SAdamChat implements ComponentInterface {
  /**
   *Стейт для переключения на личный чат
   */
  @State() dialogVisible = "noChat";

  /**
   * Стейт для показа профиля пользователя
   */
  @State() profileVisible = false;

  render() {
    return (
      <div class="main-wrapper">
        <main>
          <div class="container">
            <div class="row">
              <div class="col-1 white-col">
                <s-adam-navigate
                  logo={logo}
                  navItems={navItems}
                ></s-adam-navigate>
              </div>
              <div class="col-3">
                <s-adam-contacts
                  onSearchDialogs={() => this.searchDialogs()}
                  onClickToDialog={() => {
                    this.toggleChat();
                  }}
                  dialogs={dialogs}
                  categories={categories}
                  onClickToCategory={({ detail }) =>
                    this.clickToCategory({ detail })
                  }
                ></s-adam-contacts>
              </div>
              <div class="col white-col">
                <section class="chat">
                  {this.showChat(this.dialogVisible)}
                </section>
              </div>
              {this.showProfile(this.profileVisible)}
            </div>
          </div>
        </main>
      </div>
    );
  }

  /**
   * Метод, который выводит необходимый чат
   * @param content
   */
  public showChat(content) {
    switch (content) {
      case "showChat":
        return (
          <s-adam-direct
            onVisibleUserProfile={() => {
              this.visibleProfile();
            }}
            onSearchPersonalMessage={() =>
              this.searchPersonalMessages()
            }
            message={MessageMock}
          ></s-adam-direct>
        );
      case "noChat":
        return <s-adam-no-chat></s-adam-no-chat>;
      //Компонент с версткой копирования
      // <s-adam-copying></s-adam-copying>
    }
  }

  public showProfile(item) {
    if (item === true) {
      return (
        <div class="col-3">
          <s-adam-profile></s-adam-profile>
        </div>
      );
    } else {
      return "";
    }
  }
  /**
   * click to Link
   * */
  public clickToLink({ detail }) {
    console.log(detail);
  }
  public searchDialogs() {
    console.log("searchDialogs");
  }
  public searchPersonalMessages() {
    console.log("searchPersonalMessages");
  }
  public clickToCategory({ detail }) {
    console.log("clickToCategory", detail);
  }


  /**
   * Метод для переключения на личный чат
   * @param detail
   */
  public toggleChat() {
    this.dialogVisible = "showChat";
  }

  /**
   * Метод для открытия и закрытия личного профиля
   * @param detail
   */
  public visibleProfile() {
    this.profileVisible = !this.profileVisible;
  }
}
