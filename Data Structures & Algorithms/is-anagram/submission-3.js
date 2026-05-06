class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
  const word1 = {};
  const word2 = {};

  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      if (!word1[s[i]]) {
        word1[s[i]] = 1;
      } else {
        word1[s[i]] = word1[s[i]] + 1;
      }
    }

    for (let i = 0; i < t.length; i++) {
      if (!word2[t[i]]) {
        word2[t[i]] = 1;
      } else {
        word2[t[i]] = word2[t[i]] + 1;
      }
    }

    for (let i = 0; i < s.length; i++) {
      if (word1[s[i]] !== word2[s[i]]) {
        return false;
      }
    }

    return true;
  }
  return false;
}
}
