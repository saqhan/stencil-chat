import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";
import {
  logo,
  dialogs,
  MessageMock,
  contacts,
  categories,
} from "../../../utils/mock";
import {ChatCreateFolderOutputInterface} from "../../../index";

@Component({
  tag: "s-adam-chat",
  styleUrl: "s-adam-chat.css",
  shadow: false,
  scoped: true,
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

  /**
   * Стейт для показа контактов или диалогов
   */
  @State() contactsVisible = true;

  /**
   * отключение поиска контактов
   * */
  @Prop() disableInnerSearchContactState: boolean;

  render() {
    return (
      <div class="main-wrapper">
        <main>
          <div class="container">
            <div class="row">
              <div class="col-1 white-col">
                <s-adam-navigate
                  onVisibleContacts={() => this.visibleContacts()}
                  logo={logo}
                ></s-adam-navigate>
              </div>
              <div class="col-3">{this.showContacts(this.contactsVisible)}</div>
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
            onSearchPersonalMessage={() => this.searchPersonalMessages()}
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
          {/*<s-adam-profile*/}
          {/*  categories={categories}*/}
          {/*  onClickToShowFolders={() => this.clickToShowFoldersHandler()}*/}
          {/*></s-adam-profile>*/}
          <user-folders
            onClickToUserProfile={() => this.clickOnUserProfile()}
            onCreateFolder={(e: CustomEvent<ChatCreateFolderOutputInterface>) =>
              this.createFolderHandler(e.detail)
            }
            dialogs={dialogs}
            theme={"comp"}
          ></user-folders>
        </div>
      );
    } else {
      return "";
    }
  }

  public createFolderHandler(item: ChatCreateFolderOutputInterface): void {
    console.log("createFolderHandler", item);
  }

  /**
   * Показать контакты или диалоги
   * @param item
   */
  public showContacts(item) {
    if (item === true) {
      return (
        <s-adam-dialogs
          onSearchDialogs={() => this.searchDialogs()}
          onClickToDialog={() => {
            this.toggleChat();
          }}
          dialogs={dialogs}
          categories={categories}
          onClickToCategory={() => this.clickToCategory()}
        ></s-adam-dialogs>
      );
    } else {
      return (
        <s-adam-contacts
          theme={"comp"}
          contacts={contacts}
          disableInnerSearchContactState={this.disableInnerSearchContactState}
        ></s-adam-contacts>
      );
    }
  }

  /**
   *
   */
  public clickOnUserProfile() {
  }

  public createFolder() {
  }

  /**
   * click to Link
   * */
  public clickToLink() {
  }

  /**
   *
   */
  public searchDialogs() {
  }

  /**
   *
   */
  public searchPersonalMessages() {
  }

  /**
   *
   * @param detail
   */
  public clickToCategory() {
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

  /**
   * Метод для переключения на контакты
   */
  public visibleContacts() {
    this.contactsVisible = !this.contactsVisible;
  }

  /**
   *
   */
  public clickToShowFoldersHandler() {
  }
}
