# Front End Masters

# A Practical Guide to Algorithms with Javascript /w Bianca Gandolfo

## A) Introducing Practical Guide to Algorithms

---

### Introducing Practical Guide to Algorithms (4/13/19)
- https://frontendmasters.com/courses/practical-algorithms/introducing-practical-guide-to-algorithms/
- TOPICS: self-introduction, why algorithms are essential
- [Slides](https://slides.com/bgando/intro-to-algorithms)

- Bianca Gandolfo is Javascript Consultant
- algorithms are steps to solving a problem and we are seeking to improve the speed of our programs

- Covering:
1) how fast an algorithm is
2) techniques to optimize certain types of algorithms
3) getting comfortable with recursion
4) implement a couple sorting and searching algorithms
5) understand difference between Divide & Conquer and Dynamic Programming
6) pros and cons of Greedy technique
7) recursive brute force algorithm

## B) Space & Time Complexity

---

### Introducing Space & Time Complexity (4/13/19)
https://frontendmasters.com/courses/practical-algorithms/introducing-space-time-complexity/
- TOPICS: time complexity, space complexity, algorithmic speed

- time complexity is how we reason about the speed of an algorithm
- this allows us to process more data
- we can measure time exactly but we have a general nomenclature

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
- https://frontendmasters.com/courses/practical-algorithms/native-methods-javascript/
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
1 + n // constant time
```

---

### Big O Notation (4/13/19)
- https://frontendmasters.com/courses/practical-algorithms/big-o-notation/
- TOPICS: constant, linear, quadratic, logarithmic, and exponential

- *what if we have multiple expressions/loops/etc?*
- if we don't have them in a loop, we add them together
- if there is a loop in a loop, we multiply it but have to also consider what's inside (IE recursion)

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
- https://frontendmasters.com/courses/practical-algorithms/space-complexity-review/
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
- https://frontendmasters.com/courses/practical-algorithms/big-o-loop/
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
- https://frontendmasters.com/courses/practical-algorithms/big-o-property-lookup/
- TOPICS: time complexity, array length method

- **WHAT IS THE TIME COMPLEXITY?**
- The real question is how does the str get the length?
- does it run through all the characters when we call `length`?
- ANSWER: Nope, JS is smart because it keeps the length as we go along
- ANSWER: It will always be a `constant time` algorithm
- if the method goes through every character, it would be `linear time`
```js
var countChars = function(str){
  return str.length;
}

countChars("dance");
countChars("walkreallyfast");
```

---

### Big O: Push, Shift, & Unshift (4/15/19)
- https://frontendmasters.com/courses/practical-algorithms/big-o-push-shift-unshift/
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
- https://frontendmasters.com/courses/practical-algorithms/faster-algorithms/
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
- we keep track of what we've already seen and we cache it in an object
- object property look ups are always constant time
- we can take a `quadratic time` function and make it `linear time`

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
- https://frontendmasters.com/courses/practical-algorithms/unique-sort-exercise/
- TOPICS: removes duplicates
```js
// Task: Transform this simple sorting algorithm into a unique sort.
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
- https://frontendmasters.com/courses/practical-algorithms/unique-sort-solution/
- TOPICS: JSON.stringify
- this solution speeds up `quadratic` to `linear` time
- javascript sort method can be generally though of as `nlogn` operation

- **BUG**
- in this solution, there's a bug because we introduced the first element into result but not into breadcrumbs
- subsquently, other 4's will get pushed into results
- we can solve this by 1 of 2 ways:
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
- https://frontendmasters.com/courses/practical-algorithms/caching-with-memoization/
- TOPICS: differences of breadcrumbs vs memoization

- memoization is caching the result of a function
- in the previous example, breadcrumbs did not store results from the function but from the for loop
- memoization is a type of caching
- caching in javascript is generally saving to an object or array
- for javascript engineers, we live in the browser where time complexity is more important than space complexity

- **FACTORIAL**
- we store the `factorial(35)` results since it is an expensive operation
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
- https://frontendmasters.com/courses/practical-algorithms/basic-memoization-exercise/
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
- https://frontendmasters.com/courses/practical-algorithms/basic-memoization-solution/
- TOPICS:
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

### Memoization with Closure Exercise (4/15/19)
- https://frontendmasters.com/courses/practical-algorithms/memoization-with-closure-exercise/
- TOPICS: cache in closure

- hint: use closure to return a function that you can call later
- hint: we store that closure to a variable, then we use the variable name to call it later
- hint: important that return a function, and not a primitive value, so we can call it later
- hint: in the closure, we retain access to variables that were passed in before and you can "remember" prior values

```js
const times10 = (n) => (n * 10);

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
  const cache = {}
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch(e) {
  console.error('Task 3:', e);
}
```

---

### Memoization with Closure Solution (4/15/19)
- https://frontendmasters.com/courses/practical-algorithms/memoization-with-closure-solution/
- TOPICS: cache in closure, separate cache concept

- this helps prevent global scope of cache where multiple functions interact with it that creates side effects
- because of closure, now we can reference variables declared in the parent scope IE the cache
- now the cache persists across calls and not wiped

- when we call `memoClosureTimes10(9)`, we are calling the return function of `memoizedClosureTimes10`, not the whole `memoizedClosureTimes10` function
- `n` parameter represents the the argument being passed in from `memoClosureTimes10(9)` IE 9
- if you want to add a 2nd argument or more you have to use `(n,m)` or `(n, ...args)`

```js
const times10 = (n) => (n * 10);

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
  const cache = {}
  return (n) => {
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
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch(e) {
  console.error('Task 3:', e);
}
```

- **SEPARATE CACHE CONCEPT**
- everytime you call a new function, you create a new execution environment complete with it's own cache
- `memoClosureTimes10` and `memoClosureTimes5` will each have it's own cache now
```js
const times10 = (n) => (n * 10);

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimesM = (m) => {
  const cache = {}
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache: ', n);
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n * m;
      cache[n] = result;
      return result;
    }
  }
};

const memoClosureTimes10 = memoizedClosureTimesM(10);
const memoClosureTimes5 = memoizedClosureTimesM(5);
```

---

### Generic Memoize Function Exercise (4/15/19)
- https://frontendmasters.com/courses/practical-algorithms/generic-memoize-function-exercise/
- TOPICS:

- building off previous exercise
- we are going to make the `times10` even more generic
- we want to be able to make it so you can pass the `times10` function, or any other function that we create, into the `memoize` function
- what if we want to pass in an `add5` function or `subtract2` function as a callback?

- general steps to memoizing:
1) Call the `memoize` function with an argument of a function (`memoize` could be stored in a variable)
2) The `memoize` function should have a `cb` parameter, a `cache`, and a `return function`

```js
const times10 = (n) => (n * 10);
// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.
const memoize = (cb) => {
  const cache = {}
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache: ', n);
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  }
}

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
try {
  console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
  console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
} catch(e) {
  console.error('Task 4:', e)
}
```

---

### Generic Memoize Function Solution (4/15/19)
- https://frontendmasters.com/courses/practical-algorithms/generic-memoize-function-solution/
- TOPICS: memoize

- to make it further generic, you could also use `...args` instead of `n`
- DISTINCTION: `cache` and `cb` will stay the same the second time `memoizedTimes10` is called
- however the `...args` will be a fresh set aka all the variables in that return function is going to be reinitialized IE it will be a new 9
- the time complexity remains unchanged, but this helps us by saving us expensive operations by storing the results in a cache
```js
const times10 = (n) => (n * 10);
// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.
const memoize = (cb) => {
  const cache = {}
  return (...args) => {
    if (n in cache) {
      console.log('Fetching from cache: ', n);
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = cb(...args);
      cache[n] = result;
      return result;
    }
  }
}

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
```

---

### Reviewing Optimization (4/15/19)
- https://frontendmasters.com/courses/practical-algorithms/reviewing-optimization/
- TOPICS: different caching techniques, trade-offs

- we are increasing space complexity to decrease time complexity
- usually this process is fine if your function calls or operations are expensive
- you might hear this as "using a hash table to optimize", this is what they mean

---

## D) Recursion

---

### Introducing Recursion (4/16/19)
- https://frontendmasters.com/courses/practical-algorithms/introducing-recursion/
- TOPICS:

- Recursion is simply when a function calls itself; however it doesn't stop there
- it's an elegant solution to keep your code D.R.Y.
- sometimes recursion is easier than iterative approach

---

### Call Stack Walkthrough (4/16/19)
- https://frontendmasters.com/courses/practical-algorithms/call-stack-walkthrough/
- TOPICS: call stack game, recursion rules, returns are important

- you have to add a return or else we'll get a `stack overflow`
- also add a `base case`

- **RULES**
1. Push called Fn on stack.
2. Execute Fn body.
- until...
- ... another fn is called:
  - Pause the current execution and start at step 1.
- ... a return is hit:
  - Pop the current Fn off the stack.
  - Resume executing the previous Fn.
```js
// INFINITE LOOP
var callMe = function() {
  callMe();
  callMe();
  callMe('anytime');
}
callMe();

// ALSO INFINITE LOOP
var callMe = function() {
  return callMe();
  callMe();
  callMe('anytime');
}
callMe();
```

