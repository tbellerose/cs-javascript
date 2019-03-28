/**
 * selectionSort sorts an Array by value from least to greatest.
 * Time complexity O(n^2)
 * @param {Array} arr - The Array to sort.
 * @returns {Array} - The sorted Array.
 */
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
  }
  return arr;
};
