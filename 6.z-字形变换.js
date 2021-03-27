/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 以一个v字型为一个周期，3行：4个一周期，4行：6个一周期
// 周期n=2*numRows-2
// 字母在字符串的下标i%n=x在循环周期中的位置（循环周期中的第几个）
// 以3行为例，在周期中的位置可能是0,1,2,3.
// 当位置为3时，该字符的行号为1=n-x=4-3
// 当位置为0,1,2时，行号为0,1,2，即为x
// 所以行号y=min(x,n-x).
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  // 声明numRow行，充满空串的数组
  const rows = new Array(numRows).fill("");
  // 计算周期中的字符数n
  const n = 2 * numRows - 2;
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 获取当前字符在周期中的位置
    const x = i % n;
    // 得出当前字符所在的行
    y = Math.min(x, n - x);
    // 在js中，除了和字符串相加，转换成字符串，其余运算符都转换成数字
    // 因此相加，只要有一个是字符，则为字符串拼接
    // 相当于每一行变成一个字符串
    rows[y] = rows[y] + s[i];

  }
  // .join用于把数组中的内容放入字符串，参数是连接符，即数组中元素与元素之间的内容
  return rows.join("");

};

// 思路
/*1、先划分周期，通过行数得到多少个字符一个周期
  2、要获得没有元素在哪一行，就要获得元素在周期中的位置
  3、通过取模。得到元素在周期中的位置x
  4、通过元素在周期中的位置，得到元素的行号，min(x,n-x)*/
// @lc code=end

