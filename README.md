# TypeScript
TypeScript, Fullstack courses part 9

https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

## Settin thing up

You can install both ts-node and the official typescript package globally by running:

`npm install -g ts-node typescript` 


If you can't or don't want to install global packages, you can create an npm project which has the required dependencies and run your scripts in it. We will also take this approach.

As we remember from part 3, an npm project is set by running the command npm init in an empty directory. Then we can install the dependencies by running

`npm install --save-dev ts-node typescript`

and set up scripts within the package.json:

The horrors of any
Exercises 9.6.-9.7.
c Typing the express app
d React with types
b

First steps with TypeScript
After the brief introduction to the main principles of TypeScript, we are now ready to start our journey towards becoming FullStack TypeScript developers. Rather than giving you a thorough introduction to all aspects of TypeScript, we will focus in this part on the most common issues that arise when developing express backends or React frontends with TypeScript. In addition to language features, we will also have a strong emphasis on tooling.

Setting things up
Install TypeScript support to your editor of choice. Visual Studio Code works natively with TypeScript.

As mentioned earlier, TypeScript code is not executable by itself. It has to be first compiled into executable JavaScript. When TypeScript is compiled into JavaScript, the code becomes subject for type erasure. This means that type annotations, interfaces, type aliases, and other type system constructs are removed and the result is pure ready-to-run JavaScript.

In a production environment, the need for compilation often means that you have to set up a "build step." During the build step all TypeScript code is compiled into JavaScript in a separate folder, and the production environment then runs the code from that folder. In a development environment, it is often handier to make use of real-time compilation and auto-reloading in order to be able to see the resulting changes more quickly.

Let's start writing our first TypeScript app. To keep things simple, let's start by using the npm package ts-node. It compiles and executes the specified TypeScript file immediately, so that there is no need for a separate compilation step.

You can install both ts-node and the official typescript package globally by running:

`npm install -g ts-node typescript`

If you can't or don't want to install global packages, you can create an npm project which has the required dependencies and run your scripts in it. We will also take this approach.

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
