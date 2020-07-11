import {Component, ComponentInterface, Event, EventEmitter, h, Prop,} from "@stencil/core";
// import {ChatCategoryInterfaceerface} from "../interface/common.interface";
import {ChatCategoryInterface} from "../public/public.interface";

@Component({
  tag: "dialog-categories",
  styleUrl: "dialog-categories.css",
  shadow: true,
})
export class DialogCategories implements ComponentInterface {
  /**
   *
   * */
  @Prop() theme: "comp" | "module" | "mobile" = "comp";

  /**
   *
   * */
  @Prop() categories: ChatCategoryInterface[];

  /**
   * clock on Category
   * */
  @Event() clickToCategory: EventEmitter<ChatCategoryInterface>;

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
        onClick={() => this.clickToCategory.emit(item)
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
