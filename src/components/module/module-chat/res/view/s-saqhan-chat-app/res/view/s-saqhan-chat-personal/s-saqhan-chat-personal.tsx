import {Component, ComponentInterface, Event, EventEmitter, h} from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-personal',
  styleUrl: 's-saqhan-chat-personal.css',
  shadow: false,
})
export class SSaqhanChatPersonal implements ComponentInterface {
  @Event() selectUsers: EventEmitter;
  render() {

    return (
      <div class="personal-messages">
        <div class="col-12 chat-user-main">
          <div class="user">
            <div class="btn-back" onClick={() => this.selectUsers.emit() }>
              <span><i class="fas fa-chevron-left"></i></span>
            </div>
            <div class="user-img">
              <div class="img" style={{ backgroundImage: "url(https://via.placeholder.com/500)" }}></div>
            </div>
            <div class="personal-user">
              <div class="name">
                Ксения
              </div>
            </div>
          </div>
          <div class="menu-personal">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div class="messages-block">
          <div class="personal-mess">
            <div class="mess-user">
              <span class="user-text">Вирус эволиционирует!</span>
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="admin-mess">
            <div class="mess-admin">
              <div class="position-admin">
                <span>Ксения, бизнес-ассистент</span>
              </div>
              <span class="admin-text"
              >Так давайте снимим карантин, пусть все выйдут на
                      работу!</span
              >
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="personal-mess">
            <div class="mess-user">
                    <span class="user-text"
                    >Мировой заговр, все об этом знают!</span
                    >
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="admin-mess">
            <div class="mess-admin">
              <div class="position-admin">
                <span>Ксения, бизнес-ассистент</span>
              </div>
              <span class="admin-text"
              >Мы с Вами согласны и сейчас перевели миллион на
                      лечение.</span
              >
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="personal-mess">
            <div class="mess-user">
              <span class="user-text">Спасибо! очень ценю!</span>
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="personal-mess">
            <div class="mess-user">
              <span class="user-text">Где деньги, Лебовский?</span>
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="personal-mess">
            <div class="mess-user">
              <span class="user-text">Hello there! pls tell me, where a u?</span>
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="admin-mess">
            <div class="mess-admin">
              <div class="position-admin">
                <span>Ксения, бизнес-ассистент</span>
              </div>
              <span class="admin-text"
              >Спасибо! мы обязательно свяжемся и переведем сумму денег (нет)</span
              >
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="personal-mess">
            <div class="mess-user">
              <span class="user-text">Well done!</span>
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="admin-mess">
            <div class="mess-admin">
              <div class="position-admin">
                <span>Ксения, бизнес-ассистент</span>
              </div>
              <span class="admin-text"
              >Спасибо! мы обязательно свяжемся и переведем сумму денег (нет)</span
              >
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="personal-mess">
            <div class="mess-user">
              <span class="user-text">Well done!</span>
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="admin-mess">
            <div class="mess-admin">
              <div class="position-admin">
                <span>Ксения, бизнес-ассистент</span>
              </div>
              <span class="admin-text"
              >Спасибо! мы обязательно свяжемся и переведем сумму денег (нет)</span
              >
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
          <div class="personal-mess">
            <div class="mess-user">
              <span class="user-text">Well done!</span>
              <span class="mess-date">30.08.2020 09:20</span>
            </div>
          </div>
        </div>
        <s-saqhan-chat-add-question></s-saqhan-chat-add-question>
      </div>
    );
  }

}
