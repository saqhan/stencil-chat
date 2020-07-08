import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
  Prop,
} from "@stencil/core";

@Component({
  tag: "dialog-categories",
  styleUrl: "dialog-categories.css",
  shadow: true,
})
export class DialogCategories implements ComponentInterface {
  @Prop() theme: "comp" | "module" | "mobile" = "comp";
  @Prop() categories: any;
  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter;
  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="btns-nav">{this.getCategories(this.categories)}</div>
      </div>
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
  /**
   *
   * */
  public getClassForHost ()
  {
    return {
      [this.theme]: true
    }
  }
}
