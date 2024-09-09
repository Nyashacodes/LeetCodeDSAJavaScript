// Define the ListNode class for linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var spiralMatrix = function(m, n, head) {
    // Step 1: Create an m x n matrix filled with -1
    let matrix = Array.from({ length: m }, () => Array(n).fill(-1));
    
    // Step 2: Initialize boundaries for the spiral traversal
    let top = 0, bottom = m - 1, left = 0, right = n - 1;
    
    // Step 3: Use the linked list to populate the matrix in spiral order
    let current = head;
    
    while (current && top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let i = left; i <= right && current; i++) {
            matrix[top][i] = current.val;
            current = current.next;
        }
        top++;
        
        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom && current; i++) {
            matrix[i][right] = current.val;
            current = current.next;
        }
        right--;
        
        // Traverse from right to left along the bottom row
        for (let i = right; i >= left && current; i--) {
            matrix[bottom][i] = current.val;
            current = current.next;
        }
        bottom--;
        
        // Traverse from bottom to top along the left column
        for (let i = bottom; i >= top && current; i--) {
            matrix[i][left] = current.val;
            current = current.next;
        }
        left++;
    }
    
    return matrix;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Example 1
let head1 = createLinkedList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]);
let m1 = 3, n1 = 5;
console.log(spiralMatrix(m1, n1, head1));
// Output: [[3, 0, 2, 6, 8], [5, 0, -1, -1, 1], [5, 2, 4, 9, 7]]

// Example 2
let head2 = createLinkedList([0, 1, 2]);
let m2 = 1, n2 = 4;
console.log(spiralMatrix(m2, n2, head2));
// Output: [[0, 1, 2, -1]]
