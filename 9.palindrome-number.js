/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let s = x.toString();
  let res = true;

  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      res = false;
    }
  }
  return res;
};
// @lc code=end

