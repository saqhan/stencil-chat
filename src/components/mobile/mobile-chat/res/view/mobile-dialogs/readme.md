# mobile-dialogs



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description               | Type           | Default     |
| ------------ | --------- | ------------------------- | -------------- | ----------- |
| `categories` | --        | массив категорий диалогов | `categories[]` | `undefined` |
| `dialogs`    | --        | массив сообщений          | `dialogs[]`    | `undefined` |


## Events

| Event             | Description          | Type               |
| ----------------- | -------------------- | ------------------ |
| `clickToCategory` | clock on Category    | `CustomEvent<any>` |
| `clickToLink`     | clock on clickToLink | `CustomEvent<any>` |


## Dependencies

### Used by

 - [mobile-chat](../../..)

### Depends on

- [dialog-card](../../../../../shared/dialog-card)

### Graph
```mermaid
graph TD;
  mobile-dialogs --> dialog-card
  mobile-chat --> mobile-dialogs
  style mobile-dialogs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