- **RETURNS ARE IMPORTANT**
- notice that we get an undefined since 2nd call doesn't pass on "loops!"
- if we want to pass it on, we can add `return` to `return callMe('anytime')`
- we can trace the base case all the way back up

- EDGE CASE: next time if we call the function again, `tracker = 3`
- we can reset this in the base case by setting `tracker = 0`
```js
var tracker = 0;
var callMe = function() { // 1st CALL
  tracker++
  if (tracker === 3) {
      return 'loops!';
  }
  callMe('anytime'); //=> returns undefined
  ~~~~~
};

var callMe = function() { // 2nd CALL
  tracker++
  if (tracker === 3) {
      return 'loops!';
  }
  callMe('anytime'); //=> returns 'loops!'
  ~~~~~
};

var callMe = function() { // 3rd CALL
  tracker++
  if (tracker === 3) {
      return 'loops!';
  }
  callMe('anytime');
};

callMe();
```

---

### Looping with Recursion (4/16/19)
- https://frontendmasters.com/courses/practical-algorithms/looping-with-recursion/
- TOPICS: how to build recursion, scope of child

- **Recursion in 4 Steps**
1. Identify base case(s).
2. Identify recursive case(s).
3. Return where appropriate.
4. Write procedures for each case that bring you closer to the base case(s).
```js
var callMyself = function() {
  if() {
    // base case
    return;
  } else {
    // recursive case
    callMyself();
  }
  return;
};
```

- child can interact with parent but not vice versa
- notice subsequent calls can still access `n`
```js
const loopNTimes = (n) => {

  console.log('n ===', n);

  if (n <= 1) {
      return 'complete';
  }
  return loopNTimes(n-1);
};

loopNTimes(3);
```

---

### Factorial with a Loop (4/16/19)
- https://frontendmasters.com/courses/practical-algorithms/factorial-with-a-loop/
- TOPICS: iterative vs recursive approach

- what pattern do you notice?
```js
// ITERATIVE APPROACH
function computeFactorial(num) {
  var result = 1;

  for(var i = 2; i <= num; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }

  return result;
}
computeFactorial(5);

// CONDENSED ITERATIVE APPROACH
function computeFactorial(num) {
  var result = 1;

  for(var i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}
computeFactorial(5);

// WITH RECURSION
function computeFactorial(num) {
  if (num === 1) {
    console.log('hitting the base case');
    return 1;
  } else {
    console.log(`returning ${num} * computeFactorial(${num - 1})`);
    return num * computeFactorial(num - 1);
  }
}
computeFactorial(5);

// EXAMPLE A: Iterative Approach
function logNumbers(start, end) {
  console.log(`iteratively looping from ${start} until ${end}`);
  
  for(var i = start; i <= end; i++) {
    console.log('hitting index', i);
  }
}
console.log('~~~ logNumbers ~~~')
logNumbers(1,2);

// EXAMPLE A: Recursion Approach
function logNumbersRecursively(start, end) {
  console.log(`recursively looping from ${start} until ${end}`);
  
  function recurse(i) {
    console.log('hitting index', i);
    if(i < end) {
      recurse(i + 1);
    }
  }

  recurse(start); // where the function actually starts
}
console.log('~~~ logNumbersRecursively ~~~')
logNumbersRecursively(1,3);
```

---

### Looping Review (4/16/19)
- https://frontendmasters.com/courses/practical-algorithms/looping-review/
- TOPICS:

- recursion can always be implemented as an iterative loop
- but in some situations believe it or not, it is simpler to use recursion

- `tail-call optimization` - ES6 offers TCO, which allows some functions to be called without growing the call stack
- [Tail call optimization in ECMAScript 6](http://2ality.com/2015/06/tail-call-optimization.html)

---

### Wrapper Functions (4/16/19)
- https://frontendmasters.com/courses/practical-algorithms/wrapper-functions/
- TOPICS: wrapper, accumulators, closure

- **COMMON PATTERNS FOR RECURSION**
1) Wrapper Functions - has a base case check
2) Accumulators - next lesson
```js
// WRAPPER FUNCTION 1
// Utilizes a closure
// When we access `end` from the inner function, we are accessing a closure scoped variable
function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${start} until ${end}`);

    if(i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

// WRAPPER FUNCTION 2
// Does not utilize a closure
function MemoFnLoop(i, end) {
  console.log(`looping from ${i} until ${end}`);
  if(i < end) {
    MemoFnLoop(i + 1, end);
  }
}

console.log('~~~ wrapperFnLoop ~~~')
wrapperFnLoop(1,5);
console.log('~~~ MemoFnLoop ~~~')
MemoFnLoop(1, 6);
```

---

### Accumulators (4/17/19)
- https://frontendmasters.com/courses/practical-algorithms/accumulators/
- TOPICS: accumulator passing

- this technique employs passing the accumulator along with each recursive call to build this string
```js
function joinElements(array, joinString) {

  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, '');
}

joinElements(['s','cr','t cod', ' :) :)'], 'e');
```

---

### Iterative Loop Exercise (4/17/19)
- https://frontendmasters.com/courses/practical-algorithms/iterative-loop-exercise/
- TOPICS: recursion and iterative translation

- translation between recursion and iterative approach is key for dynamic programming approach
- don't forget to add the smiley faces at end since our loop does not take care of that
```js
// Task: rewrite this function so that it uses a loop rather than recursion
function joinElements(array, joinString) {
  let resultSoFar = ''

  for (let i = 0; i < array.length-1; i++) {
		resultSoFar += (array[i] + joinString)
  }

  return resultSoFar + array[array.length-1];
}

joinElements(['s','cr','t cod', ' :) :)'], 'e');
```

---

### Iterative Loop Solution (4/17/19)
- https://frontendmasters.com/courses/practical-algorithms/iterative-loop-solution/
- TOPICS:
- I was able to get the same solution and wrote it the same way
- solution in previous lesson

---

### Recursive Factorial & Memoize Exercise (4/17/19)
- https://frontendmasters.com/courses/practical-algorithms/recursive-factorial-memoize-exercise/
- TOPICS:

- recommends we write code so we can avoid the "false understanding" fallacy because we are being explained the process and it seems easy
- we can look at the iterative solution for hints
- try to write out the whole code and reason through it without running the code at every step

- my task 2 wasn't a memoize function but it worked
```js
// =======================================
// Task 1: Without peeking, write your own recursive factorial method
function recurse(num) {
  if (num === 1) {
    return 1;
  }
  return num * recurse(num-1);
}
recurse(5);
// return 5 * recurse(4); // 120
// return 4 * recurse(3); // 24
// return 3 * recurse(2); // 6
// return 2 * recurse(1); // 2

// =======================================
// Task 2: Use your memo function from the previous exercise to memoize your factorial method
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * memoRecurse(num-1)
}

function memoRecurse(num) {
  const cache = {}

  if (num in cache) {
    return cache[num]
  }
  else {
    cache[num] = factorial(num)
    return factorial(num)
  }
}
memoRecurse(5)
```

---

### Recursive Factorial & Memoize Solution (4/17/19)
- https://frontendmasters.com/courses/practical-algorithms/recursive-factorial-memoize-solution/
- TOPICS: generic memoization

```js
// MY SOLUTION
// Closer to Generic Memoize Function Exercise on 4/15/19
// Only difference is I abstracted out the calculate function, like the times10 function
// calling it `cb` makes it easier for me to recognize
const calculate = (x) => {
	if (x === 1) {
		return 1
	}
	else {
		return x * factorial(x-1);
	}
}

const memoize = (cb) => {
	const cache = {}
	
	return (m) => {
		if (m in cache) {
			return cache[m];
		}
		else {
			const result = cb(m);
			cache[m] = result;
			return result;
		}
	}
}

const factorial = memoize(calculate);

console.log(factorial(5)); // calculated
console.log(factorial(5)); // results already in cache now and quicker to return

// LECTURE SOLUTION
// the function is passed directly instead of spliting out like my solution
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    }
    else {
      console.log('Calculating result', n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

const factorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    }
    else {
      return x * factorial(x - 1);
    }
  }
);

console.log(factorial(5)); // calculated
console.log(factorial(5)); // cached for 5
```

---

## E) Divide and Conquer

---

### Introduction to Divide & Conquer (4/18/19)
- https://frontendmasters.com/courses/practical-algorithms/introducing-divide-conquer/
- TOPICS: binary search, sorted array

- a recursive strategy to break down huge problems into smaller ones so we can come up with a solution
- a common example is sorted `binary search` by cutting the side of the search area in half of a sorted array
- we start by dividing in half and then searching one side or the other, but NOT both
- it's progressively search halves to find the value but it MUST be sorted
- it takes `linear time` and decreased it to `logarithmic time`
- `binary search` = logarithmic time, search for a value in a **sorted** array by cutting the side of the search area in half
- `linear search` = linear time, search for a value in an array by checking each value in order
```
Initial: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], search for 7
Step 1: [1, 2, 3, 4, ~~5~] [6, 7, 8, 9, 10], is 7 < 5? No, we drop the first half
Step 2: [6, 7, ~~8~~, 9, 10], is 7 < 8? Yes, we drop the last half
Step 3: [6, ~~7~~, 8] is 7 <= 7? Yes, we found our answer
```

---

### Linear Search Exercise (4/18/19)
- https://frontendmasters.com/courses/practical-algorithms/linear-search-exercise/
- TOPICS: linear search

- can do this many ways: forEach, forIn, forOf, some, includes, filter
- questions to ask:
1) what do you want to return if found and not found?
2) what if there are multiple item's?
3) what if the list is empty?
```js
// TASK: Implement linear search.
function linearSearch(list, item) {
  // method 1
  return list.includes(item) ? item : '';

  // method 2
  // return list.filter(n => item === n)[0];
}

