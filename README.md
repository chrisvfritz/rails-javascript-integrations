# Sprockets + Browserify + Vue

This version uses the Rails asset pipeline with Browserify. Components are organized into `.vue` files, JS written in ES6/2015+, with a UMD module system.

## Usage

Assuming you have foreman installed (`gem install foreman`), use the development `Procfile` to launch Rails and Browserify together:

```
foreman start -f Procfile.dev
```

## Pros

- __A real module system__: UMD via Browserify makes organizing JavaScript much easier and works wonders for dead code elimination
- __Babel ES6/2015+__: Use the JavaScript of tomorrow, today, extensible via plugins
- __Beautiful components__: Write native HTML/JS/CSS with syntax highlighting and other language-specific editor tools
- __Still progressive__: You still don't need to have all of your app managed by JavaScript - the parts that need to be really smart can be augmented with custom web components
- __Bye-bye jQuery__: This is a good point to ditch jQuery altogether, cutting the build size down by more than half
- __Simple CSRF integration__: Only one line of config to get vue-resource's Ajax working with Rails' CSRF security features
- __Hot module reloading__: When you change a JavaScript file, updates are instantly applied to the page without state loss
- __Componentized & scoped CSS__: Adding scoped CSS to a component is as simple as adding a `style` tag with the `scoped` attribute

## Cons

- __Slightly more advanced setup__: Total setup took about 30 minutes by hand
- __Potentially more complex CSS__: Two sources of CSS mean that depending on the team, designers and developers may have to coordinate more on design if they want to take advantage of component CSS
