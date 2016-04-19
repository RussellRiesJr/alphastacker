//Create a stackLetters function that should console.log rows of letters. It should take an array containing the
//letters of the alphabet and output them like this:
// a
// ab
// abc
// abcd
// abcde
// abcdef
//Then add logic to stackLetters that places a space after every fifth letter,

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentStack = [];

function stackLetters() {
  for (var i = 0; i < alphabet.length; i++) {
    if (i % 5 === 0) {
      currentStack += " " + alphabet[i];
      console.log(currentStack);
    } else {
      currentStack += alphabet[i];
      console.log(currentStack);
    }
  }
}

stackLetters();