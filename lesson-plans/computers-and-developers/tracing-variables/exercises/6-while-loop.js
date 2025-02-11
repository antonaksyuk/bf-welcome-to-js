'use strict';

// declaration variable "a" & initialisation it as a string - '*'
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

// declaration variable "b" & initialisation it as a empty string - ' '
let b = '';

// read the condition
while (b.length < a.length * 3) {
  // reassigne variable "b" to value which is a concatination os the strings of variables "a" and "b"
  b = b + a;
}

// output value "b" to the browser's console
console.log(b);
