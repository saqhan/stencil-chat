import {Component, ComponentInterface, EventEmitter, Event, h, Prop} from '@stencil/core';

@Component({
  tag: 's-adam-profile',
  styleUrl: 's-adam-profile.css',
  shadow: false,
})
export class SAdamProfile implements ComponentInterface {

  /**
   * Задаем стиль для мобильной/пк версии
   * */
  @Prop() theme: 'comp' | 'mobile' = 'comp';

  @Event() clickToLink:EventEmitter;

  render() {
    return (
      <section class="profile">
        <div class="mobile">
          <div class="links-wrapper">
            <a onClick={() => this.clickToLink.emit({ place: "showDialogs" })} > <i class="fas fa-arrow-left"></i></a>
          </div>
        </div>
        <div class="about-user">
          <div
            class="profile-user-photo border-radius"
            style={{backgroundImage: 'url(https://via.placeholder.com/200x200?text=Text)'}}
          >
          </div>
          <div class="user-name">
            Tim Ostin
          </div>
          <div class="user-mail">
            timostin@gmail.com
          </div>
          <div class="user-contact">
            <i class="fas fa-phone-alt hover-link"></i>
            <i class="fas fa-video hover-link"></i>
            <i class="fas fa-envelope hover-link"></i>
          </div>
        </div>
        <div class="user-social">
          <div class="user-social-title">
            Terhubung
          </div>
          <div class="user-social-block">
            <div class="user-social-link">
              <i class="fab fa-instagram hover-link"></i>
              <span class="user-social-name">TimOstin</span>
            </div>
            <div class="user-social-link">
              <i class="fab fa-twitter hover-link"></i>
              <span class="user-social-name">Tim Ostin</span>
            </div>
            <div class="user-social-link">
              <i class="fab fa-facebook-f р"></i>
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
              <div class="mediafile pdf"><span>PDF</span></div>
              <span class="mediafile-desc">Buku Hueanghong.pdf</span>
            </div>
            <div class="media-item">
              <div class="mediafile zip"><span>ZIP</span></div>
              <span class="mediafile-desc">File jungjang.zip</span>
            </div>
            <div class="media-item">
              <div class="mediafile doc"><span>DOC</span></div>
              <span class="mediafile-desc">Laporan keuangan.ppt</span>
            </div>

          </div>
        </div>
      </section>
    );
  }
  /**
   * выводим класс
   * */
  public getClassForHost ()
  {
    return {
      [this.theme]: true
    }
  }
}
