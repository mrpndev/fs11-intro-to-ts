# TypeScript Lesson

Strictly typed programming language. A superset of JavaScript built by Microsoft. 

Allows static typing which checks the value types before the program runs. 

TypeScript files get transpiled into JavaScript files so that they can still run in the browser without any compatibility issues.

This means that TS is not an interpreted language like JavaScript, but a compiled one.

The major point of it is so that it prevents us, people/devs from making mistakes such as type mismatches.

## Installation

TS can be installed globally or per project. It is just a tool for developers, so it doesn't need to be included as something crucial for application deployment. We will use it as a development dependency as we learn.

- create a new project using `npm init -y`
- install TS using `npm i typescript --save-dev`
- verify installation using `npx tsc --version`

`npx` is a command built into npm. It allows us to run npm package commands, sorta like `npm run ...`

- create a TS configuration file using `npx tsc --init`
- this creates `tsconfig.json` which is used to define finding source, where to place compiled files (converted into .js), which JS ECMA script to convert to, how to strictly check types, which module system to generate (CommonJS vs ESM)

### Convenient `package.json` Scripts

```json
"scripts": {
    "build": "tsc",
	"start": "node dist/index.js",
	"dev": "tsc --watch",
	"check": "tsc --notEmit"
  }
```

- `build` executes entire compiler
	- checks `tsconfig.json`
	- reads all of your `.ts` files
	- checks code for errors
	- compiles files into `.js`
	- saves files into your `dist` folder
- 'start` starts our project
	- we will explain this later (deployment time)
- 'dev' is kinda like `nodemon` for ts
	- compiles the project
	- runs it in terminal
	- watches for ts changes
	- recompiles every time something has changed
- `check` checks for errors without compiling

### Nodemon for TypeScript

- install tsx with `npm i tsx --save-dev`
- change your dev script to `tsx watch src/index.ts`