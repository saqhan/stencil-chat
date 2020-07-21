# mobile-chat



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [my-component](../../my-component)

### Depends on

- [mobile-dialogs](./res/view/mobile-dialogs)
- [mobile-personal](./res/view/mobile-personal)
- [s-adam-profile](../../shared/s-adam-profile)
- [user-folders](../../shared/user-folders)
- [contacts-list](../../shared/contacts-list)

### Graph
```mermaid
graph TD;
  mobile-chat --> mobile-dialogs
  mobile-chat --> mobile-personal
  mobile-chat --> s-adam-profile
  mobile-chat --> user-folders
  mobile-chat --> contacts-list
  mobile-dialogs --> m-chat-header
  mobile-dialogs --> m-chat-dialogs
  mobile-dialogs --> m-chat-footer
  m-chat-header --> dialog-categories
  m-chat-dialogs --> dialog-card
  mobile-personal --> personal-header
  mobile-personal --> personal-message
  mobile-personal --> personal-footer
  personal-header --> user-status
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-text
  personal-footer --> footer-audio
  contacts-list --> contacts-list-header
  contacts-list --> contacts-list-body
  contacts-list --> m-chat-footer
  contacts-list-body --> contact-card
  my-component --> mobile-chat
  style mobile-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
