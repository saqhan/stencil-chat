# s-adam-chat



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-adam-navigate](../s-adam-navigate)
- [s-adam-contacts](../s-adam-contacts)
- [s-adam-direct](../s-adam-direct)
- [s-adam-no-chat](../s-adam-no-chat)
- [s-adam-profile](../../shared/s-adam-profile)

### Graph
```mermaid
graph TD;
  s-adam-chat --> s-adam-navigate
  s-adam-chat --> s-adam-contacts
  s-adam-chat --> s-adam-direct
  s-adam-chat --> s-adam-no-chat
  s-adam-chat --> s-adam-profile
  s-adam-navigate --> s-adam-nav-item
  s-adam-contacts --> dialog-categories
  s-adam-contacts --> dialog-card
  s-adam-direct --> s-adam-personal-header
  s-adam-direct --> message-from
  s-adam-direct --> personal-footer
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-audio
  style s-adam-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
