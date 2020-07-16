# s-adam-profile



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                          | Type                             | Default  |
| -------- | --------- | ------------------------------------ | -------------------------------- | -------- |
| `theme`  | `theme`   | Задаем стиль для мобильной/пк версии | `"comp" \| "mobile" \| "module"` | `"comp"` |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `clickToShowDialogs` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [cnt-module-chat](../../module/module-chat/res/view/cnt-module-chat)
 - [s-adam-chat](../../comp/s-adam-chat)
 - [user-profile](../../mobile/mobile-chat/res/view/user-profile)

### Graph
```mermaid
graph TD;
  cnt-module-chat --> s-adam-profile
  s-adam-chat --> s-adam-profile
  user-profile --> s-adam-profile
  style s-adam-profile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
