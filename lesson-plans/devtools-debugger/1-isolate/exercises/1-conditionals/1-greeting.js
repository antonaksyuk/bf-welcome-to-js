'use strict';

let inputFirstName = prompt('enter your first name:');
let inputLastName = prompt('enter your last name:')

let greeting = '';
if (inputFirstName === null && inputLastName === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = `hello ${inputFirstName} ${inputLastName}!`;
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
