class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let t = '';
        for (const char of s) {
            if (/[a-z0-9]/i.test(char)) t += char; 
        }
        
        t = t.toLowerCase();

        let left = 0;
        let right = t.length - 1;

        while (left < right) {
            if (t[left] !== t[right]) return false;

            left++;
            right--
        }

        return true;
    }
}
