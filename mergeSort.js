/**
 * merge combines two sorted Arrays into a single sorted Array.
 * @param {Array} left - Sorted Array
 * @param {Array} right - Sorted Array
 * @returns {Array} - Sorted Array combining all values for left and right
 */
const merge = (left, right) => {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift(0));
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
};

/**
 * mergeSort sorts an Array by value from least to greatest.
 * Time complexity O(nLogn)
 * @param {Array} arr - Array to be sorted
 * @returns {Array} - Sorted Array
 */
const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
};
