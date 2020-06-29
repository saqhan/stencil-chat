# s-saqhan-chat-app



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description                                      | Type         | Default     |
| ---------- | --------- | ------------------------------------------------ | ------------ | ----------- |
| `mainUser` | --        | Массив данных для главного пользователя (админа) | `mainUser[]` | `undefined` |
| `messages` | --        | Массив данных для обычных пользователей          | `messages[]` | `undefined` |


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

 - [s-saqhan-component](../s-saqhan-component)

### Depends on

- [s-saqhan-chat-wrapper](./res/view/s-saqhan-chat-wrapper)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-app --> s-saqhan-chat-wrapper
  s-saqhan-chat-wrapper --> s-saqhan-chat-personal
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  s-saqhan-chat-wrapper --> s-saqhan-chat-files-wrapper
  s-saqhan-chat-personal --> s-saqhan-chat-add-question
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-users --> s-saqhan-chat-main-user
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-main-user --> s-saqhan-chat-main-user-card
  s-saqhan-chat-user --> s-saqhan-chat-user-card
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  s-saqhan-component --> s-saqhan-chat-app
  style s-saqhan-chat-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
