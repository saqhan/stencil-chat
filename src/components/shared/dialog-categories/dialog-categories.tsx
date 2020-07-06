import {Component, ComponentInterface, h, Event, EventEmitter, Prop} from '@stencil/core';

@Component({
  tag: 'dialog-categories',
  styleUrl: 'dialog-categories.css',
  shadow: true,
})
export class DialogCategories implements ComponentInterface {

  @Prop() categories:any;
  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter;
  render() {
    return (
      <div class="btns-nav">{this.getCategories(this.categories)}</div>
    );
  }
  /**
   * Метод получения названий категорий
   * */
  public getCategories(array) {
    return array.map((item) => (
      <span
        class={item.id}
        onClick={() =>
          this.clickToCategory.emit({ place: "item-category", item })
        }
      >
        {item.name}
      </span>
    ));
  }
}
