# TypeScript
TypeScript, Fullstack courses part 9

https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

types for existing packages can be found from the @types organization: http://definitelytyped.org/

updating typeScript 

`npm install -g typescript@latest`

## Setting up

Install TypeScript support to your editor of choice. Visual Studio Code works natively with TypeScript.

As mentioned earlier, TypeScript code is not executable by itself. It has to be first compiled into executable JavaScript. In a production environment, the need for compilation often means that you have to set up a "build step." During the build step all TypeScript code is compiled into JavaScript in a separate folder, and the production environment then runs the code from that folder. In a development environment, it is often handier to make use of real-time compilation and auto-reloading in order to be able to see the resulting changes more quickly.

Let's  start by using the npm package ts-node. It compiles and executes the specified TypeScript file immediately, so that there is no need for a separate compilation step.

You can install both ts-node and the official typescript package globally by running:

`npm install -g ts-node typescript` 


If you can't or don't want to install global packages, you can create an npm project which has the required dependencies and run your scripts in it.

As we remember from part 3, an npm project is set by running the command npm init in an empty directory. Then we can install the dependencies by running

`npm install --save-dev ts-node typescript`


and set up scripts within the package.json:
```
{
  // ..
  "scripts": {
    "ts-node": "ts-node"
  },
  // ..
}
```
You can now use ts-node within this directory by running npm run ts-node. Note that if you are using ts-node through package.json, all command-line arguments for the script need to be prefixed with --. So if you want to run file.ts with ts-node, the whole command is:

`npm run ts-node -- file.ts`

You can access TypeScript's official playground here:https://www.typescriptlang.org/play

The tsconfig.json file is used to define how the TypeScript compiler should interpret the code, how strictly the compiler should work, which files to watch or ignore, and much much more. For now we will only use the compiler option noImplicitAny, that does not require to have types for all variables used.https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

```
{
  "compilerOptions":{
    "noImplicitAny": false
  }
}
```
One of the best things in TypeScript's editor support is that you don't necessarily need to even run the code to see the issues. The VSCode plugin

# Use

Now the Operation type accepts only three kinds of input; exactly the three strings we wanted. Using the OR operator | we can define a variable to accept multiple values by creating a union type. In this case, we used exact strings (that, in technical terms, are called string literal types) but with unions, you could also make the compiler accept for example both string and number: string | number.

The type keyword defines a new name for a type: a type alias. Since the defined type is a union of three possible values, it is handy to give it an alias that has a representative name.

`type Operation = 'multiply' | 'add' | 'divide'; `

type Operation = 'multiply' | 'add' | 'divide';

```
type Operation = 'multiply' | 'add' | 'divide';

type Result = number;

const calculator = (a: number, b: number, op: Operation) : Result => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
}

try {
  console.log(calculator(1, 5 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
```
NB: Since the typings are only used before compilation, the typings are not needed in the production build and they should always be in the devDependencies of the package.json.

Since version 10.0 ts-node has defined @types/node as a peer rependency. If the version of npm is at least 7.0, the peer dependencies of a project automatically installed by then npm. If you have an older npm, the peer dependency must be installed explicitly:
`npm install --save-dev @types/node`

#Improving the project
Next, let's add npm scripts to run our two programs multiplier and calculator:
```
{
  "name": "fs-open",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "ts-node": "ts-node",
    "multiply": "ts-node multiplier.ts",
    "calculate": "ts-node calculator.ts"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^10.5.0",
    "typescript": "^4.5.5"
  }
}
```
We can get the multiplier to work with command-line parameters with the following changes:
```
const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText,  a * b);
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);
```
And we can run it with:
`npm run multiply 5 2`

```
interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText,  a * b);
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
```
# tsconfig
```
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}
```
```
{
  "compilerOptions": {
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "strictBindCallApply": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "declaration": true,
  }
}
```
https://www.staging-typescript.org/tsconfig
http://json.schemastore.org/tsconfig

# Add express
`npm install express`
and then add the start script to package.json:
```
{
  // ..
  "scripts": {
    "ts-node": "ts-node",
    "multiply": "ts-node multiplier.ts",
    "calculate": "ts-node calculator.ts",
    "start": "ts-node index.ts"
  },
  // ..
}
```
Now we can create the file index.ts, and write the HTTP GET ping endpoint to it:
```
import express from 'express'
const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
Install types for express

`npm install --save-dev @types/express`

always use this method in the frontend. If import does not work, try a combined method: import ... = require('...').

If it is absolutely impossible to get rid of an unused variable, you can prefix it with an underscore to inform the compiler you have thought about it and there is nothing you can do.  Rename the req variable to _req. 

To simplify the development, we should enable auto-reloading to improve our workflow. In this course, you have already used nodemon, but ts-node has an alternative called ts-node-dev. It is meant to be used only with a development environment which takes care of recompilation on every change, so restarting the application won't be necessary.

# auto-reloading development environment
Let's install ts-node-dev to our development dependencies:
`npm install --save-dev ts-node-dev`
Add a script to package.json:
```
{
  // ...
  "scripts": {
      // ...
      "dev": "ts-node-dev index.ts",
  },
  // ...
}
```
And now, by running npm run dev, we have a working, auto-reloading development environment for our project!

# Query parameters
http://localhost:3002/bmi?height=180&weight=72

http://expressjs.com/en/5x/api.html#req.query
```
app.get('/bmi', (_req, res) => { 
res.json(calculateBmi( Number(_req.query.height), Number(_req.query.weight)));
});

