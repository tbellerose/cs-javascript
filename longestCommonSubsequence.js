/**
 * Compare two strings to find the longest common subsequence.
 * Time complexity O(mn)
 * @param {string} x
 * @param {string} y
 * @returns {string | null} - Returns longest common subsequence if one is found, otherwire returns null
 */
function LCS(x, y) {
  const m = x.length; // ? m + 1 = column.length
  const n = y.length; // ? n + 1 = row.length

  if (m === 0 || n === 0) {
    // If length of either string is 0, return null
    return null;
  }

  // Init the matrix
  const matrix = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(null));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j === 0) {
        // Fill first row and column of the matrix with 0s
        matrix[i][j] = 0;
      } else if (x[i - 1] === y[j - 1]) {
        // ? Calculate remaining matrix values
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  let index = matrix[m][n];
  const LCS = Array(index).fill("");

  let i = m;
  let j = n;

  while (i > 0 && j > 0) {
    if (x[i - 1] === y[j - 1]) {
      LCS[index] = x[i - 1];
      i--;
      j--;
      index--;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      // Move up (if the value 1 column up is greater than the value one row left)
      i--;
    } else {
      // Move left
      j--;
    }
  }
  return LCS.length > 0 ? LCS.join("") : null;
}

// This code seems to work, though a lot of it is still a bit of a mystery to me.
// Parts I need to clarify, confirm, or understand better are denoted with ? in the comments.
// Need to review these sections and add detailed comments about what is happening.
