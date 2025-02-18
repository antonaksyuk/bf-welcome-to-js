'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line:22
    why: new declaration of variable "input" in while loop
    trying: delete "const" on line 22

*/

let message = '';

let input = null;
while (input === null || input.length === 0) {
  input = prompt('enter something');

  message = 'you entered "' + input + '"';
}

alert(message);
