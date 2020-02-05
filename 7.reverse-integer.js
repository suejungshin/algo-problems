/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let string = '';
  let reversed = '';
  let negative = false;
  if (x < 0) {
    x = x * -1;
    negative = true;
  }
  string = x.toString();

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  reversed = reversed * 1;
  if (reversed > Math.pow(2, 31)) {
    return 0;
  }
  if (negative) {
    reversed = '-' + reversed;
  }
  return reversed;
};
// @lc code=end

