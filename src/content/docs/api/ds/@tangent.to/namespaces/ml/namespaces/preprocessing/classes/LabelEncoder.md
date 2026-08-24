---
title: "LabelEncoder"
---

Defined in: [ml/preprocessing.js:319](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L319)

Encode target labels with value between 0 and n_classes-1

Note: distinct from the internal core/table.js LabelEncoder used by
prepareX/prepareXY (which keeps first-seen class order and is persisted
with fitted models). This one sorts classes and supports table
descriptors; the two are intentionally separate.

## Constructors

### Constructor

> **new LabelEncoder**(): `LabelEncoder`

Defined in: [ml/preprocessing.js:320](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L320)

#### Returns

`LabelEncoder`

## Properties

### \_tableColumn

> **\_tableColumn**: `any`

Defined in: [ml/preprocessing.js:323](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L323)

***

### classes

> **classes**: `any`[]

Defined in: [ml/preprocessing.js:321](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L321)

***

### classMap

> **classMap**: `Map`\<`any`, `number`\>

Defined in: [ml/preprocessing.js:322](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L322)

## Methods

### \_extractLabelVector()

> **\_extractLabelVector**(`input`, `__namedParameters?`): `object`

Defined in: [ml/preprocessing.js:326](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L326)

#### Parameters

##### input

`any`

##### \_\_namedParameters?

###### fallbackColumn?

`any` = `null`

###### forTransform?

`boolean` = `false`

#### Returns

`object`

##### column

> **column**: `any`

##### rows

> **rows**: `any`[]

##### values

> **values**: `any`[]

***

### fit()

> **fit**(`y`): `LabelEncoder`

Defined in: [ml/preprocessing.js:353](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L353)

Fit label encoder

#### Parameters

##### y

`any`[]

Target labels

#### Returns

`LabelEncoder`

this

***

### fitTransform()

> **fitTransform**(`y`): `number`[]

Defined in: [ml/preprocessing.js:404](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L404)

Fit and transform in one step

#### Parameters

##### y

`any`[]

Target labels

#### Returns

`number`[]

Encoded labels

***

### inverseTransform()

> **inverseTransform**(`y`): `any`[]

Defined in: [ml/preprocessing.js:413](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L413)

Transform indices back to original labels

#### Parameters

##### y

`number`[]

Encoded labels

#### Returns

`any`[]

Original labels

***

### transform()

> **transform**(`y`): `number`[]

Defined in: [ml/preprocessing.js:366](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L366)

Transform labels to indices

#### Parameters

##### y

`any`[]

Target labels

#### Returns

`number`[]

Encoded labels
