# s-saqhan-chat-wrapper



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                    | Type  | Default     |
| ------------- | -------------- | ------------------------------ | ----- | ----------- |
| `MessageMock` | `message-mock` | массив данных личных сообщений | `any` | `undefined` |
| `categories`  | `categories`   | array categories               | `any` | `undefined` |
| `dialogs`     | `dialogs`      | массив данных для диалогов     | `any` | `undefined` |
| `titleModule` | `title-module` | Заголовок для чата             | `any` | `undefined` |


## Methods

### `clickToCategory({ detail }: { detail: any; }) => Promise<void>`

Фильтр диалогов

#### Returns

Type: `Promise<void>`



### `searchDialog({ detail }: { detail: any; }) => Promise<void>`

Метод поиски диалогов

#### Returns

Type: `Promise<void>`



### `searchMessage({ detail }: { detail: any; }) => Promise<void>`

Метод поиска по чату

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [module-chat](../../..)

### Depends on

- [s-saqhan-chat-users-wrapper](./res/view/s-saqhan-chat-users-wrapper)
- [module-personal](./res/view/module-personal)
- [s-saqhan-chat-files-wrapper](../s-saqhan-chat-files-wrapper)
- [s-adam-profile](../../../../../shared/s-adam-profile)
- [module-header](../module-header)
- [btn-wrapper](../btn-wrapper)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  s-saqhan-chat-wrapper --> module-personal
  s-saqhan-chat-wrapper --> s-saqhan-chat-files-wrapper
  s-saqhan-chat-wrapper --> s-adam-profile
  s-saqhan-chat-wrapper --> module-header
  s-saqhan-chat-wrapper --> btn-wrapper
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-form-search --> dialog-categories
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-user --> dialog-card
  module-personal --> personal-header
  module-personal --> personal-message
  module-personal --> personal-footer
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-audio
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  module-chat --> s-saqhan-chat-wrapper
  style s-saqhan-chat-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
