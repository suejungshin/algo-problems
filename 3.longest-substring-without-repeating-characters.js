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

  let result = 0;
  let substring = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        substring += s[i]
      }
    }
    if () {

    }
  }

  return result;

  // var k = 0;
  // var maxLength = 0;
  // for(i = 0; i < s.length; i++) {
  //     for (j = k; j < i; j++) {
  //         if (s[i] === s[j]) {
  //             k = j + 1;
  //             break;
  //         }
  //     }
  //     if (i - k + 1 > maxLength) {
  //         maxLength = i - k + 1;
  //     }
  // }
  // return maxLength;
};
// @lc code=end

