/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  let maxLength = 0;
  let begIndex = 0;
  let counts = {};

  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === undefined) {
      counts[s[i]] = i;
      maxLength = Math.max(maxLength, i - begIndex + 1);
    } else {
      begIndex = counts[s[i]] + 1;
      counts[s[i]] = i;
    }

  }

  return maxLength;

};
// @lc code=end

