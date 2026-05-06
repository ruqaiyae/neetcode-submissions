class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        
        let buyingPrice = prices[left];
        let profit = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[right] < prices[left]) {
                left = right;
                buyingPrice = prices[right];
            } else {
                profit = Math.max(profit, (prices[right] - buyingPrice));
            }
        }
        return profit;
    }
}
