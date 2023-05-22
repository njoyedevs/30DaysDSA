# Day 1 Study Guide - Introduction to Data Structures and Arrays

## Reading/Video Materials:

Arrays are the most basic data structure and form the foundation for more complex structures. Begin with basic concepts like what an array is, how it is used, its advantages and limitations. Use resources like the chapter on Arrays from the book "Introduction to Algorithms" by Cormen, Leiserson, Rivest and Stein or the "Array Data Structure" article on GeeksforGeeks. You can also watch videos on Arrays on platforms like Khan Academy or Coursera.

## Practice Problems:

1. Easy: Start with basic array manipulation problems. This will help you get comfortable with array indices and element access.
    * LeetCode - Squares of a Sorted Array
    * LeetCode - Find Numbers with Even Number of Digits

2. Medium: Once you're comfortable with basic array manipulation, move to problems that involve more complex operations.
    * LeetCode - Remove Duplicates from Sorted Array
    * LeetCode - Best Time to Buy and Sell Stock

3. Hard: These problems will be more challenging and will involve using arrays in more complex ways. These problems are excellent for enhancing your problem-solving skills.
    * LeetCode - Container With Most Water
    * LeetCode - Trapping Rain Water

Remember, it's crucial to not only solve these problems but also to understand the solution thoroughly. Review your solutions, look at other people's solutions, and read the discussion forums to see different ways of solving the same problem. You will often find that there are multiple correct solutions, and comparing these can help enhance your understanding.

## Solutions

1. Squares of a Sorted Array (Easy): An optimal approach to solve this problem is to use a two-pointer technique. Since the negative square is larger than the positive square, initialize two pointers at the beginning and end of the array. Compare the squares of the elements at the two pointers, place the larger one at the end of the result array, and move the corresponding pointer. Repeat this process until all elements are processed. This approach ensures that we do not need to sort the final array, and thus it takes O(N) time complexity.

1. Find Numbers with Even Number of Digits (Easy): The straightforward approach here would be to traverse the array and for each number, convert it to a string or while looping calculate the number of digits. Then check the length of this string, if it is even increment the count. This has a time complexity of O(N).

1. Remove Duplicates from Sorted Array (Medium): You can use the "two-pointer" method where you maintain two pointers, one for reading and one for writing. One pointer iterates over the array. When a new number (different from the previous one) is discovered, it is written to the second pointer's position, and then the second pointer is incremented. This approach takes O(N) time complexity.

1. Best Time to Buy and Sell Stock (Medium): An optimal solution would be to initialize the minimum price as the price of the first day and maximum profit as zero. Then traverse through the list, update the minimum price if the current price is less than the minimum price, and update the maximum profit if the current price minus the minimum price is greater than the maximum profit. This solution only needs to loop through the list once, so the time complexity is O(N).

1. Container With Most Water (Hard): The intuitive approach might be to use brute force, but it will take O(N^2) time complexity. A more efficient way is to use a two-pointer technique. Start with the widest container and go to a less wide one only if there is a chance of increasing the height. The reason is that any container to the left/right of the current pair, while might be higher, will be less wide, and thus can't hold more water. The time complexity is O(N) with this approach.

1. Trapping Rain Water (Hard): This problem can be solved using a two-pointer approach, similar to the previous one. The idea is to maintain two variables to store the maximum so far on the left and right. If the current height is less than the max on the left or right, water will be trapped, and the volume of water is the min of max on the left and right minus the current height. This approach also has O(N) time complexity.