linearSearch([2,6,7,90,103], 90);
```

---

### Linear Search Solution (4/18/19)
- https://frontendmasters.com/courses/practical-algorithms/linear-search-solution/
- TOPICS:

- this is `linear time` in the worst case, item is at the end of the array
```js
// TASK: Implement binary search.
function binarySearch(list, item) {
  let index = -1
  list.forEach((listItem, i) => {
    if (listItem === i) {
      index = i;
    }
  })
  return index;
}

binarySearch([2,6,7,90,103], 90);
```

---

### Binary Search (4/18/19)
- https://frontendmasters.com/courses/practical-algorithms/binary-search/
- TOPICS:

- with `binary search`, common implementation is the start in the middle
- `quicksort` on the other hand, could start at difference places like at the end
- this algorithm cuts the array and searches either left half or right half
```js
function binarySearch(list, item) {
  let min = 0;
  let max = list.length -1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min+max) / 2)

    if (list[guess] == item) {
      return guess;
    }
    else {
      if (list[guess] < item) {
        min = guess + 1; 
      }
      else {
        max = guess - 1;
      }
    }
  }

  return -1;
}

binarySearch([2,6,7,90,103], 90);
```

---

### Divide & Conquer Review (4/18/19)
- https://frontendmasters.com/courses/practical-algorithms/divide-conquer-review/
- TOPICS:

- it's a recursive calls to a subset of a problem
- steps are:
```
0. Recognize base case
1. Divide: Break problem down during each call
2. Conquer: Do work on each subset
3. Combine: Solutions
```

- the combine steps can look different between sort types
- it would be clear in a `merge sort` but is kind of skipped in `binary search`

---

### Sorting Types (4/18/19)
- https://frontendmasters.com/courses/practical-algorithms/sorting-types/
- TOPICS:

- there are `searches` and `sorts`, we are covering sorts in this lesson
- there are also noncomparison sorts but we are not covering it in this course

- there are often data structures that combines well with `searches`
- like `binary tree` with `binary search`

- **2 CLASSES OF COMPARISON SORTS**
- [David Galles Sort Animations](http://rebootjeff.github.io/comparisonsort/)

1) **Naive Sorts** - keep looping and comparing values until the list is sorted, quadratic time
a) *bubble sort* - Loop through an array, comparing adjacent indices and swapping the greater value to the end
b) *insertion sort*
c) *selection sort*

2) **Divide & Conquer Sorts** - recursively divide lists and sort smaller parts of list until entire list is sorted, nlogn time
a) *merge sort* - Recursively merge sorted sub-lists.
b) *quick sort*

---

### Merge Sort (4/20/19)
- https://frontendmasters.com/courses/practical-algorithms/merge-sort/
- TOPICS:
- [David Galles Sorting Comparisons](http://rebootjeff.github.io/comparisonsort/)
- [Merge-sort Dance](https://www.youtube.com/watch?v=XaqR3G_NVoo)

- the merge step is the conquer part
- it compares the 2 final arrays and compares values starting from the left and then `shift` it out to `insert` into a new array

- **PSEUDOCODE**
```js
// [3,27] //[9,10] => [3,9,10,27]
// PSEUDOCODE
mergeSort(list)
  // 1. base case: if list.length < 2, return (Divide input array into 'n' single element subarrays)
  // 2. break the list into halves L & R
  // 3. Lsorted = mergeSort(L)
  // 4. Rsorted = mergeSort(R)
  // 5. return merge(Lsorted, Rsorted) (Repeatedly merge subarrays and sort on each merge)

merge(L,R)
// 1. initialize empty array
// 2. compare the first index of the left array
// to the first index of the right array
// 3. push the lower value to empty array
// 4. shift the array with the lower value
// 5. repeat until both arrays are empty
```

---

### Merge Sort Walkthrough (4/20/19)
- https://frontendmasters.com/courses/practical-algorithms/merge-sort-walkthrough/
- TOPICS:

- went over another case of merge sort
- Recursion `O(logn)` to divide the list, and the linear portion `O(n)` to merge the list together again, final time complexity is `O(n * logn)`

- **MORE PSEUDOCODE**
```js
mergeSort(list)
  initialize n to the length of the list

  base case is if n < 2, just return

  initialize mid to n/2

  left = left slice of array to mid - 1

  right = right slice of array mid to n - 1

  mergeSort(left)
  mergeSort(right)

  merge(left, right)
```

---

### Bubble Sort & Merge Sort Exercise (4/20/19)
- https://frontendmasters.com/courses/practical-algorithms/bubble-sort-merge-sort-exercise/
- TOPICS:
`[9, 2, 5, 6, 4, 3, 7, 10, 1, 8];`
`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`
`[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];`

- **BASIC BUBBLE SORT**
- without comments
```js
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j <arr.length; j++) {
			if (arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			}
		}
	}
	return arr;
}

console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
```

- **REFINED BUBBLE SORT**
- without comments
```js
function bubbleSort(arr) {
	let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        swapped = true;
      }
    }
  } while(swapped);

  return arr;
}

