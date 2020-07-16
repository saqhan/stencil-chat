# dialog-categories



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type                             | Default  |
| ------------ | --------- | ----------- | -------------------------------- | -------- |
| `categories` | --        |             | `ChatCategoryInterface[]`        | `[]`     |
| `theme`      | `theme`   |             | `"comp" \| "mobile" \| "module"` | `"comp"` |


## Events

| Event             | Description       | Type                                 |
| ----------------- | ----------------- | ------------------------------------ |
| `clickToCategory` | clock on Category | `CustomEvent<ChatCategoryInterface>` |


## Dependencies

### Used by

 - [m-chat-header](../../mobile/mobile-chat/res/view/mobile-dialogs/res/view/m-chat-header)
<<<<<<< HEAD
 - [s-adam-contacts](../../comp/s-adam-dialogs)
 - [s-saqhan-chat-form-search](../../module/module-chat/res/view/s-saqhan-chat-wrapper/res/view/s-saqhan-chat-users-wrapper/res/view/s-saqhan-chat-form-search)
=======
 - [s-adam-contacts](../../comp/s-adam-contacts)
 - [s-saqhan-chat-form-search](../../module/module-chat/res/view/cnt-module-chat/res/view/s-saqhan-chat-users-wrapper/res/view/s-saqhan-chat-form-search)
>>>>>>> f84ca5de6f830eab3353cd45cdd31d5dc6ce29e2

### Graph
```mermaid
graph TD;
  m-chat-header --> dialog-categories
  s-adam-contacts --> dialog-categories
  s-saqhan-chat-form-search --> dialog-categories
  style dialog-categories fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
