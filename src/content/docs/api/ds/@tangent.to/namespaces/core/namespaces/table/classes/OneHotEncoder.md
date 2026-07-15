---
title: "OneHotEncoder"
---

Defined in: [core/table.js:299](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L299)

Simple OneHotEncoder for a single categorical column
Note: this encoder returns an array of arrays (one-hot vectors)

## Constructors

### Constructor

> **new OneHotEncoder**(`__namedParameters?`): `OneHotEncoder`

Defined in: [core/table.js:300](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L300)

#### Parameters

##### \_\_namedParameters?

###### handleUnknown?

`string` = `'ignore'`

#### Returns

`OneHotEncoder`

## Properties

### \_columnConfigs

> **\_columnConfigs**: `Map`\<`any`, `any`\>

Defined in: [core/table.js:304](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L304)

***

### \_columns

> **\_columns**: `any`[]

Defined in: [core/table.js:368](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L368)

***

### \_encoders

> **\_encoders**: `Map`\<`any`, `any`\>

Defined in: [core/table.js:369](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L369)

***

### categories\_

> **categories\_**: `any`[]

Defined in: [core/table.js:301](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L301)

***

### catIndex

> **catIndex**: `Map`\<`any`, `any`\>

Defined in: [core/table.js:302](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L302)

***

### handleUnknown

> **handleUnknown**: `string`

Defined in: [core/table.js:303](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L303)

## Methods

### \_fitDeclarative()

> **\_fitDeclarative**(`options`): `OneHotEncoder`

Defined in: [core/table.js:359](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L359)

Declarative API for fit

#### Parameters

##### options

`any`

{ data, columns }

#### Returns

`OneHotEncoder`

this

***

### \_fitTransformDeclarative()

> **\_fitTransformDeclarative**(`options`): `any`[]

Defined in: [core/table.js:424](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L424)

Declarative API for fitTransform

#### Parameters

##### options

`any`

{ data, columns }

#### Returns

`any`[]

Array of objects with one-hot encoded columns

***

### \_transformDeclarative()

> **\_transformDeclarative**(`options`): `any`[]

Defined in: [core/table.js:391](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L391)

Declarative API for transform

#### Parameters

##### options

`any`

{ data }

#### Returns

`any`[]

Array of objects with one-hot encoded columns

***

### fit()

> **fit**(`values?`): `OneHotEncoder`

Defined in: [core/table.js:307](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L307)

#### Parameters

##### values?

`any`[] = `[]`

#### Returns

`OneHotEncoder`

***

### fitTransform()

> **fitTransform**(`valuesOrOptions?`): `any`[]

Defined in: [core/table.js:341](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L341)

#### Parameters

##### valuesOrOptions?

`any`[] = `[]`

#### Returns

`any`[]

***

### getFeatureNames()

> **getFeatureNames**(`prefix?`): `string`[]

Defined in: [core/table.js:433](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L433)

Get all feature names for declarative API

#### Parameters

##### prefix?

`string` = `''`

#### Returns

`string`[]

All feature names across all columns

***

### toJSON()

> **toJSON**(): `object`

Defined in: [core/table.js:450](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L450)

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'OneHotEncoder'`

##### categories

> **categories**: `any`[]

***

### transform()

> **transform**(`values?`): `any`[][]

Defined in: [core/table.js:320](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L320)

#### Parameters

##### values?

`any`[] = `[]`

#### Returns

`any`[][]

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `OneHotEncoder`

Defined in: [core/table.js:454](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/table.js#L454)

#### Parameters

##### obj?

#### Returns

`OneHotEncoder`
