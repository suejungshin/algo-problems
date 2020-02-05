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

  let result = [];
  let all = createAllPermutations(2 * n);

  for (let i = 1; i < all.length; i++) {
    if (all[i][0] !== '(') {
      continue;
    }
    if (checkIfValidParans(all[i])) {
      result.push(all[i])
    }
  }

  return result;

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

const checkIfValidParans = (string) => {

  let displacement = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      displacement++;
    }
    if (string[i] === ')') {
      displacement--;
    }
    if (displacement < 0) {
      return false;
    }
  }
  if (displacement !== 0) {
    return false;
  } else {
    return true;
  }
}

// @lc code=end

