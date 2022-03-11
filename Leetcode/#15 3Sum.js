// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

// Input: nums = []
// Output: []

// Example 3:

// Input: nums = [0]
// Output: []

 

// Constraints:

//     0 <= nums.length <= 3000
//     -105 <= nums[i] <= 105

var threeSum = function(nums) {
    const results = [];
    if (nums.length < 3) return results;
    nums.sort((a,b) => a - b);
    
    
    for (let i = 0; i <= nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums [i - 1]) {
        continue;
      }
      for (let first = i + 1, second = nums.length -1; first < second;) {
        let sum = nums[i] + nums[first]+ nums[second]
        if (sum < 0) {
          first++
          continue;
        } else if (sum > 0) {
          second--
          continue;
        } 
        results.push([nums[i], nums[first], nums[second]])
        
        while (nums[first] === nums[first +1]) first++
        while (nums[second] === nums[second -1]) second--
        first++
        second--
      }
    }
  return results
};

