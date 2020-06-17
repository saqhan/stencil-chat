import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'personal-footer',
  styleUrl: 'personal-footer.css',
  shadow: false,
})
export class PersonalFooter implements ComponentInterface {

  render() {
    return (
      <div class="personal-footer">
        <div class="footer-wrapper">
          <div class="file">
            <i class="fas fa-paperclip"></i>
          </div>
          <div class="input-wrapper">
            <input type="text" placeholder="Type something ..." />
          </div>
          <div class="audio">
            <i class="fas fa-microphone"></i>
          </div>
        </div>
      </div>
    );
  }

}
