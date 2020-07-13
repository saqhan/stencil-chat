# module-personal



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                  | Type            | Default     |
| --------- | --------- | ---------------------------- | --------------- | ----------- |
| `message` | --        | array data personal messages | `ChatMessage[]` | `undefined` |


## Events

| Event                    | Description                 | Type                |
| ------------------------ | --------------------------- | ------------------- |
| `clickToShowDialogs`     | show dialogs                | `CustomEvent<void>` |
| `clickToUserProfile`     | on click to profile user    | `CustomEvent<void>` |
| `searchPersonalMessages` | search for private messages | `CustomEvent<any>`  |


## Dependencies

### Used by

 - [s-saqhan-chat-wrapper](../../..)

### Depends on

- [personal-header](../../../../../../../../mobile/mobile-chat/res/view/mobile-personal/res/view/personal-header)
- [personal-message](../../../../../../../../mobile/mobile-chat/res/view/mobile-personal/res/view/personal-message)
- [personal-footer](../../../../../../../../shared/personal-footer)

### Graph
```mermaid
graph TD;
  module-personal --> personal-header
  module-personal --> personal-message
  module-personal --> personal-footer
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-text
  personal-footer --> footer-audio
  s-saqhan-chat-wrapper --> module-personal
  style module-personal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
