---
title: "LabelEncoder"
---

Defined in: [core/table.js:226](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L226)

Simple Label Encoder for categorical labels -> integers

Note: this is the internal encoder used by prepareX/prepareXY and
persisted with fitted models (classes keep first-seen order). The
user-facing ml.preprocessing.LabelEncoder is a separate class with
different semantics (sorted classes, table-descriptor support).

handleUnknown controls what transform() does with categories not seen
during fit: 'error' (default) throws, 'ignore' maps them to NaN, and
'extend' registers them as new classes (legacy behaviour; unsafe at
predict time because indices grow past the fitted class set).

## Constructors

### Constructor

> **new LabelEncoder**(`__namedParameters?`): `LabelEncoder`

Defined in: [core/table.js:227](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L227)

#### Parameters

##### \_\_namedParameters?

###### handleUnknown?

`string` = `'error'`

#### Returns

`LabelEncoder`

## Properties

### classes\_

> **classes\_**: `any`[]

Defined in: [core/table.js:228](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L228)

***

### classIndex

> **classIndex**: `Map`\<`any`, `any`\>

Defined in: [core/table.js:229](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L229)

***

### handleUnknown

> **handleUnknown**: `string`

Defined in: [core/table.js:230](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L230)

## Methods

### fit()

> **fit**(`values?`): `LabelEncoder`

Defined in: [core/table.js:233](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L233)

#### Parameters

##### values?

`any`[] = `[]`

#### Returns

`LabelEncoder`

***

### fitTransform()

> **fitTransform**(`values?`): `any`[]

Defined in: [core/table.js:266](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L266)

#### Parameters

##### values?

`any`[] = `[]`

#### Returns

`any`[]

***

### inverseTransform()

> **inverseTransform**(`indices?`): `any`[]

Defined in: [core/table.js:271](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L271)

#### Parameters

##### indices?

`any`[] = `[]`

#### Returns

`any`[]

***

### toJSON()

> **toJSON**(): `object`

Defined in: [core/table.js:275](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L275)

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'LabelEncoder'`

##### classes

> **classes**: `any`[]

##### handleUnknown

> **handleUnknown**: `string`

***

### transform()

> **transform**(`values?`): `any`[]

Defined in: [core/table.js:246](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L246)

#### Parameters

##### values?

`any`[] = `[]`

#### Returns

`any`[]

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `LabelEncoder`

Defined in: [core/table.js:283](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/table.js#L283)

#### Parameters

##### obj?

#### Returns

`LabelEncoder`
