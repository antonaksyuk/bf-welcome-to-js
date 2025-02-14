'use strict';

// let text = null;
// while (text === null) {
//   text = prompt('enter some text, each character will be doubled:');
// }

// let doubled = '';
// for (let nextChar of text) {
//   doubled = doubled + nextChar + nextChar;
// }

// alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
let text = null;
while (text === null) {
  text = prompt('enter some text');
}


let hyphenText = '';
const lastIndex = text.length -1;
for (let i = 0; i < text.length; i++) {
  if (i !== lastIndex) {
    hyphenText += text[i] + '-';
  } else{
    hyphenText += text[i];
  }

}

alert(hyphenText);