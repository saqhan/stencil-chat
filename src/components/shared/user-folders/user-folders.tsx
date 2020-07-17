import {Component, ComponentInterface, Event, h, EventEmitter} from '@stencil/core';

@Component({
  tag: 'user-folders',
  styleUrl: 'user-folders.css',
  shadow: false,
  scoped: true
})
export class UserFolders implements ComponentInterface {

  @Event() clickToUserProfile:EventEmitter<void>

  render() {
    return (
      <div class="folders-wrapper" >
        <div class="folders-title">
          <div class="left-back"
            onClick={()=> this.clickToUserProfileHandler()}
          ><i class="c-chat c-chat-arrow-left" ></i></div>
          <div class="title" >Папки</div>
        </div>
        <div class="user-folder">
          <div class="advice">
            Вы можете создавать папки чатов и переключаться между ними
          </div>
          <div class="user-social-title">Мои папки</div>
          <div class="user-folders-block">
            <div class="user-folder-link" >
              <i class="c-chat c-chat-file-alt hover-link"></i>
              <span class="user-social-name">Создать новую папку</span>
            </div>
          </div>
        </div>
        <div class="user-folder">
          <div class="user-social-title">Рекомендованые папки</div>
          <div class="user-folders-block">
            <div class="user-folder-link"
            >
              <i class="c-chat c-chat-file-alt hover-link"></i>
              <span class="user-social-name">Новые</span>
            </div>
            <div class="user-folder-link"
            >
              <i class="c-chat c-chat-file-alt hover-link"></i>
              <span class="user-social-name">Личные</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public clickToUserProfileHandler(){
    this.clickToUserProfile.emit()
  }

}
