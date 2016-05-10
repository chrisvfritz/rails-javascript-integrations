# Webpack + Vue

This version uses Webpack to create a completely isolated frontend that overrides `rake assets:precompile`. It provides everything you could possibly want in your development workflow.

## Usage

Assuming you have foreman installed (`gem install foreman`), use the development `Procfile` to launch Rails and Webpack together:

```
foreman start -f Procfile.dev
```

## Pros

- __Only 1 pipeline__: Sprockets is now completely out of the picture, as are any of Rails' other view-related features
- __CSS preprocessors & extraction__: SCSS (or other preprocessors) plus PostCSS for autoprefixing and other transforms, all extracted into a single CSS file
- __Automatic spritesheet generation__: Images and other files can also be referenced via the module system and smaller images with be base64 encoded and bundled directly into HTML, JavaScript, or CSS
- __Lint-on-save__: Catch errors and style violations before they catch you
- __Unit & E2E tests__: Unit tests for every component and E2E tests in multiple browsers
- __Primed for mobile__: Since the frontend is already independent of the backend, porting it to mobile with Cordova could be relatively trivial
- __Extremely extensible__: The Webpack ecosystem is _very_ rich, so it's likely anything else you might want to do with your builds is possible

## Cons

- __Very, very complex setup__: Setting all of this up by hand would probably take several days and maintaining it will require some knowledge of Webpack
- __Not progressive__: The entire frontend is now a SPA, so familiarity with Rails will not help designers or backend developers build simple pages
