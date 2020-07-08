# m-chat-header



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description               | Type  | Default     |
| ------------ | ------------ | ------------------------- | ----- | ----------- |
| `categories` | `categories` | массив категорий диалогов | `any` | `undefined` |


## Events

| Event           | Description          | Type               |
| --------------- | -------------------- | ------------------ |
| `clickToLink`   | clock on clickToLink | `CustomEvent<any>` |
| `searchContact` |                      | `CustomEvent<any>` |


## Dependencies

### Used by

 - [mobile-dialogs](../../..)

### Depends on

- [dialog-categories](../../../../../../../../shared/dialog-categories)

### Graph
```mermaid
graph TD;
  m-chat-header --> dialog-categories
  mobile-dialogs --> m-chat-header
  style m-chat-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
