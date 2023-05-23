# Day 3 Study Guide - Linked Lists

## Reading/Video Materials:

Start with understanding what Linked Lists are, their properties, advantages, and limitations. Resources can be the Linked List section in "Data Structures and Algorithms Made Easy" by Narasimha Karumanchi or the "Linked List" article on GeeksforGeeks.

Understand different types of Linked Lists - Singly Linked Lists, Doubly Linked Lists, and Circular Linked Lists.

Learn about basic operations on Linked Lists - Insertion, Deletion, Traversal, Searching, etc.

## Practice Problems:

1. Easy: Start with basic operations on Linked Lists.
LeetCode - Reverse Linked List
LeetCode - Merge Two Sorted Lists

1. Medium: Move to problems that involve more complex operations.
LeetCode - Remove Nth Node From End of List
LeetCode - Linked List Cycle

1. Hard: These problems will require more complex operations and manipulations.
LeetCode - Reverse Nodes in k-Group
LeetCode - Merge k Sorted Lists

## Solution Techniques:

1. Reverse Linked List (Easy): You can use a iterative method to reverse a linked list. Initialize three pointers prev as NULL, curr as head and next as NULL. Iterate through the linked list and for each node, first save the next node, then change the next pointer of the current node to prev. Move prev and curr one step forward.

1. Merge Two Sorted Lists (Easy): This problem can be solved using a recursive approach. Compare the first nodes of both lists. The smaller node becomes the result and the next node will be the result of a recursive call with the smaller node's next and the other node.

1. Remove Nth Node From End of List (Medium): This problem can be solved using a two-pointer technique. Maintain two pointers, first and second, with a gap of n nodes. Start both pointers at the head. When the first pointer reaches the end, the second pointer will be at the Nth node from the end. Remove the second pointer node.

1. Linked List Cycle (Medium): Use the two-pointer technique, where one pointer moves twice as fast as the other. If there's a cycle, the fast pointer will eventually catch up to the slow pointer. If there's no cycle, the fast pointer will reach the end of the list.

1. Reverse Nodes in k-Group (Hard): This problem can be solved by recursively reversing the k nodes and then connecting the reversed list with the rest of the list. If there are less than k nodes, leave them as is.

1. Merge k Sorted Lists (Hard): This problem can be solved efficiently using a Priority Queue. The queue always keeps the smallest node at the top. Take the top element from the queue, add it to the result and then add the next element from the same list to the queue. Repeat this until the queue is empty.

Please remember to review and understand these solutions before attempting the problems. It's important to not only solve the problem but also to understand the underlying logic and thought process.