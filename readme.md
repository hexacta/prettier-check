# prettier-check [![Build Status](https://travis-ci.org/hexacta/prettier-check.svg?branch=master)](https://travis-ci.org/hexacta/prettier-check) [![npm version](https://img.shields.io/npm/v/prettier-check.svg?style=flat)](https://www.npmjs.com/package/prettier-check)

> Check that all files match [prettier](https://github.com/prettier/prettier) code style.


## Install

```
$ npm install --save-dev prettier prettier-check
```

> Make sure you have `prettier` as a dependency (or globally).

## Usage

Use it in the test script in your package.json:

```json
  "scripts": {
    "test": "prettier-check src/**/*.js"
  },
```

All args are forwarded to prettier:

```json
  "scripts": {
    "test": "prettier-check --single-quote --trailing-comma es5 src/**/*.js"
  },
```

## License

MIT © [Hexacta](https://www.hexacta.com)
