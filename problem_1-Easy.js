/*
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

/*
inputs: array of nums + num
outputs: boolean 
constraints: optional - do in one pass 
edges: invalid inputs - return string 
*/

const problem1 = (array, targetNum) => {
  // initialize set to store target nums
  const targetCache = new Set();
  // iterate over array 
  for (const element of array) {
    console.log(targetCache)
    // check if set has current num, return true, else, insert targetNum - current num into set 
    if (targetCache.has(element)) {
      return true ;
    } else {
    targetCache.add(targetNum - element)
    }
  }
  // return false if loop completes
  return false
}

// Test Cases

const arr1 = [10, 15, 3, 7];
const arr2 = [10, 16, 4, 8];

console.log(problem1(arr1, 19))
