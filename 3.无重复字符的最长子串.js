/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口，依次判断当前字符是否在窗口中，有则删除窗口中该字符之前的字符串
// 然后记录max值
// s[i]就可以遍历字符串中每一个字符
var lengthOfLongestSubstring = function (s) {
    // 注意声明的是数组
    // push进入的时候回以字符存入，即abc=：>"a","b","c"
    let str = [];
    max = 0;
    for (let i = 0; i < s.length; i++) {
        // indexOf返回该字符在字符串中的下标，没有返回-1，
        // 也可以设置第二个参数，代表从第几个字符开始找
        // 输入字符串参数，则是查找子串
        // 空串的长度是0，之间跳出for循环
        let index = str.indexOf(s[i]);
        // 如果s[i]里存在该字符
        if (index !== -1) {
            // 删除从0到index+1的数组，会删除到下标为index的。
            // eg. (0,1)删除下标为0的
            str.splice(0, index + 1)
        }
        // push把元素加入数组，末位追加
        // charAt(i)返回字符串中的第i个字符
        // str.push(s.charAt(i));
        str.push(s[i]);
        max = Math.max(str.length, max);
    }
    return max;
};
// @lc code=end

