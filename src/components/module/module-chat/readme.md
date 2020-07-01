# module-chat



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-saqhan-chat-app](./res/view/s-saqhan-chat-app)

### Graph
```mermaid
graph TD;
  module-chat --> s-saqhan-chat-app
  s-saqhan-chat-app --> s-saqhan-chat-wrapper
  s-saqhan-chat-wrapper --> mobile-personal
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  s-saqhan-chat-wrapper --> s-saqhan-chat-files-wrapper
  mobile-personal --> message-from
  mobile-personal --> personal-footer
  message-from --> message-text
  message-from --> message-img
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-user --> dialog-card
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  style module-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
