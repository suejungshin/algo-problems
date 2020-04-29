/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const result = [];
  let found;
  for (let i = 0; i < T.length; i++) {
      found = false;
      for (let j = i; j < T.length; j++) {
          if (T[j] > T[i]) {
              result.push(j - i);
              found = true;
              break;
          }
      }
      if (!found) {
          result.push(0)
      }
  }
  return result;
};
// @lc code=end

