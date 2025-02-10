'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// declaration variable "a" & initialisation it as a string - 'y'
let a = 'y';

// declaration variable "b" & initialisation it as a string - 'x'
let b = 'x';

// declaration variable "t" & initialisation it as a empty string - ' '
let t = '';

// output values "t", "a" and "b" to the browser's console - `y`, `x`, ` ` 
console.log(a, b, t);

// reassign variable "t" with string of value `y`
t = a;

// reassign variable "a" with string of value `x`
a = b;

// reassign variable "b" with string of value ` `
b = t;

// output values "t", "a" and "b" to the browser's console - `x`, ` `, `y`
console.log(a, b, t);

// what did you do in this program?
// what are the final values of `a` and `b`?
// how are they changed from the initial values

// is it possible to swap a and b without using t?
