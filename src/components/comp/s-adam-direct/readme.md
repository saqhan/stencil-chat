# s-adam-direct



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description   | Type        | Default |
| --------- | --------- | ------------- | ----------- | ------- |
| `message` | --        | Личный диалог | `Message[]` | `[]`    |


## Events

| Event             | Description                            | Type               |
| ----------------- | -------------------------------------- | ------------------ |
| `clickOnUsername` | клик по имени юзера в личной переписке | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-adam-chat](../s-adam-chat)

### Depends on

- [mess-to-me](../../shared/mess-to-me)
- [mess-from-me](../../shared/mess-from-me)
- [personal-footer](../../shared/personal-footer)

### Graph
```mermaid
graph TD;
  s-adam-direct --> mess-to-me
  s-adam-direct --> mess-from-me
  s-adam-direct --> personal-footer
  s-adam-chat --> s-adam-direct
  style s-adam-direct fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
