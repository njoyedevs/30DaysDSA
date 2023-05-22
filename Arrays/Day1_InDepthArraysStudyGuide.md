# Day 2 Study Guide - In-depth into Arrays

## Reading/Video Materials:

Recap the basic principles of Arrays and their operations.
Understand the concept of Multidimensional Arrays. You can refer to the "Arrays" chapter in "Data Structures and Algorithms Made Easy" by Narasimha Karumanchi.
Explore common techniques used in array manipulation like the sliding window technique, two-pointer technique, etc.

## Practice Problems:

1. Easy: Continue practicing basic array manipulation.
    * LeetCode - Maximum Subarray
    * LeetCode - Two Sum

1. Medium: Move to problems that require a bit more thought.
    * LeetCode - Three Sum
    * LeetCode - Rotate Image

1. Hard: These problems will require more complex operations and manipulations.
    * LeetCode - Maximal Rectangle
    * LeetCode - Spiral Matrix

## Solution Techniques:

1. Maximum Subarray (Easy): You can solve this problem using Kadane's Algorithm. Initialize a variable max_sum to the smallest integer and curr_sum to 0. Iterate through the array, for each element add it to the curr_sum and compare it with max_sum, if it's greater, update max_sum. If curr_sum becomes less than 0 at any point, reset it to 0.

1. Two Sum (Easy): You can solve this problem using a Hash Map. Create a map to store each element's complement (target - nums[i]) and its index. While iterating through the array, if you find a number which is already a key in the map, that means you have found two numbers which add up to the target, else add the complement of the current element to the map.

1. Three Sum (Medium): First, sort the array. Then use a two-pointer technique to check each possible pair of elements. For each element, set a low pointer to the next element and a high pointer to the last element. If the sum is too small, increment the low pointer, if it's too big, decrement the high pointer, if it's just right, add it to the answer. To avoid duplicates, skip over same consecutive elements for the current element, low pointer and high pointer.

1. Rotate Image (Medium): The problem can be solved in-place. First, transpose the matrix (i.e., switch rows and columns). Then, for each row, reverse the order of the elements.

1. Maximal Rectangle (Hard): This problem can be solved using a dynamic programming approach on top of the histogram solution. Basically, you should maintain a column wise tally of zeros. Every '1' you encounter will be the height of the column in the histogram and every '0' will reset the height back to zero. Then for each row, we can use the algorithm for "Largest Rectangle in Histogram" to find the largest rectangle that includes the bottom edge located in the current row.

1. Spiral Matrix (Hard): The idea is to treat the matrix as layers, peel off layers one by one, and add it to the result. The key is to handle the edge cases when the matrix is not a square. Watch out for the case when there's only one row or one column left.

Remember, every problem may have multiple solutions and the key is to come up with the most efficient one