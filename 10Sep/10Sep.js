/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    if(!head || !head.next){return head;}

    const gcd=(a,b)=>{
        while(b !== 0){
            let temp = b;
            b = b%a;
            a = temp;
        };
        return a;   
    }

    let node1 = head;

    while(node1.next !== null){
        let node2 = node1.next;
        let gcdValue = gsd(node1.val, node2.val);
        let gcdNode = new ListNode(gcdValue);
        node1.next = gcdNode;
        gcdNode = node2;
        node1 = node2;
    }

    return head;

};