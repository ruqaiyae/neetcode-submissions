class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(0);
        let index = 0;
        let currentProduct = 1;

        while (index < nums.length) {

            for (let i = 0; i < nums.length; i++) {
                if (i === index) continue;

                currentProduct *= nums[i];
            }

            output[index] = currentProduct;
            currentProduct = 1;
            index++;
        }

        return output;
    }
}
