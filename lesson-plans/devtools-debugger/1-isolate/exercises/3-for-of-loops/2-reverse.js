'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}



let toOriginal = '';
for (let nextChar of backwards) {
  toOriginal = nextChar + toOriginal;
}

let transformation = toReverse + ' -> ' + backwards + ' -> ' + toOriginal;

alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
