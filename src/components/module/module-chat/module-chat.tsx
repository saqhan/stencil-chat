import {Component, ComponentInterface, Element, forceUpdate, h, State} from "@stencil/core";
import {
  categories,
  contacts,
  dialogs,
  DictionaryMock, DictionaryMockEng,
  disableInnerSearchDialogs,
  disableInnerSearchMessages,
  MessageMock
} from "../../../utils/mock";
import {
  ChatDialogInterface,
  ChatMessage,
  ChatMessageDirectionEnum,
  ChatMessageTypeEnum,
  createTextMessage
} from "../../../index";

@Component({
  tag: "module-chat",
  styleUrl: "module-chat.css",
  shadow: false,
  scoped: true,
})
export class ModuleChat implements ComponentInterface {
  /**
   * массив данных для диалогов
   * */
  public ref: any;

  @State() messages: ChatMessage[] = MessageMock;
  @State() dialogs: ChatDialogInterface[] = dialogs;
  @State() dictionary = DictionaryMock;
  @Element() ref2: HTMLElement;



  componentDidLoad ()
  {
    window['ref'] = this.ref;

    setInterval(
      () => {
        console.log(
          'messages setInterval',

        );
        this.messages = [...MessageMock];
        this.dialogs = [...dialogs];
        this.dictionary = this.dictionary === DictionaryMock ? DictionaryMockEng : DictionaryMock;

        console.log(
          'updated dictionary',
          this.dictionary
        );

        // @ts-ignore
        forceUpdate(this.ref2);
      },
      10000
    );
  }


  render() {
    return (
      <cnt-module-chat
        ref={ (el) => this.ref = el}
        categories={categories}
        dialogs={this.dialogs}
        contacts={contacts}
        dictionary={this.dictionary}
        message={this.messages}
        onClickToDialog={(ev) => this.clickToDialog(ev.detail)}
        onSendTextMessage={(ev) => this.sendTextMessage(ev.detail)}
        onShowFullChat={(ev) => this.showFullChat(ev.detail)}
        disableInnerSearchDialogsState={disableInnerSearchDialogs}
        disableInnerSearchMessagesState={disableInnerSearchMessages}
      ></cnt-module-chat>
    );
  }

  public clickToDialog (
    dialog: ChatDialogInterface
  )
  {
    this.messages = MessageMock.map(
      (message) => (
        {
          ...message,
          content: (
            message.direction !== ChatMessageDirectionEnum.center &&
            message.type === ChatMessageTypeEnum.text
          )
            ? `${dialog.name}> ${message.content}`
            : message.content
        }
      )
    )
    console.log(
      'clickToDialog [12]',
      dialog
    );

  }

  public showFullChat (
    ev: any
  ) {
    console.log(
      'showFullChat',
      ev
    )
  }

  public sendTextMessage (
    message: string
  )
  {
    console.log(
      'sendTextMessage [2]',
      message
    );
    this.messages = [
      ...this.messages,
      createTextMessage(
        message,
        {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        }
      )
    ]
  }
}
