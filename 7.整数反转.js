/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // let作用域是块内
    let res = 0
    while(x){
        /* 个位要变成最高位，因此需要res乘10，这样有多少
         位就乘了多少倍 */
         res = res * 10 + x % 10;
        //  pow是底数，几次方
        if (res>Math.pow(2,31)-1||res<Math.pow(-2,31)){
             return 0;
         }
        // ~~可以将其他类型的转换成纯数字，有数字以外的一律输出0，还可以去除小数。
        // bool类型的true0，false1，undefined=0，！undefined=1
        x=~~(x/10)
        // 主要是去除小数
    }
    return res;

};
// @lc code=end

