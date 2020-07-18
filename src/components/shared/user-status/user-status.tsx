import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {ChatUserActionStatusState, ChatUserPresenceState} from "../../../index";



@Component({
  tag: 'user-status',
  styleUrl: 'user-status.scss',
  shadow: false,
  scoped: true
})
export class UserStatus implements ComponentInterface {

  /**
   * Тема для блока
   * */
  @Prop() theme: "comp" | "mobile" | "module" = "comp";

  /**
   * */
  @Prop() chatActionState: ChatUserActionStatusState

  /**
   * */
  @Prop() chatPresenceState: ChatUserPresenceState

  render() {
    return (
      <div class={this.getClassForHost()}>
        <StatusBlockElement chatActionState={this.chatActionState} chatPresenceState={this.chatPresenceState}></StatusBlockElement>
      </div>
    );
  }
  /**
   * Метод выобра темы для ПК/Мобильная/Модульной версии
   * */
  public getClassForHost() {
    return {
      [this.theme]: true,
    };
  }
}

const ChatAnimationDots = (props: {text: string}) => {
  return (
    <div class='user-saving'>
      {props.text}
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  )
}

/**
 * Компонент для вывода статуса действий
 * */
const UserActionStateElement = (props: { chatActionState: ChatUserActionStatusState}) => {
  switch (props.chatActionState) {
    case ChatUserActionStatusState.writing:
      return (<div class="user-writing">
          <ChatAnimationDots text="печатает"></ChatAnimationDots>
      </div>)
    case ChatUserActionStatusState.audioRecording:
      return (
        <span class="user-writing">
          <ChatAnimationDots text="записывает аудио"></ChatAnimationDots>
        </span>)
    default:
      return '';
  }
}
/**
 * Компонент для вывода статуса присутствия пользоватея
 * */
const UserPresenceStateElement = (props: { chatPresenceState: ChatUserPresenceState}) => {
  switch (props.chatPresenceState) {
    case ChatUserPresenceState.online:
      return  (<span class="last-seen">онлайн</span>)
    default:
      return <span class="last-seen">был недавно</span>;
  }
}

/**
 * Компонент контроллер
 * */
const StatusBlockElement = (props: { chatActionState: ChatUserActionStatusState, chatPresenceState: ChatUserPresenceState}) => {
  return (
    <div class="status-user">
      {
        props.chatActionState
          ? (
            <UserActionStateElement chatActionState={props.chatActionState}></UserActionStateElement>
          )
          : (
            <UserPresenceStateElement chatPresenceState={props.chatPresenceState}></UserPresenceStateElement>
          )
      }
    </div>
  )
}
