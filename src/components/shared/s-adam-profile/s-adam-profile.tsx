import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
} from "@stencil/core";
import { ChatCategoryInterface } from "../../../index";

@Component({
  tag: "s-adam-profile",
  styleUrl: "s-adam-profile.css",
  shadow: false,
  scoped: true,
})
export class SAdamProfile implements ComponentInterface {
  /**
   * Задаем стиль для мобильной/пк версии
   * */
  @Prop() theme: "comp" | "mobile" | "module" = "comp";

  /**
   * Массив категорий
   * */
  @Prop() categories: ChatCategoryInterface[];

  /**
   * Показываем список диалогов
   * */
  @Event() clickToShowDialogs: EventEmitter<void>;

  /**
   * Показываем папки
   * */
  @Event() clickToShowFolders: EventEmitter<void>;

  render() {
    return (
      <div class={this.getClassForHost()}>
        <section class="profile">
          <div class="links-wrapper">
            <a onClick={() => this.clickToShowDialogsHandler()}>
              {" "}
              <i class="c-chat c-chat-arrow-left"></i>
            </a>
          </div>
          <div class="about-user">
            <div
              class="profile-user-photo border-radius"
              style={{
                backgroundImage:
                  "url(https://via.placeholder.com/200x200?text=Text)",
              }}
            ></div>
            <div class="user-name">Tim Ostin</div>
            <div class="user-mail">timostin@gmail.com</div>
            <div class="user-contact">
              <i class="c-chat c-chat-phone-alt hover-link"></i>
              <i class="c-chat c-chat-video hover-link"></i>
              <i class="c-chat c-chat-envelope hover-link"></i>
            </div>
          </div>
          <div class="user-social">
            <div class="user-social-title">Папки</div>

              <div class="user-folders-blocks" onClick={() => this.clickToShowFoldersHandler()}>
                {/*<i class="c-chat c-chat-instagram-brands hover-link"></i>*/}
               <ul>
                 <Folder categories={this.categories}></Folder>
               </ul>

              </div>

          </div>
          <div class="user-social">
            <div class="user-social-title">Terhubung</div>
            <div class="user-social-block">
              <div class="user-social-link">
                <i class="c-chat c-chat-instagram-brands hover-link"></i>
                <span class="user-social-name">TimOstin</span>
              </div>
              <div class="user-social-link">
                <i class="c-chat c-chat-twitter-brands hover-link"></i>
                <span class="user-social-name">Tim Ostin</span>
              </div>
              <div class="user-social-link">
                <i class="c-chat c-chat-facebook-f-brands р"></i>
                <span class="user-social-name">Tim Ostin</span>
              </div>
            </div>
          </div>
          <div class="media">
            <div class="media-header">
              <div class="media-title">Media</div>
              <div class="media-descr">Lihat lebin banyak</div>
            </div>
            <div class="media-block">
              <div class="media-item">
                <div class="mediafile pdf">
                  <span>PDF</span>
                </div>
                <span class="mediafile-desc">Buku Hueanghong.pdf</span>
              </div>
              <div class="media-item">
                <div class="mediafile zip">
                  <span>ZIP</span>
                </div>
                <span class="mediafile-desc">File jungjang.zip</span>
              </div>
              <div class="media-item">
                <div class="mediafile doc">
                  <span>DOC</span>
                </div>
                <span class="mediafile-desc">Laporan keuangan.ppt</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  /**
   * выводим класс
   * */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }
  public clickToShowDialogsHandler() {
    this.clickToShowDialogs.emit();
  }
  public clickToShowFoldersHandler() {
    this.clickToShowFolders.emit();
  }
}

const Folder = (props) => {
  return props.categories.map((item) => {
    if (item.id !== 'all') {
      return (
        <li>
          {item.name}
        </li>
      );
    }
  });
};
