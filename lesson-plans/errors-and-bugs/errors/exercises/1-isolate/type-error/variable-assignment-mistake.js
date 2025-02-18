

'use strict';

console.log('--- in execution phase ---');


/*
  environment:hrome

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Invalid left-hand side in assignment

  location:line 25

  life cycle: creation phase

  the mistake:subsequense of reinitializatin wrong

  the fix(es):change subsequence in line 25
*/

let isHappy = false;

isHappy = true;


