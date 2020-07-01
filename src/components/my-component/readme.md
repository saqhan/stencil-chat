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
  s-adam-chat --> s-adam-contacts
  s-adam-chat --> s-adam-direct
  s-adam-chat --> s-adam-no-chat
  s-adam-chat --> s-adam-profile
  s-adam-navigate --> s-adam-nav-item
  s-adam-contacts --> dialog-card
  s-adam-direct --> message-from
  s-adam-direct --> personal-footer
  message-from --> message-text
  message-from --> message-img
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
