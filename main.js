
// Exercise 1

const stringZero = document.querySelector(".string_zero");
let count = 0;

for (let i = 0; i < stringZero.textContent.length; i++) {
    if (stringZero.textContent[i] === ' ') {
        count++;
    }
}

console.log(count);


// Exercise 2

const str = "AaaaAaaAaaAaaaA";
let capitalletters = 0;
let smallletters = 0;
for (let i = 0; i < str.length; i++) {
  const letter = str.charAt(i);
  if (letter === letter.toUpperCase()) {
    capitalletters++;
  } else if (letter === letter.toLowerCase()) {
    smallletters++;
  }
}

console.log("Количество заглавных букв:", capitalletters);
console.log("Количество строчных букв:", smallletters);

// .. // .. // .. // .. //

const str1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum. Libero possimus odit porro quo beatae, perspiciatis minima eligendi qui impedit officia praesentiumid dolor voluptates architecto pariatur eos asperiores!";
let capitalletters1 = 0;
let smallletters1 = 0;

for (const letter1 of str1) {
  if (letter1 === letter1.toUpperCase()) {
    capitalletters1++;
  } else if (letter1 === letter1.toLowerCase()) {
    smallletters1++;
  }
}

console.log("Количество заглавных букв:", capitalletters1);
console.log("Количество строчных букв:", smallletters1);

