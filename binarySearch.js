/**
 * Search a sorted array for a target value
 * @param {Array} arr - A sorted array
 * @param {*} target - Target value
 * @returns {number} - Index of `arr` where `target` found. -1 if `target` not found.
 */
const binarySearch = (arr, target) => {
  // Initialize points at the left and right bounds of the array
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let m = Math.floor((left + right) / 2); // Calculate middle index of array
    // If arr[m] does not match target, change left or right bounds to eliminate
    // the half of the array where match cannot exist, else return m.
    if (arr[m] < target) {
      left = m + 1;
    } else if (arr[m] > target) {
      right = m - 1;
    } else {
      return m;
    }
  }
  return -1; // If while loop completes without finding a match.
};
