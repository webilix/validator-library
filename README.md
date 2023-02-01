# @webilix/validator-library

<div style="color: rgb(255, 100, 100); font-weight 600; font-size: 16px; border: 1px solid rgb(255, 100, 100); padding: 1rem">
This package has been deprecated, please use <a href="https://github.com/webilix/helper-library">@webilix/helper-library</a> instead.
</div>
<br><br>

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
