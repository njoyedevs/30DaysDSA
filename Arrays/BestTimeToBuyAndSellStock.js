// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    console.log(prices);
    let maxProfit = 0;
    let lowPrice = prices[0];
    let highPrice = prices[0];
    for (i = 0; i < prices.length; ++i) {
        if (prices[i] < lowPrice) {
            lowPrice = prices[i];
            highPrice = prices[i];
        } else if (prices[i] > highPrice) {
            highPrice = prices[i];
        }
        let currentProfit = highPrice - lowPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        console.log('Low Price: ', lowPrice);
        console.log('High Price: ', highPrice);
        console.log('Max Profit: ', maxProfit, '\n');
    }
    return maxProfit;
};

prices1 = [7,1,5,3,6,4];
prices2 = [7,6,4,3,1];
prices3 = [2,4,1];
console.log(maxProfit(prices1));
// Output: 5
console.log(maxProfit(prices2));
// Output: 0
console.log(maxProfit(prices3));
// Output: 2