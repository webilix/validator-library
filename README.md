# validator-library

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
npm install --save validator-library
```

## Usage

```typescript
import * as vd from 'validator-library';
vd.VALUE.isString('test');
```

## Array Validators

-   isUnique
-   isIn

## String Validators

-   isEmail
-   isUrl
-   isMobile
-   isNumeric
-   isDomain
-   isDate
-   isTime
-   isJsonDate
-   isObjectId
-   isNationalCode
-   isBankCard

## Value Validators

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
