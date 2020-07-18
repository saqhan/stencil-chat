# s-adam-navigate



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type       | Default     |
| -------- | --------- | ----------- | ---------- | ----------- |
| `logo`   | --        | Логотип     | `ChatLogo` | `undefined` |


## Events

| Event             | Description                            | Type                |
| ----------------- | -------------------------------------- | ------------------- |
| `visibleContacts` | клик по имени юзера в личной переписке | `CustomEvent<void>` |


## Dependencies

### Used by

 - [s-adam-chat](../s-adam-chat)

### Depends on

- [s-adam-nav-item](./res/view/s-adam-nav-item)

### Graph
```mermaid
graph TD;
  s-adam-navigate --> s-adam-nav-item
  s-adam-chat --> s-adam-navigate
  style s-adam-navigate fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
