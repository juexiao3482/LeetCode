/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // ===是先判断类型，类型不一样就是错的
    // 先1取出两个链表的第一位，也就是加和的最低位
    // 
    // 声明一个新的链表，初始化一个节点值为0的空节点，最正规的写法
    // new一个函数是构造函数
    let sum = new ListNode(0);
    // 函数是一种对象，因此head和sum相等后存的是同一个块地址，保存内容。
    let head = sum;
    let addone = 0;//存储进位
    while(addone || l1 || l2){//两个链表之间有一个存在的前提下执行
        //当位数不相同的时候，要补0处理,因此判断链表是否为空
        // let val1 = l1.val;
        // let val2 = l2.val;
        let val1=l1 !== null? l1.val:0;
        let val2=l2 !== null? l2.val:0;
        let r = val1 + val2 + addone;
        addone = r >=10? 1:0;//如果大于10，则为1，否则为0
        sum.next = new ListNode(r % 10);//因为求和可能是两位数，因此要留下个位的数
        sum = sum.next;
        if (l1){
            l1=l1.next;
        }
        if(l2){
            l2=l2.next;
            // 前面的节点就找不到了。
        } 
    }
    return head.next
    // head是初始化的0。
};
// @lc code=end