console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
```

- **MERGE SORT**
- TASK: implement mergesort!
- protip: Split the array into halves and merge them recursively 
- protip: return once we hit an array with a single item. That is a sorted array of size 1!
- protip: compare the arrays item by item and return the concatenated result
- without comments
```js
function mergeSort (arr) {
  if (arr.length === 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
	
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
```

---

### Bubble Sort Solution (4//19)
- https://frontendmasters.com/courses/practical-algorithms/bubble-sort-solution/
- TOPICS:

- Bubble sort is a `quadratic` time complexity
- If you're dealing with a mostly sorted list, than it's an okay sort
- if the list is reversed, it's terrible

- TIPS: the variables `countInner`, `countOuter`, and `countSwap` are only there to be instructive to how many times the algorithm hit it, so if they are confusing you, you can delete them

- BIG O: Bubble sort is a `quadratic` time complexity
- **BASIC SORT**
- we have to run `arr[j-1] > arr[j]` in order to pull the value from the previous j-loop interation up
- I didn't use this in my code since it's confusing
- if we don't do that, the highest number would never bubble to the far right
```js
//TASK: Implement bubblesort!
// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// BASIC
// arrayRandom => outer: 10, inner: 90, swap: 21
// arrayOrdered => outer: 10, inner: 90, swap: 0
// arrayReversed => outer:10, inner: 90, swap: 45
function bubbleSortBasic(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;
  for(var i = 0; i < array.length; i++) {
    countOuter++;
    for(var j = 1; j < array.length; j++) {
      countInner++;
      if(array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}
console.log('~~~ ~~~ BASIC ~~~ ~~~');

console.log('\n~~~ basic: arrayRandom ~~~');
bubbleSortBasic(arrayRandom.slice());

console.log('\n~~~ basic: arrayOrdered ~~~');
bubbleSortBasic(arrayOrdered.slice());

console.log('\n~~~ basic: arrayReversed ~~~')
bubbleSortBasic(arrayReversed.slice());
```

- **OPTIMIZED BUBBLE SORT**
- solution gets rid of any extra looping if array is already sorted
- notice the less amount of loopings compared to basic bubble sort
```js
// OPTIMIZED
// arrayRandom => outer: 9, inner: 90, swap: 21
// arrayOrdered => outer: 1, inner: 10, swap: 0
// arrayReversed => outer:10, inner: 100, swap: 45
function bubbleSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  var swapped;
  do {
    countOuter++;
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      countInner++;
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

console.log('\n\n~~~ ~~~ OPTIMIZED ~~~ ~~~');

console.log('\n~~~ optimized: arrayRandom ~~~');
bubbleSort(arrayRandom.slice());

console.log('\n~~~ optimized: arrayOrdered ~~~');
bubbleSort(arrayOrdered.slice());

console.log('\n~~~ optimized: arrayReversed ~~~');
bubbleSort(arrayReversed.slice());
```

---

### Merge Sort Solution (4//19)
- https://frontendmasters.com/courses/practical-algorithms/merge-sort-solution/
- TOPICS:

- **INTERVIEW STRATEGY**
1) generally ask you how would you sort an unsorted array of numbers
2) implement bubble sort since it's quicker and maybe reference mergesort if you're really good at it
3) tell them you're aware that bubble sort is quadratic time and mergesort is nlogn time but for the time constraints, bubble sort is faster to implement without all the mistakes that can make your code not work in mergesort
- merge sort is a lot of code and many points in the algorithm that can go wrong
- javascript engine uses quicksort, or mergesort, depending on the situation

```js
//TASK: implement mergesort!

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
```

---

## F) Greedy Algorithms

---

### Introducing Greedy (4/22/19)
- https://frontendmasters.com/courses/practical-algorithms/introducing-greedy/
- TOPICS:

- it takes the short solution at that time without looking at the big picture
- `Greedy Algorithm` always makes the locally optimal choice
- we are talking about the general approach, not in a mathematical sense

- greedy algorithm helps you get a solution, albeit not the most practical
- there was a weight-gragh as an example
- a graph was shown about how to get from A to B

---

### Greedy Algorithms Walkthrough (4//19)
- https://frontendmasters.com/courses/practical-algorithms/greedy-algorithms-walkthrough/
- TOPICS:

- **PROBLEM**
```
You are the banker in Monopoly with your family who has lost many of the game pieces so you only have bills in these denominations: 

$5 $10 $25

You need only pay out your family in the least number of bills possible so you don't run out before the game is over. Write a function that calculates the least number of bills required for any given dollar amount that is divisible by 5.
```

- **MY CODE SOLUTION**
- Was not specified there was an array type of coins
```js
// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.
// coin values: 5, 10, 25
// input amount: 40 , output # of coins: 3 (25, 10, 5)
// input amount: 35, output # of coins: 2 (25, 10)
function makeChange(n) {
	let count = 0;

	if (n % 25 >= 0) {
		let divided = Math.floor(n/25);
		n -= (divided*25);
		count += divided;
	}
	if (n % 10 >= 0) {
		let divided = Math.floor(n/10);
		n -= (divided*10);
		count += divided;
	}
	if (n % 5 == 0 || n / 5 > 1) {
		let divided = Math.floor(n/5);
		n -= (divided*5);
		count += divided;
	}

	return count;
}

console.log(makeChange(40)); // 3
console.log(makeChange(35)); // 2
```

- **OFFICIAL GREEDY SOLUTION**
```js
const makeChange = (coins, amount) => {
  coins.sort((a, b) => b - a);
  let coinTotal = 0;
  let i = 0;
  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      coinTotal++;
    } else {
      i++;
    }
  }
  return coinTotal;
};

makeChange([5, 10, 25], 50);
```

---

### Brute Force (4//19)
- https://frontendmasters.com/courses/practical-algorithms/brute-force/
- TOPICS:

- `Greedy Approach` - always subtract the largest coin possible from the current amount.
- isn't always the best approach because we can say for sure the short solution is the overall best

- Would these values work with your greedy solution?
- coin values: 1,6,10
- input: 12
- the `greedy` method will break down here because it doesn't test all the paths as a big picture
- `greedy` is also hard to prove that it is correct since it is so short-sighted

- `Brute Force Approach` - calculate every single combination possible and keep track of the minimum.
- we would go through every possibility and use recursion

- **OFFICIAL BRUTE FORCE SOLUTION**
- this would be `exponential` time so `greedy` solution would be faster in some cases
- even with a moderate data set, this would take up a lot of time
```js
// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
  recursionCounter++;
  console.log(`${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if(minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

makeChange(12);
```

---

## G) Dynamic Algorithms

---

### Introducing Dynamic Programming (4/23/19)
- https://frontendmasters.com/courses/practical-algorithms/introducing-dynamic-programming/
- TOPICS:

- `dynamic programming` is an optimization technique
- the challenge with dynamic programming is more with the recursion than the memoization
- it's being able to trace through how the code executes to solve these problems
- improve your mental model and practice recursion

- *qualities*: optimal substructure (recursive usually), overlapping subproblems

- *DP vs Divide & Conquer*:
- DP recursion results are something you can cache
- DC recursion are something you have to go through every time

- *approaches*: Top Down and Bottom Up
- cache values to avoid repeated calculations
- there are many ways to cache your solution
- `top-down (recursive) technique`is one method
- `bottom-up (iterative) technique` is another
---

### Memoization with Recursion (4/23/19)
- https://frontendmasters.com/courses/practical-algorithms/memoization-with-recursion/
- TOPICS:

- our makeChange brute-force function only needs a cache for dynamic programming
- there is a better way than to keep the global cache and memoize but not the aim of this lesson
- also better if you pass in `coins` array as arguments rather than a global variable

```js
const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
  // Return the value if it’s in the cache
  if (cache[c]) return cache[c];

  let minCoins = -1;

  // Find the best coin
  coins.forEach(coin => {
    if (c - coin >= 0) {
      let currMinCoins = makeChange(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins
      }
    }
  })

  // Save the value into the cache
  cache[c] = minCoins + 1;
  return cache[c];
}

console.log(makeChange(12));
```

---

### The Landscape of Data Structures & Algorithms (4/23/19)
- https://frontendmasters.com/courses/practical-algorithms/the-landscape-of-data-structures-algorithms/
- TOPICS:

- there's a mindmap of what we covered in this course and future plans
- part 2: basic data structures
- stack/queues, linked list, hash tables

- learning algorithms is a lifelong process
- next steps: to practice with algorithms
- Open Moocs, Princeton, MIT, CS50 Harvard, geekforgeeks.org

# Testing React Applications v4 /w Kent C. Dodds

## A) Introduction 

---

### Course Overview (4/25/19)
- https://frontendmasters.com/courses/testing-react/course-overview/

- **COURSE COVERAGE**
- Learn the fundamentals of what a test is and what role testing frameworks play
- configure Jest for a client-side React project
- Learn what Code Coverage is and how to properly use that metric
- Write unit tests for JavaScript utilities and React components
- Learn what snapshot testing is and how to use it effectively
- Write integration tests for a React application
- Configure Cypress for a web application
- Write E2E (end-to-end) tests with Cypress

- **NOT COVERED**
- no mocha, no jasmine
- not using enzyme
- not covering all form of testings

- **SETUP**
- [Course github repo](https://github.com/kentcdodds/testing-workshop/tree/fem-2018)
- [Slides](https://slides.com/kentcdodds/testing-react-apps#/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
---

### Testing Fundamentals (4/25/19)
- https://frontendmasters.com/courses/testing-react/testing-fundamentals/
- [But really, what is a JavaScript test](https://kentcdodds.com/blog/but-really-what-is-a-javascript-test/)

- **STATIC CODE ANALYSIS**
- `ESLint` can be really helpful
- `Flow` is a static type checker
- `Prettier` is to format and make code more readable
- don't enforce ESLint styles rules other than syntax corrections, we have Prettier for that

- these run in the background and you don't have to configure them
- we are not using these tools today
- Kent recommends Flow or TypeScript

- **UNIT TESTING**
- can use `ReactDOM`, DOM elements, and make assertions in Jest
- usually straightforward and smaller

- **INTEGRATION TESTING**
- bigger experience and you have to render out the entire application
- you get more coverage than an unit test
- can be a little bit slower and harder to integrate like network requests

- **END-TO-END TESTS**
- treating app as black box and take in user inputs and 

- **WHAT IS A JAVASCRIPT TEST?**
- essentially when an error is thrown when something is wrong

---

### Writing a React Test & Exercise (4/26/19)
- https://frontendmasters.com/courses/testing-react/writing-a-react-test-exercise/

- started with `other` > `simple-react`
- use testing -> `item-list.todo.js` to start
- run updates with `npm run setup --silent`
- use `npm run test:react` to have testing CLI running
- this is a warmup
- follow arrange, act, assert steps

---

### Writing a React Test Solution (4/26/19)
- https://frontendmasters.com/courses/testing-react/writing-a-react-test-solution/
- [JEST expect documentation](https://jestjs.io/docs/en/expect)

- **1ST TEST**
- instead of testing for `expect(container.innerHTML).toBe('no items')`
- this test might change whether you have a `div` or a `span` wrapping around that texts

- a more appropriate test would be `expect(container.textContent).toMatch('no items')`
- this test checks for the text but doesn't concern with the DOM structure
- it just verifies the user experience remains the same
- `toMatch()` is a regex match, not an exact text match

- there are multiple tools to test for `visual regression testing`
- it has been easier now with newer tools but testing UI is inherently difficult
- like Cypress (screenshotting) or Jest (Puppeteer)

- **2ND TEST**
- not a high fidelity test because item order can change, ul & li might change
- this will at least test that those items will render
- if you're more concern with specific HTML tags like `ol` or `ul`, you can use `snapshot testing`
- testing higher fidelity and snapshot testing to come

---

## B) Test Configurations

---

### Configuring Jest & Babel (4/26/19)
- https://frontendmasters.com/courses/testing-react/configuring-jest-babel/

- working with other > configuration > calculator directory
- `npm run dev`
- `npm install --save-dev jest`
- added to scripts `"test": "jest"`

- jest has a lot of features and takes some time to install

- in real world, your babel should compile everything except imports because webpack supports ES modules (tree shaking)

- spoke about `tree shaking` and babelrc file which I don't understand quite yet
- Kent also converts his babelrc file to a JS file from JSON and declares it in package.json

- **babelrc.js file**
```js
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [['env', {modules: isTest ? 'commonjs' : false}], 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
  ],
}
```

---

### Jest JSDOM (4/26/19)
- https://frontendmasters.com/courses/testing-react/jest-jsdom/

- `JSDOM` runs by default but if we don't need to access things like the window
- it's heavy memory wise so adds to the start time
- if you are doing pure node or javascript, you can remove it

- there are various test environments but node and jsdom are pre-installed with Jest
```js
  "jest": {
    "testEnvironment": "node" // can be shortened
    // "testEnvironment": "jests-environment-node"
  },
```


---

### CSS Imports (4/26/19)
- https://frontendmasters.com/courses/testing-react/css-imports/

- worked with auto-scaling file
- node can't import CSS so it will either do JSON or javascript module
- added another `jest.config.js`, Jest will pick it up by default
- Usually run in the client since it's more complex than the server
- you can also run 2 separate test environments in parallel and should all work

- installed `npm install --save-dev indetity-obj-proxy`
- this module mapper concept is useful when you're also using graphQL or loaders
- we are using CSS modules here

---

### CSS Modules (4/27/19)
- https://frontendmasters.com/courses/testing-react/css-modules/

- in a real world application, you'll have `dynamic imports`
- Node doesn't support ES modules or dynamic imports
- we can use `npm install --save-dev babel-plugin-dynamic-import-node` to convert dynamic import to the node equivalent

- hard to simulate local storage in node but now we have proxies

---

### Handling Dynamic Imports (4/27/19)
- https://frontendmasters.com/courses/testing-react/handling-dynamic-imports/

- `local storage` is similar to `session storage` so you will also support it due to similar api
- as long as you're using the `removeItem`, `setItem`, `getItem` methods then it will work okay for mocks
- we can also use `setupTestFrameworkScriptFile` when we need to run something before out tests run
---

### Adding Code Coverage Reports (4/27/19)
- https://frontendmasters.com/courses/testing-react/adding-code-coverage-reports/

- `code coverage` usually required installing multiple dev dependencies
- now we can just add `"test": "jest --coverage" in our package.json

- we are also recording our test coverage files and can bring our overall results higher than it should be
- usually Kent has 2% lower than the original
- sometimes the highlight request is not always perfect
- we can fix this by adjusting our jest configuration using `collectCoverageFrom:`
- we can set the coverage by adding:
```js
coverageThreshold: {
  global: {
    statements: 18,
    branches: 10,
    functions: 19,
    lines: 18
  }
}
```
---

### Jest Watch Mode (4/27/19)
- https://frontendmasters.com/courses/testing-react/jest-watch-mode/

- add this watch mode by adding `"test:watch": "jest --watch"`
- Jest by default runs tests only on changed file since the last commit so helps saves time

- you can also filter out specific tests based on file name, test name, failed test, and other names

---

### Jest Config Review (4/27/19)
- https://frontendmasters.com/courses/testing-react/jest-config-review/

- Jest creates a test coverage folder called `lcov-report`, make sure to add to .gitignore

- Engineers should be responsible for testing their code but usually it's the QA role that helps set it up

- Jest also can run a client and server folder in a single repo with the command in parallel using `./node_modules/.bin/jest`
- you can set different coverage threshold for each

- **TO DO LIST TO CONFIG JEST**
1) Add Jest as dependency
2) Add `babel-plugin-dynamic-import-node` as dev dependency
3) Added `"test": "jest --coverage"` an `"test:watch": "jest --watch"` scripts
4) Add a couple tests
5) Add `jest.config.js`
```js
module.exports = {
  displayName: 'calculator',
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: require.resolve(
    './test/setup-test-framework.js',
  ),
  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
    // can also map files that are loaded by webpack with the file-loader
  },
  // normally you'd put this here
  // collectCoverageFrom: ['**/src/**/*.js'],
}
```

6) Update `.babelrc.js` for tree shaking
```js
const isTest = String(process.env.NODE_ENV) === 'test'
module.exports = {
  presets: [['env', {modules: isTest ? 'commonjs' : false}], 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
    isTest ? 'dynamic-import-node' : null,
  ].filter(Boolean),
}
```

---

## C) Unit Testing React Components

---

### Course Project Overview (4/27/19)
- https://frontendmasters.com/courses/testing-react/course-project-overview/

- working on root directory and ran `npm run dev`
- we are testing this form component
- login is `til`/`til`

---

### Unit Testing a React Component (4/27/19)
- https://frontendmasters.com/courses/testing-react/unit-testing-a-react-component/
- [But Really, What is a Javascript Mock?](https://kentcdodds.com/blog/but-really-what-is-a-javascript-mock/)

- we are working in `client>scr>screens/__tests__/editor.todo.js`
- run `npm run test:client` to run tests
- the only react item is the `ReactDOM.render(<Editor />, container)`, otherwise you can run with Vuejs

- **NAIVE METHOD**
- naive method is long way to do it, used refined method in practice
- we rendered the container with content
- then we fired a submit event
- we use `jest.mock` to mock APIs
- we also create fake users and history during mocks

- `flushPromises` helps to deal with async nature
- we use utilsMock to mock the data being sent in the API request
```js
import React from 'react'
import ReactDOM from 'react-dom'
import * as utilsMock from '../../utils/api'
import Editor from '../editor.todo'

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    }
  }
})

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  const container = document.createElement('div')
  const fakeUser = { id: 'foobar' }
  const fakeHistory = {
    push: jest.fn(),
  }
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)
  const form = container.querySelector('form')
  const { title, content, tags } = form.elements

  title.value = 'I like twix'
  content.value = 'Like a lot..sorta'
  tags.value = 'twix,      my      , likes'

  const submit = new window.Event('submit')
  form.dispatchEvent(submit)

  await flushPromises()

  expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  expect(fakeHistory.push).toHaveBeenCalledWith('/')
  expect(utilsMock.posts.create).toHaveBeenCalledTimes(1)
  expect(utilsMock.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['twix', 'my', 'likes'],
    date: expect.any(String),
  })
  // Arrange
  // create a fake user, post, history, and api
  //
  // use ReactDOM.render() to render the editor to a div
  //
  // fill out form elements with your fake post
  //
  // Act
  // submit form
  //
  // wait for promise to settle
  //
  // Assert
  // ensure the create function was called with the right data
})