```
# Any
configuration rule noImplicitAny exists on compiler level, and it is highly recommended to keep it on at all times. In the rare occasions when you truly cannot know what the type of a variable is, you should explicitly state that in the code:

const a : any = /* no clue what the type will be! */

# Eslint

`npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`

We will configure eslint to disallow explicit any. Write the following rules to .eslintrc:
```
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-explicit-any": 2
  }
}
```
(Newer versions of eslint has this rule on by default, so you don't necessarily need to add it separately.)

Let us also set up a lint npm script to inspect the files with .ts extension by modifying the package.json file:
```
{
  // ...
  "scripts": {
      "start": "ts-node index.ts",
      "dev": "ts-node-dev index.ts",
      "lint": "eslint --ext .ts ."
      //  ...
  },
  // ...
}
```
Now lint will complain if we try to define a variable of type any

https://github.com/typescript-eslint/typescript-eslint

So we will use the following .eslintrc
```
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "plugins": ["@typescript-eslint"],
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ],
    "no-case-declarations": "off"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
Wdisable some ESlint rules to get the data from the request body:

Disabling @typescript-eslint/no-unsafe-assignment for the destructuring assignment is nearly enough:
```
app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  const { value1, value2, op } = req.body;
 ```
# Setting up the project2

One major change from the previous part is that we're not going to use ts-node anymore. It is a handy tool that helps you get started, but in the long run it is advisable to use the official TypeScript compiler that comes with the typescript npm-package. The official compiler generates and packages JavaScript files from the .ts files so that the built production version won't contain any TypeScript code anymore. This is the exact outcome we are aiming for, since TypeScript itself is not executable by browsers or Node.

run npm init and install the typescript package as a dev dependency.

 ` npm install typescript --save-dev `
 
 TypeScript's Native Compiler (tsc) can help us initialize our project by generating our tsconfig.json file. First, we need to add the tsc command to the list of executable scripts in package.json (unless you have installed typescript globally). Even if you installed TypeScript globally, you should always add it as a dev dependency to your project.

The npm script for running tsc is set as follows:
```
{
  // ..
  "scripts": {
    "tsc": "tsc"
  },
  // ..
}
```
We can now initialise our tsconfig.json settings by running:

`npm run tsc -- --init`

tsconfig.json file 

```
{
  "compilerOptions": {
    "target": "ES6",     //compiler which ECMAScript version to use when generating JavaScript. ES6 
    "outDir": "./build/",     //outDir tells where the compiled code should be placed.
    "module": "commonjs",//tells the compiler that we want to use CommonJS modules in the compiled code.we can use the old require syntax instead of import one
    "strict": true,
    "noUnusedLocals": true, //noUnusedLocals prevents having unused local variables, and noUnusedParameters throws an error if a function has unused parameters.
    "noUnusedParameters": true, 
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,noFallthroughCasesInSwitch ensures that, in a switch case, each case ends either with a return or a break statement.
    "esModuleInterop": true esModuleInterop allows interoperability between CommonJS and ES Modules

  }
```
strict is actually a shorthand for multiple separate options: noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes and strictPropertyInitialization. They guide our coding style to use the TypeScript features more strictly. For us, perhaps the most important is the already-familiar noImplicitAny. It prevents implicitly setting type any, which can for example happen if you don't type the parameters of a function. Details about the rest of the configurations can be found in the tsconfig documentation. Using strict is suggested by the official documentation.

https://www.staging-typescript.org/tsconfig#strict

 installing express and, of course, also @types/express and eslint
 ```
 npm install express
npm install --save-dev eslint @types/express @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
package.json should look like this:
```
{
  "name": "flight_diary",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "tsc": "tsc"
  },
  "author": "Jane Doe",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@typescript-eslint/eslint-plugin": "^5.12.1",
    "@typescript-eslint/parser": "^5.12.1",
    "eslint": "^8.9.0",
    "typescript": "^4.5.5"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}
```
We also create an .eslintrc file with the following content:
```
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "plugins": ["@typescript-eslint"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ],
    "no-case-declarations": "off"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
install ts-node-dev:

`npm install --save-dev ts-node-dev`

 define a few more npm scripts, and voilà, we are ready to begin:
```
{
  // ...
  "scripts": {
    "tsc": "tsc",
    "dev": "ts-node-dev index.ts",
    "lint": "eslint --ext .ts ."
  },
  // ...
}
```
