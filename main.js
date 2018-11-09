let word;
const button = document.querySelector("#check");
const searchBar = document.querySelector("#input");
const result = document.querySelector("#result");

button.addEventListener("click", palindrome);

function palindrome() {
  // Take the word in the input section
  word = searchBar.value.toLowerCase();
  // Split into an array
  let wordArray = word.split("");
  // Reverse that array
  let reverseArray = wordArray.reverse();
  // Join the new array in a string
  let newWord = reverseArray.join("");
  // Check to see if words match
  (word === newWord ? result.textContent = word.charAt(0).toUpperCase() + word.slice(1) + " is a palindrome!" : result.textContent = word.charAt(0).toUpperCase() + word.slice(1) + " is not a palindrome!");
}
