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
var threeSum = function (nums) {
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

console.log(threeSum(nums1));

console.log(threeSum(nums2));

console.log(threeSum(nums3));