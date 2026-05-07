class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                if (map[char] !== stack.pop()) return false;
            }
        }
        if (stack.length !== 0) return false;
        else return true;
    }
}
