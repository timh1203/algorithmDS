# Front End Masters

# A Practical Guide to Algorithms with Javascript /w Bianca Gandolfo

## A) Introducing Practical Guide to Algorithms

---

### Introducing Practical Guide to Algorithms (4/13/19)
- TOPICS: self-introduction, why algorithms are essential
- [Slides](https://slides.com/bgando/intro-to-algorithms)

- Bianca Gandolfo is Javascript Consultant
- algorithms are steps to solving a problem and we are seeking to improve the speed of our programs

- Covering:
1) how fast an algorithm is
2) techniques to optimize certain types of algorithms
3) getting comfortable with recursion
4) impllement a couple sorting and searching algorithms
5) understand difference between Divide & Conquer and Dynamic Programming
6) pros and cons of Greedy technique
7) recursive brute force algorithm

## B) Space & Time Complexity

---

### Introducing Space & Time Complexity (4/13/19)
- TOPICS: time complexity, space complexity, algorithmic speed

- time complexity is how we reason about the speed of an algorithm
- this allows us to process more data
- we can measure time exactly but we have a general 

- *space complexity* is how much memory is used
- *time complexity* is how many primitive operations are executed with respect to input size and assuming worst case scenarios

- PROBLEM: given a list of hotels, return the price range of hotels in a given search result
- we'd expect that the more data we have, the longer it will take to figure out the min and max required for the range
- as dataset grows, the cost can grow really fast or slow

- APPROACH #1: Compare all numbers to one another
- *quadratic time*: if we have 3 hotels, it's 9 operations
- ANSWER: we call this n^2, where n is the number of hotels. As n grows, the amount of work increases at that rate

- APPROACH #2: Track min & max
- we find the min and max through 2 passes
- it's faster and less comparisons are made
- ANSWER: we consider this 2n because as the data grows, the amount of work increases by 2

- APPROACH #3: Sorted List
- if it's sorted, we know smallest is at the beginning and largest is at the end
- ANSWER: number of operations is 2

- **TECHNICAL CLASSIFICATIONS**
- O(n^2) = quadratic time, compares all numbers (n^2)
- O(n) = linear time, find min and max numbers (2n)
- O(1) = constant time, sorted list, find first and last (2)

- *FROM FAST TO SLOW*
- notice we drog any non-significant numbers to simplify to the classifications below
- constant > logarithmic > linear > quadratic > exponential
- O(1)     > O(logn)     > O(n)   > O(n^2)    > O(k^n)

---

### Native Methods & Javascript (4/13/19)
- TOPICS: Time Complexity, JS Methods, Property Access, Loops, Native Array Methods
- sort is nlogn, we will visit this more
```js
// What are some simple, native JS
// methods/expressions/operations?
const arr = [1,2,3]
arr.forEach() // linear time
arr.pop() //-> [1,2], constant time
arr[0] // 1, constant time
arr.shift() // linear time
arr.unshift() // linear time

const obj = {a: 1}
obj.a //-> 1, constant time
1 +  n // constant time
```

---

### Big O Notation (4/13/19)
- TOPICS: constant, linear, quadratic, logarithmic, and exponential

- *what if we have multiple expressions/loops/etc?*
- if we don't have them in a loop, we add them
- if there is a loop in a loop, we multiple it but have to also consider what's inside (IE recursion)

- *what about O(logn)?*
- logarithm can have difference bases, it depends on what you're dividing by
- most of the time we'll deal with base 2
- as your input increases, the work, or number of operations need to be done, is increased by a fraction
- we can't always assume that n is the same, not always length of array, etc.

- **COMPLEXITY OF COMMON OPERATIONS**
- O(1) = running a statement
- O(1) = value lookup on an array, object, variable
- O(logn) = loop that cuts problem in half every iteration
- O(n) = looping through the values of an array
- O(n^2) = double nested loop
- O(n^3) = triple nested loop

---

### Space Complexity & Review (4/15/19)
- [GfG Asymptomatic Notation](https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/)
- TOPICS: space complexity, big O notation, time complexity

- With space complexity, it follows the same notation
- We should think about how much space is being taken up and how often we are making that space
- with call stack, are you also doing recursion because that also takes space in memory

- Big O Notation gives us an industry-standard language to discuss the performance of algorithms
- Not knowing how to speak about it makes you seem like an inexperienced programmer

- Time complexity of an algorithm signifies the total time required by the program to run to completion
- there are other notations out there used in academic settings
- Big O is worst case scenario, there's also average and best case scenario

---

