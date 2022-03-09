let letters = [];

// let word= 'racacar';

let word = 'tadtep';

let rword = '';

for (const w of word) {
  letters.push(w);
  console.log(`letters: ${w}, ${letters}`);
};

for (let index = 0; index < word.length; index++) {
  rword += letters.pop();
  console.log(rword);
}


if (rword === word) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} is not palindrome`);
}
