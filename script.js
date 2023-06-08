unction threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  // Initialize variables to store the closest sum and the minimum difference
  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through the array
  for (let i = 0; i < S.length - 2; i++) {
    // Use two pointers to find the remaining two numbers
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];
      const diff = Math.abs(sum - target);

      // Update the closest sum and minimum difference if necessary
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum < target) {
        // Increase the left pointer to increase the sum
        left++;
      } else {
        // Decrease the right pointer to decrease the sum
        right--;
      }
    }
  }

  return closestSum;
}