'use strict';

console.log('--- in execution phase ---');

/*
  environment:hrome

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Identifier 'tree' has already been declared

  location:line 22

  life cycle:creation phase

  the mistake:redeclaration variable with let

  the fix(es): delete declaration let on line 22
*/

let tree = 'oak';

tree = 'birch';
