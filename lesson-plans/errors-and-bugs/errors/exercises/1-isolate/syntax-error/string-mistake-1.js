

'use strict';

console.log('--- in execution phase ---');


/*
  environment: hrome

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Invalid or unexpected token

  location: line 23

  life cycle: creation phase

  the mistake:string contains of two lines 

  the fix(es): delete spases and paragraph or add backtick to keep two lines
*/

const a = `this is 
two lines`;

console.log(a)


