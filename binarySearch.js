const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let m = Math.floor((left + right) / 2);
    if (arr[m] < target) {
      left = m + 1;
    } else if (arr[m] > target) {
      right = m - 1;
    } else {
      return m;
    }
  }
  return -1;
};
