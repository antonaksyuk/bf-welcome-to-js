'use strict';

/* Four Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// trace the program a few times with different values

//declaration variable "a" & initialisation it as a string - 'Pieter'
let a = 'Pieter';
// let a = 'Blake';
// let a = 'George';

//declaration variable "b" & initialisation it as a string - 'Rabbit' or 'Wozzeck' or 'Schoenberg'
let b = 'Rabbit';
// let b = 'Wozzeck';
// let b = 'Schoenberg';

// declaration variable "c" & initialisation it as a concotination of two strings - ' ' + 'Rabbit'
let c = a + ' ' + b;

// declaration variable "d", initialisation it as a string & concatinate it with variable "x" - 'hello '+'Pieter' 
let d = 'hello ' + c;

// output value "d" to the browser's console - 'hello Pieter' 
console.log(d);

// reassign variable "d", initialisation it as a string & concatinate it with variable "x" - 'good bye '+'Pieter' 
d = 'good bye ' + c;

//output value "d" to the browser's console - 'good bye Pieter'
console.log(d);
