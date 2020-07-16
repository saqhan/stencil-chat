import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'user-status',
  styleUrl: 'user-status.css',
  shadow: true,
})
export class UserStatus implements ComponentInterface {

  /**
   * Тема для блока
   * */
  @Prop() theme: "comp" | "mobile" | "module" = "comp";

  render() {
    return (
      <div class={this.getClassForHost()}>
      <div class="status-user">
        {/*<span class="user-online" >online</span>*/}
        <span class="last-seen">был недавно</span>
        {/*<span class="user-writing">печатает...</span>*/}
      </div>
      </div>
    );
  }
  /**
   * Метод выобра темы для ПК/Мобильная/Модульной версии
   * */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }
}
