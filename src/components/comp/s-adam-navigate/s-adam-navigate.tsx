import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {logo, navItems} from "./res/interface/common.interface";

@Component({
  tag: 's-adam-navigate',
  styleUrl: 's-adam-navigate.css',
  shadow: false,
})
export class SAdamNavigate implements ComponentInterface {
  /**
   * Логотип
   */
  @Prop() logo: logo;

  /**
   * Иконки навигации
   */
  @Prop() navItems: navItems[]=[];

  render() {
    return (
      <div class="nav-column">
        <div class="logo border-radius" style={{backgroundImage: 'url('+this.logo.logo+')'}}>
        </div>
        {this.navItems.map(item => {
          return (
            <s-adam-nav-item navItems={item}></s-adam-nav-item>
          )
        })}
      </div>
    );
  }

}
