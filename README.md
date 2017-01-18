# shoppy.io

> Ebay Shoppy Themes Manager

[![Travis CI](https://travis-ci.org/tomsiwik/shoppy.io.svg?branch=master)](https://travis-ci.org/tomsiwik/shoppy.io)
[![Appveyor Builds](https://ci.appveyor.com/api/projects/status/pyfalqw7f3d3n1i3?svg=true)](https://ci.appveyor.com/project/tomsiwik/shoppy-io)
[![codecov](https://codecov.io/gh/tomsiwik/shoppy.io/branch/master/graph/badge.svg)](https://codecov.io/gh/tomsiwik/shoppy.io)
[![Code Climate](https://codeclimate.com/github/tomsiwik/shoppy.io/badges/gpa.svg)](https://codeclimate.com/github/tomsiwik/shoppy.io)

## Roadmap

Electron:

  - [ ] Add 'nightwatchjs' support and/or start understanding 'chai'
  - [ ] Implement installer: 
    * https://github.com/unindented/electron-installer-windows
    * https://github.com/unindented/electron-installer-debian
    * https://github.com/mongodb-js/electron-installer-dmg
  - [ ] Add 'electron-gh-releases'
  - [ ] Add updater support (electron-builder?)
  - [ ] Replace chai with Jasmine (visual e2e on electron)
  - [ ] Consider Winston for logging - https://github.com/winstonjs/winston

Vue:

  - [ ] Implement 'vue-material'
  - [ ] Implement 'vue-i18n'
  - [ ] IndexDB Template rendering
  - [ ] WebCrypto Template encryption

Dev:

  - [x] CI Server (Travis CI / CircleCI [iOS Support])
  - [ ] Implement local tests just like Travis CI - https://github.com/vadimdemedes/trevor
  - [x] Opensource to Github (Travis CI freemium)
  - [x] Codecoverage codecov.io
  - [x] Codeclimate codeclimate.com
  - [ ] Include DevLab - https://github.com/TechnologyAdvice/DevLab
  - [ ] Include 'semantic-release' without npm publish
  - [ ] Include Lighthouse tests
  - [ ] fuse-box > webpack
  - [ ] Compressed builds, see [here](https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a#.wpbbbl20h)
  - [ ] Use [yarn](https://github.com/yarnpkg/yarn) on Travic CI ([read](https://docs.travis-ci.com/user/caching/))

Bugs:

  - [ ] Investigate: https://github.com/electron/spectron/issues/86

Recurring:

  - [ ] Daily: add a test a day
  - [ ] Weekly: Implement a feature

## Getting started dev / production

```bash
# Install dependencies
npm install

# Serve with hot reload at localhost:9080
npm run dev

# Build electron app for production
npm run build

# Run webpack in production
npm run pack
```

## Linting / Code Quality & Coverage

```bash
# Lint all your app/src's JS & Vue component files.
npm run lint

# Same as above but also attempt to fix issues.
npm run lint:fix

# CSS linting only
npm run lint:css
```

## Testing

```bash
# Run unit tests with Karma + Jasmine
npm run unit

# Run end-to-end tests with Spectron + Mocha
npm run e2e

# Run both above in one command
npm run test
```

## Vue Tooling

```bash
# Create a new vue route
npm run vue:route <routeName>

# Create vue module
npm run vuex:module <moduleName>
```

---

More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/).
