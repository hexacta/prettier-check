#!/usr/bin/env node
"use strict";
const prettierCheck = require(".");
const args = process.argv.slice(2);
prettierCheck(args)
  .then(code => {
    process.exit(code);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
