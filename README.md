# Pure Sprockets with Vue

This version uses the Rails asset pipeline, plain ES5 JavaScript, the jQuery that ships with Rails, and Vue.js to make componentization much simpler.

## Usage

Just launch Rails normally:

```
rails server
```

## Pros

- __(Almost) zero setup__: Beyond our one JS file, we also add a dependency in our application layout and add a line to `application.js` (there's also [a `vuejs-rails` gem](https://github.com/adambutler/vuejs-rails) for simple asset pipeline integration)
- __Plain ES5__: no Babel or CoffeeScript required, though CoffeeScript support _also_ comes out of the box
- __Progressive__: The parts of the app that have to be smart are, but everything else is just regular HTML
- __Really simple scoping__: No extra classes, just custom elements
- __Plays well with jQuery__: If you have existing UI controlled by jQuery, Vue won't freak out and break like React does
- __jQuery UJS__: Rails' builtin jQuery UJS automatically sends the authenticity token in the header of jQuery's web requests
- __Less thinking__: Using a simple component framework, there's a clear place for everything and a clear strategy for tackling any problem
- __Minimized boilerplate__: The template reads easily and clearly describes what the component does, even for people who don't understand JavaScript

## Cons

- __Still kinda ugly HTML__: No HTML syntax highlighting and we have to use a lot of backslashes to escape the multiline string
- __Requires a little learning__: A few hours with [the _excellent_ Vue docs](http://vuejs.org/guide/) is recommended to be optimally productive
