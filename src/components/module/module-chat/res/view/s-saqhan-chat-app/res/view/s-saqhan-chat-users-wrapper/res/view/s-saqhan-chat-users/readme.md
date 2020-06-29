# s-saqhan-chat-users



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type  | Default     |
| ---------- | ----------- | ----------- | ----- | ----------- |
| `mainUser` | `main-user` |             | `any` | `undefined` |
| `messages` | `messages`  |             | `any` | `undefined` |


## Dependencies

### Used by

 - [s-saqhan-chat-users-wrapper](../../..)

### Depends on

- [s-saqhan-chat-main-user](./res/view/s-saqhan-chat-main-user)
- [s-saqhan-chat-user](./res/view/s-saqhan-chat-user)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-users --> s-saqhan-chat-main-user
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-main-user --> s-saqhan-chat-main-user-card
  s-saqhan-chat-user --> s-saqhan-chat-user-card
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  style s-saqhan-chat-users fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
