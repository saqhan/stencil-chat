# mobile-dialogs



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description               | Type                      | Default     |
| ------------ | --------- | ------------------------- | ------------------------- | ----------- |
| `categories` | --        | массив категорий диалогов | `ChatCategoryInterface[]` | `undefined` |
| `dialogs`    | --        | массив сообщений          | `ChatDialogInterface[]`   | `undefined` |


## Events

| Event                 | Description                     | Type                                 |
| --------------------- | ------------------------------- | ------------------------------------ |
| `clickToAddDialog`    | click to add dialog             | `CustomEvent<string>`                |
| `clickToCategory`     | clock on Category               | `CustomEvent<ChatCategoryInterface>` |
| `clickToDialog`       | click to dialog                 | `CustomEvent<string>`                |
| `clickToShowContacts` | click to click To Show Contacts | `CustomEvent<void>`                  |
| `clickToShowDialogs`  | click to click To Show Dialogs  | `CustomEvent<void>`                  |
| `clickToShowMenuBar`  | click to click To Show MenuBar  | `CustomEvent<void>`                  |
| `searchDialogs`       | clock on searchDialogs          | `CustomEvent<ChatDialogInterface>`   |


## Dependencies

### Used by

 - [mobile-chat](../../..)

### Depends on

- [m-chat-header](./res/view/m-chat-header)
- [m-chat-dialogs](./res/view/m-chat-dialogs)
- [m-chat-footer](./res/view/m-chat-footer)

### Graph
```mermaid
graph TD;
  mobile-dialogs --> m-chat-header
  mobile-dialogs --> m-chat-dialogs
  mobile-dialogs --> m-chat-footer
  m-chat-header --> dialog-categories
  m-chat-dialogs --> dialog-card
  mobile-chat --> mobile-dialogs
  style mobile-dialogs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
