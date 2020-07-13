# contact-card



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description       | Type                   | Default     |
| --------- | --------- | ----------------- | ---------------------- | ----------- |
| `contact` | --        | Принимаем контакт | `ChatContactInterface` | `undefined` |


## Events

| Event            | Description       | Type                                |
| ---------------- | ----------------- | ----------------------------------- |
| `clickToContact` | clock on navigate | `CustomEvent<ChatContactInterface>` |


## Dependencies

### Used by

 - [contacts-list-body](../contacts-list-body)

### Graph
```mermaid
graph TD;
  contacts-list-body --> contact-card
  style contact-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