// TODO later...
test('snapshot', () => { })
```

- **JS MOCK EXERCISE**
- in `testingWorkshop/other/whats-a-mock/__tests__/thumb-war-1.todo.js`
```js
// // FIRST ITERATION
// monkey-patching
import thumbWar from '../thumb-war'
// import the utils module (see hint #1 at the bottom of the file)
import * as utils from '../utils'

test('returns winner', () => {
  // keep track of the original `getWinner` utility function (see hint #2)
  const originalGetWinner = utils.getWinner

  // overwrite the utils.getWinner function with
  // our own that always returns the second player (see hint #3)
  utils.getWinner = (p1, p2) => p2

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  // change this assertion to be more for a specific player
  // (like 'Kent C. Dodds', see hint #4):
  expect(winner).toBe('Kent C. Dodds')

  // restore the originalGetWinner function so other tests don't break
  // (see hint #5)
  utils.getWinner = originalGetWinner
})



// // SECOND ITERATION
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner

  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args)
    return args[1]
  }
  utils.getWinner.mock = { calls: [] }

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toHaveLength(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

  utils.getWinner = originalGetWinner
})



// // THIRD ITERATION
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner

  utils.getWinner = jest.fn((p1, p2) => p2)

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

  utils.getWinner = originalGetWinner
})



// // FOURTH ITERATION
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner = jest.fn((p1, p2) => p2)

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})



