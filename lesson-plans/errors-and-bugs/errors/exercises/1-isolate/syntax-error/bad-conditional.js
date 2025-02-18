

'use strict';

console.log('--- in execution phase ---');


/*
  environment:hrome 

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Unexpected token '{'

  location:line 27

  life cycle:execution phase

  the mistake:else not have a condition if

  the fix(es):add if in line 27
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


