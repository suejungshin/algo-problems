/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]]
  }
  let almostResultArr = generate(numRows - 1);
  let lastLine = almostResultArr[almostResultArr.length - 1]

  almostResultArr.push([1])
  for (let i = 0; i < lastLine.length - 1; i++) {
    almostResultArr[almostResultArr.length - 1].push(lastLine[i] + lastLine[i + 1])
  }
  almostResultArr[almostResultArr.length - 1].push(1)

  return almostResultArr;
};
// @lc code=end

