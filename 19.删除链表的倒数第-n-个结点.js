/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 生成一个新的链表，头指向head
    list = new ListNode(0);
    list.next = head;
    // 生成两个指针，使其间隔为n，当快指针到最后的时候，慢指针就指向的是倒数第n个
    let fast = list;
    let slow = list;
    while(n!== 0){
        fast = fast.next;
        n--;
    }
    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next= slow.next.next;
    return list.next;

};
// @lc code=end