// FIFTH ITERATION
import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p2),
  }
})

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})
```
---

### Test a Form Component Exercise (4/28/19)
- https://frontendmasters.com/courses/testing-react/test-a-form-component-exercise/
- [How Jest mocking works](https://github.com/kentcdodds/how-jest-mocking-works)
- In `client/src/components/__tests__/login.step-1.todo.js`

- **MY ATTEMPT**
- lecture solution is more clean

```js
// Basic unit test
import React from 'React'
import ReactDOM from 'react-dom'
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)
  const fakeUser = {
    username: 'johndoe',
    password: 'fake',
  }
  // 🐨 create a jest.fn() for your submit handler
  const handleSubmit = jest.fn()

  // 🐨 render the Login component to a div
  // 💰 const div = document.createElement('div')
  const div = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, div)

  // 🐨 get the field nodes
  // 💰 const inputs = div.querySelectorAll('input')
  // 💰 const form = div.querySelector('form')
  const formNode = div.querySelector('form')
  const inputs = div.querySelectorAll('input')
  const usernameNode = inputs[0]
  const passwordNode = inputs[1]
  const submitButtonNode = div.querySelector('button')

  // 🐨 fill in the field values
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // Act
  // 🐨 submit the form:
  // 💰 formNode.dispatchEvent(new window.Event('submit'))
  const event = new window.Event('submit')
  formNode.dispatchEvent(event)

  // Assert
  // 🐨 ensure your submit handler was called properly
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
  expect(submitButtonNode.type).toBe('submit')
})
```

---

### Test a Form Component Solution (4/28/19)
- https://frontendmasters.com/courses/testing-react/test-a-form-component-solution/

- question about using refs in react testing situation
- we will have a better method soon but usings refs can get to be a pain really quickly
```js
import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  const handleSubmit = jest.fn()
  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

  const form = container.querySelector('form')
  const { username, password } = form.elements
  username.value = "chucknorris"
  password.value = "nopassword"

  form.dispatchElement(new window.Event('submit'))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).tohaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
}
```

---

### Enzyme Limitations (4/28/19)
- https://frontendmasters.com/courses/testing-react/enzyme-limitations/

- `react-testing-library` came about from FEM workshop
- `dom-testing-library` came from react-testing-library and it was just general dom stuff


- **ENZYME CONS**
- your tests should resemble the way that your software is used
- Enzyme is testing tool for react with mount, render, shallow render
- problems with enzyme:
1) Enzyme provides utilities to test things that are not being used in reality like shallow rendering
- shallow rendering doesn't render all the components and you have to make separate unit tests to tests other smaller forms, inputs, etc.
- it will not render custom components
- shallow rendering bottom line: makes you code to an implementation and not behavior, which is bad
2) Users don't care what you name your component and the amount of components
- The name of the function is not component because the user doesn't care what the name of it is
- if you go to change the name, your tests breaks
- doesn't matter if you have 1 or 5 length in a div

---

### react-testing-library (4/29/19)
- https://frontendmasters.com/courses/testing-react/react-testing-library/
- [react-testing-library repo](https://github.com/testing-library/react-testing-library)
- [babel-plugin-react-remove-properties](https://www.npmjs.com/package/babel-plugin-react-remove-properties)

- `dom-testing-library` is just javascript testing, not react/angular/vue specific
- we use the `getByText()` because that's how our users would find a button as well

- **getByLabelText**
- similar to how a user would search for a field to enter information
- uses `for=` in javascript and `htmlFor=` in react
- we can use `for`, `aria-labelledby`, or `aria-label` (not recommended)
- you can still use snapshot with this type of testing

- `getByPlaceholderText` not recommended either for accessibility reasons

- **getByTestId**
- `getByTestId` is useful for testing specific components and does no harm to your application (pairs with `data-testid=` element attribute)
- using data-testid helps communicate that this is a testable element, unlike using classes where tests can break if someone changes from `btn-disabled` to `btn-success`
- `await wait(() => getByTestId('greeting-text'))` waits for the promise to come back without error, this returns a dom node

- `babel-plugin-react-remove-properties` is a package that can help remove this data-testid attribute if you're really uncomfortable with it
- although you are shipping this to production code, it won't be a bottleneck, other places to optimize file size, and users won't know the difference if you use this extra attribute

- `cleanup` method will remove all things that were inserted into the document

---

### react-testing-library Exercise (4/29/19)
- https://frontendmasters.com/courses/testing-react/react-testing-library-exercise/
- [ReactJS simulate](https://reactjs.org/docs/test-utils.html#simulate)

- **ADDITIONAL TEST METHODS**
- `simulate` is a re-export from react dom (DEPRECATED)
- you would use this when you need to do a left click on a react-dom-router link

- `wait` accepts a callback

- `waitForElement` will give you back element you are waiting for

- **STEP 2 TESTING**
- now on `client/src/components/__tests__/login.step-2.todo.js`
- my attempt:

```js
// using helpful utilities
import React from 'react'
import ReactDOM from 'react-dom'
// 🐨 you'll need these:
import { generate } from 'til-client-test-utils'
import { render, fireEvent } from 'react-testing-library'

// note that til-client-test-utils is found in `client/test/til-client-test-utils`
// note also that the client/test/setup-test-framework.js file takes care of
// `import react-testing-library/cleanup-after-each'` for us.
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 use generate.loginForm() here instead of assigning fakeUser to an object
  // const fakeUser = { username: 'chucknorris', password: '(╯°□°）╯︵ ┻━┻' }
  generate.loginForm()
  const handleSubmit = jest.fn()
  // 🐨 use: render(<Login onSubmit={handleSubmit} />)
  // It'll give you back an object with
  // `getByLabelText` and `getByText` functions
  // so you don't need a div anymore!
  // 💰 const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)
  const { getByLabelText, getByText } = render(<Login onSubmit={handleSubmit} />)

  const usernameNode = getByLabelText('Username')
  const passwordNode = getByLabelText('Password')
  const submitButtonNode = getByText('Submit')
  // const div = document.createElement('div')
  // ReactDOM.render(<Login onSubmit={handleSubmit} />, div)
  // const inputs = div.querySelectorAll('input')
  // const usernameNode = inputs[0]
  // const passwordNode = inputs[1]
  // const formNode = div.querySelector('form')
  // const submitButtonNode = div.querySelector('button')

  usernameNode.value = 'chucknorris'
  passwordNode.value = '╯°□°）╯︵ ┻━┻'

  // Act
  // 🐨 Use fireEvent.click(submitButtonNode) instead of these two lines
  // const event = new window.Event('submit')
  // formNode.dispatchEvent(event)
  fireEvent.click(submitButtonNode)

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({ usernameNode, passwordNode})
  // 🐨 this assertion is no longer necessary:
  // expect(submitButtonNode.type).toBe('submit')
})
```

---

### react-testing-library Solution (4/29/19)
- https://frontendmasters.com/courses/testing-react/react-testing-library-solution/

- `generate` function actually generates a username and password for you
- having an actual username like "chucknorris" and password can be distracting
- `getByLabelText` doesn't care if it's lowercase or not either, so "Username" === "username"
- or you can use a regex

- **LABEL & INPUT LINKAGE**
- the label element `htmlFor` attribute is linked with the input element `name` attribute
- the label element `id` attribute is linked with the input element `arialabelledby` attribute

- if there are multiple labels with the same name, it won't create an array
- POSSIBLE APPROACH: just create container and target label in that

- **VALID SOLUTION 1**
```js
import React from 'react'
import {generate} from 'til-client-test-utils'
import {render, fireEvent} from 'react-testing-library'
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const fakeUser = generate.loginForm()
  const handleSubmit = jest.fn()
  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)

  const usernameNode = getByLabelText(/username/i)
  const passwordNode = getByLabelText(/password/i)
  const submitButtonNode = getByText(/submit/i)

  // Act
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password
  fireEvent.click(submitButtonNode)

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})
```

- **VALID SOLUTION 2**
- we must be aware that the `submitButtonNode` must have a type of "submit" on it or this test will not work
- `Simulate` is deprecated
```
BREAKING CHANGE: `renderIntoDocument` replaces `render` and `Simulate` is no longer exported (use `fireEvent` instead).

https://github.com/testing-library/react-testing-library/commit/52575005579307bcfbe7fbe4ef4636147c03c6fb
```

```js
import React from 'react'
import { generate } from 'til-client-test-utils'
import { render, fireEvent } from 'react-testing-library'
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const fakeUser = generate.loginForm()
  const handleSubmit = jest.fn()
  const { container, getByLabelText, getByText } = render(<Login onSubmit={handleSubmit} />)

  const usernameNode = getByLabelText('Username')
  const passwordNode = getByLabelText('Password')

  const formNode = container.querySelector('form')
  const submitButtonNode = getByText('Submit')

  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // Act
  // Simulate.submit(formNode) // no longer works, use fireEvent instead
  fireEvent.click(submitButtonNode)

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
  expect(submitButtonNode.type).toBe('submit')
})
```

---

### Using DOM Events Exercise (4/29/19)
- https://frontendmasters.com/courses/testing-react/using-dom-events-exercise/

- **STEP 3 TESTING**
- now on `client/src/components/__tests__/login.step-3.todo.js`
- my attempt:
```js
// snapshot testing
import React from 'react'
import {generate} from 'til-client-test-utils'
import {render, cleanup} from 'react-testing-library'
import Login from '../login'

afterEach(cleanup)

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const fakeUser = generate.loginForm()
  const handleSubmit = jest.fn()
  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)

  const usernameNode = getByLabelText(/username/i)
  const passwordNode = getByLabelText(/password/i)

  // Act
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password
  getByText(/submit/i).click()

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})

test('snapshot', () => {
  // render the login, this will give you back an object with a `container` property
  const {container} = render(<Login />)
  // expect the `container` property to match a snapshot
  expect(container).toMatchSnapshot()
})
```

---

### Using DOM Events Solution (4/29/19)
- https://frontendmasters.com/courses/testing-react/using-dom-events-solution/

- `renderIntoDocument` is deprecated, `render` is default

```
BREAKING CHANGE: `renderIntoDocument` replaces `render` and `Simulate` is no longer exported (use `fireEvent` instead).

https://github.com/testing-library/react-testing-library/commit/52575005579307bcfbe7fbe4ef4636147c03c6fb
```

- `unmount` also doesn't work, use `afterEach(cleanup)` instead

- **SOLUTION**
- `getByText(/submit/i).click()` works the same as `fireEvent.click(submitButtonNode`

```js
// snapshot testing
import React from 'react'
import {generate} from 'til-client-test-utils'
import {render, cleanup} from 'react-testing-library'
import Login from '../login'

afterEach(cleanup)

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const fakeUser = generate.loginForm()
  const handleSubmit = jest.fn()
  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)

  const usernameNode = getByLabelText(/username/i)
  const passwordNode = getByLabelText(/password/i)

  // Act
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password
  getByText(/submit/i).click()

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})

