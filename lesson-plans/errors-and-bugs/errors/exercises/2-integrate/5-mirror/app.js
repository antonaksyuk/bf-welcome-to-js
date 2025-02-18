import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:hrome

  name:SyntaxError
  message:Invalid left-hand side expression in prefix operation

  location:line 23

  life cycle: execution phase

  the mistake: message in console.log should be plased 

  the fix(es):place logged message in quotations mark
*/

whenFormDataChanges('input', () => {
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});
