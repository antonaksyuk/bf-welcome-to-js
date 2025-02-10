'use strict';

/* Comment & Log

  Add comments and logs to help a developer understand this program

*/
//declaration variable "first" & initialisation it as a string - 'Pieter'
let first = 'Pieter';

//declaration variable "last" & initialisation it as a string - 'Rabbit'
let last = 'Rabbit';

//declaration variable "fullName" & initialisation it as a concotination of tree strings - 'Pieter'+' '+'Rabbit'
let fullName = first + ' ' + last;

//output value "fullName" to the browser's console - 'Pieter Rabbit' 
console.log(fullName);

// declaration variable "greeting", initialisation it as a string & concatinate it with variable "fullName" - 'hello '+'Pieter Rabbit'
let greeting = 'hello ' + fullName;

// reassign variable "greeting", initialisation it as a string 'good bye ' & concatinate it with variable "fullName" - 'good bye '+'Pieter Rabbit'
greeting = 'good bye ' + fullName;

//output value "fgreeting" to the browser's console - 'good bye Pieter Rabbit' 
console.log(greeting);
