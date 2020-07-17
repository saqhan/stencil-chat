import {Component, ComponentInterface, Event, EventEmitter, h, Prop,} from "@stencil/core";

@Component({
  tag: "module-header",
  styleUrl: "module-header.css",
  shadow: false,
  scoped: true,
})
export class ModuleHeader implements ComponentInterface {
  /**
   *
   * */
  // @Prop() titleModule: TitleModuleInterface;

  /**
   * close modal
   * */
  @Event() close: EventEmitter<void>;

  /**
   * Разворачивать полную версию чата при клике иконку
   * */
  @Event({bubbles: false}) showFullChat: EventEmitter<void>;

  /**
   * отключение возможности октрытие приложение чата
   * */
  @Prop() disableShowFullChatState: boolean;

  /**
   *
   * */
  // @State() dictionary: any;
  //
  // componentDidLoad() {
  //   ChatDictionaryService.dictionary$.subscribe(
  //     (dictionary) => {
  //       this.dictionary = dictionary;
  //     }
  //   )
  // }

  render() {
    return (
      <div class="header-chat">
        <div class="showFullChat" style={ {visibility: this.disableShowFullChatState ? 'hidden': null} } onClick={() => this.showFullChatHandler()}>
          <i class="c-chat c-chat-expand"></i>
        </div>
        <div class="header-chat-title">Модульный чат</div>
        {/*<div class="header-chat-title">{ChatDictionaryService.dictionary?.module?.appName}</div>*/}
        <div class="close" onClick={() => this.close.emit()}>
          <i class="c-chat c-chat-times-circle"></i>
        </div>
      </div>
    );
  }
  /**
   * Разворачивать полную версию чата при клике иконку
   * */
  private showFullChatHandler() {
    if (!this.disableShowFullChatState) {
      this.showFullChat.emit();
    }
  }
}
