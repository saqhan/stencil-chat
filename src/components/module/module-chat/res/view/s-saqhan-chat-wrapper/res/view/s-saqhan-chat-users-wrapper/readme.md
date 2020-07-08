# s-saqhan-chat-users-wrapper



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                  | Type  | Default     |
| ----------------- | ------------------ | ---------------------------- | ----- | ----------- |
| `categories`      | `categories`       |                              | `any` | `undefined` |
| `messages`        | `messages`         | Массив данных с диалогами    | `any` | `undefined` |
| `personalMessage` | `personal-message` | Массив данных с личным чатом | `any` | `undefined` |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `clickToCategory` |             | `CustomEvent<any>` |
| `clickToLink`     |             | `CustomEvent<any>` |
| `searchDialog`    |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-saqhan-chat-wrapper](../../..)

### Depends on

- [s-saqhan-chat-form-search](./res/view/s-saqhan-chat-form-search)
- [s-saqhan-chat-users](./res/view/s-saqhan-chat-users)
- [s-saqhan-chat-add-question](../../../../s-saqhan-chat-add-question)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-form-search --> dialog-categories
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-user --> dialog-card
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  style s-saqhan-chat-users-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*