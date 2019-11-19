# [Leet Code](https://leetcode.com)

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

---
## [Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/) (10/26/19)
```
1071. Greatest Common Divisor of Strings
For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

Return the largest string X such that X divides str1 and X divides str2.



Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""


Note:

1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] and str2[i] are English uppercase letters.
```

- **MY ATTEMPT: WORKING, NON PASSING**
- My solution doesn't check the existence of the shorter string multiple times like the correct solution
- Difficulty was hard on this one also
```js
var gcdOfStrings = function(str1, str2) {
		let _str1 = Array.from(str1)
		let _str2 = Array.from(str2)
		let results = Array.from(str1)

		for (let i = 0; i < _str1.length; i++) {
			if (_str1[i] === _str2[i]) {
				results.shift()
			}
		}

		console.log(results)
		if (results.join("") === str1) {
			return ''
		} else {
			return results.join("")
		}
};

gcdOfStrings("ABCABC", "ABC") // "ABC", PASS
gcdOfStrings("ABABAB", "ABAB") // "AB", PASS
gcdOfStrings("LEET", "CODE") // "", PASS
gcdOfStrings("ABCDEF", "ABC") // "", NON-PASSING
```

- **CORRECT SOLUTION**
```js
var gcdOfStrings = function(str1, str2) {
		// Sorts the shorter string to smallerString and larger string to largerString variables
    const [smallerString, largerString] = [str1, str2].sort((a,b) => a.length - b.length);

		// Tests both str1 and str2 to see if any combination of the shorter string exists one or multiple times
		// If the combination matches in both, correctSmaller and correctLarger both return true and function exits with testString
		for (let i = smallerString.length; i > 0; i--) {
        const testString = smallerString.slice(0, i);
        const correctSmaller = !smallerString.split(testString).join('')
.length;
        const correctLarger = !largerString.split(testString).join('').length;
        if (correctSmaller && correctLarger) return testString;
    }

		return '';
};

gcdOfStrings("ABCABC", "ABC") // "ABC"
gcdOfStrings("ABABAB", "ABAB") // "AB"
gcdOfStrings("LEET", "CODE") // ""
gcdOfStrings("ABCDEF", "ABC") // ""
```

---
## []() ()
```
```

- **MY ATTEMPT**
```js
```

- **CORRECT SOLUTION**
```js
```