test('snapshot', () => {
  // render the login, this will give you back an object with a `container` property
  const {container} = render(<Login />)
  // expect the `container` property to match a snapshot
  expect(container).toMatchSnapshot()
})
```

---

### Component Testing Q&A (4/29/19)
- https://frontendmasters.com/courses/testing-react/component-testing-q-a/

- **QUESTION ON USING UI EFFECTS AND SETTIMEOUT**
- `jest.useFakeTimer` and `jest.runAllTimers()` in case you need to wait for a blur effect or something
- `wait` or `waitForElement` also works for APIs

- **QUESTION ABOUT TESTING STATE**
- not necessarily needed because it could potentially break
- if we have a spinner loader after a button is clicked, then just test that it shows up
- we dont need to check if the boolean in the state is switched on of off

- BOTTOM LINE: we want to make overarching tests that don't break on refactors, then user smaller tests on edge cases

---

## D) Snapshot Testing

---

### Introducing Snapshot Testing (4/30/19)
- https://frontendmasters.com/courses/testing-react/introducing-snapshot-testing/
- [import-all.macro](https://github.com/kentcdodds/import-all.macro)

- in `other/jest-epect/__tests__/expect-assertions.js`
- use `npm run test:expect`

- you can run a `manual snapshot` or `automatic snapshot`
- Kent would `console.log(flyingHeros)` and then copy paste in `.toEqual()`
- instead of use `.toEqual()`, you can use `toMatchSnapshot()`
```js

test('manual "snapshot"', () => {
  const flyingHeros = getFlyingSuperHeros()
  expect(flyingHeros).toEqual([
    {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
    {name: 'Apogee', powers: ['gravity control', 'fly']},
  ])
})

test('automatic snapshot', () => {
  const flyingHeros = getFlyingSuperHeros()
  expect(flyingHeros).toMatchSnapshot()
})
```

- snapshots will be in the in `__snapshots__` folder and can be updated with "u" key
- we'll commit snapshots to source control, any changes will be recognized, updated, and commited

- **SERIALIZED SNAPSHOTS**
- the snapshot file will serialize all the html elements
- it will also do other elements like DOM nodes and react elements
```js
test('snapshot examples', () => {
  const object = {
    mixedArray: [1, [2, 3], {four: 5, six: [7, 8]}],
    regex: /do-not-try-to-regex-an-email/,
    date: new Date('1988-10-18'),
    error: new Error('some error'),
    someFunction: () => {},
    symbol: Symbol('symbol description'),
    set: new Set([1, 2, 3]),
    map: new Map([[{}, []], [[], {}]]),
    // and more!
  }
  expect(object).toMatchSnapshot()

  // AND DOM NODES!!!
  const div = document.createElement('div')
  const title = '<h2 class="title">Super Heros are great!</h2>'
  const content =
    '<p class="content">We can each be a super hero for someone</p>'
  div.innerHTML = `<section>${title}${content}</section>`
  expect(div).toMatchSnapshot('title of a snapshot!')

  // And react elements!
  const onClick = () => {}
  const element = React.createElement('button', {onClick}, 'Hello World')
  expect(element).toMatchSnapshot('react element')

  // and rendered elements
  const rendered = renderer.create(element)
  expect(rendered).toMatchSnapshot('rendered')

  // and DOM nodes rendered via react
  const app = document.createElement('div')
  ReactDOM.render(element, app)
  expect(app).toMatchSnapshot('react-dom')
})
```

- snapshots are also a good way to test babble plugins
- `import-all.macro` repo on kentcdodds github helps with "A babel-macro that allows you to import all files that match a glob"

---

### Snapshot Testing Exercise (4/30/19)
- https://frontendmasters.com/courses/testing-react/snapshot-testing-exercise/

- you can also do customized manners that snapshots are serialized like taking out `h2` or `paths`
- if you want to do a certain snapshot serialize, you just pass the name of it IE `jest-glamour-react`
- there's one for styled components as well

---

### Snapshot Testing Solution (4/30/19)
- https://frontendmasters.com/courses/testing-react/snapshot-testing-solution/

- looks like we did this exercise in previous video already
- Kent wrote a little differently
```js
test('snapshot', () => {
  // render the login, this will give you back an object with a `container` property
  const {container} = render(<Login />)
  // expect the `container` property to match a snapshot
  expect(container.firstChild).toMatchSnapshot()
})
```

---

### Snapshot Q&A (4/30/19)
- https://frontendmasters.com/courses/testing-react/snapshot-q-a/
- [Effective Snapshot Testing](https://blog.kentcdodds.com/effective-snapshot-testing-e0d1a2c28eca)

- `toMatchSnapshot()` will generate the initial snapshot if there are none
- it might not be worth it to snapshot something that's pure HTML
- if you want to undo a snapshot, you have to do a git reset
- snapshot is not useful for TDD

- Kent's stance on snapshot testing is that it should supplement solid, complete unit tests
- If a small change in snapshot testing, then it shouldn't matter too much IE font-size change
- Kent also uses `.toThrowErrorMatchingSnapshot()` to expect it to throw a certain error matching a regex

---

## E) Integration Testing Pages

---

### Integration Tests Demo (4/30/19)
- https://frontendmasters.com/courses/testing-react/integration-tests-demo/

- tests from unit tests are very similar to integration tests
- Kent will do solution for register form and we will do login form

- we're in `client/src/__tests__/app.register.js`
- we run `axiosMock.__mock.reset()` to clear the state
- we will be doing async function since most will be asynchronous operations
- we are using `renderWithRouter(<App />)` to configure with any components that has a redux or router provider

```js
import React from 'react'
import axiosMock from 'axios'
import {renderWithRouter, fireEvent, generate} from 'til-client-test-utils'
import {init as initAPI} from '../utils/api'
import App from '../app'

beforeEach(() => {
  window.localStorage.removeItem('token')
  axiosMock.__mock.reset()
  initAPI()
})

test('register a new user', async () => {
  const {
    container,
    getByTestId,
    getByText,
    finishLoading,
    getByLabelText,
  } = renderWithRouter(<App />)
```

---

### Integration Tests Exercise (4/30/19)
- https://frontendmasters.com/courses/testing-react/integration-tests-exercise/

- Kent recommends we have a testing file that has testing utility modules like `til-client-test-utils`
- `renderWithRouter` is just like `render` method and exposes `getByText`, `getByLabelText`, etc.
- see more comments below

- **REGISTER FORM WALKTHROUGH**
```js
import React from 'react'
import axiosMock from 'axios'
import {renderWithRouter, fireEvent, generate} from 'til-client-test-utils'
import {init as initAPI} from '../utils/api'
import App from '../app'

beforeEach(() => {
  window.localStorage.removeItem('token') // clears any tokens
  axiosMock.__mock.reset() // resets any api calls
  initAPI()
})

test('register a new user', async () => {
  const {
    container,
    getByTestId,
    getByText,
    finishLoading,
    getByLabelText,
  } = renderWithRouter(<App />) // method exposes just like render

  // wait for the app to finish loading the mocked requests
  await finishLoading()

  // navigate to register
  const leftClick = {button: 0}
  fireEvent.click(getByText(/register/i), leftClick)
  expect(window.location.href).toContain('register') // check if we are on the right url path

  // fill out form
  const fakeUser = generate.loginForm()
  const usernameNode = getByLabelText('Username')
  const passwordNode = getByLabelText('Password')
  const formWrapper = container.querySelector('form')
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // submit form (we are mocking out post implementation)
  const {post} = axiosMock.__mock.instance
  const token = generate.token(fakeUser)
  post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {user: {...fakeUser, token}},
    }),
  )
  fireEvent.submit(formWrapper)

  // wait for the mocked requests to finish
  await finishLoading()

  // assert calls
  expect(axiosMock.__mock.instance.post).toHaveBeenCalledTimes(1)
  expect(axiosMock.__mock.instance.post).toHaveBeenCalledWith(
    '/auth/register', // correct endpoint
    fakeUser, // correct user
  )

  // assert the state of the world
  expect(window.localStorage.getItem('token')).toBe(token)
  expect(window.location.href).not.toContain('register')
  expect(getByTestId('username-display').textContent).toEqual(fakeUser.username)
  expect(getByText(/logout/i)).toBeTruthy()
})
```

- **MY ATTEMPT FOR LOGIN FORM**
- run `npm run test:client`
```js
import React from 'react'
import axiosMock from 'axios'
import {renderWithRouter, fireEvent, generate} from 'til-client-test-utils'
import {init as initAPI} from '../utils/api'
import App from '../app/'

// add a beforeEach for cleaning up state and intitializing the API
beforeEach(() => {
  window.localStorage.removeItem('token')
  axiosMock.__mock.reset()
  initAPI()
})

