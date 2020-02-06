/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let [currentMin, currentMax] = intervals[0];
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= currentMax) {
        currentMax = Math.max(currentMax, intervals[i][1]);
    } else {
      result.push([currentMin, currentMax]);
      currentMin = intervals[i][0];
      currentMax = intervals[i][1];
    }
  }
  result.push([currentMin, currentMax])
  return result;

};
// @lc code=end

