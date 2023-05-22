// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    console.log(nums);
    console.log(target);

    for (i = 0; i < nums.length; ++i) {
        for (j = i + 1; j < nums.length; ++j) {
            remainder = target - nums[i];
            if (remainder - nums[j] === 0) {
                return [i, j];
            }
        }
    }
    return [];
};


nums1 = [2,7,11,15];
target1 = 9;
// Output: [0,1]

nums2 = [3,2,4];
target2 = 6;
// Output: [1,2]

nums3 = [3,3];
target3 = 6;
// Output: [0,1]

nums4 = [2,5,5,11];
target4 = 10;
// Output: [1,2]

console.log(twoSum(nums1, target1));

console.log(twoSum(nums2, target2));

console.log(twoSum(nums3, target3));

console.log(twoSum(nums4, target4));