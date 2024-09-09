function sortEvenOddDescending(arr) {
  let evens = [];
  let odds = [];

  // Separate even and odd numbers
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          evens.push(arr[i]);
      } else {
          odds.push(arr[i]);
      }
  }

  // Sort even numbers in descending order
  evens.sort((a, b) => b - a);
  // Sort odd numbers in descending order
  odds.sort((a, b) => b - a);

  // Concatenate even numbers followed by odd numbers
  return evens.concat(odds);
}

// Example usage
const input = [3, 2, 5, 1, 8, 9, 6];
const output = sortEvenOddDescending(input);
console.log(output); // [8, 6, 2, 9, 5, 3, 1]
