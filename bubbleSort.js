/**
 * bubbleSort sorts an array by value from least to greatest.
 * Time complexity O(n^2)
 * @param {Array} arr - Array to sort
 * @returns {Array} - Sorted Array
 */
const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
