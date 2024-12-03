// Find the Missing Number in an Array ([1, 2, 3, 5, 6])

function findMissingNumber(arr) {
    const n = arr.length + 1; // Array size + 1
    const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const arraySum = arr.reduce((acc, x) => acc + x, 0);
    return totalSum - arraySum;
  }
  
  console.log(findMissingNumber([1, 2, 3, 5, 6])); // Output: 4
  