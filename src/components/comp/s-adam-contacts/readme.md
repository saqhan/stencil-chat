# s-adam-contacts



<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute                            | Description                         | Type                             | Default     |
| -------------------------------- | ------------------------------------ | ----------------------------------- | -------------------------------- | ----------- |
| `contacts`                       | --                                   |                                     | `ChatContactInterface[]`         | `undefined` |
| `disableInnerSearchContactState` | `disable-inner-search-contact-state` | отключение поиска контактов         | `boolean`                        | `undefined` |
| `theme`                          | `theme`                              | Тема для модульного/мобильного чата | `"comp" \| "mobile" \| "module"` | `"mobile"`  |


## Dependencies

### Used by

 - [s-adam-chat](../s-adam-chat)

### Depends on

- [contacts-list-header](../../shared/contacts-list/res/view/contacts-list-header)
- [contact-card](../../shared/contacts-list/res/view/contact-card)

### Graph
```mermaid
graph TD;
  s-adam-contacts --> contacts-list-header
  s-adam-contacts --> contact-card
  s-adam-chat --> s-adam-contacts
  style s-adam-contacts fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
