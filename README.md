# envar
Normalize environment variables, and just that.

## Install

```
npm i -S @brunoscopelliti/envar
```

## Usage

```js
const normalize = require("@jscore/envar");

// process.env;
// {
//   ENABLE_SSL: "true",
//   FEATURE_FLAG: "{ \"enableA\": true, \"enableB\": false }",
//   NODE_ENV: "production",
//   PORT: "3000"
// }

normalize(process.env);

{
  ENABLE_SSL: true,
  FEATURE_FLAG: {
    enableA: true,
    enableB: false
  },
  NODE_ENV: "production",
  PORT: 3000
}
```