test('login as an existing user', async () => {
  // 🐨 render the app with the router provider and custom history
  // 💰 const utils = renderWithRouter(<App />)
  const {
    container,
    getByText,
    getByLabelText,
    finishLoading,
    getByTestId,
  } = renderWithRouter(<App />)

  // 🐨 wait for the app to finish loading the mocked requests
  // 💰 await utils.finishLoading()
  await finishLoading()

  // 🐨 navigate to login by clicking login-link
  // 💰 the link has text that matches /login/i
  // 💰 when you fireEvent.click on the login link, react-router will ignore
  // the click unless it's a "left click" which is based on the `button`
  // property. So as a second argument to `fireEvent.click`, pass `{button: 0}`
  fireEvent.click(getByText(/login/i), {button: 0})

  // 🐨 assert that window.location.href contains 'login'
  expect(window.location.href).toContain('login')

  // 🐨 fill out the form
  // 💰 generate.loginForm()
  // 💰 get the username and password fields and set their values
  const fakeUser = generate.loginForm()
  const usernameNode = getByLabelText(/username/i)
  const passwordNode = getByLabelText(/password/i)
  const formNode = container.querySelector('form')

  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // Now we need to prepare our axios mock to handle the form submission properly:
  // use the axiosMock.__mock.instance
  // to mock out the post implementation
  // it should return the fake user + a token
  // which you can generate with generate.token(fakeUser)
  // 💰 you may want to look at the final version for this one...
  const {post} = axiosMock.__mock.instance
  const token = generate.token(fakeUser)

  // 🐨 submit form by clicking on the submit button
  post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {user: {...fakeUser, token}},
    }),
  )
  fireEvent.submit(formNode)

  // 🐨 wait for the mocked requests to finish
  // 💰 await utils.finishLoading()
  await finishLoading()

  // 🐨 now make some assertions:
  // assert post was called correctly
  expect(post).toHaveBeenCalledTimes(1)
  // assert localStorage is correct
  expect(window.localStorage.getItem('token')).toBe(token)
  // assert the user was redirected (window.location.href)
  expect(window.location.href).not.toContain('login')
  // assert the username display is the fake user's username
  expect(getByTestId('username-display').textContent).toContain(
    fakeUser.username,
  )
  // assert the logout button exists
  expect(getByText(/logout/i)).toBeTruthy()
})
```

---

### Integration Tests Solution (4/30/19)
- https://frontendmasters.com/courses/testing-react/integration-tests-solution/

- **LECTURE SOLUTION**
- if we wanted to test a specific URL path we can use:
`expect(window.location.href).toBe('<url>')`
```js
import React from 'react'
import axiosMock from 'axios'
import {renderWithRouter, generate, fireEvent} from 'til-client-test-utils'
import {init as initAPI} from '../utils/api'
import App from '../app'

beforeEach(() => {
  window.localStorage.removeItem('token')
  axiosMock.__mock.reset()
  initAPI()
})

test('login as an existing user', async () => {
  const {
    getByTestId,
    getByText,
    getByLabelText,
    finishLoading,
  } = renderWithRouter(<App />)

  // wait for the app to finish loading the mocked requests
  await finishLoading()

  // navigate to login
  const leftClick = {button: 0}
  fireEvent.click(getByText(/login/i), leftClick)
  expect(window.location.href).toContain('login')

  // fill out form
  const fakeUser = generate.loginForm()
  const usernameNode = getByLabelText(/username/i)
  const passwordNode = getByLabelText(/password/i)
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // submit form
  const {post} = axiosMock.__mock.instance
  const token = generate.token(fakeUser)
  post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {user: {...fakeUser, token}},
    }),
  )
  fireEvent.click(getByText(/submit/i))

  // wait for the mocked requests to finish
  await finishLoading()

  // assert calls
  expect(axiosMock.__mock.instance.post).toHaveBeenCalledTimes(1)
  expect(axiosMock.__mock.instance.post).toHaveBeenCalledWith(
    '/auth/login',
    fakeUser,
  )

  // assert the state of the world
  expect(window.localStorage.getItem('token')).toBe(token)
  expect(window.location.href).not.toContain('login')
  expect(getByTestId('username-display').textContent).toEqual(fakeUser.username)
  expect(getByText(/logout/i)).toBeTruthy()
})
```

---

### Integration Testing Q&A (4/30/19)
- https://frontendmasters.com/courses/testing-react/integration-testing-q-a/

- the prevailing theme has been to test the component as a black box and test the public facing API and not the implementation details
- someone mentioned `jest/no-large-snapshot` which is a ESLint rule to limit the amount of lines of a snapshot

---

## F) Configuring Cypress

---

### Cypress (5/1/19)
- https://frontendmasters.com/courses/testing-react/cypress/

- `npm install --save-dev cypress`
- cypress installs and app and sticks in node_modules
- Cypress exposes a binary which we can run with `npx cypress open`

- working in `other/calculator/cypress/`
- `fixtures` are where we keep default user info in DB
- `integration` are where all the tests are, Kent renames to E2E
- `plugins` has purposes but not covered in course
- `support` has commands that we will use later

- **support/index.js**
- need to install `npm install --save-dev cypress-testing-library`
- we add the configs in `support/index.js` file
```js
import 'cypress-testing-library/add-commands'
```

- **cypress.json**
```js
{
  "baseUrl": "http://localhost:8080/",
  "integrationFolder": "cypress/e2e"
}
```

- we used `npm install --save-dev npm-run-all` is a script that lets you run multiple scripts in parallel
- you have to do `npm run build` first
- we add some scripts to package.json, 
1) `"test:e2e:dev": "npm-run-all --parallel dev cy:open"`
2) `"cy:open": "cypress open"`
3) `"test:e2e": "npm-run-all --parallel --race start cy:run"`
4) `cy:run: "cypress run"`

---

### Cypress Q&A (5/1/19)
- https://frontendmasters.com/courses/testing-react/cypress-q-a/

- Cypress doesnt work well in other browser execpt Chrome but the benefits outweigh the cons
- Cypress is a lot faster overall than Selenium
- It's best to have a couple selenium tests and cover the rest with Cypress
- the development process is faster overall wth Cypress

---

### Configuring Cypress Exercise (5/1/19)
- https://frontendmasters.com/courses/testing-react/configuring-cypress-exercise/

- We are going to focus on commands `test:e2e` in package.json
- run `npm run test:e2e` to start running tests

- in `./cypress/support/commands.js`
- there's a command that lets you login as a fresh user every time
- it's for registration and login purposes called `loginAsNewUser`
- you can also expose redux store as a global variable and cypress can pick up at a certain state

- in `cypress/e2e/auth.register.js`
- cypress can be used for integration and unit tests as well
- Cypress commands can looks sequential because it carries out synchronous operations and just how it is written

- **MY ATTEMPT**
- in `cypress/integration/auth.login.todo.js`

```js
// Normally you shouldn't need to break your tests up this much.
// Normally I'd just have a file called `auth` and have all my tests
// in that file. But I've split them up like this to make the workshop
// flow nicer with the demo and exercises.
// eslint-disable-next-line
import {generate} from '../utils'

describe('authentication', () => {
  beforeEach(() => cy.logout())

  it('should allow existing users to login', () => {
    // you'll want to first create a new user.
    // This custom cypress command is similar to a promise, so you can do:
    // cy.createNewUser().then(user => {
    //   more cy commands here
    // })

    // With the user created, go ahead and use the cy commands to:
    // 1. visit the app: visitApp
    // 2. Click the login link
    // 3. type the user's username in the username field
    // 4. type the user's password in the password field
    // 5. submit the form by clicking the submit button

    // Finally assert the route changed to '/'
    // and verify that the display name contains user.username
    cy.createNewUser().then(user => {
      const newUser = generate.loginForm()

      cy.getByText(/login/i)
        .click()
        .getByLabelText(/username/i)
        .type(newUser.username)
        .getByLabelText(/password/i)
        .type(newUser.password)
        .getByText(/submit/i)
        .click()
        .assertRoute('/')

      cy.getTestById('username-display').should('contain', newUser.username)
    })
  })
})
```

---

### Configuring Cypress Solution (5/1/19)
- https://frontendmasters.com/courses/testing-react/configuring-cypress-solution/

- **SOLUTION**
- `getByLabelText` and `getByText` is also case insensitive
- or you can use regex

- without Cypress, you can still use DOM selection by using `.get('.some-class-name', <action)`

- Cypress is completely open source and the pricing is for the dashboard

```js
// Normally you shouldn't need to break your tests up this much.
// Normally I'd just have a file called `auth` and have all my tests
// in that file. But I've split them up like this to make the workshop
// flow nicer with the demo and exercises.
// eslint-disable-next-line
import {generate} from '../utils'

describe('authentication', () => {
  let user

  beforeEach(() => {
    cy.logout()
      .createNewUser()
      .then(u => (user = u))
      .visit('/')
  })

  it('should allow existing users to login', () => {
    cy.getByText(/login/i)
      .click()
      .getByLabelText(/username/i)
      .type(user.username)
      .getByLabelText(/password/i)
      .type(user.password)
      .getByText(/submit/i)
      .click()
      .assertRoute('/')

    cy.getTestById('username-display').should('contain', user.username)
  })
})
```

---

## G) Wrapping Up

---

### Testing Trophy
- https://frontendmasters.com/courses/testing-react/testing-trophy/

---
