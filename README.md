# @webilix/validator-library

Data validator library

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage-typescript)
-   [Array Validators](#array-validators)
-   [String Validators](#string-validators)
-   [Value Validators](#value-validators)
-   [Tests](#tests)

## Installation

```bash
npm install --save @webilix/validator-library
```

## Usage

```typescript
import { Validator } from '@webilix/validator-library';
Validator.VALUE.isString('test');
```

## Array Validators

```javascript
Validator.ARRAY.
```

-   isIn
-   isUnique

## String Validators

```javascript
Validator.STRING.
```

-   isBankCard
-   isDate
-   isDomain
-   isEmail
-   isHexColor
-   isIP4
-   isJsonDate
-   isMobile
-   isNationalCode
-   isNumeric
-   isObjectId
-   isTime
-   isUrl

## Value Validators

```javascript
Validator.VALUE.
```

-   isArray
-   isBoolean
-   isDate
-   isEmpty
-   isNull
-   isNumber
-   isObject
-   isString

## Tests

```bash
git clone https://github.com/webilix/validator-library.git
npm install
npm test
```
