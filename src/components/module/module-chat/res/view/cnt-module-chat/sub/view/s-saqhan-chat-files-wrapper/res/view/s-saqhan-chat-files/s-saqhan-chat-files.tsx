import { Component, ComponentInterface,  h } from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-files',
  styleUrl: 's-saqhan-chat-files.css',
  shadow: false,
  scoped: true
})
export class SSaqhanChatFiles implements ComponentInterface {

  render() {
    return (
      <div class=" wrapper-files">
        <div class="file-card">
          <div class="file-date">19 ноября 2018</div>
          <div class="block-info">
            <div class="file-img"></div>
            <div class="block-files">
              <div class="file-info">
                <div class="file-name">Требования_Банка_к_Ресурсу..</div>
                <div class="file-size">18.8 КБ 13:27</div>
              </div>
              <div class="block-repost">
                <a href="#"><i class="c-chat c-chat-share"></i></a>
                <a href="#"><i class="c-chat c-chat-download"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="file-card">
          <div class="file-date">17 ноября 2018</div>
          <div class="block-info">
            <div class="file-img"></div>
            <div class="block-files">
              <div class="file-info">
                <div class="file-name">Требования_Банка_к_Ресурсу..</div>
                <div class="file-size">18.8 КБ 13:27</div>
              </div>
              <div class="block-repost">
                <a href="#"><i class="c-chat c-chat-share"></i></a>
                <a href="#"><i class="c-chat c-chat-download"></i></a>
              </div>
            </div>
          </div>
          <div class="block-info">
            <div class="file-img"></div>
            <div class="block-files">
              <div class="file-info">
                <div class="file-name">Требования_Банка_к_Ресурсу..</div>
                <div class="file-size">18.8 КБ 13:27</div>
              </div>
              <div class="block-repost">
                <a href="#"><i class="c-chat c-chat-share"></i></a>
                <a href="#"><i class="c-chat c-chat-download"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
