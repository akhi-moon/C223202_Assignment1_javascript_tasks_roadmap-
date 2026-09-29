const label = "";
console.log("");
console.log(label.padEnd(50) + "########\x1b[35m \x1b[1m  \x1b[4m C223202_Easy basic to Intermediate Level \x1b[0m ########");

// Task 04: Count Vowels
let vowel_list = [];

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  vowel_list = []; // Reset list

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowel_list.push(char);
      count++;
    }
  }
  return count;
}

console.log("");
console.log("\x1b[1m ###Task 04 Output### \x1b[0m");
console.log("Number of Vowels Present:", countVowels("Akhi Moon Jahan"));
console.log("List of the vowels:", vowel_list);
console.log("------------------------");
console.log("");


// ==========================================
// Task 05: Remove Duplicates (No Set, pure loop)
// Viva Logic: Create an empty array; only push numbers not yet added.
// ==========================================
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log("\x1b[1m ###Task 05 Output### \x1b[0m");
let duplicateArr = [7, 9, 5, 2, 4, 9, 7, 5, 8];
console.log("Original Array:", duplicateArr);
console.log("Unique Array:  ", removeDuplicates(duplicateArr));
console.log("------------------------");
console.log("");


// Task 06: Check for Palindrome (Two-Pointer Technique)
function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false; 
    }
    left++;
    right--;
  }
  return true;
}

console.log("\x1b[1m ###Task 06 Output### \x1b[0m");
let testWord1 = "radar";
if (isPalindrome(testWord1)) {
  console.log(testWord1, "is a palindrome word.");
} else {
  console.log(testWord1, "is not a palindrome word.");
}

let testWord2 = "busy";
if (isPalindrome(testWord2)) {
  console.log(testWord2, "is a palindrome word.");
} else {
  console.log(testWord2, "is not a palindrome word.");
}
console.log("------------------------");
console.log("");


// Task 07: Title Case a Sentence
function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let result = [];

  for (let word of words) {
    if (word.length > 0) {
      let capitalized = word[0].toUpperCase() + word.slice(1);
      result.push(capitalized);
    }
  }
  return result.join(" ");
}

console.log("\x1b[1m ###Task 07 Output### \x1b[0m");
let rawSentence = "I am working on my thesis now.";
console.log("Original Sentence:", rawSentence);
console.log("Title Case:       ", titleCase(rawSentence));
console.log("------------------------");
console.log("");