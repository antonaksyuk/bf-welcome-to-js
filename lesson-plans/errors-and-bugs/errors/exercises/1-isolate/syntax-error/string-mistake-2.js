

'use strict';

console.log('--- in execution phase ---');


/*
  environment:hrome

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Unexpected string

  location:line 23

  life cycle: creation phase

  the mistake: incorrect usage of quotes

  the fix(es): change quotes to ""
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';


