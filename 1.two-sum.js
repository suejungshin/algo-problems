/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let seen = {};
    for (let i = 0; i < nums.length; i++) {
      if ((seen[(target - nums[i])] !== undefined)) {
        return [i, seen[(target - nums[i])]]
      } else {
        seen[nums[i]] = i;
      }
    }
};
// @lc code=end

