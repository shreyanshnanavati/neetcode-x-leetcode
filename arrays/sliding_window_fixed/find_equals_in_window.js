// Q: Given an array, return true if there are two elements within a window of size k that are equal.
// IP: [1,2,3,2,3,3]

//brute force
function findCloseDuplicates(nums, k) {
  for (let L = 0; L < nums.length; L++) {
    for (let R = L + 1; R < Math.min(nums.length, L + k); R++) {
      if (nums[L] == nums[R]) {
        return true;
      }
    }
  }
  return false;
}

//Sliding window, using sets to maintain window size
function slidingWindowFixed(nums, k) {
  let L = 0;
  let window = new Set();
  for (let R = 0; R < nums.length; R++) {
    if (R - L + 1 > k) {
      window.delete(nums[L]);
      L++;
    }
    if (window.has(nums[R])) {
      return true;
    }
    window.add(nums[R]);
  }
  return false;
}

let result = slidingWindowFixed([1, 2, 3, 2, 3, 3], 3);
console.log(result);
