# mobile-personal



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description                  | Type        | Default     |
| ------------- | --------- | ---------------------------- | ----------- | ----------- |
| `messageMock` | --        | array data personal messages | `MessageFrom[]` | `undefined` |


## Events

| Event         | Description       | Type               |
| ------------- | ----------------- | ------------------ |
| `clickToLink` | clock on navigate | `CustomEvent<any>` |


## Dependencies

### Depends on

- [message-from](../../../../../shared/messages/message-from)
- [personal-footer](../../../../../shared/personal-footer)

### Graph
```mermaid
graph TD;
  mobile-personal --> message-from
  mobile-personal --> personal-footer
  message-from --> message-text
  message-from --> message-img
  style mobile-personal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
