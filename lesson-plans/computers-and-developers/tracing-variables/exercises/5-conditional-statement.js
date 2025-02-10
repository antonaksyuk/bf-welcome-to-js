'use strict';

// declaration variable "a" & initialisation it as a string - 'Ewin'
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

//declaration variable "b" & initialisation it as a concotination of tree strings - 'Hello '+'Ewin'+', your name is '
let b = 'Hello ' + a + ', your name is ';

// statement "if" check a condition, and if condition is true, it executes a block of code
if (a.length > 4) {
  b = b + 'long.';
  // statement "else" or "else if" is executes its own block of the code if the statement "if" is false 
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

// output value "b" to the browser's console depending on the string length of the variable "a" 
console.log(b);
