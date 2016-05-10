# Pure Sprockets with jQuery

This version uses nothing but the Rails asset pipeline, plain ES5 JavaScript, and the jQuery that ships with Rails.

## Usage

Just launch Rails normally:

```
rails server
```

## Pros

- __Zero setup__: just create a new JS file and get minification and gzipping out of the box
- __Plain ES5__: no Babel or CoffeeScript required, though CoffeeScript support _also_ comes out of the box
- __Progressive__: The parts of the app that have to be smart are, but everything else is just regular HTML
- __Scoped__: all classes begin with `js-`, so that both developers and designers can happily add and remove classes without accidentally stepping on each other's toes
- __jQuery UJS__: Rails' builtin jQuery UJS automatically sends the authenticity token in the header of jQuery's web requests

## Cons

- __Too imperative__: jQuery-style programming is inherently imperative, which doesn't work well with the more functional reactivity model that makes UIs easy to think about
- __Componentization is hard__: The patterns to manage state, declarative rendering, events, actions, etc all require discipline and experience
- __Lots of boilerplate__: A lot of extra classes and extra code, which would require reinventing a framework to DRY up
- __Ugly HTML__: No HTML syntax highlighting and it must be built using clunky string concatenation
