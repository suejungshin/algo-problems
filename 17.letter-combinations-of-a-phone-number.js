/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  let mappedLetters = {
    "2":["a", "b", "c"],
    "3":["d", "e", "f"],
    "4":["g", "h", "i"],
    "5":["j", "k", "l"],
    "6":["m", "n", "o"],
    "7":["p", "q", "r", "s"],
    "8":["t", "u", "v"],
    "9":["w", "x", "y", "z"]
  }
  if (digits.length === 0) {
    return [""];
  }

  let almostDoneArr = letterCombinations(digits.substring(0, digits.length - 1));
  let result = [];
  for (let i = 0; i < almostDoneArr.length; i++) {
    for (let j = 0; j < mappedLetters[digits[digits.length - 1]].length; j++) {
        result.push(almostDoneArr[i] + mappedLetters[digits[digits.length - 1]][j]);
    }
  }

  return result;
};
// @lc code=end

