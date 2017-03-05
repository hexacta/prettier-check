# prettier-check [![Build Status](https://travis-ci.org/hexacta/prettier-check.svg?branch=master)](https://travis-ci.org/hexacta/prettier-check) [![npm version](https://img.shields.io/npm/v/prettier-check.svg?style=flat)](https://www.npmjs.com/package/prettier-check)

> Check that all files match [prettier](https://github.com/prettier/prettier) code style.


## Install

```
$ npm install --save-dev prettier prettier-check
```

> Make sure you have `prettier` as a dependency, if not, `prettier-check` may break when using yarn or old versions of npm. For more information see this [yarn issue](https://github.com/yarnpkg/yarn/issues/760).

## Usage

Use it in the test script in your package.json:

```json
  "scripts": {
    "test": "prettier-check src/**/*.js"
  },
```

## License

MIT © [Hexacta](https://www.hexacta.com)
