# s-saqhan-chat-users-wrapper



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type  | Default     |
| ---------- | ----------- | ----------- | ----- | ----------- |
| `mainUser` | `main-user` |             | `any` | `undefined` |
| `messages` | `messages`  |             | `any` | `undefined` |


## Dependencies

### Used by

 - [s-saqhan-chat-wrapper](../s-saqhan-chat-wrapper)

### Depends on

- [s-saqhan-chat-form-search](./res/view/s-saqhan-chat-form-search)
- [s-saqhan-chat-users](./res/view/s-saqhan-chat-users)
- [s-saqhan-chat-add-question](../s-saqhan-chat-add-question)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-users --> s-saqhan-chat-main-user
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-main-user --> s-saqhan-chat-main-user-card
  s-saqhan-chat-user --> s-saqhan-chat-user-card
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  style s-saqhan-chat-users-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
