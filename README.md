# simple-react

## What?
A basic "hello world" React project using ES2015 modules without Webpack, Babel, JSX, and other (very good) tools.

## Why?
There's a lot of useful tooling for easily building React applications of any size. I felt like I was forgetting the basics of how to make React work without them so here's a simple project to do it with very few tools. Even npm (or yarn) isn't necessary if you'd like to run `node --experimental-modules index` manually.

But why ES2015 modules? I just wanted to see how native support for them worked.

## How?
`npm start` or `yarn start`

This code requires a Browser and Node.js version with ES2015 support (I used Node.js 9.x and Chrome 66). All of this could have been done inline in `index.html`, avoiding ES2015 modules, also making the basic http server in `index.mjs` (and Node.js support) unnecessary.
