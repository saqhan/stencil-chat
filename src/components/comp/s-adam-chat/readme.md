# s-adam-chat



<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute                            | Description                 | Type      | Default     |
| -------------------------------- | ------------------------------------ | --------------------------- | --------- | ----------- |
| `disableInnerSearchContactState` | `disable-inner-search-contact-state` | отключение поиска контактов | `boolean` | `undefined` |


## Dependencies

### Depends on

- [s-adam-navigate](../s-adam-navigate)
- [s-adam-direct](../s-adam-direct)
- [s-adam-no-chat](../s-adam-no-chat)
- [user-folders](../../shared/user-folders)
- [s-adam-dialogs](../s-adam-dialogs)
- [s-adam-contacts](../s-adam-contacts)

### Graph
```mermaid
graph TD;
  s-adam-chat --> s-adam-navigate
  s-adam-chat --> s-adam-direct
  s-adam-chat --> s-adam-no-chat
  s-adam-chat --> user-folders
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
  s-adam-dialogs --> contacts-list-header
  s-adam-dialogs --> dialog-categories
  s-adam-dialogs --> dialog-card
  s-adam-contacts --> contacts-list-header
  s-adam-contacts --> contact-card
  style s-adam-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
