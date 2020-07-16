# s-saqhan-chat-form-search



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description      | Type                      | Default |
| ------------ | --------- | ---------------- | ------------------------- | ------- |
| `categories` | --        | array categories | `ChatCategoryInterface[]` | `[]`    |


## Events

| Event             | Description           | Type                  |
| ----------------- | --------------------- | --------------------- |
| `clickToFilesBtn` | Клик по кнопке files  | `CustomEvent<void>`   |
| `searchDialog`    | Клик по кнопке в чате | `CustomEvent<string>` |


## Dependencies

### Used by

 - [s-saqhan-chat-users-wrapper](../../..)

### Depends on

- [dialog-categories](../../../../../../../../../../../shared/dialog-categories)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-form-search --> dialog-categories
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  style s-saqhan-chat-form-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
