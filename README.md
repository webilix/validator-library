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

-   isUnique
-   isIn

## String Validators

```javascript
Validator.STRING.
```

-   isEmail
-   isUrl
-   isMobile
-   isNumeric
-   isDomain
-   isDate
-   isTime
-   isJsonDate
-   isIP4
-   isObjectId
-   isNationalCode
-   isBankCard

## Value Validators

```javascript
Validator.VALUE.
```

-   isNull
-   isEmpty
-   isString
-   isNumber
-   isBoolean
-   isDate
-   isArray
-   isObject

## Tests

```bash
git clone https://github.com/webilix/validator-library.git
npm install
npm test
```
