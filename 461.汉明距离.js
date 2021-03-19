/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// XOR运算，1+1=0，0+1=1,0+0=0,相同为0，相异为1.
// 然后得出1的个数
// 遍历两个数值，位不相同+1
// >>是移位运算符，向右移位，计算机会先将数值转换为2进制
// &与运算，计算机会先将数值转换为2进制，都为1才为1，否则为0
var hammingDistance = function(x, y) {
    let ans=0;
    while (x!==0||y!==0) {
        // &1后，有两种情况，末位为1，则返回为1，末位为0，则返回为0.
        // 因为1的其他位都得0
        // 所以其实x&1和y&1是取出x，y的末位值
        // 要注意运算的优先级问题，加括号
        if((x&1) !== (y&1)){
            ans++;
        }
        x=x>>1;
        y=y>>1;
    }
    return ans;
};
// @lc code=end

