import {Component, ComponentInterface, h, State} from "@stencil/core";
import {
  categories,
  dialogs,
  disableInnerSearchDialogs,
  disableInnerSearchMessages,
  MessageMock,
  titleModule,
  contacts
} from "../../../utils/mock";
import {ChatDialogInterface, ChatMessage, ChatMessageDirectionEnum, ChatMessageTypeEnum} from "../../../index";

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


  componentDidLoad ()
  {
    window['ref'] = this.ref;
  }


  render() {
    return (
      <cnt-module-chat
        ref={ (el) => this.ref = el}
        categories={categories}
        dialogs={dialogs}
        contacts={contacts}
        message={this.messages}
        onClickToDialog={(ev) => this.clickToDialog(ev.detail)}
        onSendTextMessage={(ev) => this.sendTextMessage(ev.detail)}
        titleModule={titleModule}
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
      {
        content: message,
        sender: {
          uid: "test-id-2",
          icon: "https://via.placeholder.com/60x60?text=User",
          name: "Адам",
          phone: "79291234567",
        },
        type: ChatMessageTypeEnum.text,
        direction: ChatMessageDirectionEnum.fromMe,
        time: {
          created: new Date(),
          delivery: new Date(),
          read: new Date(),
        },
      },
    ]
  }
}
