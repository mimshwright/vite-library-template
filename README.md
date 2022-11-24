# Vite npm package template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A template for an npm package using:

- vite
- typescript
- jest
- prettier & eslint
- & more!

## Setup

1. Install packages.
1. Edit the top of the package.json file to include the correct package name and description. You can find and replace for "\<LIBRARY\>"
1. Edit the README.md

## Scripts

    - `lint` : lint the code. You can also do `fix` to auto-fix.
    - `test` : test with jest. Also `test:coverage` and `test:watch`
    - `build` : bundle the code
    - `cz` & `release` : see below

## Commits & Releases

When ready to commit, please commit using `yarn cz` to use commitizen for standard format commits.

When ready to release use `yarn release` with the `-r patch|minor|major` flag (default without the flag is `patch`).

You'll then need to publish your changes separately.
