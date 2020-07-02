# personal-message



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                  | Type  | Default     |
| ------------- | -------------- | ---------------------------- | ----- | ----------- |
| `messageMock` | `message-mock` | array data personal messages | `any` | `undefined` |


## Dependencies

### Used by

 - [mobile-personal](../../..)

### Depends on

- [message-from](../../../../../../../../shared/messages/message-from)

### Graph
```mermaid
graph TD;
  personal-message --> message-from
  message-from --> message-text
  message-from --> message-img
  mobile-personal --> personal-message
  style personal-message fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
