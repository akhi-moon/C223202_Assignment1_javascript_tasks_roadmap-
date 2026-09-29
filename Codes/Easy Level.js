const label = "";
console.log("");
console.log(label.padEnd(50) + "########\x1b[35m \x1b[1m  \x1b[4m C223202_Easy Level \x1b[0m ########");

// Task 01: Reverse a String
function reverseString(str) {
  let reversed = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log("");
console.log("\x1b[1m ###Task 01 Output### \x1b[0m");
let sampleWord = "supposedly";
console.log("Original Word:", sampleWord);
console.log("Reversed Word:", reverseString(sampleWord));
console.log("------------------------");
console.log("");


// Task 02: FizzBuzz Scenario
function fizzBuzz(n) {
  let results = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i);
    }
  }
  return results;
}

console.log("\x1b[1m ###Task 02 Output###\x1b[0m");
console.log("FizzBuzz up to 20:");
console.log(fizzBuzz(20));
console.log("------------------------");
console.log("");


// Task 03: Find the Largest Number
function findMax(arr) {
  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    }
  }
  return max;
}

console.log("\x1b[1m ###Task 03 Output### \x1b[0m");
let numbersList = [22, 58, 15, 64, 82, 45];
console.log("Array:", numbersList);
console.log("Highest Number:", findMax(numbersList));
console.log("------------------------");
console.log("");