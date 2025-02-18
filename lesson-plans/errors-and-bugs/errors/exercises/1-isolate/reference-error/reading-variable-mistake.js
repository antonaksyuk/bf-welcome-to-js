'use strict';

console.log('--- in execution phase ---');

/*
  environment:hrome

  name:ReferenceError
  message:Cannot access 'tomatoes' before initialization

  location:line 20

  life cycle:execution phase

  the mistake: try console.log variable before declaration and initialization

  the fix(es): replase declaration before console.log
*/

let tomatoes = 'fresh';

console.log(tomatoes);
