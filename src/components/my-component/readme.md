# my-component

<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [module-chat](../module/module-chat)

### Graph
```mermaid
graph TD;
  my-component --> module-chat
  module-chat --> s-saqhan-chat-wrapper
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  s-saqhan-chat-wrapper --> s-adam-copying
  s-saqhan-chat-wrapper --> s-saqhan-chat-files-wrapper
  s-saqhan-chat-wrapper --> s-adam-profile
  s-saqhan-chat-wrapper --> module-header
  s-saqhan-chat-wrapper --> btn-wrapper
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-form-search --> dialog-categories
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-user --> dialog-card
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
