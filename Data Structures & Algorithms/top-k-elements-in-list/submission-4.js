class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let window = {};

        for (let i = 0; i < nums.length; i++) {
            window[nums[i]] = (window[nums[i]] || 0) + 1;
        }

        return Object.keys(window).sort((a,b) => window[b] - window[a]).slice(0,k);

        
    }
}