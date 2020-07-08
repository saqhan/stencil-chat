# mobile-personal



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description                  | Type        | Default     |
| ------------- | --------- | ---------------------------- | ----------- | ----------- |
| `messageMock` | --        | array data personal messages | `Message[]` | `undefined` |


## Events

| Event           | Description       | Type               |
| --------------- | ----------------- | ------------------ |
| `clickToLink`   | clock on navigate | `CustomEvent<any>` |
| `searchContact` |                   | `CustomEvent<any>` |


## Dependencies

### Used by

 - [mobile-chat](../../..)

### Depends on

- [personal-header](./res/view/personal-header)
- [personal-message](./res/view/personal-message)
- [personal-footer](../../../../../shared/personal-footer)

### Graph
```mermaid
graph TD;
  mobile-personal --> personal-header
  mobile-personal --> personal-message
  mobile-personal --> personal-footer
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  personal-footer --> footer-text
  personal-footer --> footer-audio
  mobile-chat --> mobile-personal
  style mobile-personal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*