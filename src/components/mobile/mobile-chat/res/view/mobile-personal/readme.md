# mobile-personal



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description                  | Type        | Default     |
| ------------- | --------- | ---------------------------- | ----------- | ----------- |
| `messageMock` | --        | array data personal messages | `Message[]` | `undefined` |


## Events

| Event         | Description       | Type               |
| ------------- | ----------------- | ------------------ |
| `clickToLink` | clock on navigate | `CustomEvent<any>` |


## Dependencies

### Depends on

- [personal-footer](../../../../../shared/personal-footer)
- [mess-to-me](../../../../../shared/mess-to-me)
- [mess-from-me](../../../../../shared/mess-from-me)

### Graph
```mermaid
graph TD;
  mobile-personal --> personal-footer
  mobile-personal --> mess-to-me
  mobile-personal --> mess-from-me
  style mobile-personal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
