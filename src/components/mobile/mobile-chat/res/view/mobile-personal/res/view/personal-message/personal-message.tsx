import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {
  chatConvertWritingStatusToMessage,
  ChatMessage,
  ChatWritingUserInterface
} from "../../../../../../../../../index";
import {ChatMessagesLogic} from "../../../../../../../../../utils/utils";

@Component({
  tag: "personal-message",
  styleUrl: "personal-message.css",
  shadow: false,
  scoped: true
})
export class PersonalMessage implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() message: ChatMessage[];

  /**
   * */
  @Prop() theme: "mobile" | "module" | "comp" = "mobile";

  /**
   * */
  @Prop() writing: ChatWritingUserInterface[] = [];
// {
//   uid: 'test',
//   icon: "https://via.placeholder.com/60x60?text=User",
//   name: '',
//   phone: ''
// }

  /**
   * */
  public scrollContainer: HTMLElement;


  componentDidLoad() {
    // this.scrollToBot();
    ChatMessagesLogic.setScrollToBot(
      () => {
        this.scrollToBot();
      }
    )

    ChatMessagesLogic.safeScrollToBot();
  }

  render() {
    return (
      <div class={this.getClassForHost()}>
        <div class="personal-message" ref={(el) => this.scrollContainer = el}>
          {
            this.message.map(
              (message) => {
                return <message-from
                  message={message}></message-from>;
              }
            )
          }
          {
            this.writing?.length ? <message-from message={chatConvertWritingStatusToMessage(this.writing[0])}/> : ''
          }
        </div>
      </div>
    );
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

  /**
   *
   * */
  private scrollToBot ()
  {
    setTimeout(
      () => {
        this.scrollContainer.scrollBy(
          0,
          10000000//,this.scrollContainer.scrollHeight
        )
      },
      100
    )
  }
}
