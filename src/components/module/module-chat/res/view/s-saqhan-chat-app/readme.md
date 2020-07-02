# s-saqhan-chat-app



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                    | Type  | Default     |
| ----------------- | ------------------ | ------------------------------ | ----- | ----------- |
| `messages`        | `messages`         | Массив данных для диалогов     | `any` | `undefined` |
| `personalMessage` | `personal-message` | Массив данных для личного чата | `any` | `undefined` |


## Events

| Event               | Description                                             | Type               |
| ------------------- | ------------------------------------------------------- | ------------------ |
| `clickOnSearchChat` | Клик по кнопке в чате                                   | `CustomEvent<any>` |
| `close`             | Переменная для закрытия модального чата                 | `CustomEvent<any>` |
| `selectFiles`       | Открываем файлы чата                                    | `CustomEvent<any>` |
| `selectPersonal`    | Событие при клике на диалог, открываем личные сообщения | `CustomEvent<any>` |
| `selectUsers`       | Открываем диалоги                                       | `CustomEvent<any>` |


## Dependencies

### Used by

 - [module-chat](../../..)

### Depends on

- [s-saqhan-chat-wrapper](./res/view/s-saqhan-chat-wrapper)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-app --> s-saqhan-chat-wrapper
  s-saqhan-chat-wrapper --> mobile-personal
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  s-saqhan-chat-wrapper --> s-saqhan-chat-files-wrapper
  s-saqhan-chat-wrapper --> s-adam-profile
  mobile-personal --> personal-header
  mobile-personal --> personal-message
  mobile-personal --> personal-footer
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-user --> dialog-card
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  module-chat --> s-saqhan-chat-app
  style s-saqhan-chat-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
