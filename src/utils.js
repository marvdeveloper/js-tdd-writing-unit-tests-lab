function isPalindrome(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    if (word.length === 0) {
      return false; // Empty string is not a valid palindrome
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters");
    }
  
    const normalized = word.toLowerCase();
    return normalized === normalized.split('').reverse().join('');
  }
  
  module.exports = { isPalindrome };
  