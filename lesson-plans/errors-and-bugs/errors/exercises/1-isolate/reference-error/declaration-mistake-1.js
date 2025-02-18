'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome 

  name:ReferenceError
  message: welf is not defined

  location:string 20

  life cycle:in execution phase

  the mistake:variable is not declarated

  the fix(es): declarate variable "const welf..." 
*/

const welf = 'ingrad';

console.log(welf);
