# contact-card



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                       | Type                             | Default     |
| --------- | --------- | ------------------------------------------------- | -------------------------------- | ----------- |
| `contact` | --        | Принимаем контакт                                 | `ChatContactInterface`           | `undefined` |
| `theme`   | `theme`   | Данные выбора темы для Мобильная/Модульной версии | `"comp" \| "mobile" \| "module"` | `"mobile"`  |


## Events

| Event            | Description       | Type                                |
| ---------------- | ----------------- | ----------------------------------- |
| `clickToContact` | clock on navigate | `CustomEvent<ChatContactInterface>` |


## Dependencies

### Used by

 - [contacts-list-body](../contacts-list-body)
 - [s-adam-contacts](../../../../../comp/s-adam-contacts)

### Graph
```mermaid
graph TD;
  contacts-list-body --> contact-card
  s-adam-contacts --> contact-card
  style contact-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
