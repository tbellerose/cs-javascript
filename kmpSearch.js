/**
 * Preprocess the pattern by computing a failur function that indicates the largest
 * possible shift using previously performed comparisons.
 * @param {string} pattern - The pattern to process.
 * @returns {Array} patternTable - An array of potential fallback positions.
 */
const buildPatternTable = pattern => {
  const patternTable = [0]; // patternTable[0] is always 0.

  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < pattern.length) {
    if (pattern[prefixIndex] === pattern[suffixIndex]) {
      // If a character match is found
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex++;
      prefixIndex++;
    } else if (prefixIndex === 0) {
      // If a character match is not found AND prefixIndex is 0
      patternTable[suffixIndex] = 0;
      suffixIndex++;
    } else {
      // If a character match is not found AND prefixIndex is > 0
      // user the patternTable to determine the new value of prefixIndex
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
};

/**
 * Search a string for occurrence of a substring.
 * @param {string} text - The text string to search.
 * @param {string} pattern - The substring to search for.
 * @returns {number} - The index of `text` where match occurs.
 */
const kmpSearch = (text, pattern) => {
  if (pattern.length === 0) {
    return 0;
  }
  const patternTable = buildPatternTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      // If a character match is found
      if (patternIndex === pattern.length - 1) {
        // Character match is found, and we're at the end of the pattern. Return the index
        // of `text` where the match was found.
        // If more than the initial match is need, this index could be pushed to an array
        // to return at the end.
        return textIndex - patternIndex;
      }
      patternIndex++;
      textIndex++;
    } else if (patternIndex > 0) {
      // Character match not found, but we've had previous character matches to the pattern.
      // Determine the fallback patternIndex from the patternTable.
      patternIndex = patternTable[patternIndex - 1];
    } else {
      // No match found, and no previous progress in the pattern.
      patternIndex = 0;
      textIndex++;
    }
  }
};
