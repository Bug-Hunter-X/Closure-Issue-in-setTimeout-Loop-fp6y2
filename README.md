# TypeScript Closure Issue in setTimeout Loop

This repository demonstrates a common closure issue encountered when using setTimeout inside a loop in TypeScript (and JavaScript).

The `bug.ts` file contains a function `printNumbers2` that attempts to print numbers 1 through 5 with a 1-second delay between each number using `setTimeout`. However, due to the closure issue, it incorrectly prints 6 five times.

The `bugSolution.ts` file shows the corrected version using an immediately invoked function expression (IIFE) to capture the current value of `i` in each iteration.

## How to reproduce:

1. Clone the repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` to observe the incorrect output of the original code.
4. Run `tsc bugSolution.ts` and `node bugSolution.js` to see the correct output using the provided solution.