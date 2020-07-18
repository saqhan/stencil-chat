# module-chat



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [my-component](../../my-component)

### Depends on

- [cnt-module-chat](./res/view/cnt-module-chat)

### Graph
```mermaid
graph TD;
  module-chat --> cnt-module-chat
  cnt-module-chat --> s-saqhan-chat-users-wrapper
  cnt-module-chat --> module-personal
  cnt-module-chat --> s-saqhan-chat-files-wrapper
  cnt-module-chat --> s-adam-profile
  cnt-module-chat --> contacts-list
  cnt-module-chat --> user-folders
  cnt-module-chat --> module-header
  cnt-module-chat --> btn-wrapper
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-form-search --> dialog-categories
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-user --> dialog-card
  module-personal --> personal-header
  module-personal --> personal-message
  module-personal --> personal-footer
  personal-header --> user-status
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-text
  personal-footer --> footer-audio
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  contacts-list --> contacts-list-header
  contacts-list --> contacts-list-body
  contacts-list --> m-chat-footer
  contacts-list-body --> contact-card
  my-component --> module-chat
  style module-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
