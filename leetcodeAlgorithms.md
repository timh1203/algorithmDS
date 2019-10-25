# [Leet Code](https://leetcode.com)
---
## [Two Sum](https://leetcode.com/problems/two-sum/) (5/8/19)
```
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
```

- **STANDARD SOLUTION**
```js
var twoSum = function(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    let first = nums[i];
    let second = target - first;
    let secondInd = nums.lastIndexOf(second);

    if (secondInd > 0 && i !== secondInd) {
      return [i, secondInd];
    }
  }

  throw new Error('No two sum solution found.');
};
// twoSum([3], 6)
// twoSum([3,3], 6)
// twoSum([-1,-2,-3,-4,-5], -8)

// Runtime: 128 ms, faster than 37.94% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.6 MB, less than 78.47% of JavaScript online submissions for Two Sum.
```

- **MAP SOLUTION**
```js
const twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }

  throw new Error('No two sum solution found.');
};
// twoSum([3], 6)
// twoSum([3,3], 6)
// twoSum([-1,-2,-3,-4,-5], -8)

// Runtime: 72 ms, faster than 71.86% of JavaScript online submissions for Two Sum.
// Memory Usage: 35.1 MB, less than 35.80% of JavaScript online submissions for Two Sum.
```

---
## [Height Checker](https://leetcode.com/problems/height-checker/) (10/25/19)
```
1051. Height Checker
Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

Example 1:

Input: [1,1,4,2,1,3]
Output: 3
Explanation:
Students with heights 4, 3 and the last 1 are not standing in the right positions.

Note:

1 <= heights.length <= 100
1 <= heights[i] <= 100
```

- **MY ATTEMPT: WORKING, NOT PASSING**
- Based on my the correct solution, it looks like I misunderstood the problem
- The question wasn't phrased well
- Seems that the correct solution sorts the array, then compares each position in the `heights` array vs the `sorted` array to see if it's in the correct position
```js
var heightChecker = function(heights) {
    let incorrectPlaceCount = 0; // Keep count of of misplaced numbers
    for (let i = 1; i < heights.length-1; i++) { // Loop through each number in array
      if (!( // If both conditions match, increment counter to show out of place number
        (heights[i-1] && heights[i-1] <= heights[i]) // If prev exists and prev is less than current
        &&
        (heights[i+1] && heights[i] <= heights[i+1]) // If next exists and next is more than current
      )) {
        incorrectPlaceCount++;
      }
    }

    return incorrectPlaceCount
};

heightChecker([1,1,4,2,1,3]) // 3
```

- **CORRECT SOLUTION**
```js
var heightChecker = function(heights) {
    let count = 0;
    let sorted = heights.slice().sort(function (a,b) { return a-b});

    for(let i = 0; i < heights.length; i++) {
      if(heights[i] != sorted[i]) {
        count ++;
      }
    }

    return count;
};

heightChecker([1,1,4,2,1,3]) // 3
heightChecker([1,2,1,2,1,1,1,2,1]) // 4
```
