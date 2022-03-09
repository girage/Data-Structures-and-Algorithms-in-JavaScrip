let lettres = [];

// let word= 'racacar';

let word = 'tadtep';

let rword = '';


for (let index = 0; index < word.length; index++) {
  lettres.push(word[index]);

  // console.log(`lettres: ${index}, ${lettres}`);
};

for (let index = 0; index < word.length; index++) {
  rword += lettres.pop();
  console.log(rword);
}

if (rword === word) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} is not palindrome`);
}
