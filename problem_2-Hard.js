/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

/*
Inputs: Array of integers 
Outputs: Array of integers
Constraints: N/A - invalid inputs 
Edges: Can we solve without using division
*/

const productOfElements = (array) => {
  // Check if input is not valid, return string if true
  if (!Array.isArray(array)) return "Invalid input - input not an Array"
  // Initialize return array 
  const productArray = [];
  // Use reduce to find product of all elements 
  const product = array.reduce((acc, ele) => {
    return acc * ele
  })
  // Use forEach to divide each element by product and push result to return array 
  array.forEach((num) => {
    productArray.push(product / num)
  })
  // Return new array 
  return productArray
}

// Test Cases

const testArr1 = [1, 2, 3, 4, 5]
const testArr2 = [3, 2, 1]

console.log(productOfElements(testArr1));
console.log(productOfElements(testArr2))