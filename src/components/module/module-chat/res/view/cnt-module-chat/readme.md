# s-saqhan-chat-wrapper



<!-- Auto Generated Below -->


## Properties

| Property                          | Attribute                             | Description                                                       | Type                                                                                                                                                                                                           | Default                      |
| --------------------------------- | ------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `canRecordAudio`                  | `can-record-audio`                    | Возможность записи аудио                                          | `boolean`                                                                                                                                                                                                      | `false`                      |
| `categories`                      | --                                    | array categories                                                  | `ChatCategoryInterface[]`                                                                                                                                                                                      | `undefined`                  |
| `chatActionState`                 | `chat-action-state`                   | действие сообеседников в чате (печатает, записывает аудио и т.д.) | `ChatUserActionStatusState.audioRecording \| ChatUserActionStatusState.writing`                                                                                                                                | `undefined`                  |
| `chatPresenceState`               | `chat-presence-state`                 | присутствие пользователя в сети                                   | `ChatUserPresenceState.offline \| ChatUserPresenceState.online`                                                                                                                                                | `undefined`                  |
| `chatViewState`                   | `chat-view-state`                     | select content default                                            | `ChatViewToShowEnum.contacts \| ChatViewToShowEnum.dialogs \| ChatViewToShowEnum.files \| ChatViewToShowEnum.folders \| ChatViewToShowEnum.personal \| ChatViewToShowEnum.profile \| ChatViewToShowEnum.users` | `ChatViewToShowEnum.dialogs` |
| `contacts`                        | --                                    | масиив данных контактов                                           | `ChatContactInterface[]`                                                                                                                                                                                       | `undefined`                  |
| `dialogs`                         | --                                    | массив данных для диалогов                                        | `ChatDialogInterface[]`                                                                                                                                                                                        | `undefined`                  |
| `dictionary`                      | `dictionary`                          | словарь                                                           | `any`                                                                                                                                                                                                          | `undefined`                  |
| `disableInnerSearchContactState`  | `disable-inner-search-contact-state`  | отключение поиска контактов                                       | `boolean`                                                                                                                                                                                                      | `undefined`                  |
| `disableInnerSearchDialogsState`  | `disable-inner-search-dialogs-state`  | отключение поиска диалогов                                        | `boolean`                                                                                                                                                                                                      | `undefined`                  |
| `disableInnerSearchMessagesState` | `disable-inner-search-messages-state` | отключение поиска сообщений                                       | `boolean`                                                                                                                                                                                                      | `undefined`                  |
| `disableShowFullChatState`        | `disable-show-full-chat-state`        | отключение возможности октрытие приложение чата                   | `boolean`                                                                                                                                                                                                      | `undefined`                  |
| `message`                         | --                                    | массив данных личных сообщений                                    | `ChatMessage[]`                                                                                                                                                                                                | `undefined`                  |
| `openState`                       | `open-state`                          | Перменная для включения/отключения показа чата в развернутом виде | `boolean`                                                                                                                                                                                                      | `undefined`                  |
| `visibleState`                    | `visible-state`                       | видимость                                                         | `boolean`                                                                                                                                                                                                      | `true`                       |
| `writing`                         | --                                    | добавляем печатающий                                              | `ChatWritingUserInterface[]`                                                                                                                                                                                   | `[]`                         |


## Events

| Event                 | Description                                       | Type                                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatViewStateChange` |                                                   | `CustomEvent<ChatViewToShowEnum.contacts \| ChatViewToShowEnum.dialogs \| ChatViewToShowEnum.files \| ChatViewToShowEnum.folders \| ChatViewToShowEnum.personal \| ChatViewToShowEnum.profile \| ChatViewToShowEnum.users>` |
| `clickToDialog`       | click to dialog                                   | `CustomEvent<ChatDialogInterface>`                                                                                                                                                                                          |
| `clickToFilesBtn`     | click to files button                             | `CustomEvent<void>`                                                                                                                                                                                                         |
| `searchContact`       | search contact                                    | `CustomEvent<string>`                                                                                                                                                                                                       |
| `sendTextMessage`     |                                                   | `CustomEvent<string>`                                                                                                                                                                                                       |
| `showFullChat`        | Разворачивать полную версию чата при клике иконку | `CustomEvent<ShowFullChatOutputInterface>`                                                                                                                                                                                  |


## Methods

### `activeRecordAudioState(state: boolean) => Promise<void>`

позволяет активировать/деактивароть возможность записи аудио

#### Returns

Type: `Promise<void>`



### `activeShowFullChat(state: boolean) => Promise<void>`

позволяет активировать/деактивароть возможность октрытие приложение

#### Returns

Type: `Promise<void>`



### `changeViewToShow(state: ChatViewToShowEnum) => Promise<void>`

сменить окно показа

#### Returns

Type: `Promise<void>`



### `close() => Promise<void>`

показывает только кнопку

#### Returns

Type: `Promise<void>`



### `hide() => Promise<void>`

скрывает весь блок что бы на экране не было вообще видно

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

открывает блок чатов

#### Returns

Type: `Promise<void>`



### `openDialog(dialog: ChatDialogInterface) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `safeScrollToBotMessageView() => Promise<void>`

скролит вниз окно сообщений

#### Returns

Type: `Promise<void>`



### `setWritingState(item?: ChatWritingUserInterface) => Promise<void>`

позволяет установить печатающие данные

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

показывает весь блок после скрытия

#### Returns

Type: `Promise<void>`



### `updateChatActionState(item: ChatUserActionStatusState) => Promise<void>`

меняет статусы действия текущих (печатает, записывает и т.д.)

#### Returns

Type: `Promise<void>`



### `updateChatPresenceState(item: ChatUserPresenceState) => Promise<void>`

меняет статус (присутстия собеседников или контакта) в чате

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [module-chat](../../..)

### Depends on

- [s-saqhan-chat-users-wrapper](./res/view/s-saqhan-chat-users-wrapper)
- [module-personal](./res/view/module-personal)
- [s-saqhan-chat-files-wrapper](./sub/view/s-saqhan-chat-files-wrapper)
- [s-adam-profile](../../../../../shared/s-adam-profile)
- [contacts-list](../../../../../shared/contacts-list)
- [user-folders](../../../../../shared/user-folders)
- [module-header](./sub/view/module-header)
- [btn-wrapper](./sub/view/btn-wrapper)

### Graph
```mermaid
graph TD;
  cnt-module-chat --> s-saqhan-chat-users-wrapper
  cnt-module-chat --> module-personal
  cnt-module-chat --> s-saqhan-chat-files-wrapper
  cnt-module-chat --> s-adam-profile
  cnt-module-chat --> contacts-list
  cnt-module-chat --> user-folders
  cnt-module-chat --> module-header
  cnt-module-chat --> btn-wrapper
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-form-search --> dialog-categories
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-user --> dialog-card
  module-personal --> personal-header
  module-personal --> personal-message
  module-personal --> personal-footer
  personal-header --> user-status
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-text
  personal-footer --> footer-audio
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  contacts-list --> contacts-list-header
  contacts-list --> contacts-list-body
  contacts-list --> m-chat-footer
  contacts-list-body --> contact-card
  module-chat --> cnt-module-chat
  style cnt-module-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
