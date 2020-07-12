# personal-header



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description                  | Type            | Default     |
| ------------- | --------- | ---------------------------- | --------------- | ----------- |
| `messageMock` | --        | array data personal messages | `ChatMessage[]` | `undefined` |


## Events

| Event                    | Description                 | Type                  |
| ------------------------ | --------------------------- | --------------------- |
| `clickToLink`            | clock on navigate           | `CustomEvent<void>`   |
| `clickToShowDialogs`     | click to show user profile  | `CustomEvent<string>` |
| `clickToUserProfile`     |                             | `CustomEvent<void>`   |
| `searchContact`          |                             | `CustomEvent<any>`    |
| `searchPersonalMessages` | search for private messages | `CustomEvent<any>`    |


## Dependencies

### Used by

 - [mobile-personal](../../..)
 - [module-personal](../../../../../../../../module/module-chat/res/view/s-saqhan-chat-wrapper/res/view/module-personal)

### Graph
```mermaid
graph TD;
  mobile-personal --> personal-header
  module-personal --> personal-header
  style personal-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
