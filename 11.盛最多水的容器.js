/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针法
// i指针在头，j指针在尾
// 左边低，i右移
// 右边低，j左移
// 因为面积=(j-i)*min(h[i],h[j])
// 当j-i一定变小的时候，只有后面的式子变得才有可能面积增加
var maxArea = function(height) {
    let i = 0,j=height.length-1,max=0;
    while(i<j){
        max=Math.max((j-i)*Math.min(height[i],height[j]),max);
        if(height[i]<=height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return max;

};
// @lc code=end

