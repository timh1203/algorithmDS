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
