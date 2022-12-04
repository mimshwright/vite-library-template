# Vite npm package template

A template for an npm package using:

- vite
- typescript
- jest
- prettier & eslint
- controlled commits with commitizen, lint-staged, etc.
- & more!

Inspired by this post by [Onur Önder](https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/)

## Setup

1. Install packages.
1. Edit the top of the package.json file to include the correct package name and description. You can find and replace for "\<LIBRARY\>"
1. Edit the README.md
1. You may need to review the `vite.config.js` depending on your library structure.

## Scripts

    - `lint` : lint the code. You can also do `fix` to auto-fix.
    - `test` : test with jest. Also `test:coverage` and `test:watch`
    - `build` : bundle the code
    - `commit` & `release` : see below
    - `pushpub`: Used after `release` it pushes and publishes the library.
    - `deploy`: Build the demo code (index.html) and publish to gh-pages

## Commits & Releases

Code is automatically linted before being committed. I recommend installing the plugins for eslint and prettier in your code editor. You can attempt to fix linting issues with `yarn fix`.

When ready to commit, please commit using `yarn commit` to use commitizen for standard format commits.

When ready to release use `yarn release` with the `-r patch|minor|major` flag (default without the flag is `patch`).

You'll then need to publish your changes separately. That can be done with `yarn pushpub`.

You can deploy an updated demo to github pages using `yarn deploy`
