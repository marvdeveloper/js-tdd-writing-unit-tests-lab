// Your tests here
const { isPalindrome } = require('../utils');

describe("isPalindrome", () => {
  it("should return true for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("should return true for mixed case palindromes like 'RaceCar'", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should throw an error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("race1car")).toThrow("Input must contain only alphabetic characters");
  });

  it("should throw an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
