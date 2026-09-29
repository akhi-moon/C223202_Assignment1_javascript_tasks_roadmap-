const label = "";
console.log("");
console.log(label.padEnd(50) + "########\x1b[35m \x1b[1m  \x1b[4m C223202_Advanced Level \x1b[0m ########");

// Task 08: Two Sum Algorithm
function twoSum(nums, target) {
  let seen = {}; 

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let neededNumber = target - currentNumber;

    if (seen[neededNumber] !== undefined) {
      return [seen[neededNumber], i]; 
    }

    seen[currentNumber] = i; 
  }
  return [];
}

console.log("");
console.log("\x1b[1m ###Task 08 Output### \x1b[0m");
let numbers = [8, 5, 18, 85, 21, 16, 53, 75];
let targetSum = 21;
let indices = twoSum(numbers, targetSum);
console.log("Array:", numbers, "| Target:", targetSum);
console.log("Indices found:", indices);
console.log("Proof:", numbers[indices[0]], "+", numbers[indices[1]], "=", targetSum);
console.log("------------------------");
console.log("");


// Task 09: Memoized Function Decorator
function memoize(fn) {
  let cache = {}; 

  return function(arg) {
    if (cache[arg] !== undefined) {
      console.log(`(Fetched "${arg}" from \x1b[34m Cache \x1b[0m)`);
      return cache[arg];
    }

    console.log(`(Calculated "${arg}" \x1b[32m Fresh \x1b[0m)`);
    let result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

function square(n) {
  return n * n;
}

console.log("\x1b[1m ###Task 09 Output### \x1b[0m");
const memoizedSquare = memoize(square);

console.log("Call 1:", memoizedSquare(2)); 
console.log("Call 2:", memoizedSquare(7)); 
console.log("Call 3:", memoizedSquare(25)); 
console.log("Call 4:", memoizedSquare(12)); 
console.log("Call 5:", memoizedSquare(5)); 
console.log("Call 6:", memoizedSquare(2));
console.log("Call 7:", memoizedSquare(3)); 
console.log("Call 8:", memoizedSquare(5)); 
console.log("------------------------");
console.log("");


// Task 10: Asynchronous Fetch Timeout Wrapper
function fetchWithTimeout(url, ms) {
  let timeoutPromise = new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error("Request Timed Out"));
    }, ms);
  });

  return Promise.race([fetch(url), timeoutPromise]);
}

console.log("\x1b[1m ###Task 10 Output### \x1b[0m");

console.log(">>>Test 1: Testing Timeout Trigger (120ms limit) >>>");
fetchWithTimeout("https://api.github.com/users/octocat", 120)
  .then(response => response.json())
  .then(data => {
      console.log("Success! Profile Name:", data.name);
      console.log("User Bio:", data.company);
    })
  .catch(error => {
    console.log("Expected Error Caught:", error.message); 
  });


setTimeout(function() {
  console.log("\n>>> Test 2: Testing Successful Fetch (3000ms limit) >>>");
  fetchWithTimeout("https://api.github.com/users/octocat", 3000)
    .then(response => response.json())
    .then(data => {
      console.log("Success! Profile Name:", data.name);
      console.log("User Bio:", data.company);
    })
    .catch(error => console.log("Expected Error Caught:", error.message));
}, 500);