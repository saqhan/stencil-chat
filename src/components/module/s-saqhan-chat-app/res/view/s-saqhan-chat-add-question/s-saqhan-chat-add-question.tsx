import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-add-question',
  styleUrl: 's-saqhan-chat-add-question.css',
  shadow: false,
})
export class SSaqhanChatAddQuestion implements ComponentInterface {

  render() {
    return (
      <div class="btn-new-wrap">
        <div class="btn-new-ask">
          <button class="btn-add-question">Задать новый вопрос</button>
        </div>
      </div>
    );
  }

}
