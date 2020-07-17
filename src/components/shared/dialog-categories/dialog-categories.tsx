import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State,} from "@stencil/core";
import {ChatCategoryInterface} from "../../../index";

@Component({
  tag: "dialog-categories",
  styleUrl: "dialog-categories.scss",
  shadow: false,
  scoped: true
})
export class DialogCategories implements ComponentInterface {
  /**
   *
   * */
  @Prop() theme: "comp" | "module" | "mobile" = "comp";

  /**
   *
   * */
  @Prop() categories: ChatCategoryInterface[] = [];

  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter<ChatCategoryInterface>;

  /**
   * */
  @State() lastClickedCategory: ChatCategoryInterface;

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
        class={{active: item.id === this.lastClickedCategory?.id }}
        onClick={() => this.clickToCategoryHandler(item)}
      >
        {item.name}
      </span>
    ));
  }
  /**
   * */
  public clickToCategoryHandler(item: ChatCategoryInterface)
  {
    this.clickToCategory.emit(this.lastClickedCategory = item)
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
