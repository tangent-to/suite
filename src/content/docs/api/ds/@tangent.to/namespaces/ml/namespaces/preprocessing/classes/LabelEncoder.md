---
title: "LabelEncoder"
---

Defined in: [ds/src/ml/preprocessing.js:336](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L336)

Encode target labels with value between 0 and n_classes-1

Note: distinct from the internal core/table.js LabelEncoder used by
prepareX/prepareXY (which keeps first-seen class order and is persisted
with fitted models). This one sorts classes and supports table
descriptors; the two are intentionally separate.

## Constructors

### Constructor

> **new LabelEncoder**(): `LabelEncoder`

Defined in: [ds/src/ml/preprocessing.js:337](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L337)

#### Returns

`LabelEncoder`

## Properties

### \_tableColumn

> **\_tableColumn**: `any`

Defined in: [ds/src/ml/preprocessing.js:340](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L340)

***

### classes

> **classes**: `any`[]

Defined in: [ds/src/ml/preprocessing.js:338](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L338)

***

### classMap

> **classMap**: `Map`\<`any`, `number`\>

Defined in: [ds/src/ml/preprocessing.js:339](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L339)

## Methods

### \_extractLabelVector()

> **\_extractLabelVector**(`input`, `__namedParameters?`): `object`

Defined in: [ds/src/ml/preprocessing.js:343](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L343)

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

Defined in: [ds/src/ml/preprocessing.js:370](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L370)

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

Defined in: [ds/src/ml/preprocessing.js:421](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L421)

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

Defined in: [ds/src/ml/preprocessing.js:430](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L430)

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

Defined in: [ds/src/ml/preprocessing.js:383](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L383)

Transform labels to indices

#### Parameters

##### y

`any`[]

Target labels

#### Returns

`number`[]

Encoded labels
