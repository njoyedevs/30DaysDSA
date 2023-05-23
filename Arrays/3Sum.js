// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {

    console.log(nums);
    nums.sort((a,b) => a - b);
    console.log(nums);

    results = [];

    for (let leftIdx = 0; leftIdx < nums.length - 2; leftIdx++) {
        if (leftIdx > 0 && nums[leftIdx] === nums[leftIdx - 1]) continue; // Skip the same leftIdx
        let runner1Idx = leftIdx + 1;
        let runner2Idx = nums.length - 1;
        while (runner1Idx < runner2Idx) {
            let sum = nums[leftIdx] + nums[runner1Idx] + nums[runner2Idx];
            if (sum === 0) {
                results.push([nums[leftIdx], nums[runner1Idx], nums[runner2Idx]]);
                while (nums[runner1Idx] === nums[runner1Idx + 1]) runner1Idx++; // Skip the same runner1Idx
                while (nums[runner2Idx] === nums[runner2Idx - 1]) runner2Idx--; // Skip the same runner2Idx
                runner1Idx++;
                runner2Idx--;
            } else if (sum < 0) {
                runner1Idx++;
            } else {
                runner2Idx--;
            }
        }
    }

    return results;

};

var threeSum2 = function (nums) {

    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        // skip the same element to avoid duplicate triplets
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1; // low pointer
        let k = nums.length - 1; // high pointer
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                // skip the same element to avoid duplicate triplets
                while (j < k && nums[j] == nums[j - 1]) j++;
                while (j < k && nums[k] == nums[k + 1]) k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
};

nums1 = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

nums2 = [0,1,1]
// Output: []

nums3 = [0,0,0]
Output: [[0,0,0]]

console.log(threeSum1(nums1));
console.log(threeSum2(nums1));
console.log(threeSum1(nums2));
console.log(threeSum2(nums2));
console.log(threeSum1(nums3));
console.log(threeSum2(nums3));