# my-component

<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-adam-chat](../comp/s-adam-chat)

### Graph
```mermaid
graph TD;
  my-component --> s-adam-chat
  s-adam-chat --> s-adam-navigate
  s-adam-chat --> s-adam-direct
  s-adam-chat --> s-adam-no-chat
  s-adam-chat --> s-adam-profile
  s-adam-chat --> s-adam-dialogs
  s-adam-chat --> s-adam-contacts
  s-adam-navigate --> s-adam-nav-item
  s-adam-direct --> s-adam-personal-header
  s-adam-direct --> message-from
  s-adam-direct --> personal-footer
  s-adam-personal-header --> user-status
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-text
  personal-footer --> footer-audio
  s-adam-dialogs --> s-adam-search-contact
  s-adam-dialogs --> dialog-categories
  s-adam-dialogs --> dialog-card
  s-adam-contacts --> contacts-list-header
  s-adam-contacts --> contact-card
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
