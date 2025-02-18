'use strict';

console.log('--- in execution phase ---');

/*
  environment:hrome

  name:ReferenceError
  message:Cannot access 'isValidUserName' before initialization

  location:line 24

  life cycle:execution phase

  the mistake:the variable is declarated and initialisated after loop

  the fix(es): replace variable declaration from line 27 to line 23
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
