# Development

Library uses [Styleguidist](https://react-styleguidist.js.org/) for local development and documentation.

Node version >=14 required.

### `yarn`

Installs dependencies.

### `yarn dev`

Runs documentation in the development mode.
Open [http://localhost:6060](http://localhost:6060) to view it in your browser.

### `yarn build:docs`

Builds Styleguidist documentation.

## Publishing

Before publishing changes make sure to update the library version in the package.json file. We are using [Semantic Versioning](https://semver.org/).

### `yarn build`

Builds library for publishing on [NPM](npmjs.com).

### `yarn publish`

Publishes library to NPM: https://www.npmjs.com/package/grindery-ui