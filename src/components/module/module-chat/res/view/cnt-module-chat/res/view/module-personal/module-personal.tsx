import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {ChatDialogInterface, ChatMessage, ChatWritingUserInterface} from '../../../../../../../../../index';

@Component({
  tag: "module-personal",
  styleUrl: "module-personal.css",
  shadow: false,
  scoped: true
})
export class ModulePersonal implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() message: ChatMessage[];
  /**
   * array data dialogs
   * */
  @Prop() dialogs: ChatDialogInterface[];


  /**
   * Возможность записи аудио
   */
  @Prop() canRecordAudio = false;

  /**
   * */
  @Prop() writing: ChatWritingUserInterface[] = [];

  /**
   * search for private messages
   * */
  @Event() searchPersonalMessages: EventEmitter<string>;
  /**
   * show dialogs
   * */
  @Event() clickToShowDialogs: EventEmitter<void>;

  /**
   *
   */
  @Event() sendTextMessage: EventEmitter<string>;

  /**
   * on click to profile user
   * */
  @Event() clickToUserProfile: EventEmitter<void>;

  /**
   *
   */
  @Event() cancelSearchPersonal: EventEmitter<void>;

  render() {
    return (
      <div class="personal-wrapper">
        <personal-header dialogs={this.dialogs} message={this.message}></personal-header>
        <personal-message
          writing={this.writing}
          theme={"module"}
          message={this.message}
        ></personal-message>
        <personal-footer canRecordAudio={this.canRecordAudio}  theme="mobile"></personal-footer>
      </div>
    );
  }
}
