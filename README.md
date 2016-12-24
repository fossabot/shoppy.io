# shoppy.io

> Ebay Shoppy Themes Manager

![https://travis-ci.org/tomsiwik/shoppy.io.svg?branch=master](https://travis-ci.org/tomsiwik/shoppy.io.svg?branch=master)
![https://ci.appveyor.com/api/projects/status/pyfalqw7f3d3n1i3?svg=true](https://ci.appveyor.com/api/projects/status/pyfalqw7f3d3n1i3?svg=true)

## Roadmap

Electron:
[ ] Add 'nightwatchjs' support and/or start understanding 'chai'
[ ] ~Add 'electron-builder'~ create installer rather then builder. npm run build already does that / https://github.com/unindented/electron-installer-windows + https://github.com/unindented/electron-installer-debian
[ ] Add 'electron-gh-releases'
[ ] Add updater support (electron-builder?)
[ ] Replace chai with Jasmine (visual e2e on electron)

Vue:
[ ] Implement 'vue-material'
[ ] Implement 'vue-i18n'

Dev:
[ ] CI Server (Travis CI / CircleCI [iOS Support])
[ ] Opensource to Github (Travis CI freemium)
[ ] Codecoverage codecov.io
[ ] Codeclimate codeclimate.com
[ ] Include Lighthouse tests
[ ] fuse-box > webpack

Recurring:
[ ] Daily: add a test a day
[ ] Weekly: Implement a feature

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