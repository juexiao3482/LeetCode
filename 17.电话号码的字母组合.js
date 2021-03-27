/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // []为空串
  if (digits.length == 0) return [];
  // 输入的是字符串，所以直接把数字写成字符串
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  // 初始化一个空字符，方便后续遍历
  // 数组中有一个元素，这个元素是空串，因此长度为1
  let que = [""];
  for (let i = 0; i < digits.length; i++) {
    // 在后面存放上一个数字的字母数组
    let nextResult = [];
    // 当前数字对应的字母存入str
    let str = map[digits[i]];
    // 遍历上一循环生成的字符串
    for (let j = 0; j < que.length; j++) {
      for (let k = 0; k < str.length; k++) {
        // 第一次循环时，假设第一个数字是2，则是把abc分三次push进去
        // nextResult = ['a','b','c'],push的时候不会拼接字符串
        // que的内容没有改变
        nextResult.push(que[j] + str[k]);
      }
    }
    que = nextResult;
  }
  return que;
};
// 思路
// 排列组合，要一层一层的遍历
// 1、先获取到数字代表的字符串
// 2、将字符串拆分成数组中的多个元素
// 3、每一个元素都和下一个数字代表的字符串中的元素组合，存入数组
// 4、两个数字就是2个字母的组合，三个数字就是都是三个字母的组合
// @lc code=end

