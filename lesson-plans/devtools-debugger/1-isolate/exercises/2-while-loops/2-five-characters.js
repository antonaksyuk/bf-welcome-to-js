'use strict';

// let input = null;
// while (input === null || input.length !== 5) {
//   input = prompt('enter something with 5 characters:');
// }

// let message = 'thank you for "' + input + '"!';

// alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let input = null;
let inputConfirm = null;

while (input === null || input !== 'everything') {
input = prompt('enter word: everything');

if (input === 'everything') {
  inputConfirm = prompt('enter word: "everything" to confirm')
}

if (inputConfirm === 'everything') {
let message = 'thank you for "' + input + '"!';

alert(message);

}
}
