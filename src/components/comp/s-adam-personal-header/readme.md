# s-adam-personal-header



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description   | Type            | Default |
| --------- | --------- | ------------- | --------------- | ------- |
| `message` | --        | Личный диалог | `ChatMessage[]` | `[]`    |


## Events

| Event                   | Description                            | Type                       |
| ----------------------- | -------------------------------------- | -------------------------- |
| `searchPersonalMessage` | Клик по иконке поиска                  | `CustomEvent<ChatMessage>` |
| `visibleUserProfile`    | клик по имени юзера в личной переписке | `CustomEvent<void>`        |


## Dependencies

### Used by

 - [s-adam-direct](../s-adam-direct)

### Graph
```mermaid
graph TD;
  s-adam-direct --> s-adam-personal-header
  style s-adam-personal-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
