/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let all = createAllPermutations(3 * 2);
  console.log(all)
};

const createAllPermutations = (m) => {
  let result = [];

  if (m === 0) {
    return ['']
  }

  let almostDoneArr = createAllPermutations(m - 1);
  for (let i = 0; i < almostDoneArr.length; i++) {
    result.push(almostDoneArr[i] + '(');
    result.push(almostDoneArr[i] + ')')
  }


  return result;
}
// @lc code=end

