# contacts-list-body



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description                                            | Type                             | Default     |
| ---------- | --------- | ------------------------------------------------------ | -------------------------------- | ----------- |
| `contacts` | --        | массив данных контактов                                | `ChatContactInterface[]`         | `undefined` |
| `theme`    | `theme`   | Данные выбора темы для Мобильная/Модульной/Комп версии | `"comp" \| "mobile" \| "module"` | `"mobile"`  |


## Dependencies

### Used by

 - [contacts-list](../../..)

### Depends on

- [contact-card](../contact-card)

### Graph
```mermaid
graph TD;
  contacts-list-body --> contact-card
  contacts-list --> contacts-list-body
  style contacts-list-body fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
