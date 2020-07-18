# s-adam-direct



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description   | Type            | Default |
| --------- | --------- | ------------- | --------------- | ------- |
| `message` | --        | Личный диалог | `ChatMessage[]` | `[]`    |


## Events

| Event                   | Description                            | Type                  |
| ----------------------- | -------------------------------------- | --------------------- |
| `searchPersonalMessage` | Клик по иконке поиска                  | `CustomEvent<string>` |
| `visibleUserProfile`    | клик по имени юзера в личной переписке | `CustomEvent<void>`   |


## Dependencies

### Used by

 - [s-adam-chat](../s-adam-chat)

### Depends on

- [s-adam-personal-header](../s-adam-personal-header)
- [message-from](../../shared/messages/message-from)
- [personal-footer](../../shared/personal-footer)

### Graph
```mermaid
graph TD;
  s-adam-direct --> s-adam-personal-header
  s-adam-direct --> message-from
  s-adam-direct --> personal-footer
  s-adam-personal-header --> user-status
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-text
  personal-footer --> footer-audio
  s-adam-chat --> s-adam-direct
  style s-adam-direct fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