### Big O: Loop (4/15/19)
- [Big O Cheatsheet](http://bigocheatsheet.com/)
- TOPICS: dissection of a loop

- **COUNT CHARS FUNCTION**
- evaluate each line for complexity
- both cases will be `linear time`
```js
var countChars = function(str) {
  var count = 0; // always 1 operation

  for (var i = 0; i < str.length; i ++) {
    count++; // depends on inputs
  }

  return count; // always 1 operation
}

countChars("dance"); // runs through for loop 5 times
countChars("walkreallyfast"); // runs through for loop 14 times
```

---

### Big O: Property Lookup (4/15/19)
- TOPICS: time complexity, array length method

- **WHAT IS THE TIME COMPLEXITY?**
- The real question is how does the str get the length?
- JS is smart because it keeps the length as we go along
- ANSWER: It will always be a `constant time` algorithm
- if the method goes through every character, it would be linear time
```js
var countChars = function(str){
  return str.length;
}

countChars("dance");
countChars("walkreallyfast");
```

---

### Big O: Push, Shift, & Unshift (4/15/19)
- TOPICS: time complexity, array methods

```js
var myList = ["hello", "hola"];
myList.push("bonjour"); // constant time
myList.unshift(); // linear time
myList.shift(); // linear time
```

---

## C) Optimization with Caching

---

### Faster Algorithms (4/15/19)
- TOPICS: speed up algorithms, caching, breadcrumbs

- How can we speed this up?
- this does 9 comparisons between 3 numbers to check it there no match
- ANSWER: This is O(n^2) or quadratic time
```js
const isUnique = (arr) => {
  let result = true;
  
  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);

    for (let j = 0; j < arr.length; j++) {
      console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  
  return result;
};

console.log(isUnique([1,2,3]) === true);
// console.log(isUnique([1,1,3]) === false);
```

- **METHOD 1: BREADCRUMB**
- we store the values in an object to have quicker access
- we keep track of what we've already see and we cache it in an object
- object property look ups are always constant time
- we can take a quadratic time function and make it linear time

- ANSWER: linear time operation because only 1 loop
```js
isUnique = (arr) => {
  const breadcrumbs = {};
  let result = true;
  
  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~ LOOP ~~~~ i === ${i}`);
    if (breadcrumbs[arr[i]]) {
      result = false;
    } else {
      breadcrumbs[arr[i]] = true;
    }
  }
  
  return result;
};

console.log(isUnique([1,2,3]) === true);
// console.log(isUnique([1,1,3]) === false);
```

---

### Unique Sort Exercise (4/15/19)
- TOPICS: removes duplicates
```js
//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function(arr) {
    const breadcrumbs = {};
    const newArr = [];

    for (let i of arr) {
      if (breadcrumbs[i]) {
        continue
      }
      else {
        breadcrumbs[i] = true
        newArr.push(i)
      }
    }

    return newArr.sort((a, b) => a - b);
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
```

---

### Unique Sort Solution (4/15/19)
- TOPICS: JSON.stringify
- this solution speeds up quadratic to linear time
- sorting can be generally though of as `nlogn` operation

- **BUG**
- in this solution, there's a bug because we introduced the first element into result but not into breadcrumbs
- subsquently, other 4's will get pushed into results
- we can solve this by:
1) starting i at 0
2) initiating breadcrumbs with element 0 to be true

- **JSON.STRINGIFY()**
- keep in mind pre-ES6, object keys are strings so we should stringify keys before setting them in
- in ES6, objects supports different types

```js
//Task: Transform this simple sorting algorithm into a unique sort, meaning that it should not return any duplicate values in the sorted array.

const uniqSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]];
    
    for (let i = 0; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (!breadcrumbs[arr[i]]) { // constant
            result.push(arr[i]); // constant
            breadcrumbs[arr[i]] = true; // constant
        }
    }
    return result.sort((a, b) => a - b); // nlogn
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
```

---

### Caching with Memoization (4/15/19)
- TOPICS: differences of breadcrumbs vs memoization

- memoization is caching the result of a function
- in the previous example, breadcrumbs did not store results from the function but from the for loop
- memoization is a type of caching
- caching in javascript is generally saving to an object or array
- for javascript engineers, we live in the browser where time complexity is more important

- **FACTORIAL**
```js
const factorial = (n) => {
    // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
    return factorial;
}

factorial(35);
factorial(36); // factorial(36) = factorial(35) * 36;
```

---

### Basic Memoization Exercize (4/15/19)
- TOPICS: global cache, memoize

-
```js
// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => {
  return n * 10;
};

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const checkCalc = (n) => {
  if (!cache[n]) {
    const result = times10(n);
    cache[n] = result;
  }
  return cache[n];
}

const memoTimes10 = (n) => {
  return checkCalc(n);
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached
```

---

### Basic Memoization Solution (4/15/19)

```js
// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => n * 10;

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log('Fetching from cache: ', n);
    return cache[n];
  }
  else {
    console.log('Calculating result');
    let result = times10(n);
    cache[n] = result;
    return result;
  }
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached
```

---

## D) Recursion

---

## E) Divide and Conquer

---

## F) Greedy Algorithms

---

## G) Dynamic Algorithms
