# prettier-check [![Build Status](https://travis-ci.org/hexacta/prettier-check.svg?branch=master)](https://travis-ci.org/hexacta/prettier-check) [![npm version](https://img.shields.io/npm/v/prettier-check.svg?style=flat)](https://www.npmjs.com/package/prettier-check)

> Check that all files match [prettier](https://github.com/prettier/prettier) code style.


## Install

```
$ npm install --save-dev prettier-check
```

> :bug: If you are using yarn there is an [open issue from yarn](https://github.com/yarnpkg/yarn/issues/760) that breaks `prettier-check`. But there is a [workaround](https://github.com/wix/yarn-bin-fix).

## Usage

Use it in the test script in your package.json:

```json
  "scripts": {
    "test": "prettier-check src/**/*.js"
  },
```

## License

MIT © [Hexacta](https://www.hexacta.com)
