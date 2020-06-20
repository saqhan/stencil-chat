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

- [mobile-chat](../mobile/mobile-chat)

### Graph
```mermaid
graph TD;
  my-component --> mobile-chat
  mobile-chat --> mobile-dialogs
  mobile-dialogs --> dialog-card
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
