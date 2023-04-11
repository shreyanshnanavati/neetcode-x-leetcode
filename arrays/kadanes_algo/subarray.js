// Q: Find a non-empty subarray with the largest sum.
// input array [-2,1,-3,4,-1,2,1,-5,4]

//brute force
function _findMaxSumFromSubArray(data) {
  let maxSum = -Infinity;
  for (let i = 0; i < data.length; i++) {
    let sum = 0;
    for (let j = i; j < data.length; j++) {
      sum += data[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

function kadanes(data) {
  // we maintain two sum maxSum => the one we will return
  // currSum the internal sum counter

  let maxSum = data[0];
  let currSum = 0;

  //looping through once
  for (let i = 0; i < data.length; i++) {
    if (currSum < data[i]) {
      //checking if the currSum till now is lesser than 0 or in other words a negative number
      currSum = 0; // if yes reset the sum to 0
    }
    currSum += data[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

// let result = findMaxSumFromSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
let result = kadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);
