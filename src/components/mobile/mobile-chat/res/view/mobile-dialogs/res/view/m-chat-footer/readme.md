# m-chat-footer



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                       | Type                   | Default    |
| -------- | --------- | ------------------------------------------------- | ---------------------- | ---------- |
| `theme`  | `theme`   | Данные выбора темы для Мобильная/Модульной версии | `"mobile" \| "module"` | `"mobile"` |


## Events

| Event                 | Description                     | Type                |
| --------------------- | ------------------------------- | ------------------- |
| `clickToShowContacts` | click to click To Show Contacts | `CustomEvent<void>` |
| `clickToShowDialogs`  | click to click To Show Dialogs  | `CustomEvent<void>` |
| `clickToShowMenuBar`  | click to click To Show Contacts | `CustomEvent<void>` |


## Dependencies

### Used by

 - [contacts-list](../../../../../../../../shared/contacts-list)
 - [mobile-dialogs](../../..)

### Graph
```mermaid
graph TD;
  contacts-list --> m-chat-footer
  mobile-dialogs --> m-chat-footer
  style m-chat-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
