# my-component



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description     | Type     | Default     |
| -------- | --------- | --------------- | -------- | ----------- |
| `first`  | `first`   | The first name  | `string` | `undefined` |
| `last`   | `last`    | The last name   | `string` | `undefined` |
| `middle` | `middle`  | The middle name | `string` | `undefined` |


## Dependencies

### Depends on

- [s-adam-chat](../comp/s-adam-chat)

### Graph
```mermaid
graph TD;
  my-component --> s-adam-chat
  s-adam-chat --> s-adam-navigate
  s-adam-chat --> s-adam-contacts
  s-adam-chat --> s-adam-profile
  s-adam-chat --> s-adam-direct
  s-adam-navigate --> s-adam-nav-item
  s-adam-contacts --> dialog-card
  s-adam-direct --> mess-to-me
  s-adam-direct --> mess-from-me
  s-adam-direct --> personal-footer
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
