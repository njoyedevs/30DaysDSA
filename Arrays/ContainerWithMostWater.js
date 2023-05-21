// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Input: height = [1,1]
// Output: 1

// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        console.log(`leftIdx: ${left}, rightIdx: ${right}, height[${left}]: ${height[left]}, height[${right}]: ${height[right]}`);
        console.log(`width: ${w}, min height: ${h}, area: ${w} x ${h} = ${area}`);
        maxArea = Math.max(maxArea, area);
        console.log(`maxArea: ${maxArea}`);
        if (height[left] < height[right]) {
            console.log(`height[${left}]: ${height[left]} < height[${right}]: ${height[right]} => left++\n`);
            left++;
        } else {
            console.log(`height[${left}]: ${height[left]} > height[${right}]: ${height[right]} => right--\n`);
            right--;
        }
    }
    return maxArea;
};

height1 = [1,8,6,2,5,4,8,3,7];
height2 = [1,1];

console.log(maxArea(height1)); // Output: 49
console.log(maxArea(height2));

