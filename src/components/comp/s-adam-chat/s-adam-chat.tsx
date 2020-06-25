import {Component, ComponentInterface, h, State} from '@stencil/core';
import {logo, navItems, dialogs, MessageMock} from "../../../utils/mock";


@Component({
  tag: 's-adam-chat',
  styleUrl: 's-adam-chat.css',
  shadow: false,
})
export class SAdamChat implements ComponentInterface  {

  /**
   *Стейт для переключения на личный чат
   */
  @State() dialogVisible = 'noChat';

  /**
   * Стейт для показа профиля пользователя
   */
  @State() profileVisible = false;

  /**
   * Метод для переключения на личный чат
   * @param detail
   */
  public toggleChat({detail}) {
    if(detail.place === 'showPersonalDialog') {
      this.dialogVisible = 'showChat';
    }
  }

  public toggleProfile({detail}) {
    if (detail.place === 'userName') {
      this.profileVisible = !this.profileVisible;
    }
  }

  render() {
    return <main>
      <div class="container">
        <div class="row">
          <div class="col-1">
            <s-adam-navigate logo={logo} navItems={navItems}></s-adam-navigate>
          </div>
          <div class="col-3">
            <s-adam-contacts onClickToLink={({detail}) => {this.toggleChat({detail})}} dialogs={dialogs}>
            </s-adam-contacts>
          </div>
          <div class="col">
            <section class="chat">
              {this.showChat(this.dialogVisible)}
            </section>
          </div>
          {this.showProfile(this.profileVisible)}
        </div>
      </div>
    </main>
  }

  /**
   * Метод, который выводит необходимый чат
   * @param content
   */
  public showChat (content){
    switch (content) {
      case 'showChat':
        return <s-adam-direct onClickOnUsername={(item) => {this.toggleProfile(item)}}  message={MessageMock}>
        </s-adam-direct>;
      case 'noChat':
        return <s-adam-no-chat></s-adam-no-chat>;
    }
  }

  public showProfile (item) {
    if(item === true) {
      return (
        <div class="col-3">
          <s-adam-profile></s-adam-profile>
        </div>
      )
    }
    else {
      return '';
    }
  }
}
