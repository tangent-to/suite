---
title: "recipe"
---

> **recipe**(`options`): [`Recipe`](../classes/Recipe.md)

Defined in: [ml/recipe.js:71](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L71)

Create a preprocessing recipe

Factory function to create a new Recipe instance. The recipe defines a sequence
of preprocessing operations that will be applied to data.

## Parameters

### options

Initial data descriptor

#### data

`any`[]

Input data as array of objects

#### X

`string` \| `string`[]

Feature column names

#### y

`string`

Target column name

## Returns

[`Recipe`](../classes/Recipe.md)

A recipe object for chaining preprocessing steps

## Example

```ts
const recipe = ds.ml.recipe({
  data: penguins,
  X: ['bill_length', 'bill_depth', 'flipper_length'],
  y: 'species'
});
```
