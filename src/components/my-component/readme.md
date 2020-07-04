# my-component

<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [mobile-chat](../mobile/mobile-chat)

### Graph
```mermaid
graph TD;
  my-component --> mobile-chat
  mobile-chat --> mobile-dialogs
  mobile-chat --> mobile-personal
  mobile-chat --> user-profile
  mobile-chat --> contacts-list
  mobile-dialogs --> m-chat-header
  mobile-dialogs --> m-chat-dialogs
  mobile-dialogs --> m-chat-footer
  m-chat-dialogs --> dialog-card
  mobile-personal --> personal-header
  mobile-personal --> personal-message
  mobile-personal --> personal-footer
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  user-profile --> s-adam-profile
  contacts-list --> contacts-list-header
  contacts-list --> contacts-list-body
  contacts-list --> m-chat-footer
  contacts-list-body --> contact-card
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
