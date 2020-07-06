# s-saqhan-chat-wrapper



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                | Type  | Default     |
| ------------- | -------------- | -------------------------- | ----- | ----------- |
| `MessageMock` | `message-mock` |                            | `any` | `undefined` |
| `categories`  | `categories`   | array categories           | `any` | `undefined` |
| `dialogs`     | `dialogs`      | массив данных для диалогов | `any` | `undefined` |
| `titleModule` | `title-module` |                            | `any` | `undefined` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `selectPersonal` |             | `CustomEvent<any>` |
| `selectUsers`    |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [module-chat](../../..)

### Depends on

- [s-saqhan-chat-users-wrapper](./res/view/s-saqhan-chat-users-wrapper)
- [s-adam-copying](../../../../../shared/s-adam-copying)
- [s-saqhan-chat-files-wrapper](../s-saqhan-chat-app/res/view/s-saqhan-chat-files-wrapper)
- [s-adam-profile](../../../../../shared/s-adam-profile)
- [module-header](../module-header)
- [btn-wrapper](../btn-wrapper)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  s-saqhan-chat-wrapper --> s-adam-copying
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
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  module-chat --> s-saqhan-chat-wrapper
  style s-saqhan-chat-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
