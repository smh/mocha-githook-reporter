# Mocha Reporter for use with git hooks
[![Build Status](https://travis-ci.org/smh/mocha-githook-reporter.svg?branch=master)](https://travis-ci.org/smh/mocha-githook-reporter)
[![npm](https://img.shields.io/npm/v/mocha-githook-reporter.svg?maxAge=2592000)](https://www.npmjs.com/package/mocha-githook-reporter)

Will only output a report if there are any test failures, thus making it suitable for use with git hooks

## Installation

```shell
$ npm install mocha-githook-reporter --save-dev
```

or as a global module
```shell
$ npm install -g mocha-githook-reporter
```

## Usage
Run mocha with `mocha-githook-reporter`:

```shell
$ mocha test --reporter mocha-githook-reporter
```

