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
console.log('Task 2 calculated value:', memoTimes10(9));  // calculated
console.log('Task 2 cached value:', memoTimes10(9));  // cached
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
console.log('Task 2 calculated value:', memoTimes10(9));  // calculated
console.log('Task 2 cached value:', memoTimes10(9));  // cached
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
  console.log('Task 3 calculated value:', memoClosureTimes10(9)); // calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9)); // cached
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
  console.log('Task 3 calculated value:', memoClosureTimes10(9)); // calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9)); // cached
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
  console.log('Task 4 calculated value:', memoizedTimes10(9));  // calculated
  console.log('Task 4 cached value:', memoizedTimes10(9));  // cached
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

### Testing Trophy (5/1/19)
- https://frontendmasters.com/courses/testing-react/testing-trophy/

- **HOW DO YOU KNOW YOU SHOULD USE E2E, INTEGRATION, UNIT, STATIC**
- there's a `Testing Trophy` image
- Top to bottom: end to end, integration, unit, static
- static is like typescript, eslint, or flow type

- generally, tests at the top are more expensive and slower to run and vice versa heading to the bottom
- why not just run all unit tests? because you get more confidence and catch bigger problems when using tests at the top of the trophy
- you should spend most of the time doing integration testing, it gives you a lot of bang for your buck

- **BOUNDARY FOR JEST VS CYPRESS**
- when we have a server request and an actual live server to test from, we want to use to Cypress
- if the test doesn't need the server, we can just do integration tests with Jest

---

# SQL Fundamentals /w Mike North
- https://frontendmasters.com/courses/sql-fundamentals/
- [Code Repo](https://github.com/mike-works/sql-fundamentals)
- [Slides](https://drive.google.com/file/d/17DckYclE6PJ2b42dMO-zVB_5WAk-bYYj/view)

## A) Foundations of Relational Databases
---
### Welcome & Tech Check (5/2/19)
- https://frontendmasters.com/courses/sql-fundamentals/welcome-tech-check/
- lines between frontend and backend continue to blur

- progressive web apps are becoming "thick clients" and becoming more like a mobile web app

- mechanical sympathy is valuable for improving performance
- learning what's easy and hard for the database and to adjust resources

- SQL fundamentals is a primer for developers who "use" databases
- similarities across all DBs

- Professional SQL is a deeper course for developers who wish to "design and maintain" a database
- tackles topics treated differently depending on RDBMS
- covering MySQL and PostgreSQL

---
### Relational Algebra & Codds Relational Model (5/2/19)
- https://frontendmasters.com/courses/sql-fundamentals/relational-algebra-codds-relational-model/

- a database is an organized collection of persisted data
- very diverse kind of family:
1) Relational Stores: SQLite, PostgreSQL, MySQL, Google Spanner
2) Key-Value Stores: Redis (IE Amazon Dynamo DB), Voldemort (LinkedIn Open Source)
3) Column Stores: Cassandra, Apache Hbase
4) Graph Databases: Neo4j
5) Document Databases: mongoDB

- we are covering the PostgreSQL, SQLite, and MySQL and what we learn in this course can be used with these

- **Codd's Relational Model**
- a relation (table) is a set of tuples (rows)
- each element in a tuple (cell value) dj is a member of Dj, a data domain (set of allowed values)
- these elements are called attribute values (cell value), and are associated with an attribute (column name + type)

- **SCHEMA**
- greek for shape
- it's the shape or structure of your data
- tables, column names, types and constraints

- **RELATIONAL ALGEBRA VS RELATIONAL CALCULUS**
- algebra: join movie and actor over `actorId`, filter results to only include Jeff Goldblum
- select the `movieTitle` and `year` columns

- calculus: get `movieTitle` and `year` for movie such that there exists an actor a who was in the movie and has the name Jeff Goldblum.

- **STRUCTURED QUERY LANGUAGE**
- we use Relational Database Management System (RDBMS)
- declarative, unlike predecessors
- can also be procedural (PL/SQL)
- inspired by Codd's Relational Model

- a statement is made up of:
- clauses: SELECT, WHERE
- predicate: something returns true or false
- expression: something that produces values

- you can run command line SQL
- `psql northwind -c` to run a command (northwind is the name of db)
- `createdb northwind` for creating in PostgresQL
- `dropdb northwind` for dropping in PostgresQL

---
## B) Retrieving Data
---
### Using the Command Line & Simple SELECT queries (5/2/19)
- https://frontendmasters.com/courses/sql-fundamentals/using-the-command-line-simple-select-queries/

- `SELECT * FROM Employee`
- FROM allos one or more elements to be returned from a relation

- `SELECT id, firstname, lastname FROM Employee`
- returns the order they are asked for

- **QUOTES**
- different in different SQL
- table names, column names, and keywords are case insensitive usually
- 'single quotes' are used for string literals
- "double quotes" (SQLite or PostgreSQL) or `backticks` (MySQL only) for words that conflict with SQL keywords, or when case sensitivity is desired

- TIP: use either `id` or `Id`

- **AS keyword**
- helps alias a column, only impacts current query
- `p.productname AS title`
- `Product AS p`

---
### Project Overview (5/2/19)
- https://frontendmasters.com/courses/sql-fundamentals/project-overview/

- we are working on a project to keep a supply for a restaurant company
- customers, employees, customer orders, products, suppliers

- the SQL tagged template literal can be used to syntax highlight
"let query = sql`SELECT * FROM Employee`"

- **SCRIPTS**
- setup a database: `npm run db:setup:pg`
- run tests that match a filter: `npm run test EX01`, `npm run test:watch EX01`
- run an exercise's tests, and all tests from previous exercises: `npm run tests:ex 4`, `npm run test:ex:watch 4`

- run on localhost 3000: `npm run watch`
- run tests with a database other than SQLite `DB_TYPE=pg npm run watch`

---
### SELECTing Columns Exercise (5/3/19)
- https://frontendmasters.com/courses/sql-fundamentals/selecting-columns-exercise/

- in `./src/data/customers.js`
- we are basically running a query that selects all customers
- start the server first with `npm start`
- then `npm run test:ex:watch 1` to see all the tests
- the goal is to get all the tests to pass

- **MYATTEMPT**
```js
// customers
const ALL_CUSTOMERS_COLUMNS = ['id, contactname, companyname'];

// employees
const ALL_EMPLOYEES_COLUMNS = [
  'id',
  'firstname',
  'lastname',
  'region',
  'hiredate',
  'title',
  'reportsto'
];

// orders
export const ALL_ORDERS_COLUMNS = [
  'id',
  'customerid',
  'employeeid',
  'shipcity',
  'shipcountry',
  'shippeddate'
];

// suppliers
const ALL_SUPPLIERS_COLUMNS = ['id, contactname, companyname'];
```

---
### SELECTing Columns Solution (5/3/19)
- https://frontendmasters.com/courses/sql-fundamentals/selecting-columns-solution/

- the solutions are the same


- there's a VSCode extension: `SQLTools`
- lets you connect to different databases IE PG, MySQL
- lets you see simple data in vscode tab

- he showed how to see tables with the extension in VSCode
- then also in pgAdmin4
- if you want to a custom query, you can do `Schemas > Public > Click Query Tool`

- *Recommended to use more dedicated tools like PgAdmin4 for advance queries*
- *Otherwise just use the SQLtools*

---
### Filtering via WHERE clauses (5/4/19)
- https://frontendmasters.com/courses/sql-fundamentals/filtering-via-where-clauses/

- **WHERE CLAUSE**
- used to filter result set with a condition
`SELECT firstname, lastname FROM Employee WHERE lastname = 'Leverling'`
- the condition aka predicate is `lastname = 'Leverling'
- be careful not to use Double quote because that would mean special characters or column

- **Other conditions**
- `>, <, >=, <=, =`
- Not equal: `<>` or `!=`
- `BETWEEN` is within a range
- `IN` is member of a set
- `LIKE` matches a string
- string ends with `email LIKE '%.gov'`
- string includes `summary LIKE '%spicy%'`
- string length `billing_state LIKe '__'`

- *Postgres includes ILIKE which is case insensitive LIKE*

- **AND, OR, NOT**
- `AND`, `OR`, `NOT`
- boolean operators we can use in predicate
`SELECT productname FROM product WHERE (unitprice > 60 AND unitsinstock > 20)`

- **CORE FUNCTIONS**
- each DB has own set of core functions but all slightly different
- some are synonymous (lower, max, min, count, substr, etc...)
- we can use them in a comparison or as an additional column
- `AS` helps create an alias
`SELECT productname FROM Product WHERE lower(productname) LIKE '%dried%'`
`SELECT lower(productname) AS label FROM Product`

- **DEBUGGING CONDITIONS**
- conditions can be evaluated directly with a SELECT statement
- so it doesn't only have to be used with tables but also with testing statements
`SELECT 'mike@example.com' LIKE '%@example.com'; -- TRUE`
`SELECT 'mike@gmail.com' LIKE '%@example.com'; --FALSE`

---
### Filtering via WHERE Exercise (5/4/19)
- https://frontendmasters.com/courses/sql-fundamentals/filtering-via-where-exercise/

- in `./src/data/products.js`
- `npm run test:ex:watch 2`

- **TASKS**
- we need add filters for
1) discontinued products
2) to reorder when (Product.unitsinstock + Product.unitsonorder) < Product.reorderlevel
- I did not know how to do this

---
### Filtering via WHERE Solution
- https://frontendmasters.com/courses/sql-fundamentals/filtering-via-where-solution/

- **PRODUCTS SOLUTION**
- in `./src/data/products`
- we added a whereClause variable to hold a string to add on our query call
```js
/*
 getAllProducts();
 getAllProducts({ filter: { inventory: 'discontinued' } });
 getAllProducts({ filter: { inventory: 'needs-reorder' } });
 */
export async function getAllProducts(opts = {}) {
  const db = await getDb();
  let whereClause = '';
  if (opts.filter && opts.filter.inventory) {
    switch (opts.filter.inventory) {
      case 'discontinued':
        whereClause = 'WHERE discontinued = 1';
        break;
      case 'needs-reorder':
        whereClause = 'WHERE discontinued = 0 AND ((unitsinstock + unitsonorder) < reorderlevel)';
        break;
    }
  }
  return await db.all(sql`
SELECT ${ALL_PRODUCT_COLUMNS.join(',')}
FROM Product ${whereClause}`);
}
```

- **CUSTOMER SOLUTION**
- in `./src/data/customers`
- where need to use lower to lowercase both the string and the column name to standardize with database
- we use `%` in order to match where strings include
- else, we would be searching for strings with those exact letters
```js
/*
  getAllCustomers();
  getALLCustomers({ filter: 'Mike' })
*/
export async function getAllCustomers(options = {}) {
  const db = await getDb();
  let whereClause = '';
  if (options.filter) {
    whereClause = `WHERE lower(companyname) LIKE lower('%${options.filter}%')
    OR lower(contactname) LIKE lower('%${options.filter}%')`;
  }

  return await db.all(sql`
SELECT ${ALL_CUSTOMERS_COLUMNS.join(',')}
FROM Customer ${whereClause}`);
}
```

---
### LIMITing and ORDERing the result set (5/5/19)
- https://frontendmasters.com/courses/sql-fundamentals/limiting-and-ordering-the-result-set/

- **ORDER BY CLAUSE**
- `ORDER BY` clauase declares desired sorting of the result set
- `ASC`, `DESC` specifies sort direction
- `SELECT productname, unitprice FROM Product ORDER BY unitprice DESC`

- multiple sorts and directions can be done with separated commas
- `SELECT productname, unitprice FROM WHERE unitprice BETWEEN 9.6 AND 11 ORDER BY unitprice ASC, productname DESC`

- **LIMIT CLAUSE**
- when dealing with large data, we can limit amount of results
- the limiting process can be performant if we don't sort results
- limiting & sorting does reduce performance because DB still needs to run through all results and limit the results you specified
`SELECT productname, unitprice FROM Product ORDER BY unitprice DESC LIMIT 3`

- **OFFSET CLAUSE**
- we can start with Nth result
- we can paginate by using LIMIT and OFFSET
- think of limit as the window of data you are looking at
- think of offset as the shift of that window to specific data set

---
### LIMIT AND ORDER EXERCISE (5/5/19)
- https://frontendmasters.com/courses/sql-fundamentals/limit-and-order-exercise/

- we need to:
- click on column header to sort orders
- take `opts.sort` and `opts.order` into account
- fix `getCustomerOrders`

- in `./src/data/orders.js`
- `npm run test:ex:watch 3`

- **MY ATTEMPT**
```js
/*
getAllOrders({ sort: 'shippeddate', order: 'desc'});
getAllOrders({ sort: 'customerid', order: 'asc' });
*/
export async function getAllOrders(opts = {}) {
  // Combine the options passed into the function with the defaults

  /** @type {OrderCollectionOptions} */
  let options = {
    ...DEFAULT_ORDER_COLLECTION_OPTIONS,
    ...opts
  };
  let sortClause = '';
  let orderClause = '';
  let limitClause = '';
  let offsetClause = '';
  if (opts && opts.sort) {
    sortClause = `ORDER BY ${opts.sort}`;
  }
  if (opts && opts.order) {
    orderClause = `${opts.order}`;
  }
  if (opts && opts.perPage) {
    limitClause = `LIMIT ${opts.perPage}`;
  }
  if (opts && opts.perPage && opts.page) {
    offsetClause = `OFFSET ${opts.perPage * opts.page}`;
  }

  const db = await getDb();
  return await db.all(sql`
SELECT ${ALL_ORDERS_COLUMNS.join(',')}
FROM CustomerOrder ${sortClause} ${orderClause} ${limitClause} ${offsetClause}`);
}

/**
 * Retrieve a list of CustomerOrder records associated with a particular Customer
 * @param {string} customerId Customer id
 * @param {Partial<OrderCollectionOptions>} opts Options for customizing the query
 */
/*
getAllOrders({ page: 3, perPage: 25 });
getCustomerOrders('ALFKI', { page: 5, perPage: 10 });
*/
export async function getCustomerOrders(customerId, opts = {}) {
  // ! This is going to retrieve ALL ORDERS, not just the ones that belong to a particular customer. We'll need to fix this
  if (customerId) {
    opts.sort = `WHERE customerid=${customerId}`;
  }
  return getAllOrders(opts);
}
```

---
### LIMIT And ORDER Solution (5/5/19)
- https://frontendmasters.com/courses/sql-fundamentals/limit-and-order-solution/

- **LECTURE SOLUTION**
- think of adding variables: `whereClause`, `sortClause`, and `paginationClause`
- *the clause ordering of the query is important*
- think that `orderby` and then `limit/offset` is the right order to tack them on

- notice that we also have default sorts for different functions
- `getAllOrders` by id, asc
- `getCustomerOrders` by shippeddate, asc

- I had to also add `/** @type {OrderCollectionOptions} */` to the `getCustomerOrders` function because it's a typescript thing

```js
const DEFAULT_ORDER_COLLECTION_OPTIONS = Object.freeze(
  /** @type {OrderCollectionOptions}*/ ({
    order: 'asc',
    page: 1,
    perPage: 20,
    sort: 'id'
  })
);

/**
 * Retrieve a collection of "all orders" from the database.
 * NOTE: This table has tens of thousands of records, so we'll probably have to apply
 *    some strategy for viewing only a part of the collection at any given time
 * @param {Partial<OrderCollectionOptions>} opts Options for customizing the query
 * @returns {Promise<Order[]>} the orders
 */
/*
getAllOrders();
getAllOrders({ sort: 'shippeddate', order: 'desc'});
getAllOrders({ sort: 'customerid', order: 'asc' });
getAllOrders({ page: 3, perPage: 25 });
getCustomerOrders('ALFKI', { page: 5, perPage: 10 });
*/
export async function getAllOrders(opts = {}, whereClause = '') {
  // Combine the options passed into the function with the defaults

  /** @type {OrderCollectionOptions} */
  let options = {
    ...DEFAULT_ORDER_COLLECTION_OPTIONS,
    ...opts
  };

  const db = await getDb();
  let sortClause = '';
  let paginationClause = '';

  if (options.sort && options.order) {
    sortClause = `ORDER BY ${options.sort} ${options.order.toUpperCase()}`;
  }
  if (typeof options.page !== 'undefined' && options.perPage) {
    paginationClause = `LIMIT ${options.perPage} OFFSET ${(options.page - 1) * options.perPage}`;
  }

  return await db.all(sql`
SELECT ${ALL_ORDERS_COLUMNS.join(',')}
FROM CustomerOrder ${whereClause}
${sortClause}
${paginationClause}`);
}

/**
 * Retrieve a list of CustomerOrder records associated with a particular Customer
 * @param {string} customerId Customer id
 * @param {Partial<OrderCollectionOptions>} opts Options for customizing the query
 */
export async function getCustomerOrders(customerId, opts = {}) {
  /** @type {OrderCollectionOptions} */

  // ! This is going to retrieve ALL ORDERS, not just the ones that belong to a particular customer. We'll need to fix this
  let options = {
    ...{ page: 1, perPage: 20, sort: 'shippeddate', order: 'asc' },
    ...opts
  };

  return getAllOrders(options, `WHERE customerid = '${customerId}'`);
}
```

---
## C) Querying Across Tables (5/6/19)
---
### Relationships & Joins
- https://frontendmasters.com/courses/sql-fundamentals/relationships-joins/

- he gave the examples of the orders, customers, employees
- the orders belongs to the customer and the customer has many orders
- the orders also belong to employee and employee has many orders

- the orders table would be a junction table containing the customerid and the employeeid

- *relational databases do not come from these relationships but from the relational algebra we covered at the beginning*

- **JOINS**
- the joining is done on a related column between the tables
- four types of join, that differ in terms of how "incomplete" matches are handled

- *INNER JOIN*
- TAKEAWAY: when we need exact matches of both the left table  and right table IE orders and customers
- only rows that have "both ends" of the match will be selected
- incomplete matches are completely omitted
- inner join will only give you complete matches

```sql
SELECT *
FROM CustomerOrder AS o
INNER JOIN Customer AS c
  ON o.customerid = c.id
```

- *LEFT JOIN*
- TAKEAWAY: appropriate when you're trying to resolve something on the left table
- rows from left of join will be selected no matter what

- *RIGHT JOIN*
- rows from right of join will be selected no matter what
- SQLite does not support right join because you can just do it with left joins from the other side

- *FULL JOIN*
- TAKEAWAY: good if you want to audit
- will include everything
- there will be gaps for ones that are incomplete
- we will use a foreign key to validate if a value exists, more to come

- **OUTER JOINS**
- LEFT, RIGHT, and FULL are referred as outer joins because one or more rows may be partially empty, due to not having a corresponding match in the other table


- **JOIN - SELECTING COLUMNS***
- important for us to use aliases since columns from different tables might have the same column name like `id`
- SELECT * is generally a bad idea, and it's particularly dangerous in the context of a JOIN
- choose columns with care, and alias any duplicates
```sql
SELECT o.id, o.customerid, o.amount, c.name
FROM CustomerORDER AS o
INNER JOIN Customer AS c
  on o.customerid = c.id
```

---
### JOIN Exercise (5/6/19)
- https://frontendmasters.com/courses/sql-fundamentals/join-exercise/

- `npm run test:ex:watch 4`
- product list: suppliers, categories (replace supplier ids and category ids to suppliername and categoryname)
- order list: customers and employees (we want names instead of ids)
- order: customer, employee and products (replace customer id, employee id, and product ids to customer name, employeename, and productname)

- Alter the relevant queries to include one or more JOINs so that these Ids are replaced with the relevant human-readable name

- I didn't know how to do the exercise

---
### JOIN Solution (5/6/19)
- https://frontendmasters.com/courses/sql-fundamentals/join-solution/

- **PRODUCTS SOLUTION**
- `p.*` means select all columns from p
```js
// products.js
export async function getAllProducts(opts = {}) {
  const db = await getDb();
  let whereClause = '';
  if (opts.filter && opts.filter.inventory) {
    switch (opts.filter.inventory) {
      case 'discontinued':
        whereClause = 'WHERE discontinued = 1';
        break;
      case 'needs-reorder':
        whereClause = 'WHERE discontinued = 0 AND ((unitsinstock + unitsonorder) < reorderlevel)';
        break;
    }
  }
  return await db.all(sql`
SELECT ${ALL_PRODUCT_COLUMNS.map(x => `p.${x}`).join(',')},
  s.contactname AS suppliername,
  c.categoryname
FROM Product AS p
LEFT JOIN Supplier AS s
  ON p.supplierid = s.id
LEFT JOIN Category as c
  ON p.categoryid = c.id
  ${whereClause}`);
}
```

- **ORDERS SOLUTION**
- there were a lot of things going on here, so rewatch the video
- it started failing ex 3 again
- the `map()` is a higher order function to tack on co. so it can clarify which table was aliased
```js
// orders.js
export async function getAllOrders(opts = {}, whereClause = '') {
  /** @type {OrderCollectionOptions} */
  let options = {
    ...DEFAULT_ORDER_COLLECTION_OPTIONS,
    ...opts
  };

  const db = await getDb();
  let sortClause = '';
  let paginationClause = '';

  if (options.sort && options.order) {
    sortClause = `ORDER BY co.${options.sort} ${options.order.toUpperCase()}`;
  }
  if (typeof options.page !== 'undefined' && options.perPage) {
    paginationClause = `LIMIT ${options.perPage} OFFSET ${(options.page - 1) * options.perPage}`;
  }

  return await db.all(sql`
SELECT ${ALL_ORDERS_COLUMNS.map(x => `co.${x}`).join(',')},
  c.companyname AS customername,
  e.lastname AS employeename
FROM CustomerOrder AS co
${whereClause}
LEFT JOIN Customer AS c ON co.customerid = c.id
LEFT JOIN Employee AS e ON co.employeeid = e.id
${sortClause}
${paginationClause}`);
}

export async function getOrder(id) {
  const db = await getDb();
  return await db.get(
    sql`
SELECT co.*,
  c.companyname AS customername,
  e.lastname AS employeename
FROM CustomerOrder as co
LEFT JOIN Customer AS c ON co.customerid = c.id
LEFT JOIN Employee AS e ON co.employeeid = e.id
WHERE co.id = $1`,
    id
  );
}

export async function getOrderDetails(id) {
  const db = await getDb();
  return await db.all(
    sql`
SELECT od.*, od.unitprice * od.quantity as price,
    p.productname
FROM OrderDetail AS od
LEFT JOIN Product AS p ON od.productid = p.id
WHERE od.orderid = $1`,
    id
  );
}
```

---
### Aggregate Functions and GROUP BY (5/7/19)
- https://frontendmasters.com/courses/sql-fundamentals/aggregate-functions-and-group-by/

- perform a calculation on a set of values
- each RDBMS has its own functions
- like SUM, COUNT, MIN/MAX, AVG

- we could GROUP BY situations:
1) total spent by customerid
```sql
select c.id, c.name, sum(o.amount)
FROM CustomerOrder AS o
INNER JOIN Customer AS c
  ON o.customerid = c.id
GROUP BY c.id
```
2) total spent by month
```sql
SELECT month, sum(amount)
FROM CustomerOrder
GROUP BY month
```
3) total spent by customerid, by month
```sql
SELECT customerid, month, sum(amount)
FROM CustomerOrder
GROUP BY month, customerid
```

- **CAUTION**
- you need to tie in the `customerid` in this example since it doesn't know how it relates to the data
```sql
SELECT month, customerid, sum(amount)
FROM CustomerOrder
GROUP BY month

/* ERROR: column
"CustomerOrder.customerid"
must appear in the GROUP BY
clause or be used in an
aggregate function
*/
```

- there are many aggregate functions in different databases IE [PG Aggregate](https://www.postgresql.org/docs/current/functions-aggregate.html)
- beware that some DB like MySQL doesn't aggregate in the same order so you have to set the order also

- **WHERE VS HAVING**
- `WHERE` clause is to examine individual row. It can't be used with an aggregate function.
- `HAVING` clause should be used instead and happens after the `GROUP BY`
- it's a 2nd filtering step essentially
- you can use both clauses in 1 query

```sql
-- Bad usage
SELECT month,
sum(amount) AS month_sum
FROM CustomerOrder
WHERE month_sum >= 300
GROUP BY month

-- Good usage
SELECT month,
sum(amount) AS month_sum
FROM CustomerOrder
GROUP BY month
HAVING sum(amount) >= 300
```

- **SUBQUERY**
- a select query that is nested in another query
- can't mutate data and can only select
- some RDBMS doesn't support ORDER BY within subquery

---

### Aggregate Functions and GROUP BY Exercise (5/7/19)
- https://frontendmasters.com/courses/sql-fundamentals/aggregate-functions-and-group-by-exercise/

- `npm run test:ex:watch 5`
- use aggregate function and GROUP BY to calculate
1) Order: subtotal
2) Supplier: productlist (concatenate Product.productname strings)
3) Employee: ordercount
4) Customer: ordercount

---
### Aggregate Functions and GROUP BY Solution (5/7/19)
- https://frontendmasters.com/courses/sql-fundamentals/aggregate-functions-and-group-by-solution/

- **ORDERS SOLUTION**
```js
export async function getOrder(id) {
  const db = await getDb();
  return await db.get(
    sql`
SELECT co.*,
  c.companyname AS customername,
  e.lastname AS employeename,
  sum( (1-od.discount) * od.unitprice * od.quantity) AS subtotal
FROM CustomerOrder as co
LEFT JOIN Customer AS c ON co.customerid = c.id
LEFT JOIN Employee AS e ON co.employeeid = e.id
LEFT JOIN OrderDetail AS od ON od.orderid = co.id
WHERE co.id = $1
GROUP BY co.id, c.companyname, e.lastname`,
    id
  );
}
```

- **CUSTOMERS SOLUTION**
```js
export async function getAllCustomers(options = {}) {
  const db = await getDb();
  let whereClause = '';
  if (options.filter) {
    whereClause = `WHERE lower(companyname) LIKE lower('%${options.filter}%') OR
    lower(contactname) LIKE lower('%${options.filter}%')`;
  }
  return await db.all(sql`
SELECT ${ALL_CUSTOMERS_COLUMNS.map(x => `c.${x}`).join(',')},
  count(co.id) as ordercount
FROM Customer AS c
LEFT JOIN CustomerOrder AS co ON co.customerid = c.id
${whereClause}
GROUP BY c.id`);
}
```

- **EMPLOYEES SOLUTION**
```js
export async function getAllEmployees() {
  const db = await getDb();
  return await db.all(sql`
SELECT
  ${ALL_EMPLOYEES_COLUMNS.map(x => `e.${x}`).join(',')},
  count(co.id) AS ordercount
FROM Employee AS e
LEFT JOIN CustomerOrder AS co ON co.employeeid = e.id
GROUP BY e.id`);
}
```

- **SUPPLIES SOLUTION**
```js
export async function getAllSuppliers() {
  const db = await getDb();
  let productList = '';

  switch (process.env.DB_TYPE) {
    case 'mysql':
      productList = sql`group_concat(p.productname ORDER BY p.productname DESC SEPARATOR ', ')`;
      break;
    case 'pg':
      productList = sql`string_agg(p.productname, ', ')`;
      break;
    case 'sqlite':
    default:
      productList = sql`group_concat(p.productname, ', ')`;
      break;
  }

  return await db.all(sql`
SELECT ${ALL_SUPPLIERS_COLUMNS.map(x => `s.${x}`).join(',')},
  ${productList} AS productlist
FROM Supplier AS s
LEFT JOIN (SELECT * FROM Product ORDER BY productname DESC) AS p ON p.supplierid = s.id
GROUP BY s.id`);
}
```

---
## D) Creating, Updating, and Deleting
---
### Creating & Deleting Records
- https://frontendmasters.com/courses/sql-fundamentals/creating-deleting-records/

---
### Creating & Deleting Records Exercise
- https://frontendmasters.com/courses/sql-fundamentals/creating-deleting-records-exercise/

---
### Creating & Delting Records Solution
- https://frontendmasters.com/courses/sql-fundamentals/creating-deleting-records-solution/

---
### Transactions & Isolation
- https://frontendmasters.com/courses/sql-fundamentals/transactions-isolation/

---
### Transactions Exercise
- https://frontendmasters.com/courses/sql-fundamentals/transactions-exercise/

---
### Transactions Solution
- https://frontendmasters.com/courses/sql-fundamentals/transactions-solution/

---
### Updating Records
- https://frontendmasters.com/courses/sql-fundamentals/updating-records/

---
### Updating Records Exercise
- https://frontendmasters.com/courses/sql-fundamentals/updating-records-exercise/

---
### Updating Records Solution
- https://frontendmasters.com/courses/sql-fundamentals/updating-records-solution/

---
## E) The Schema Evolves
---
### Migrations
- https://frontendmasters.com/courses/sql-fundamentals/migrations/

---
### Indices
- https://frontendmasters.com/courses/sql-fundamentals/indices/

---
### Add Indices Exercise
- https://frontendmasters.com/courses/sql-fundamentals/add-indices-exercise/

---
### Add Indices Solution
- https://frontendmasters.com/courses/sql-fundamentals/add-indices-solution/

---
### Column Contraints
- https://frontendmasters.com/courses/sql-fundamentals/column-constraints/

---
### Column Contraints Exercise
- https://frontendmasters.com/courses/sql-fundamentals/column-constraints-exercise/

---
### Column Constraints Solution
- https://frontendmasters.com/courses/sql-fundamentals/column-constraints-solution/

---
### F) Wrapping Up SQL Fundamentals
---
## Wrap Up and Q&A
- https://frontendmasters.com/courses/sql-fundamentals/wrap-up-and-q-a/

---

# Introduction to Node.js /w Scott Moss
- [Github Repo](https://github.com/FrontendMasters/intro-node-js)
- [Slides](https://slides.com/scotups/deck/fullscreen)
- [Course Transcript](https://static.frontendmasters.com/assets/courses/2018-11-28-node-js/transcripts.zip)

## A) Introduction
---
### Course Overview (5/7/19)
- https://frontendmasters.com/courses/node-js/course-overview/

- course is based on javascript
- his approach is very practical

---
### What is Node.js (5/7/19)
- https://frontendmasters.com/courses/node-js/what-is-node-js/

- node.js is an environment to run javascript outside a browser
- open source runtime
- built on Chrome's V8 JS engine (like Mozilla's SpiderMonkey or Safari's WebKit)
- created by Ryan Dhal in 2009
- has evolved and has a huge community
- 90% of the packages exist already, cohesive environment with javascript
- it's not a complete package like ruby but most of the community has built similar packages in Node already

- **SINGLE THREAD**
- nodejs is not great for high CPU intense operations like large arithmetic, machine learning, or reading file systems synchronously
- single threaded with an event loop and asynchronous
- Python in comparison is multi-thread and blocking
- makes node good for high concurrency but bad on high CPU bound task

---
### Creating with Node.js (5/7/19)
- https://frontendmasters.com/courses/node-js/creating-with-node-js/

- pretty much anything a scripting language that Python or Ruby can, except with Javascript

- Tooling (build, automation, etc)
- API's (REST, Realtime, etc)
- can create REST APIs, GraphQL APIs, Web Sockets
- CDNs, use to be in a lower level language
- Shareable libraries, some people maintain libraries as their main job
- desktop applications
- IOT, raspberry pie and you can make anything
- Pretty much anything because node is on everything now

- **USING IN PRODUCTION AND SECURITY**
- Node have internal modules
- You have to rely on the community for other features
- takeway, if a package has a healthy following, it can be trustworthy
- big companies do you use NPMs
- other companies won't
- some people will fork it to add their own code
- you can also lock to current versions if you choose to

---
### Installing Node.js (5/7/19)
- https://frontendmasters.com/courses/node-js/installing-node-js/

- Install from node version manager
- Scott recommends use NVM going forward
- it allows you to have many versions of nodes and cause problem with permissions errors
- you need to be able to switch different versions for testing, deployment, etc.

- you can also use docker, another way to download everything

---
### Running Node.js Code (5/7/19)
- https://frontendmasters.com/courses/node-js/running-node-js-code/

- 2 ways to eval code
1) Interactive REPL - just for testing and playing around
- you just type `node` to start it
- then you can start writing javascript

2) CLI Executable - use to execute your node apps
- `node <path to your file>`

---
### Installing Node.js from the source (5/7/19)
- https://frontendmasters.com/courses/node-js/installing-node-js-from-the-source/

- recommends we use LTS or even versions since they have features that will be kept
- current node version in this video is 10

- he went through the website and showed how to install from the website

---
### Installing Node.js with NVM (5/7/19)
- https://frontendmasters.com/courses/node-js/installing-node-js-with-nvm/
- [Node Version Manager](https://github.com/nvm-sh/nvm#installation)

- **INSTALL NVM**
- You just have to run the install script from that repo IE `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

- **INSTALL LATEST NODE**
- `nvm install node` to install node
- `nvm alias default node` helps you from having to type node <version #> everytime (I didn't have to do this)
- I installed v 12.2.0 and it also created default node version for me

---
### Install and Run Node.js Exercise (5/7/19)
- https://frontendmasters.com/courses/node-js/install-and-run-node-js-exercise/

1) Install nodejs
2) Verify Installation
3) Use the Node REPL and write some JS
4) Use the node CLI executable against a .js file

---
### Checking Install & Running Node.js Solution (5/7/19)
- https://frontendmasters.com/courses/node-js/checking-install-running-node-js-solution/

- use `which node` to see if you're using the nvm, it should have .nvm in the path
- by default, NVM should have deleted the other source Node installation for you
- he doesn't recommend using the older version of node

- `.bashrc` and `.bashprofile` are config files

- I had to add to my `.zshrc` file to make it run the scripts on every run for iTerm:
```
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
```

- `touch` to create a new empty file
- `code` to open up the file

---
## B) Node.js Modules
---
### Browser JavaScript vs Node.js (5/8/19)
- https://frontendmasters.com/courses/node-js/browser-javascript-vs-node-js/
- [Can I Use](https://caniuse.com/)

- **BROWSER VS NODEJS**
- *BROWSER*
- Browser builds interactive apps for the web
- DOM
- Window
- Fragmentation (Doesn't work on some browsers)
- optional modules (es6)
- cannot access filesystem
- async

- *NODE*
- Node build server side apps and scripts
- Nope, no GUI (can virtualize)
- No window, but does have a global
- Versioned, so no fragmentation
- required modules (commonjs+)
- can access filesystem
- async
- no browser based api

---
### Globals in Node.js (5/8/19)
- https://frontendmasters.com/courses/node-js/globals-in-node-js/

- node doesn't have a window but has a global
- do not create your own

- **POPULAR GLOBALS**
- *process* - has information about the environment that the program is running in
- *require* = function to find and use modules in current module, how you pull in packages aka import
- *__dirname* = the current directory path
- *module* = sibling of require, information about current module, methods for making module consumable, it's how you export packages
- *global* - like window, its the "global" object. Almost NEVER use this
- many more...

---
### Node.js Modules (5/8/19)
- https://frontendmasters.com/courses/node-js/node-js-modules/
- [CommonJS docs](https://requirejs.org/docs/commonjs.html)
- modules is packaged javascript and is encapsulated code
- there use to be the past about building modules in the past, now we have COMMONJS, AMD, ES6 Modules

- there more than 5 globals but the 5 most common ones that are wrapped with each files are: `exports`, `require`, `module`, `__filename`, `__dirname`
- these are injected to each file and there are specific to each instance of the file where are the other globals exist on the global scope like setTimout(),etc.

- You don't have to master commonjs because node is is moving over to es6
- modules is the only way to share code between files since we don't have script tags like in the browser

- **OTHER MODULES**
- ESM (exmascript modules) but needs a transpiler and it's the new standard going to replace commonjs
- AMD (pretty much dead)
- there are otheres but don't matter

---
### Creating Node Modules (5/8/19)
- https://frontendmasters.com/courses/node-js/creating-node-modules/

- all your node.js codes is already a module since it gets wrapped automatically like we talked in the previous lesson
- as the author, you decide how and what to expose from your modules, to other modules
- except when you test, you have to export everything

- **EXPORT EXAMPLE**
- you do this with the module global object provided you by the Nodejs runtime
- don't ever use `export` export
- there is no specific default export way to export everything but is possible
- can't export multiple modules in a file, the latest will overwrite previous
- but you can use `module.exports.more`

```js
const add = (num, num2) => {}
const notPublic = () => {}

module.exports = {add, thing() {}, value: 1}
```

---
### Importing Node Modules (5/8/19)
- https://frontendmasters.com/courses/node-js/importing-node-modules/

- use `require` to consume the modules
- Nodejs runtime injects another global you can use
- takes the relative path to the module and synchronously loads whatever the target module exports

- **EXAMPLE REQUIRE**
- the modules that you make, you have to put `./` in front of it
- node will create a tree to pull in needed modules and pulls everything needed before it runs `lib.action()` function
- usually there is only one entry point in your app, usually `app.js`

```js
//lib.js
module.exports = {
  value: 1,
  userIds: [1,2,3],
  action() {
    console.log('action')
  }
}

// app.js
const lib = require('./lib')
lib.action()
```

---
### Q&A: ES Modules & Latest JS Features (5/8/19)
- https://frontendmasters.com/courses/node-js/q-a-es-modules-latest-js-features/

- you can use `webpack`, `parcel`, `browserify`, or `rollup` as a bundling tool to convert code for the web to understand for different browsers
- Scott said that most of the time you only need `babel` and `typescript` with node but you can also use webpack with it
- most of the time you don't need a bundled app with node

- io.js was the predecessor to Node since they supported all the latest javascript updates, then io.js got merged into node.js
- the problem now is having Node converted over to ES modules from commonjs modules without break past apps

---
### Convert Browser JavaScript Exercise (5/8/19)
- https://frontendmasters.com/courses/node-js/convert-browser-javascript-exercise/

- fork the repo
- checkout `start` branch
- check README on how to run test on exerise 2
- task: fix and convert 3 js files in the exercises/modules/browser to Nodejs JavaScript and place them in exercises/modules/node
- ensure all the tests pass

- *hints*
- order of scripts matter in html file: data, api, app
- paste code in browser folder files into node folder files
- use `npx jest` to run to test, add `--verbose` if you want to see the name of the tests
- npx shipped with node

- **MY ATTEMPT**
- 6 tests passed
```js
// data.js
module.exports = {
  users: [{ id: 1, name: 'Weezy' }],
  posts: [
    { title: 'yo', body: 'I ate today', createdBy: 1 },
    { title: 'Me', body: 'Look at my selfie', createdBy: 1 },
    { title: 'My doggy', body: 'my dog is better than yours', createdBy: 1 }
  ]
};

// api.js
const data = require('./data');

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = data.users.find(user => user.id === id);
    cb(user);
  }, 150);
};

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const posts = data.posts.filter(post => post.createdBy === userId);
    cb(posts);
  }, 150);
};

module.exports = { getUserById, getPostsForUser };

// app.js
const { getUserById, getPostsForUser } = require('./api');

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`;
    });
    cb(postTemplates);
  });
};

const showUserProfile = (userId, cb) => {
  getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `;
    cb(user);
  });
};

module.exports = { showPostsForCurrentUser, showUserProfile };
```

---
### Convert Browser JavaScript Solution (5/8/19)
- https://frontendmasters.com/courses/node-js/convert-browser-javascript-solution/

- we ran `npx jest` but we didn't learn npm yet
- we just used a remote module called `jest`
- node ships with NPM binary and NPX binary
- npx allows you to run locally cli files installed in the project as global cli
- so instead of typing the FULL path to the jest module in the node_modules directory, they built `npx` command to search and run it

---
## C) Internal Modules & npm
---
### The fs Module (5/9/19)
- https://frontendmasters.com/courses/node-js/the-fs-module/

- **COMMON SHIPPED MODULES**
- there are modules that come shipped with Node
- `fs` - how to interact with files
- to reference them as an internal module, you use `require` and there's no dot
```js
const fs = require('fs');

const file = fs.readFileSync('./lib.js', {encoding: 'utf-8'}).toString() // reading a file

fs.writeFileSync('./lib.js', 'var me= "me"') // writing a file
```

- *reading vs requiring it with a module system is that requiring will execute the file where as reading is just getting the string*
- behavior of Node for synchronous vs async is the same as the browser
- however, async is more important in Node

- there are a lot of CLIs that are being made with FS
- there are many other things to do especially if you're going to do automation tools

---
### Other Internal Node Modules (5/9/19)
- https://frontendmasters.com/courses/node-js/other-internal-node-modules/

- *modules work differently depending on what version of Node you're using*

- `http` - low level-ish mdule for creating network based programs, like APIS
- you will never almost never use this directly but might use other modules that use this
- it's very difficult to manage
-

- `path` - useful for manipulating path strings and handling differenes across many OS's
- you use it basically any time you are using a path in a file other than the require module
- the problem is that mac, windows, linux has different ways to write paths
- works hand in hand with fs module
- add `const path = require('path')`

### Remote Modules (5/9/19)
- https://frontendmasters.com/courses/node-js/remote-modules/

- modules downloaded from the internet that someone else has made
- the community has contributed tremendous growth to share/consume modules
- apps can be built quickly by reusing public modules
- beware of malicious code
- you need a system to help with management of remote modules (downloading, publishing, updating, etc.)

### Modules Recap (5/9/19)
- https://frontendmasters.com/courses/node-js/modules-recap/

- we talked about self-created modules, shipped modules, and remote modules
- *CAUTION: don't use remote modules that have the same name as internal modules because they probably contain malicious code*

- **EXAMPLES OF USING MODULES**
```js
var lib = require('../rel/path/to/lib') // for custom local modules, make sure to use "." first

var lib = require('lib') // remote module

var fs = require('fs') // internal module
```

### NPM (5/9/19)
- https://frontendmasters.com/courses/node-js/npm/
- [Left Pad Article](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)

- NPM is node package manager
- ships with nodes by default
- allows you to publish, download, and update modules
- uses `package.json` file in your Nodejs project to determine dependencies, basically contains all the meta info
- `node_modules` is the directory where all your packages are kept

- we went over strategies to make sure a module is legitimate
- you shouldn't ever check in node modules into git, only the `package.json`
- you would also have to use `--save` flag to save a package to save it to package.json for other users
- `npm install` to install all the packages

---
### YARN (5/10/19)
- https://frontendmasters.com/courses/node-js/yarn/

- Yarn is the same tool as NPM and easier to use
- made by facebook
- you use `yarn add` instead
- Yarn also had CDN to cache things, now NPM is doing it too
- Yarn at the time also had version locking mechanism
- it's related to yarnlock and npmlock files

---
### CLI with Node Exercise (5/10/19)
- https://frontendmasters.com/courses/node-js/cli-with-node-exercise/

- we are going to create a CLI program
- it saves and retrieves contacts from and address book

1) ✅ checkout to start branch
2) ✅ install all remote modules (hint: use npm)
3) ✅ Check the README on how to run your CLI
4) ✅ Fix the CLI so that the "new" command works by saving contacts to contacts.json
5) ✅ Fix the CLI so that the "list" command works by listing all contacts and allowing you to select one, the prints out the selected contact

- `node exercises/cli/index.js new`
- `node exercises/cli/index.js list`
- we have to type out of the full path since we haven't packaged it up yet

- **MY ATTEMPT**
```js
const fs = require('fs');
const path = require('path');

// this path needs to be relative to work with fs
const contactsLocation = './contacts.json';

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const file = fs
    .readFileSync(contactsLocation, { encoding: 'utf-8' })
    .toString();
  return JSON.parse(file);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = contacts => {
  const newContacts = JSON.stringify(contacts);
  return fs.writeFileSync(contactsLocation, newContacts);
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
};
```

---
### CLI with Node Solution (5/10/19)
- https://frontendmasters.com/courses/node-js/cli-with-node-solution/
- [JSON Stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [Path internal module docs](https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_join_paths)

- Talked about `SymVer` for node packages
- it is a system that open source developers use to release their packages
`^1.18.3` = 1st num means major change, 2nd means additional or fix change, 3 means patches or minors

- we had to make sure to install `commander` and `inquirer` packages in `./cli/index.js` file
- then we had to fix `utils.js`

- path.join will connect the full path and file name for you so no relative paths are needed
- a small trick to get JSON to format nicely is to use `JSON.stringify(contacts, null, 2)`

- the difference between `path.resolve` vs `path.join`
- resolve will look many levels upwards to find the correct path
- join will help only to correct a generally correct path for you

```js
const fs = require('fs');
const path = require('path');

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, 'contacts.json');

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(contactsLocation).toString();
  return JSON.parse(contacts);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = contacts => {
  return fs.writeFileSync(contactsLocation, JSON.stringify(contacts, null, 2));
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
};
```

---
### Commander Module for Building CLIs (5/10/19)
- https://frontendmasters.com/courses/node-js/commander-module-for-building-clis/

- `commander` is a hack around process and helps build out your CLI commands
- `inquirer` is the package that ask you all the questions
- inquirer uses the `prompts.js` to load up the question
- argv are all the arguments you passed in
- the 1st argument is always the path to the executable
- the 2nd argument is always the path that is currently executing
- after that is basically all the arguments you passed in

---
## D) Asynchronous Node
---
### Asynchronous Code in Node.js (5/11/19)
- https://frontendmasters.com/courses/node-js/commander-module-for-building-clis/

- ruby or python is multi-threaded
- javascript is single-threaded and a single event loop just like a browser, and allows for high concurrency
- callbacks, promises, async/await are ways we get notified of the results and dealing with this async behavior
- nodejs app with be shared by all clients
- now you have consider event loops that are CPU-intensive that block a single thread

---
### Asynchronous Patterns (5/11/19)
- https://frontendmasters.com/courses/node-js/asynchronous-patterns/
- [Promises.all MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

- use async/await and it works great
- async/await needs a try/catch block for handling errors
- async/await is not truly blocking because if other requests were to come in and the current async/await request won't block that one
- so it is still an asynchronous operation

- the general patterns are:
```js
// CALLBACKS
// callback takes error as first arg, and result as second
doAsyncThing((error, result) => {})

// PROMISES
doAsyncThing()
  .then(result => {})
  .catch(error => {})

// ASYNC/AWAIT
const run = async () => {
  const results = await doAsyncThing() // must return a promise
  console.log('hello')
}
```
- `promise.all` is a really good control flow for a group of promises
- `bluebird` and other libraries are useful for promise controls also

---
### Error Handling (5/11/19)
- https://frontendmasters.com/courses/node-js/error-handling/

- any thrown or unhandled errors will cause the process to crash and exit
- think of a server and if it crashes, all the users can't access your app

- you app may have errors that should not cause a crash, so you must handle accordingly
- so if there's an invalid authentication token or something from a user, you don't want your whole app to crash and notify the user

---
### Servers (5/11/19)
- https://frontendmasters.com/courses/node-js/servers/

- a server's job is to handle a request from some sort of client (browser, mobile app, another server, etc)

- without considering scaling, one server instance will handle many client requests.

- nodejs has built in and community packages for building all types of servers (API's, static, realtime, etc.)

---
### Asynchronous Server Exercise (5/11/19)
- https://frontendmasters.com/courses/node-js/asynchronous-server-exercise/

- Exercise 4: refactoring and fixing a simple static asset server
- ✅ install all remote modules (hint: use npm)
- ✅ Check the README on how to run your server
- ✅ refactor the sync file reading code to be async with a callback, promise, or async await
- ✅ prevent the server from crashing when an assets is not found. Instead, respond with a 404 status code
- ✅ create some sort of router logic to handle incoming requests for assets

- we are in `./exercises/api/server.js` and exercise 4
- we need to turn the findAsset function to be async
- it won't seem like it's blocking since we don't have many operations going on like a big server
- start the server with `node exercises/api/server.js`

- **MY ATTEMPT**
- doesn't work, just an attempt
```js
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

/**
 * this function is blocking, fix that
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = async name => {
  const assetPath = await path.join(__dirname, 'assets', name);
  return fs.readFileSync(assetPath, { encoding: 'utf-8' }).toString();
};

const hostname = '127.0.0.1';
const port = 3000;

// log incoming request coming into the server. Helpful for debugging and tracking
const logRequest = (method, route, status) =>
  console.log(method, route, status);

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const route = await url.parse(req.url).pathname;
  // this is sloppy, espcially with more assets, create a "router"
  try {
    switch (route) {
      case '/':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(findAsset('index.html'));
        logRequest(method, route, 200);
        res.end();
        break;
    }
  } catch (err) {
    res.status(404).json(err);
    return res.end();
  }
  // most important part, send down the asset
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

---
### Asynchronous Server Solution (5/11/19)
- https://frontendmasters.com/courses/node-js/asynchronous-server-solution/

- a mime type is the information about what type of file is being serve so the browser can interpret it
- `mime` npm package is a useful way to figure out what mime type something is
- installed it and use `.getType()` to determine file type in code

- TIP: server your static assets from a CDN

- You can also use promisify utility
- [util promisify](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)
```js
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

/**
 * this function is blocking, fix that
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = name => {
  const assetPath = path.join(__dirname, 'assets', name);
  return new Promise((resolve, reject) => {
    fs.readFile(assetPath, { encoding: 'utf-8' }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const hostname = '127.0.0.1';
const port = 3000;
const router = {
  '/ GET': {
    asset: 'index.html',
    mime: mime.getType('html')
  },
  '/style.css GET': {
    asset: 'style.css',
    mime: mime.getType('css')
  }
};

// log incoming request coming into the server. Helpful for debugging and tracking
const logRequest = (method, route, status) =>
  console.log(method, route, status);

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const route = url.parse(req.url).pathname;
  const match = router[`${route} ${method}`];

  // this is sloppy, espcially with more assets, create a "router"
  if (!match) {
    res.writeHead(404);
    logRequest(method, route, 404);
    return res.end();
  }
  res.writeHead(200, { 'Content-Type': match.mime });
  res.write(await findAsset(match.asset));
  logRequest(method, route, 200);
  res.end();
  // most important part, send down the asset
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

---
## E) Debugging & Testing
---
### Debugging Node (5/14/19)
- https://frontendmasters.com/courses/node-js/debugging-node/

- debugging is just like chrome
- LEVEL 1: console.log your way through and record your logs
- there are a lot of tools for it
- you would use this locally

- LEVEL 2: use your node inspector when starting your app and debug like you would a browser app in chrome
- add `--inspect` to your terminal like `node --inspect exercises/api/server.js`
- the debugger will listen on the websocket
- you can type in `chrome://inspect`, you can see Remote Target, click on inspect
- you can use it to debug live

- LEVEL 3: Text editor integration offers the most seamless experience
- set it up in like VS Code, Atom, Webstorm
- you can use `debugger`

---
### Testing Node Libraries (5/14/19)
- https://frontendmasters.com/courses/node-js/testing-node-libraries/

- Node testing has become a lot easier!
- tests themselves are executed in Nodejs

- you still have to export modules if you want to test them
- there are other concerns specific to what libraries and frameworks you use like mocks, spies, stubs

- you can test everything in node, even a browser app that test stuff on the DOM
- Browser apps, API's, CLI's, scripts, tools, etc.
- `js-dom` is another package that mocks DOM out
- you can even test animations

---
### Anatomy of Tests (5/14/19)
- https://frontendmasters.com/courses/node-js/anatomy-of-tests/

- there's your code to be tested
- `test suite` helps organize tests, provide hooks, and overall environments
- `assertion library` does actual comparison in your tests
- `mocks and spies` are tools to test your code without testing other code or actually running your code
- spies is a way to test an internal function or a callback function
- really advance concepts and might not need to get to this point

---
### Types of Tests (5/14/19)
- https://frontendmasters.com/courses/node-js/types-of-tests/
- [PhantomJS](https://github.com/ariya/phantomjs)
- [Headless Chrome](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai)

- if you can write it, you can test it

- `unit` is testing small blocks of code and not how all the code works as a whole
- easiest to do and force you to write clean code
- writing good unit tests can go far

- `integration` is testing how things work with each other

- `end to end` is testing the whole process from the client to the server and back
- depends on your education

- `UI` is like e2e but for the user interface

- `snapshot` is take a picture of the DOM

- `performance` is testing speed and ability like load testing

- there are many more...

---
### Debugging & Testing Exercise (5/14/19)
- https://frontendmasters.com/courses/node-js/debugging-testing-exercise/
- [HTTPie](https://httpie.org/)

- use debug to track down issues in small app
- use logging and inspector
- try to fix and write tests to make sure it stays fixed

- **EXERCISE 5 TASKS**
1) ✅ checkout to start branch
2) ✅ check the README on how to execute this program and run test
3) ✅ there are 3 bugs, find them and fix them
4) ✅ write some unit test with Jest to make sure those bugs stay fixed. Refactor the code if you have to

- **MY ATTEMPT**
- open `exercise/testing/users.js`
- there are some problems here
- run server with `node exercises/testing/index.js`
- tried but did not know

---
### Debugging & Testing Solution (5/15/19)
- https://frontendmasters.com/courses/node-js/debugging-testing-solution/

- it's difficult to debug another person's code
- walk through every single line of code

- can throw `debugger` and run `node --inspect exercises/testing/index.js`
- we can click on inspect
- now run a query and debug through it

- first error was `req.id` needed a `.params`
- second error was passing `user => user.id === _id` into the `findUser()` function which takes in an id
- third error was was that id is a string by default so we needed to parseInt with the `fixId()` function
```js
// api.js
app.get('/user/:id', async (req, res) => {
  const id = req.params.id; // ERROR 1
  // should ge user by given id in route param
  const user = await users.findUser(id); // ERROR 2
  res.status(200).send(user);
});

// user.js
const fixId = id => parseInt(id);
// simulate async db call with promise
const findUser = id =>
  new Promise((resolve, reject) => {
    const _id = fixId(id);
    const user = users.find(user => user.id === _id); // ERROR 3
    if (user) {
      return resolve(user);
    }
    reject(new Error(`No user with id "${_id}"`));
  });
```

---
## F) Publishing and Deploying
---
### Sharing Modules (5/15/19)
- https://frontendmasters.com/courses/node-js/sharing-modules/

- **SHARING YOUR MODULES IS EASY**
- TLDR: you publish it to github and npm

- add node_modules to gitignore
- declare remote modules as devDependencies if you only need them to develop with (like Jest)

- think about how your module is being used and if it needs dependencies
- if it does, think about how your host app might already have it (NPM tries to fix versions for you, but don't rely on this always working)
- most of the time, just make it a devDependency

- think is it private or public
- if it's private, you might need a token

---
### Deploying Your Servers (5/15/19)
- https://frontendmasters.com/courses/node-js/deploying-your-servers/
- [Process Env Docs](https://nodejs.org/api/process.html#process_process_env)

- follow cloud provider instructions, and never hard code environment variables
- most cloud providers have their own method of deploying apps and integrate with Github/CLI assistant

- **THINGS TO REMEMBER**
- setup a CI flow for your app
- remove secretes and use env vars
- make sure you are developing with same version of node locally and on your server
- this is where NVM comes in

- **STATIC SITE GENERATOR VS STATIC SITE SERVER**
- SSG's takes data from server/JSON/markdown and outputs html/css with a templating engine (React, Angular, GatsbyJS)
- SSS's is a server on the cloud that serves files
- this is much slower than a CDN
- don't recommend that we read a file with node and try to cache it (basically you're just building a cdn)
---
### Deploying to Heroku (5/15/19)
- https://frontendmasters.com/courses/node-js/deploying-to-heroku/
- [Getting started with heroku and node](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

- he walked through deploying to heroku
- he was using the REST API
- heroku also has a procfile to how to start things

- `npm publish` will try to publish a package to NPM
- there's a lot of work beforehand

- if it's a private/scoped module, it is usually prefaced with `@name/lodash` for example
- all private modules are scoped by default

---
### Further Tools & Resources (5/15/19)
- https://frontendmasters.com/courses/node-js/further-tools-resources/

- learn Babel
- if you're trying to build APIs, learn express
- if you're trying to learn some front end tools and optimizations, learn Webpack
- if you're trying to build CLIs, learn Commander
- explore npm and contribute to npm

---
### Final Q&A (5/15/19)
- https://frontendmasters.com/courses/node-js/final-q-a/

- tipe.io is a CMS that is built with node
- CMSs are difficult because of the data model and database choice
- node on the server is good now because you would be able to do things from PHP/Wordpress world like A/B testing

- GatsbyJS is just a static site generator
- NextJS and Nuxt are more for dynamic applications
- Nuxt also allows static site generation

# Introduction to MongoDB w/ Scott Moss

## A) Introduction
---
### Course Setup (5/18/19)
- https://frontendmasters.com/courses/mongodb/course-setup/
- [Course Repo](https://github.com/FrontendMasters/intro-mongo-db)
- [MongoDB Setup](https://docs.mongodb.com/manual/administration/install-community/)
- [MongDB Compass](https://www.mongodb.com/download-center/compass)

- Download the repo

- **MONGODB SETUP**
- pick Community Server and use homebrew to install
- run `mongod` to check if it runs
- run `mongo` to open up the MongoDB shell

- **MONGO SHELL COMMANDS**
- `show dbs` shows all the databases existing on your computer
- default are admin, config, and local
- `use todos` will create and switch to a new database
- `show collections` should not show errors if you have installed correctly
- `db.help()` shows you all available methods
- `db.createCollection('items')` to create a new collection

- **MONGODB COMPASS SETUP**
- this is the GUI and download the community version for free
- open the GUI
- connect to local host by default and shows all the local databases that you have

---
### Mongo Q&A (5/18/19)
- https://frontendmasters.com/courses/mongodb/mongo-q-a/
- [MongDB repository](https://github.com/mongodb/mongo)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

- mostly written in C++

- **PROS**
- Mongo was easier to start with
- it's very flexible
- data is JSON by default but querying is much easier
- built with javascript/node in mind, takes advantage of event base architecture
- it's promise based
- now becoming ASIC compliant

- **CONS**
- SQL and PostgreSQL performs better at the top level
- has not been out as long

- **WHY MONGO VS RELATIONAL DB**
- Mongo is good for simple app
- Mongo is more forgiving for CMS apps since you don't have to run tons of migration
- Good for real time applications for chatting
- You shouldn't use it for a social network, a graph, time-series
- perfect for eCommerce applications
- you can store data any way you want and validate too

---
## B) Mongoose
---
### Schemas & Why Mongoose (5/18/19)
- https://frontendmasters.com/courses/mongodb/schemas-why-mongoose/
- [Mongoose ORM](https://mongoosejs.com/)
- schemas are a way to validate data and keep your data consistent
- it does not make it a relational database

- **HOW TO CONNECT TO MONGO FROM NODE APP**
- 1) native MongoDB driver or 2) Mongoose
- Mongoose is Object Relational Mapper (ORM), synonymous like Sequelize or Bookshelf for PostgresQL
- Mongoose is the de facto ORM for Mongo and supports newer features than MongoDB driver
- Mongoose is better than DynomoDB

---
### Connecting to the Database (5/18/19)
- https://frontendmasters.com/courses/mongodb/connecting-to-the-database/

- make a new `test.js` in the root of the practice repo
- returns a promise by default
- there are other options but dependent on your needs
- you might get a lot of warnings about deprecation warnings because mongoose is lagging behind
- try your best to adhere to the warnings
```js
const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever') // the protocol for URL, hostname, explicit port with 27017 being default, name of the database
}
```

---
### Creating Schemas & Models (5/18/19)
- https://frontendmasters.com/courses/mongodb/creating-schemas-models/

- **CREATING A COLLECTION**
- a schema doesn't do any but just a scaffold
- can use javascript primitives in Mongo
- models will help set up out database
- CONVENTION:first argument in `mongoose.model` should be lower-cased and singular since mongoose will pluralrize it for us
- CONVENTION: capitalize first lete for models
```js
const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever')
}

const student = new mongoose.Schema({
  firstName: String
})

const Student = mongoose.model('student', student) // collection, schema
```

---
### Creating a Mongo Document (5/18/19)
- https://frontendmasters.com/courses/mongodb/creating-a-mongo-document/
- [Launch Rocket](https://github.com/jimbojsb/launchrocket)

- **INSERTING SOME QUERIES**
- connect to a database before interacting
- create a new student by declaring it
```js
const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever')
}

const student = new mongoose.Schema({
  firstName: String
})

const Student = mongoose.model('student', student)

connect()
  .then(async connection => {
    const student = await Student.create({firstName: 'Tim'})
    console.log(student)
  })
  .catch(e => console.error(e))
```

- **RUNNING YOUR SERVER & LAUNCH ROCKET**
- Launch Rocket is a GUI that lists all your services and you can start it
- works only if you install with brew
- you can still run your server by running `mongod`
- execute the file with `node test.js`

---
### Deconstructing the Mongoose Document (5/18/19)
- https://frontendmasters.com/courses/mongodb/deconstructing-the-mongoose-document/

- `_id` is created by default for every document created, value is an `object id` (from BSON, its an object representation of id)
- object id's are very recognizable

- `firstName` was our schema

- `__v` is the version of your schema
- you will never have to use it really
- it doesn't really have a point
- you can also strip it out of migration

- a `mongoose document` is not a javascript object and has methods on it,  but we won't be able to see it
- there are other properties because those properties won't log and not enumerable
- later we will learn to convert it to JSON
- passing around regular javascript objects is faster than mongoose document
- mongo just uses JSON, mongoose provides tools/methods/helpers that is added on top of JSON

---
### Mongoose Schemas (6/11/19)
- https://frontendmasters.com/courses/mongodb/mongoose-schemas/

- **VALIDATION**
- `required` is a validation, `unique` is an index
```js
// test.js
const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever');
};

const student = new mongoose.Schema({ // added firstName, favFoods, and info validations
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  favFoods: [{type: String}],
  info: {
    school: {
      type: String
    },
    shoeSize: {
      type: Number
    }
  }
});

const Student = mongoose.model('student', student);

connect()
  .then(async connection => {
    const student = await Student.create({ firstName: 'Tim' });
    console.log(student);
  })
  .catch(e => console.error(e));

```

---
### Basic Query Methods (6/11/19)
- https://frontendmasters.com/courses/mongodb/basic-query-methods/

- **METHODS**
- `.find()` returns a list
- mongo doesn't return an error, just return a null if something doesn't exist
- `findByIdAndRemove`, `findByIdAndUpdate`, `findByIdAndDelete` are helpful for CRUD operations
- you can also make your own methods but there are many already
- leave object empty if you want to search by wildcard
- text index is an advance search method but there are better tools out there
- by default, mongo doesn't have timestamps but mongoose does the timestamps if you pass the command
```js
// test.js
const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever');
};

const student = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  favFoods: [{type: String}],
  info: {
    school: {
      type: String
    },
    shoeSize: {
      type: Number
    }
  }
}, {timestamps: true}); // tells you when was created and deleted

const Student = mongoose.model('student', student);

connect()
  .then(async connection => {
    const student = await Student.create({ firstName: 'Tim' });
    const found = await Student.find({firstName: 'this'}) // returns a list
    const foundById = await Student.findById('asdfasdfasdf') // searches by id
    const updated = await Student.findByIdAndUpdate('asdfads', {}) // 2nd object is what to update
    console.log(student);
  })
  .catch(e => console.error(e));

```

---
### Schema & CRUD Exercise (6/11/19)
- https://frontendmasters.com/courses/mongodb/schema-crud-exercise/

- we are in `./exercises/models` folder
- under the readme, there are additional commands to run tests
- NOTE: tests will only run for this exercise and not all others

- *commands*
- test: `yarn test exercises/models/__test__/` or `npm test exercises/models/__test__/`

- this exercise will help you connection logic, write some methods, and do basic CRUD operations
- use the test files to help you figure out what the tests are looking for
- you should have 2 passed tests and 2 passed suites

---
## C) Associations
---
## D) Viruals, Hooks & Indexes
---
## E) APIs

# Complete Intro to React, v5 w/ Brian Holt

## A) Introduction
---
### Introduction (6/12/19)
- https://frontendmasters.com/courses/complete-react-v5/introduction/

- [Code Repository](https://github.com/btholt/complete-intro-to-react-v5)
- [Course Website](https://btholt.github.io/complete-intro-to-react-v5/)
- [Course Transcript](https://static.frontendmasters.com/assets/courses/2019-06-04-complete-react-v5/transcripts.zip)
- [Sourcetree](https://www.sourcetreeapp.com/)
- [Git In Depth FEM course](https://frontendmasters.com/courses/git-in-depth/)
- [File issue](https://github.com/btholt/complete-intro-to-react-v5/issues)
- [PR for errors](https://github.com/btholt/complete-intro-to-react-v5/tree/gh-pages-src)
- [Front End Happy Hour Podcast](https://frontendhappyhour.com/)

- [Vets Who Code](https://vetswhocode.io/)
- [Concatenate](https://concatenate.io/)

- [Twitter](https://twitter.com/holtbt)
- [Instagram](https://www.instagram.com/briantholt/)
- [Github](https://github.com/btholt)
- [LinkedIn](https://www.linkedin.com/in/btholt/)

- course is meant to be modular, you can jump to commits
- use Source tree as a useful to change commits
- "Add theme context" is the last commit in this course, after is for intermediate react

---
### Project Setup (6/12/19)
- https://frontendmasters.com/courses/complete-react-v5/project-setup/

- [Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/)
- [Prewritten CSS file](https://raw.githubusercontent.com/btholt/complete-intro-to-react-v5/master/src/style.css)

- he is showing us pure javascript react so you can understand them
- if you understand the tools your using and the problems they solve, then you can appreciate the complexity to learn it

- emmet `html:5` gets you boilerplate
- emmet `#root` div with id of root
- there is react and react-dom package because , react native and react dom share the react package
- there is some prewritten CSS for us

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css">
  <title>Adopt Me</title>
</head>

<body>
  <div id="root">not rendered</div>
  <script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
  <script>
    // Your code is going to go here
  </script>
</body>

</html>
```

---
### A Note on the Course Font (6/12/19)
- https://frontendmasters.com/courses/complete-react-v5/a-note-on-the-course-font/

- [Dank Mono Paid Font](https://dank.sh/)
- [Fira Code Free Font](https://github.com/tonsky/FiraCode)

- Course ligature called Dank Mono
- Fira Code is free font

---

## B) Pure React

---
### Getting Started with Pure (6/15/19)
- https://frontendmasters.com/courses/complete-react-v5/getting-started-with-pure-react/

- We add `React.createElement` component
- This is like a template and it just simply returns markup
- we need to render it to the DOM also
- the power of this is composibility model and can use it in other places

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css">
  <title>Adopt Me</title>
</head>

<body>
  <div id="root">not rendered</div>
  <script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
  <script>
    // Your code is going to go here
    const App = () => {
      return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!")
      )
    }

    ReactDOM.render(React.createElement(App),
    document.getElementById("root")
  </script>
</body>

</html>
```

---
### createElement Arguments (6/15/19)
- https://frontendmasters.com/courses/complete-react-v5/createelement-arguments/

- we called `React.createElement` 3 times

- 3 parameters are needed for `React.createElement`
- the 3rd can be array with many other children
```js
  return React.createElement(
    "div", // 1st: Tag type
    { id: "something important" }, // 2nd: Attributes
    [
      React.createElement("h1", {}, "Adopt Me!"), // 3rd: Children
      React.createElement("h1", {}, "Adopt Me!")
    ]
  )
```

---
### Reusable Components (6/15/19)
- https://frontendmasters.com/courses/complete-react-v5/reusable-components/

- React is extremely flexible and we can order our product however we want
- we then split code out to App.js
- Add script tag in `index.html` to link to App.js

- Brian has now created a Pet "stamp" but has not used it yet
- He uses it when he adds `React.createElement(Pet)`

```js
// App.js
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese")
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet), // used Pet stamp 3 times
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

---
### Passing in Component Props (6/15/19)
- https://frontendmasters.com/courses/complete-react-v5/passing-in-components-props/

- we are now passing attributes into the component

```js
const Pet = props => {
 return React.createElement("div", {}, [
   React.createElement("h1", {}, props.name),
   React.createElement("h2", {}, props.animal),
   React.createElement("h2", {}, props.breed)
 ]);
};

const App = () => {
 return React.createElement("div", {}, [
  React.createElement("h1", {}, "Adopt Me!"),
  React.createElement(Pet, {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese"
  }),
  React.createElement(Pet, {
    name: "Pepper",
    animal: "Bird",
    breed: "Cockatiel"
  }),
  React.createElement(Pet, {
    name: "Doink",
    animal: "Cat",
    breed: "Mix"
  })
 ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

---
### Destructuring Props (6/15/19)
- https://frontendmasters.com/courses/complete-react-v5/destructuring-props

- we used destructuring right in the parameter field
- this is a concept native to vanilla javascript, not specifically React
- this is the first commit point in the repo

- we don't want to write react like this and now introducing tools

```js
const Pet = ({ name, animal, breed }) => {
 return React.createElement("div", {}, [
   React.createElement("h1", {}, name),
   React.createElement("h2", {}, animal),
   React.createElement("h2", {}, breed)
 ]);
};

const App = () => {
 return React.createElement("div", {}, [
  React.createElement("h1", {}, "Adopt Me!"),
  React.createElement(Pet, {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese"
  }),
  React.createElement(Pet, {
    name: "Pepper",
    animal: "Bird",
    breed: "Cockatiel"
  }),
  React.createElement(Pet, {
    name: "Doink",
    animal: "Cat",
    breed: "Mix"
  })
 ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

---

## C) Tools

---
### npm & Generating a package.json file (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/npm-generating-a-package-json-file/

- `node -v` make sure you have node 8+
- use lastest stable version
- `npm init` creates a new project
- `-y` flag to skip the questions
- dependencies will be stored in `package.json`

---
### Prettier (6/16/19)
- https:// https://frontendmasters.com/courses/complete-react-v5/prettier/

- installed Prettier to make code look better
- `yarn add prettier` or `npm i -D prettier`
- this helps standardize the same formatting for everyone but at least it's all the same

---
### npm scripts (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/npm-scripts/

- scripts help us run different commands to do something to the repo
- like running tests
- we added a script to run prettier
- we are doing this so everyone is on the same page for code format

```json
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx}\"",
},
```

---
### Prettier Setup (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/prettier-setup/

- You can also download the vscode extension called "Prettier - Code formatter"
- go to settings and turn on `format on save` and `require config`

- have a `.prettierrc` file in the root directory

---
### ESLint Setup (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/eslint-setup/

- prettier is strictly concerned with code formatted but doesn't care about style
- `npm install -D eslint eslint-config-prettier`
- make a `.eslintrc.json` file in the root

- the package-lock.json will install exactly the packages exactly and the installation order
- package-lock and yarn-lock do the same thing

---
### ESLint Configuration (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/eslint-configuration/

- [ESlint](https://eslint.org/)

- There are many type of configs like Airbnb, eslint:recommended
- we added to `eslintrc.json` and the lint script in package.json
- you can also write custom eslint rules
- eslint is very much the standard nowadays

```json
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

---
### gitignore (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/gitignore/

- create `.gitignore` in root directory
- there's another commit point here
- `git checkout 1e101fd784ddc83cdea395963d333decfa3249a4`

```js
// .gitignore
node_modules
.cache/
dist/
.env
.DS_Store
coverage/
.vscode/
```

---
### Parcel (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/parcel/

- in the past, taught with webpack (git checkout 1e101fd784ddc83cdea395963d333decfa3249a4)
- [FEM Webpack Course](https://frontendmasters.com/courses/webpack-fundamentals/)
- [React V3 course](https://frontendmasters.com/courses/react/)
- [Parcel](https://parceljs.org/)

- Webpack is powerful but hard to setup
- Parcel is more hands off
- today we are going to use parcel
- parcel knows to crawl through the files and find the paths

- `npm install -D parcel-bundler`
- `"dev": "parcel src/index.html"` added to scripts
- `npm run dev`
- it will create a `.cache` and `dist` folders which you can ignore
- you don't have to configure it any more than that

---
### Installing React & ReactDom (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/installing-react-reactdom/

- `npm i react react-dom`
- `import React from 'react';`
- `import { render } from 'react=dom';`
- `npm run dev`

- npm intellisense to complete paths
- parcel does tree-shaking, recommends we include only methods imported
- it helps us to be more explicit but some packages are not built for tree-shaking
- don't worry about file sizes until we do production build

---
### Separate App into Modules (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/separate-app-into-modules/

- *Alternative to Parcel*
- [Browserify](http://browserify.org/)
- [Rollup](https://rollupjs.org/guide/en/)

- There's a lightbulb icon in vscode which lets you move code to a new file
- the lightbulb is called a "code action"
- typescript is being run against your code and what is doing that

---

## D) JSX

---
### Converting to JSX (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/converting-to-jsx/

- current commit: `git checkout 6963d65a8808e3d342fb005e42ab2317193c7065`

- parcel is using bable to convert JSX code
- JSX helps convert javascript code that renders HTML
- react core team doesn't think .jsx extension is necessary, just use .js
- you can configure to jsx file by changing the filename or setting type in bottom right of vscode

- this is essentially running `React.createElement` calls
- there's a rule that you can only return one enclosing tag

```js
import React from "react";

const Pet = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
```

---
### Configuring ESLint for React (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/configuring-eslint-for-react/

- `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
- this helps to understand JSX correctly

- 2 rules prettier extends have to be last in package.json
- we turned off prop-types and learn typescript later
- [Intermediate React](https://frontendmasters.com/courses/intermediate-react-v2/)
- `no-console` will warn us instead of breaking the app
- `eslint:recommended` rules are pretty great, some `react/recommended` is questionable

```js
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

---
### JSX Composite Components & Expressions (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/jsx-composite-components-expressions/

- JSX requires trailing slash to know to end a component
- curly braces in the return means that is a javascript expression

- **EXPRESSION VS STATEMENT**
- `const x = name.toUpperCase();` is a statement
- `name.toUpperCase()` is an expression

---

## E) Hooks

---
### Creating a Search Component (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/creating-a-search-component/

- CHECKPOINT: git checkout 0f7977ae3ce923ecf7094b82056a809fcaf1e905
- [HOOKS IN DEPTH](https://btholt.github.io/complete-intro-to-react-v5/hooks-in-depth)

- Hooks available as of 16.8 and it's totally optional

- created a new component: `SearchParams.js`
- you have to use `className` instead of `class`
- `htmlFor` for HTML's `for`
- It's good to have `input` inside the `label` for accessibility reasons
- we also have to import `SearchParams` component in `App.js`
```js
// SearchParams.js
const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location}
          placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

expot default SearchParams
```

---
### Setting State with Hooks (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/setting-state-with-hooks/

- The value is always Seattle, WA since a component re-render sees that nothing has changed the value
- The two-way data binding is not free in react
- Now you are forced to think about how you write your code and understand the code you wrote

- The first state in `useState()` is the default state
- All hooks start with the word "use"
- you can call `updateLocation` as `setLocation`
- there is no current industry practice

```js
// in SearchParams.js
import React, { useState } from "react";

// replace location
const [location, updateLocation] = useState("Seattle, WA");

// replace input
<input
  id="location"
  value={location}
  placeholder="Location"
  onChange={e => updateLocation(e.target.value)}
/>;
```

---
### Best Practices for Hooks (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/best-practices-for-hooks/

- **Hooks NEVER go inside an if statement/for loop/conditionals**
- the order of hooks is important to how they are loaded
- this is a convention for ALL hooks
- make sure to use the word "use" since it will help with your ES linting

---
### Configuring ESLint for Hooks (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/configuring-eslint-for-hooks/

- `npm i -D eslint-plugin-react-hooks`
- this is official rules for writing hooks from the react team
- add rules in .eslintrc.json

- `react-hooks/exhaustive-deps` deals with effects
- 1 means warning, 2 means throw an error
```json
{
  "rules": {
    …,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
  "plugins": [
    …,
    "react-hooks"
    ],
}
```

---
### Calling the Pet API (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/calling-the-pet-api/

- we added `import { ANIMALS } from "@frontendmasters/pet";`
- parcel is smart enough to grab packages for you too

- `onBlur` is needed if you have `onChange`, this is accessibility issue
- it involves screen readers and tapping across buttons and it won't save changes
- here we are using implicit return from the map function
- this means we don't have to use curly braces and add `return` keyword
- the parentheses knows that we want to return that `<option>` element

```js
// under React import
import { ANIMALS } from "@frontendmasters/pet";

// under location
const [animal, updateAnimal] = useState("");

// under input
<label htmlFor="animal">
  Animal
  <select
    id="animal"
    value={animal}
    onChange={e => updateAnimal(e.target.value)}
    onBlur={e => updateAnimal(e.target.value)}
  >
    <option />
    {ANIMALS.map(animal => (
      <option key={animal} value={animal}>
        {animal}
      </option>
    ))}
  </select>
</label>;
```

---
### Unique List Item Keys (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/unique-list-item-keys/

- react needs a `key` from a map so it can keep track of the items from say a `map` function
- make sure the key is something unique to each object

---
### Breed Dropdown (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/breed-dropdown/

- Now we are doing a hook for breed also
- the `disabled={!options.length}` means that it will disable this option if something doesn't have a length
- we are adding:

```js
import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown];
};

export default useDropdown;
```

---
### Custom Hooks (6/16/19)
- https://frontendmasters.com/courses/complete-react-v5/custom-hooks/

- now we can make out custom hooks as well
- we can make a reusuable bit that maintains the dropdown
- we made `useDropdown.js` component since we had 2 dropdowns

```js
// useDropdown.js
import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
```

- We also have to update
```js
// SearchParams.js
// import at the top
import useDropdown from "./useDropdown";

// delete the animal and breed useState calls

// under breeds useState
const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

// replace animal and breed label
<AnimalDropdown />
<BreedDropdown />
```

---

## F) Effects

---
### Effects (6/19/19)
- https://frontendmasters.com/courses/complete-react-v5/effects/

- current commit = git checkout 3c42e352230a758143fd528fbbe3084eae8a8e67

- we are going to pull live data from an api
- [Petfinder API](https://www.petfinder.com/)

- `useEffect` takes the place of some lifecycle hooks
- replaces `componentDidMount` `componentWillUnmount`, `componentDidUpdate`
- useEffect here is schedule to run after the component has rendered
- we are doing this because we want the user to be able to immediately see something for UX
- we are pulling in the `pet` api client in
- `.then(console.log, console.error)` is a shortcut
```js
import React, { useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

// inside render method, below useDropdown calls
useEffect(() => {
  pet.breeds("dog").then(console.log, console.error); // returns a promise
});
```

- now we are update the useEffect now that it works
- we are initially setting the states to 0 since we might pull from cats or dogs api
- then we are making an api request to pull from the dog api
- we get back a name and we see it as the breed
- we are also destructuring here to get `breeds` and `name`
```js
// SearchParams.js
// replace effect
useEffect(() => {
  setBreeds([]);
  setBreed("");
  pet.breeds(animal).then(({ breeds }) => {
    const breedStrings = breeds.map(({ name }) => name);
    setBreeds(breedStrings); // returns all the breeds of that animal "dog"
  }, console.error); // same as error => console.error(error);
}, [animal]);
```

---
### Declaring Effect Dependencies (6/19/19)
- https://frontendmasters.com/courses/complete-react-v5/declaring-effect-dependencies/

- from the `useDropdown` component, it returns `[state, Dropdown, updateState]`
- we can use this in our hook
- you have to specify the dependencies for the useEffect too
- basically if we don't, it will run useEffect after every render like when we type a letter in a field
- we put `animal` at the end of useEffect to tell it to only update when that hook changes
- you also have to add `setBreed, setBreeds` even though it never changes
- in discussion with the react team, that's what they have decided

```js
const [theme, setTheme] = useContext(ThemeContext);
const [location, updateLocation] = useState("Seattle, WA");
const [breeds, updateBreeds] = useState([]);
const [pets, setPets] = useState([]);
const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    updateBreeds([]);
    updateBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
}, [animal, setBreed, setBreeds]);
```

---
### Effect Lifecycle Walkthrough (6/19/19)
- https://frontendmasters.com/courses/complete-react-v5/effect-lifecycle-walkthrough/

- we are working through the entire cycle again
- you can have as many effects as you like
- when you go to type in a form for location, useEffect will check if that hook is in the dependency
- it will only run if it is, which location is NOT in this case
- if we make a change to the animal hook, it will run useEffect
```js
// SearchParams.js
import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);

  // runs after the render completes
  // after the first render, it runs this function
  useEffect(() => {
    updateBreeds([]);
    updateBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  // users see this render first, then useEffect runs after this
  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="location">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
```

---
### Run Only Once (6/19/19)
- https://frontendmasters.com/courses/complete-react-v5/run-only-once/

- **What if you only want the useEffect to run ONLY once?**
- just insert `[]` in the dependency
- this is the whole reason behind the dependencies so you don't run into an infinite loop
- you might need this if you're implementing with a D3 plugin

---
### Hooks Review and Q&A (6/19/19)
- https://frontendmasters.com/courses/complete-react-v5/hooks-review-and-q-a/

- hooks was believed to be easier to learn than context, lifecycle hooks
- people think this is easier but you can be the judge once you've learned both
- there are no inherent problems with class components
- hooks do have some limitations compared to class components at the current time
- `useEffect` and `useState` are going to be your 2 more commonly used hooks, more than 90% of your use cases
- `useRef` may be used sometimes
- there are other hooks that you may never have to know

---
## G) Dev Tools
---
### Environmental Variables & Strict Mode (8/21/19)
- https://frontendmasters.com/courses/complete-react-v5/environment-variables-strict-mode/

- **NODE_ENV**
- set `NODE_ENV=development`
- parcel does this automatically, but webpack and browserify needs your to set this
- it's a lot larger in file size and slower if you ship the development build than a production build

- **STRICT MODE**
- react has a new strict mode and help future proof your application
- the code doesn't do anything in production but only stop you from features in React will be deprecated soon or using legacy features
- this is useful in legacy applications
- this is a component so you can apply strict modes in certain components or sections

```
return (
  <React.StrictMode>
    <div>
      <h1>Hello</h1>
    </div>
  </React.StrictMode>
)
```

---
### React Browser Dev Tools (8/21/19)
- https://frontendmasters.com/courses/complete-react-v5/react-browser-dev-tools/

- **DEV TOOLS**
- there are react developer tools for chrome and firefox
- there will be a react tab when you do inspect element
- there's a dom explorer and you can see state and props

- `$r` will be whatever is selected on dev tools to interact with it
- `$0` works for the normal inspector

---
## H) Async & Routing
---
### Asynchronous API Requests (9/2/19)
- https://frontendmasters.com/courses/complete-react-v5/asynchronous-api-requests/

- async function always returns a promise
- we try to make it work for the latest 2 versions for each browser type
- if async/await doesn't get transpiled properly, we get regenerators which is not something we want to deal with

```js
// inside render
const [pets, setPets] = useState([])

// below state declarations
async function requestPets() {
  const { animals } = await pet.animals({
    location,
    breed,
    type: animal
  })

  setPets(animals || []);
}

// replace <form>
<form onSubmit={e => {
  e.preventDefault(); // helps from submitting the form
  requestPets();
}}
>
```

---
### Using the Fallback Mock API (9/2/19)
- https://frontendmasters.com/courses/complete-react-v5/using-the-fallback-mock-api/

- you can do this project close to offline if you wanted to
- install with `npm install -D cross-env`, makes sure commands work cross platforms
- add `"dev:mock": "cross-env PET_MOCK=mock npm run dev"` to package.json
- running `npm run dev:mock` gets you mock data
- if you can't get mock data to work, try deleting cache and dist folders

---
### One-Way Data Flow (9/2/19)
- https://frontendmasters.com/courses/complete-react-v5/one-way-data-flow/

- now we are iterating through the pet results coming from the parent
- passing data down to children from pattern is a common react pattern
- it is intentionally difficult to pass data upwards with the library
```js
import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => {
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${
                pet.contact.address.state
              }`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
```

---
### Reformatting the Pet Component (9/2/19)
- https://frontendmasters.com/courses/complete-react-v5/reformatting-the-pet-component/

- Now we are refactoring the component
- [Placecorgi](http://placecorgi.com/) to get placeholder images

- CURRENT COMMIT: git checkout 3c42e352230a758143fd528fbbe3084eae8a8e67


```js
import React from "react";

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;

  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
```

---
### Reach Router (9/2/19)
- https://frontendmasters.com/courses/complete-react-v5/reach-router/

- [Reach Router](https://reach.tech/router)
- 3 routers now: React Router, Reach Router, Knobby
- reach router is very accessibility focused
- it handles most of the tasks for you and takes away the complications
- this is a great project to replacement for react router
- reach router can haves mutiple routers on the page

```js
// at top
import { Router } from "@reach/router";
import Details from "./Details";

// replace <Results />
<Router>
  <SearchParams path="/" />
  <Details path="/details/:id" />
</Router>;
```

- **ROUTE SPECIFICITY**
- `/details/1` is more specific than `/details/:id`
- reach has a specificity scoring algorithm that will choose the 1 over :id

---
### Debugging & Reach Router Link (9/2/19)
- https://frontendmasters.com/courses/complete-react-v5/debugging-reach-router-link/

- **PRE/CODE/JSON DEBUGGING TRICK**
- pre tells it to format, code tells this will be code
```js
<pre>
  <code>{JSON.stringify(props, null, 4)}</code>
</pre>
```

- **USING LINK**
- using `Link` will take care of all the routing under the hood

```js
// import Link too
import { Router, Link } from "@reach/router";

// replace h1
<header>
  <Link to="/">Adopt Me!</Link>
</header>;
```

- CURRENT COMMIT POINT: `git checkout https://github.com/btholt/complete-intro-to-react-v5/commit/f5b834761f642fdd408708b3b88febfac4ff2a68`

---
## I) Class Components
---
### Class Components (9/3/19)
- https://frontendmasters.com/courses/complete-react-v5/class-components/

- stateless functional components or functional components are the same thing

- **CLASS COMPONENTS**
- we are covering class components here
- classes must have a render() method
- you can't use hooks with classes
- componentDidMount() is useful for ajax requests

```js
// replace Details.js
import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${
            animal.contact.address.state
          }`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
```

- **CONSTRUCTOR**
- You use to have to put the constructor to extend methods
- Don't really have to do this any longer
```js
constructor(props) {
  super(props);

  this.state = {
    loading: true
  }
}
```

- [Error Handling Course](https://frontendmasters.com/courses/debugging-javascript/)

---
### Rendering the Component (9/3/19)
- https://frontendmasters.com/courses/complete-react-v5/rendering-the-component/

- we don't use hooks and use setState
- hooks and classes are going to stay around along time
- notice how he writes if statement for the loading portion

---
### Configuring Babel for Parcel (9/3/19)
- https://frontendmasters.com/courses/complete-react-v5/configuring-babel-for-parcel/

- the constructor portion is burdensome
- typescript can't figure it out
- you can rewrite the constructor as:
```js
state = { loading: true};
```
- this feature is working in 2019 so ignore having to do this parcel fix
- a preset is a group of plugins
- preset-react has transpilation around jsx
- preset-env transpiles code for environment you specify
- `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`

---
### Creating an Image Carousel
- https://frontendmasters.com/courses/complete-react-v5/creating-an-image-carousel/

---
### Context
- https://frontendmasters.com/courses/complete-react-v5/context/

---
### Index Click Q&A
- https://frontendmasters.com/courses/complete-react-v5/index-click-q-a/

---
### Carousel Implementation
- https://frontendmasters.com/courses/complete-react-v5/carousel-implementation/

---
## J) Error Boundaries
---
## K) Context
---
## L) Portals
---
## M) Wrapping Up

#  Four Semesters of Computer Science in 5 Hours w/ Brian Holt

## A) Big O & Recursion
---
### Introduction (9/14/19)
- https://frontendmasters.com/courses/computer-science/introduction/

- [Courses Page](http://btholt.github.io/four-semesters-of-cs/)

- The course comes from interview coding challenges
- 90% of code should be more readable
- it's meant more for the person going to read it later than the computer

- [Cormen's Intro to Algorithms](https://ms.sapientia.ro/~kasa/Algorithms_3rd.pdf)
- available for free, thanks to MIT
- just read it once and it will help serve you for the rest of your career

---
### Big O (9/14/19)
- https://frontendmasters.com/courses/computer-science/big-o/

- Big O is the way we measure how efficient how an algorithm is
- It's a mathematical concept and the most we'll go into is algebra
- We care more about big order of magnitudes IE 300ms versus 30 seconds
- You can also use big O for spatial analysis

- It's very similar to the polynomial equation where we only care about the x^2

---
### Finding Big O (9/14/19)
- https://frontendmasters.com/courses/computer-science/finding-big-o/

- we normally look at the worse case scenario to get Big O
- it's very rare that you will get an O(n^3) algorithm
- If we have no loops and just do something and exit/return, then it's said we're doing it in constant time, or O(1)
- you can also have O(log n) if a code employs a divide-and-conquer strategy (often recursive,) meaning as you add more terms, the increases in time as you add input diminishes. This is in merge and quick sort.

- we call this O(n) because we go through all the inputs once in a loop
```js
function crossAdd(input) {
    var answer = [];
    for (var i = 0; i < input.length; i++) {
        var goingUp = input[i];
        var goingDown = input[input.length-1-i];
        answer.push(goingUp + goingDown);
    }
    return answer;
}
```

- Also O(n)
```js
function find(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
}
```

- O(n^2)
- we have inner loop and outer loop
- you basically look for loops
```js
function makeTuples(input) {
    var answer = [];
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {
            answer.push([input[i], input[j]]);
        }
    }
    return answer;
}
```

- QUESTION: If you have multiple for loops after one another but NOT nested, it would still be considered O(n) since the coefficient doesn't matter as much here

---
### Recursion (9/14/19)
- https://frontendmasters.com/courses/computer-science/recursion/

- recursion is using the definition to define itself
- carries a big cost to memory which adds more functions to the stack
- there are more complicated, efficient ways of iteration (loops)
- sometimes recursion makes it more readability than the iterative approach
- favor readability so don't be clever unless you have to be

---
### Recursion Example (9/14/19)
- https://frontendmasters.com/courses/computer-science/recursion-example/

- [Example](https://codepen.io/btholt/pen/rxwEVQ?editors=001)

- Sign up for codepen

- **EXAMPLE**
- always write the base case first or else you get stack overflow
- base case is `if (current > max) return;`

- fibonacci sequence is a more practical application of recursion
- the sequence is basically the previous 2 terms added together
- the `if (n <= 2) return 1;` is always the base case and meant to be aggresive in the terminating condition
- while this solution is easy to read, it's not efficient
- the function is called 6,765 times for n=20
- the loop version of this sequence is better
```js
let wr = (msg='--------') => document.write(`<br>${msg}`);

function basicRecursion(max, current) {
  if (current > max) return;
  wr(current);
  basicRecursion(max, current+1);
}

basicRecursion(5,1);
wr();
wr();

function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

for (var i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`);
}
```

- QUESTION: if we have n(logn), do we drop the n in front? No, it's not a coefficient

---
### Exercise: Recursion (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-1-recursion/
- [Exercise](http://codepen.io/btholt/pen/QyMjNa?editors=001)

- they are the usual examples of recursion:  factorial and fibonacci
- we are going to do factorial today

- codepen can use babel to compile ES6 but has problems with ES6's generators

```js
/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1

  Call the function factorial

  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6
*/

function factorial (n) {
  if (n < 2) return 1;
  return n * factorial(n-1);
}

// unit tests
// do not modify the below code
describe('factorial', function() {
  xit('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});
```

---
### Exercise 1 Solution (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-1-solution/
- [Answer](http://codepen.io/btholt/pen/obwrOB?editors=001)

- QUESTION: using return n in the base case? It's an extra call but returning 1 is more explicit

---
## B) Sorting Algorithms
---
### Bubble Sort (9/14/19)
- https://frontendmasters.com/courses/computer-science/bubble-sort/

- Recursion should be kept in our toolbox even it isn't being used all the time

- BIG O: O(n^2)
- Bubble Sort is not useful and not used in production
- It's a useful learning algorithm and easy to conceptualize

- Bubble sort compares 2 numbers at a time and swaps them
- there are 2 loops
- there's an outer "do" loop that runs until all the numbers are in order
- there's an inner loop that swaps the numbers

---
### Exercise 2: Bubble Sort (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-2-bubble-sort/
- [Exercise](http://codepen.io/btholt/pen/PZKPjj?editors=001)

- **MY ATTEMPT: Non-working**
```js
/*
  Write a bubble sort here
  Name the function bubbleSort

  If you want to suspend running the unit tests, change describe to xdescribe

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.

*/

function bubbleSort (nums) {
  snapshot(nums)

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > nums[i+1]) {
      for (let j = 0; j < nums.length; j++) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }

  return nums
}

// unit tests
// do not modify the below code
describe('bubble sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    done();
  });
});
```

---
### Exercise 2 Solution (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-2-solution/
- [Answer](http://codepen.io/btholt/pen/KdYPqa?editors=001)

- **OFFICIAL SOLUTION**
- TIME: O(n^2) solution in the worst case and O(n) in the best case
- SPACE: O(1)
- notice that the swapped variable is functioned scoped, not blocked scoped
- basically the do loops runs through 1 time first and sets swapped to true
- the while loop then kicks in to continue
- the swapped snippet is an ES6 array swap feature
```js
function bubbleSort (nums) {
  do {
    var swapped = false
    for (let i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i+1]) {
        [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
        swapped = true;
      }
    }
  } while (swapped)
  snapshot(nums);

  return nums
}
```

---
### Insertion Sort (9/14/19)
- https://frontendmasters.com/courses/computer-science/insertion-sort/

- Something that we will use and close to human conceptualization
- Great for arrays that are almost correctly sorted
- If the array is not sorted as all, it doesn't work as well

---
### Exercise 3: Insertion Sort (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-3-insertion-sort/
- [Exercise](http://codepen.io/btholt/pen/mVMMxj?editors=001)
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)

- **MY ATTEMPT: INCORRECT**
```js
/*
  Insertion sort!

  Be sure to call your function insertionSort.

  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.

  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!

  And you put xdescribe instead of describe if you want to suspend running the unit tests.
*/

function insertionSort (nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[j-1] > nums[j]) {
        [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
      }
    }
  }

  return nums
}

// unit tests
// do not modify the below code
describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    insertionSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    done();
  });
});
```

---
### Exercise 3 Solution (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-3-solution/
- [Solution](https://codepen.io/btholt/pen/meYQPd?editors=001)

- **OFFICIAL SOLUTION**
- TIME: O(n^2)
- SPACE: O(1)
```js
var insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      snapshot(nums);
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
};
```

---
### Merge Sort (9/14/19)
- https://frontendmasters.com/courses/computer-science/merge-sort/

- TIME: O(nlogn)
- SPACE: O(n)
- Recursion `O(logn)` to divide the list, and the linear portion `O(n)` to stitch the list together again, final time complexity is `O(n * logn)`
- merge sort is used more often than bubble and insert sort
- it's consistent and used 90% of time in search engines
- this is a divide and conquer technique that uses recursion
- it's a stable sort, meaning it returns orignal order in the array if the elements are equivalent

- it takes a big list and breaks it down by halves until it reaches 1 item where it is considered sorted
- then as we move back up, we stitch together these halves to sort them
- recommended that we split it to 2 functions: mergeSort() and merge()

---
### Exercise 4: Merge Sort (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-4-merge-sort/
- [Exercise](http://codepen.io/btholt/pen/PZKgQd?editors=001)

- **MY ATTEMPT: WORKING**
```js
/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  To read the approach, refer to the class materials at
  https://btholt.github.io/four-semesters-of-cs/

  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working

  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/
var nums = [10,5,3,8,2,6,4,7,9,1];

function stitch(left, right) {
  let newArr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      newArr.push(left.shift())
    } else {
      newArr.push(right.shift())
    }
  }

  while (left.length) {newArr.push(left.shift())}
  while (right.length) {newArr.push(right.shift())}

  return newArr.sort((a, b) => a-b)
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middle = Math.ceil(arr.length/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return stitch(mergeSort(left), mergeSort(right));
}


// unit tests
// do not modify the below code
describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});
```

---
### Exercise 4 Solution (9/14/19)
- https://frontendmasters.com/courses/computer-science/exercise-4-solution/
- [Answer](http://codepen.io/btholt/pen/rOEdKK?editors=001)

- **OFFICIAL SOLUTION**
- this solution is much simpler
- the `results.concat` in merge function helps to tie up leftover numbers that didn't get pushed in the results
- In my solution, I had to do a while length() logic to capture leftovers
```js
const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {

    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
};
```

---
### Median Values (9/14/19)
- https://frontendmasters.com/courses/computer-science/median-values/

- Find the median elements of two arrays
- We can do the stitch function to make it work here but also do it visually on the fly
- The results is going to be average of 5 and 7, which is 6

- TAKEAWAY: it's always going to be the mid of 4 and 5 index if the array length is 8 in this case, so we can ignore that rest of the array
- We count 1, 2, 3, 5, 7 and we notice we are at position 4 and 5, take the average, and then we are done
- Ignore the rest because this is already a sorted array

```js
let left = [1,5,8,9]
let right = [2,3,7,10]
let results = [1,2,3,5,7,8,9,10]
```

---
### Quick Sort (9/15/19)
- https://frontendmasters.com/courses/computer-science/quick-sort/

- BIG O: O(nlogn)
- another divide & conquer, recursive algorithm
- One of the most powerful sorting algorithm
- Not hard to conceptualize
- If computer is not doing merge sort, it's doing quick sort

- notice that the pivot does not get passed down to the right or left list
- the pivot gets concatenated when the sorted left and right list return

- in this example of quick sort, we are always picking the last thing as the pivot
- it doesn't matter if pivot is first or last of array
- having the last of the array makes the code simpler

- quick sort is often faster than merge sort
- it can be O(n^2) if you pass a sorted list and choose the last index as the pivot
- it's comparatively slow if you pass it a sorted list than an unsorted list

- PIVOT = 6
- takes everything smaller than the pivot to the left
- bigger to the right
```js
// Example 1
[5,7,4,9,6]
[5,4] 6 [7,9] // PIVOT: 6
[] 4 [5], 6, [7] 9 [] // PIVOT 4 and 9
[4,5], 6, [7,9]
[4,5,6,7,9]

// Example 2
[4,9,3,5]
[4,3] 5 [9]
[] 3 [4], 5, [9]
[3,4] 5 [9]
[3,4,5,9]
```

---
### Exercise 5: Quick Sort (9/16/19)
- https://frontendmasters.com/courses/computer-science/exercise-5-quick-sort/
- [Exercise](http://codepen.io/btholt/pen/pgWVQM?editors=001)

- **MY ATTEMPT: WORKING**
```js
/*

  Quicksort!

  Name your function quickSort.

  Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

  As always, you can change describe to xdescribe to prevent the unit tests from running while you're coding.

  No visualization is provided so feel free to use your own debugging methods (like console.log).

*/
function quickSort(nums) {
    let pivot = nums[nums.length - 1]
  let left = [];
  let right = [];

  if (nums.length < 2) return nums;

  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// unit tests
// do not modify the below code
describe('quickSort', function() {
  it('quicksort an array', () => {
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);

    expect(answer).toEqual([1,2,3,4,5,6,7,8,9,10]);

  });
});
```

---
### Exercise 5 Solution (9/16/19)
- https://frontendmasters.com/courses/computer-science/exercise-5-solution/
- [Answer](http://codepen.io/btholt/pen/bEoGxa?editors=001)

- you can also do `return quickSort(left).concat(pivot, quickSort(right))`
- or `[].concat(quickSort(left), pivot, quickSort(right))`

- **OFFICIAL SOLUTION**
```js
const quickSort = nums => {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length-1];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    }
    else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};


// unit tests
// do not modify the below code
describe('quickSort', function() {
  it('quicksort an array', () => {
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);

    expect(answer).toEqual([1,2,3,4,5,6,7,8,9,10]);

  });
});
```

---
## C) Data Structure Interfaces
---
### Interfaces Data Structure (9/20/19)
- https://frontendmasters.com/courses/computer-science/interfaces-data-structure/

- Interfaces are how the structure is where implementation is something we learn later

---
### Set Data Structure (9/20/19)
- https://frontendmasters.com/courses/computer-science/set-data-structure/

- a set is like an array but no set order or index
- it guarantees that there are no duplicates inside
- calling a set will not guarantee the order you store it or anything
- javascript has native Sets as of ES6

---
### Map Data Structure (9/20/19)
- https://frontendmasters.com/courses/computer-science/map-data-structure/
- [2ality Site](https://2ality.com/)

- maps are like dictionaries or javascript objects
- You can't have the same key and no concept of order
- however, the values can be duplications
- ES6 also has native Maps now

- Brian uses Maps, but not Sets as much
- There are also weakMap and weakSet, it's useful for people who are making libraries

---
### Stack Data Structure (9/20/19)
- https://frontendmasters.com/courses/computer-science/stack-data-structure/

- Last In, First Out (LIFO)
- push and pop terms from from stacks
- peek is just looking at the top but without modifying on the stack
- we are programming in a stack when we write functions and calling them
- most C based languages, which are most modern languages, operate off of this stack architecture

---
### Queue Data Structure (9/20/19)
- https://frontendmasters.com/courses/computer-science/queue-data-structure/

- First In, First Out (FIFO)
- it's similar to a line waiting for something
- enqueue adds to the array and dequeue taks if off the array
- there's also a peek method

- there's are priority queues like streaming videos packets are high priority than dropbox packets
- higher priority things go to front of line

---
## D) Implementing Data Structures
---
### Array List (9/21/2019)
- https://frontendmasters.com/courses/computer-science/array-list/

- talking about array list and linked list (terms borrowing from Java)
- we are implementing javascript because we already know this language
- javascript is not a garbage-collected language so you don't have to worry about allocation and deallocation
- realistically, doing it in a memory controlled language like C or Java is better

- **MEMORY ALLOCATION**
- In the index in memory, we store items in memory
- in an array list, the index is descriptive of where the item is stored
- you interact with it this way

- if you add/delete an item in the array, you have to collapse the list down with is HUGELY expensive operation
- lookups are fast on the other hand

---
### [Exercise 6: Array List](https://frontendmasters.com/courses/computer-science/exercise-6-array-list/) (9/21/2019)
- [Exercise](http://codepen.io/btholt/pen/adLxyv?editors=001)

- he wants us to collapse the array
- we will be using ES6 classes and have several methods
- underscore like `_collapseTo` means an internal method
- we need the collapse to method to shift the array if items are deleted in the center
- we are basically changing pointers, the deleted value will then be garbage collected

- **MY SOLUTION: WORKING**
```js
/*
  ArrayList

  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):

  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push = (value) => {
    this.data[this.length] = value
    this.length++
  }

  pop = () => {
    const popped = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return popped
  }

  get = (index) => {
    return this.data[index]
  }

  delete = (index) => {
    delete this.data[index]
    this.length--
    this._collapseTo(index);

    return this.data
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
      delete this.data[i+1]
    }
  }
}

const data = new ArrayList()
data.push("tim")
data.push("juan")
data.push("vu")
data.push("brian")
data.push("seth")
data.pop()
data.get(0)
console.log(this.data)
data.delete(2)
console.log(this.data)

// unit tests
// do not modify the below code
describe('ArrayList', function() {
  const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
  const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
  let list;

  beforeEach( () => {
    list = new ArrayList();
  })

  it('constructor', () => {
    expect(list).toEqual(jasmine.any(ArrayList));
  });

  it('push', () => {
    abcRange(26).map( character => list.push(character) );
    expect(list.length).toEqual(26);
  });

  it('pop', () => {
    abcRange(13).map( character => list.push(character) );
    expect(list.length).toEqual(13);
    range(10).map( () => list.pop() );
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });

  it('get', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).map( character => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length-1)).toEqual('y');
  });

  it('delete', () => {
    abcRange(26).map( character => list.push(character) );
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });

});
```

---
### [Exercise 6 Solution](https://frontendmasters.com/courses/computer-science/exercise-6-solution/) (9/21/2019)
- [Answer](http://codepen.io/btholt/pen/dGOaXX?editors=001)

- **OFFICIAL SOLUTION**
- reads are cheap, but add/delete are expensive
- linked list are the opposite
- TIME: O(N) for adds/deletes, O(1) for reads
```js
class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const ans = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return ans;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  serialize() {
    return this.data;
  }
}
```

- QUESTION: can you re-use delete function for pop function? Yes, just call this.delete in the pop function
- QUESTION: why do you have internal helpful function? It's easier to test, smaller & easier to understand, and reusable

---
### Linked List (9/21/2019)
- https://frontendmasters.com/courses/computer-science/linked-list/


- TIME: O(1) for adds/deletes, O(N) for reads
- terminology: head, next, tail

- A (next: B) -> B (next: C) -> C (next: D) -> D

- we use the head and tail to keep track of the ends that is useful for methods
- Get's are more expensive because you have to go through every node to go through the list to get to the node
- Delete's are cheaper because you just change the next to point somewhere else

- Push's are easy because you just point the tail at the next linked node
- Pop is not as simple as push because you have to find the second to last linked node to point to nothing
- some people keeps track of second to last tail node, although useful, it is a lot more management and becomes a headache down the road
- Brian's recommendation is not to have extra variables if you don't need to

---
### Exercise 7: Linked List (9/21/2019)
- https://frontendmasters.com/courses/computer-science/exercise-7-linked-list/
- [Exercise](http://codepen.io/btholt/pen/adLxEd?editors=001)

- recommended to do 2 classes: Node and LinkedList

- **MY SOLUTION**
- I removed all the extra methods in the official solutions
- This one makes more sense to me
```js
class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
     this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length-1)
  }

  getValue(value) {
    let current = this.head;
    let currentIndex = 0;
    while(current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
      currentIndex++;
    }
    return null;
  }

  getIndex(index) {
    let current = this.head;
    let currentIndex = 0;
    while(current) {
      if (currentIndex === index) {
        return current;
      }
      current = current.next;
      currentIndex++;
    }
    return null;
  }

  delete(index) {
    let results = '';
    if (index === 0) {
      if (this.head.next) {
        this.head = this.head.next
      } else {
        this.head = null;
        this.tail = null;
      }
      results = this.head
    }
    else if (index === this.length-1) {
      const prevNode = this.getIndex(index-1);
      this.tail = prevNode;
      prevNode.next = null;
      results = prevNode.next;
    }
    else {
      const prevNode = this.getIndex(index-1);
      const currentNode = this.getIndex(index)
      prevNode.next = currentNode.next
      results = currentNode.next;
    }
    this.length--;
    return results
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

---
### Exercise 7 Solution Part 1 (9/21/2019)
- https://frontendmasters.com/courses/computer-science/exercise-7-solution-part-1/
- [Answer](http://codepen.io/btholt/pen/eJBBEY?editors=001)

- **OFFICIAL SOLUTION 1**
```js
class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
     this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const node = this.head;
      this.head = this.tail = null;
      return node.value;
    }
    const penultimate = this._find(null, (value, nodeValue, i, current) => current.next === this.tail );
    const ans = penultimate.next.value;
    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
    return ans;
  }
  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) return null;
    return node.value;
  }
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      }
      else {
        this.head = null;
      }
      this.length--;
      return head.value;
    }

    const node = this._find(index-1, this._testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;
    if (node.next && !node.next.next) this.tail = node.next;
    this.length--;
    return excise.value;
  }
  _find(value, test=this._test) {
    let current = this.head;
    let i = 0;
    while(current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
  _test(search, nodeValue) {
    return search === nodeValue;
  }
  _testIndex(search, __, i) {
    return search === i;
  }
  serialize() {
    const ans = [];
    let current = this.head;
    if (!current) return ans;
    while (current) {
      ans.push(current.value);
      current = current.next;
    }
    return ans;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

- **OFFICIAL SOLUTION 2**
- this uses delete inside of it's pop method
```js
class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
     this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  pop() {
    return this.delete(this.length-1)
  }
  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) return null;
    return node.value;
  }
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      }
      else {
        this.head = null;
      }
      this.length--;
      return head.value;
    }

    const node = this._find(index-1, this._testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;
    if (node.next && !node.next.next) this.tail = node.next;
    this.length--;
    return excise.value;
  }
  _find(value, test=this._test) {
    let current = this.head;
    let i = 0;
    while(current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
  _test(search, nodeValue) {
    return search === nodeValue;
  }
  _testIndex(search, __, i) {
    return search === i;
  }
  serialize() {
    const ans = [];
    let current = this.head;
    if (!current) return ans;
    while (current) {
      ans.push(current.value);
      current = current.next;
    }
    return ans;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

---
### Exercise 7 Solution Part 2 (9/21/2019)
- https://frontendmasters.com/courses/computer-science/exercise-7-solution-part-2/
- [Answer](http://codepen.io/btholt/pen/eJBBEY?editors=001)

- See Part 1

---
### Binary Search Tree (9/21/2019)
- https://frontendmasters.com/courses/computer-science/binary-search-tree/

- TIME: O(logn), worst case is O(n)
- middle ground between linked lists and array list
- every node has either 0, 1, 2 children
- everything to the left of the top node, it is less than the node and vice versa
- these lookups are logrithmic
- adding things is also simple
- for duplicates, you have to decide always goes left or always goes right

- we won't use BSTs in production, we would use a self balancing BST

---
### Exercise 8: Binary Search Tree (9/21/2019)
- https://frontendmasters.com/courses/computer-science/exercise-8-binary-search-tree/
- [Exercise](https://codepen.io/timh1203/pen/aboPpLo?editors=001)

- Can do BST both with recursion or iteratively
- AVL trees have to be recursive
- Recursive approach works by breaking BST into smaller trees
- Iterative approach works by path finding its way down

- Loops generally faster than recursion

- you'll need a couple methods

- **SETUP**
```js
class Tree {
  construction() {
    this.root = null;
  }
  toObject() {
    return this.root
  }
  add(value) {

  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}
```

- **MY ATTEMPT: NONWORKING**
```js
class Tree {
  constructor() {
    this.root = null;
  }

  toObject() {
    return this.root
  }

  add(value) {
    if (!this.root) {
      return this.root = new Node(value)
    }

    let curr = this.root
    while(curr) {
      if (curr.value > value && !curr.left) {
        curr.left = node
      }
      else if (curr.value > value && curr.left) {
        curr = curr.left
      }
      else if (curr.value < value && !curr.right) {
        curr.right = node
      }
      else if (curr.value < value && curr.right) {
        curr = curr.right
      }
      curr = null
    }

    return node
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const newTree = new Tree()
newTree.add(8)
newTree.add(2)
newTree.add(9)
newTree.add(10)
```

---
### Exercise 8 Solution (9/21/2019)
- https://frontendmasters.com/courses/computer-science/exercise-8-solution/
- [Answer](https://codepen.io/timh1203/pen/xxKmgXx?editors=001)

- **OFFICIAL SOLUTION**
```js
class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    }
    else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          // go left

          if (current.left) {
            current = current.left;
          }
          else {
            current.left = new Node(value);
            break;
          }
        }
        else {
          // go right
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }
  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }
  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}
```

---
### AVL Tree (9/21/2019)
- https://frontendmasters.com/courses/computer-science/avl-tree/
- [Exercise](http://codepen.io/btholt/pen/qbVvJw?editors=001)

- AVL trees are specialized BSTs
- an AVL tree is always a BST, but not vice versa
- the point of an AVL tree is to stay as flat as possible
- AVL stands for last name of the authors

- the algorithm for adding value is the same way
- the difference is coming out of the recursion is checking imbalances
- "A tree is out of balance if its subtrees' difference of heights is greater than one."

- The advantage of AVL trees is that we never hit worst case, O(n). It will always be O(logn) or better

---
### Single Rotation (9/21/2019)
- https://frontendmasters.com/courses/computer-science/single-rotation/

- We went over a single rotation either Left or Right

- **RIGHT ROTATION**
-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's right child to its left child
   (in this case they're both null)
-> make node A's _original_ left child
   (which was null in this case) the left child of node B
-> update the heights of all the nodes involved

---
### Double Rotation (9/21/2019)
- https://frontendmasters.com/courses/computer-science/double-rotation/

- if you see a bent look, it needs to be a double rotation
- with an add, you would only ever need to do a single or double rotation
- with a delete, you would need to do things differently

---
### Exercise 9 Solution Part 1 (9/21/2019)
- https://frontendmasters.com/courses/computer-science/exercise-9-solution-part-1/
- [Answer](https://codepen.io/btholt/pen/rxLOOp?editors=001)

- **OFFICIAL SOLUTION**
```js
/*
  AVL Tree

  Name you class/function (anything we can call new on) Tree

  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.

  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.

  If you have any questions conceptually about balancing the tree, refer to the class website.

  There is a tree visualization engine that should run automatically. Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

  As always, you can rename describe to xdescribe to prevent the unit tests from running and the visualization
  from displaying

*/

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    else {
      this.root.add(value);
    }
  }
  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }
  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
    this.height = 1;
  }

  add(value) {
    if (value < this.value) {
      // go left

      if (this.left) {
        this.left.add(value);
      }
      else {
        this.left = new Node(value);
      }
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    }
    else {
      // go right

      if (this.right) {
        this.right.add(value);
      }
      else {
        this.right = new Node(value);
      }
      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }
  balance() {
    const rightHeight = (this.right) ? this.right.height : 0;
    const leftHeight = (this.left) ? this.left.height : 0;

    console.log( this.value, leftHeight, rightHeight );

    if ( leftHeight > rightHeight + 1 ) {
      const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
      const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;

      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }

      this.rotateLL();
    }
    else if ( rightHeight > leftHeight + 1 ) {
      const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
      const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }

      this.rotateRR();
    }
  }
  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    }
    else if (!this.right || (this.left && this.right.height < this.left.height)) {
        this.height = this.left.height + 1;
    }
    else { //if (!this.left || this.right.height > this.left.height)
        this.height = this.right.height + 1;
    }
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    ans.height = this.height;
    return ans;
  }
}
```

---
### Exercise 9 Solution Part 2 (9/21/2019)
- https://frontendmasters.com/courses/computer-science/exercise-9-solution-part-2/

---
### Hash Table (9/21/2019)
- https://frontendmasters.com/courses/computer-science/hash-table/

- a key-value store
- we use the key as the index
- we run the key in a hashing algorithm and spits out where to look it up in memory
- crucial to have a good hashing algorithm

- caches, databases, and objects are implementations
- have constant look up times
- no concept of order in hash tables

- need large amount of memory and big enough to collide

- *Indempotent* means a function does only 1 thing and has no side effects
- a good hasing algorithm needs to be performant, like MD5 and not like SHA-255

---
## E) Functional Programming 101
---
### Functional Programming Concepts (9/22/19)
- https://frontendmasters.com/courses/computer-science/functional-programming-concepts/

- Most stuff in previous chapters were useful for interviews and make performance trade-offs
- Functional programming makes you a better programmer

- Functional programming is a wide scope
- if you want to get into it, you need to get into something like Haskell, ML, Erlang

- **KEY CONCEPTS**
- Avoiding side effects - does 1 thing and 1 thing only, makes it easier to reason test
- higher order functions - passing functions into other functions, composability, pure functions are are an important part of this
- transforming lists of data - we are declaring instead of how

---
### Map Function  (9/22/19)
- https://frontendmasters.com/courses/computer-science/map-function/
- [Exercise](http://codepen.io/btholt/pen/QyQxVP?editors=0010)
- [Answer](http://codepen.io/btholt/pen/Ywevex?editors=0010)

- map method is like .forEach and a native method of the function of arrays
- map is different from forEach in the way that it creates a new array
- it applies a function to every item in an array
- you can also chain map methods together

---
### Reduce Function  (9/22/19)
- https://frontendmasters.com/courses/computer-science/reduce-function/
- [Exercise](http://codepen.io/btholt/pen/VeQVVq?editors=0010)
- [Answer](http://codepen.io/btholt/pen/GoQwBa?editors=0010)

- reduce function helps pull down a group of data into one item, creates a new array
- the second parameter in the reduce function is the seed value
- if there's no seed, it will not apply it to the first item IE Capitalize with reduce ['a','b','c'] -> aBC

- The accumulator is the interim value that is passed into each call of the reducer function that the function then returns.
- The value returned is then passed into the next call of the reducer function on the next value.
- The seed value is the value of the first accumulator.
- If there's no seed value, the zero index in the array is the seed.

---
### Filter Function  (9/22/19)
- https://frontendmasters.com/courses/computer-science/filter-function/
- [Exercise](http://codepen.io/btholt/pen/mVxezo?editors=0010)
- [Answer](http://codepen.io/btholt/pen/KVQLgr?editors=0010)

- Filter is like map but it will pull out the items that match the criteria, creates a new array

# JavaScript: From Fundamentals to Functional JS, v2 /w Bianca Gandolfo
- [Slides 1](https://slides.com/bgando/f2f-final-day-1#/)
- [Slides 2](https://slides.com/bgando/f2f-final-day-2#/)

## A) JavaScript: From Fundamentals to Functional JS
---
### [Course Introduction](https://frontendmasters.com/courses/js-fundamentals-functional-v2/course-introduction/) (9/26/19)

- Bianca is open source JS framework developer, consultant, trainer @Bitovi
- @BiancaGando

- This course is not about functional programming
- We are going to practice things like objects, array, closure, scopes
- We will use functional utility methods and learn how everything works under the hood

- Understand how to use functional utility methods
- Understand how to implement those methods
- Apply JS fundamentals
- Add related ES6 features

---
### [Success Tips for Learning](https://frontendmasters.com/courses/js-fundamentals-functional-v2/success-tips-for-learning/) (9/26/19)

- Difficulty ramps up considerabl, but if you stick with it you will reap the rewards
- Take responsibility for your learning
- Figure out how you measure your learning
- Consider the questions I ask you
- The Obstacle is the Way is a good book

---
### [Functional Programming](https://frontendmasters.com/courses/js-fundamentals-functional-v2/functional-programming/) (9/26/19)

- Functional Programming is a programming style that is currently popular
- FP about breaking up your code into verbs
- OOP is about the nouns

- Functional Reactive Programming is not the same thing, it's a style that comes with observable streams

- We'll learn Lodash, Underscore, or Rambda
- These are functional utility libraries

- FP tenets: make pure functions without side effects, making it easier to test and trust
- In the real world, FP with web is not always purely functional
- FP will sometimes sacrifice readability, but the basics of FP can help you prevent errors and improve readability of your code

- We will not talk about monads, functors
- Kyle Simpson's course is not a hard jump from this course

---
## B) Objects
---
### [Property Access](https://frontendmasters.com/courses/js-fundamentals-functional-v2/property-access/) (9/27/19)

- Person Object
- QUESTION: do we need the quotes? not on the key, but not on the value since it's a string
- standard to put quotes on both

- we see dots when we use objects methods, promise functions, array methods and prototype methods, array.length(), string methods
- basically, when we use any objects

```js
var person = {};

person.name = "Mrs.White";

var person = {
  "name": "Mrs. White"
}

// What does person.name return?
// this is a lookup, not an assignment
person.name // returns "Mrs. White"

// Storing a variable in who variable
// What does who return?
// What about after reassigning person.name?
var who = person.name;

who; // returns "Mrs. White"

person.name = "Mr. White"; // storing a value by reference to person object

who; // still returns "Mrs. White", since this is primitive and passed by value stored in the who variable

who.story; // returns undefined
```

- primitive values (string, number, boolean, null, etc.) gets passed by value
- non-primitive values (objects, arrays, functions) get passed by reference

- this is important because you would expect a value to be updated but it doesn't
- this is why we try to make copies of our data structures

---
### [Arrays](https://frontendmasters.com/courses/js-fundamentals-functional-v2/arrays/) (9/27/19)

- What about assigning properties on an array?
- Arrays are objects and the rules are the same
- If you check the `typeof`, you'll find that an array is classified as an object
```js
var person = [];
person.name = "Mrs. White";

var who = person.name;
who; // returns "Mrs. White"

typeof person === "array" // returns false, since it's technically an object
typeof person === "object" // true
```

---
### [Bracket Notation](https://frontendmasters.com/courses/js-fundamentals-functional-v2/bracket-notation/) (9/27/19)

- Brackets are generally used with arrays
- We use brackets when we can't use a dot
- Like when the value is not suppose to be a string literal

```js
var person = [];

person[0] = "I was not in the Billiards room";

person[plea] = "I would never!" // we don't have a plea entry in the object
```

- if we want to change the `wouldShe` to plea? we can use dot notation or bracket notation
- if we create something with a bracket, we can look it up with a dot
- Using dot notation coerces the name to a string
- We can't use `person.0` because that coerces the 0 into a string, the parser gets confused because 0 is a number
- It's just a non-valid way to do assignment
```js
var person = [];
var plea = "wouldShe"

person.name = "Mrs. White";

person[plea] = "I would never!"

person.plea // returns "I would never!"
```

---
### [Non-Valid Characters](https://frontendmasters.com/courses/js-fundamentals-functional-v2/non-valid-characters/) (9/27/19)

- Invalid characters are ', ^, &, *,

```js
x = {}
x[0] = true // this works

y = []
y["0"] = true
y["0"] // returns true

obj = {}
obj[function(){}] = false; // stringifies inside the brackets
typeof Object.keys(obj)[0] // "string"
Object.keys(obj)[0] // "function (){}"

obj[(function(){ return 3;})] // sets object key to 3 since IIFE returns 3 right away
obj; // { 3: false }
```

- QUESTION: Difference between array vs object? array is a special type of objects, has special .length property
- there's length 11 even though 9 empty spaces in between
- some browsers will hide properties and just find indices with arrays
```js
y
y.length // 1
y.hello = 'goodbye'
y.length // 1
y[10] = false
y // [true, empty x 9, false, hello: "goodbye"], length 11
```

---
### [Game Characters Challenge](https://frontendmasters.com/courses/js-fundamentals-functional-v2/game-characters-challenge/) (9/27/19)

- We are going to create a clue game
- Create an objct using bracket and dot notation that represents the characters and related data you may find in a game of clue

- Characters
- Weapons
- Rooms
- Confidential Card: murderer, room, and weapon

---
### [Game Characters Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/game-characters-solution/) (9/27/19)

- This was a creative exercise, no right way to do it

```js
var game = {}

game.murderer = "??";
game["weapon"] = [
  {type: 'lasers', location: 'lab'},
  {type: 'angry cats', ...},
  {type: 'dish soap', ...}
];
game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');

```

---
### [Object Review](https://frontendmasters.com/courses/js-fundamentals-functional-v2/object-review/) (9/27/19)

- Rules:
- dots save characters and typing less
- dots -> strings
- brackets -> strings, numbers, variables, weird characters, expressions

- Learning technique: write a study guide for yourself

- **STUDY GUIDE**
- What is the difference between dot and bracket notation?
- How do you add a property with a key that contains special characters?
- How do you add a property whose key and value are stored in different variables?
- How do we loop through objects to access the values?
- When can you only use dot notation and not bracket?
- When can you only use brackets and not dot?
- How do you add a property with a key that is stored in a variable?
- How do you access an object that is inside another object?
- How do you create an object that is nested inside another object?

---
### [ES6 Destructuring](https://frontendmasters.com/courses/js-fundamentals-functional-v2/es6-destructuring/) (9/27/19)

- Destructuring is a way of taking an item out of an array and makes it quicker to use
- This is verbose

- **ARRAYS**
- This is defined and assigned in order
- We are creating variables on the left
- If there's a location out of place, the value would be undefined
- Orders matters here, unlike objects
```js
const [a, b] = [true, false]

a; // true
b; // false
```

- We talked about `const` and `let`
- `const` doesn't let you reassign the variable name to something else
- You can still add/reassign the properties on a variable
- `let` allows you to reassign but block scope
- `var` is

- `Object.seal()` will prevent adding/removing properties
- `Object.freeze()` is Object.seal() but also will prevent changing values


- **OBJECTS**
- The names have to match in objects to destructure properly
- The order does not matter here, only the correct matching names matters
```js
let {first, second} = {first: 0, second: 1}
first; // 0
second; // 1
```

---
### [Destructuring Challenge](https://frontendmasters.com/courses/js-fundamentals-functional-v2/destructuring-challenge/) (9/28/19)

- **MY ATTEMPT**
```js
// 1. Create an object that looks like this:
// 2. Extract out the weapon and location using destructuring

const rusty = {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}

const { weapon, room } = rusty

console.log("weapon:", weapon)
console.log("room:", room)
```

---
### [Destructuring Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/destructuring-solution/) (9/28/19)

- We are essential declaring the variable name and the object at the same time
- This helps us save several lines of code
```js
const { name, weapon, room } = {
  "name": "Rusty",
  "room": "kitchen",
  "weapon": "candlestick"
}
name // "Rusty"
weapon // "candlestick"
room // "kitchen"
```

---
### [Destructuring Examples](https://frontendmasters.com/courses/js-fundamentals-functional-v2/destructuring-examples/) (9/28/19)

- We are going to learn about how to work through nested data structures, like coming back from json
- The challenge with destructuring is that there are many ways to do it

- Not recommended to use nested arrays, so use objects instead
```js
// Destructuring === Arrays
var [a, b] = [1, 2]
console.log(a, b); // => 1 2

// Omit certain values
var [a, , b] = [1, 2, 3]
console.log(a, b); // => 1 3

// Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b); // => 1 [2, 3]

// Swap variables easily without temp
var a = 1, b =2;
var temp = a
a = b
b = temp

// [b, a] = [a, b]
console.log(a, b);

// Advance deep arrays
var [a, [b, [c,d]]] = [1, [2, [[[3,4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);

a // 1
b // 2
c // [[3,4], 5]
d // 6

// === Objects
var {user: x} = {user: 5};
console.log(x); // => 5
```

---
## C) List Transformations
---
### [List Transformations](https://frontendmasters.com/courses/js-fundamentals-functional-v2/list-transformations/)

- We will take nested data structures and extracting information
- Most front-end developers have to work with api data that comes back
- We will work with data such as this:
```js
const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

game["suspects"] //[{name: "Rusty"}, {name: "Miss Scarlet"}]
```

---
### [Looping Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/looping-exercise/)

- We are setting up a for loop
- We need to set the length to be an array, since an object does not have a length
- Arrays have numerical values that you can loop over
- You could also use `game.["suspects"][i]`
- It's recommened not to use brackets when you can use dots since it's readable and saves you keystrokes

---
### [Looping Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/looping-solution/)

- We loop through the object-array
- Don't forget we have to target the suspects array
```js
function foo() {
  for (let i=0; i < game.suspects.length; i++) {
    console.log(game.suspects[i].name);
  }
}

foo()
```

---
### [Looping Exercise, Part 2](https://frontendmasters.com/courses/js-fundamentals-functional-v2/looping-exercise-part-2/)

- Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty.
```js
const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

for (let i of game.suspects) {
  console.log(game.suspects[i])
}
```


---
### [Looping Solution, Part 2](https://frontendmasters.com/courses/js-fundamentals-functional-v2/looping-solution-part-2/)

```js
var gameLoop = function() {
  for (let i = 0; i < game.suspects.length; i++) {
    for (var key in game.suspects[i]) {
      if (game.suspects[i][key] === "Rusty") {
        console.log("Found \'em!");
      } else {
        console.log("Next time!");
      }
    }
  }
}
```
---
### [Looping Exercise, Part 3](https://frontendmasters.com/courses/js-fundamentals-functional-v2/looping-exercise-part-3/)

- Destructure this nested data structure into two variables with the strings 'red' and 'orange'.

- **MY ATTEMPT**
```js
var suspects = [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]

const { color } = suspects[0]
const { color2 } = suspects[1]
```

---
### [Looping Solution, Part 3](https://frontendmasters.com/courses/js-fundamentals-functional-v2/looping-solution-part-3/)

```js
// Normal way
const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

// Destructure way 1
var [color, color2] = [suspects[0].color, suspects[1].color];

// Destructure way 2
var [{color: firstColor}, {color: secondColor}] = suspects;
```

---
## D) .forEach() Function
---
### [Using Functions](https://frontendmasters.com/courses/js-fundamentals-functional-v2/using-functions/) (10/2/19)

- We are now returning a function from a function
- We can also write `speak() {}` also since it's an ES6 feature
- We want to initialize each suspect with an object, Bianca calls this "Hydration"
- If we want to hydrate, we would have to run the function on the suspects in the array with a loop

```js
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak: function () {
      console.log("my name is ", name);
    }
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

// Loop 1
for (var i = 0; i < suspects.length; i++) {
  let suspect = CreateSuspectObjects(suspects[i])
  suspectsList.push(suspect);
}

// Loop 1 Refactored
for (var i = 0; i < suspects.length; i++) {
  suspectsList.push(createSuspectObjects(suspects[i]))
}
```


---
### [forEach Function](https://frontendmasters.com/courses/js-fundamentals-functional-v2/foreach-function/)  (10/2/19)

- `_.each` takes in a list (aka the iteratee) and a callback function (aka iterator function), which we will implement later
- The callback function will be called on each item on the list

- This is like a functional utility
- We want to do this because `_.each` is really concise and helps prevent errors

```js
_.each(suspects, function(name) {
suspectsList.push(CreateSuspectObjects(name));
});
```

- The `_.each` function is easy to write by providing 2 arguments rather than like the `.forEach` function
- The `.forEach` method is at least free by default

```js
// _.each()
_.each(
    ['observatory','ballroom', 'library'],
    function(value, index, list){ ... }
);

// .forEach()
['observatory','ballroom','library']
.forEach(function(value, index, list){...});
```

- The `_.` is the a library with all these methods to be used
- Underscore and lodash are a similar library
- We know it's an object because it uses a `.`

- This function will log every item in the rooms array

```js
var rooms = ['observatory','ballroom', 'library'];
var logger = function(val){
  console.log(val);
};

_.each(rooms, logger);
```

---
### [forEach and _.each Exercises](https://frontendmasters.com/courses/js-fundamentals-functional-v2/foreach-and-each-exercises/)  (10/3/19)

- `_.each` works for both arrays and objects
- Complete the rest of this function so that it works as described in the previous slides:

```js
const _ = {
  "each": function(list, callback) {
    for (let i = 0; i < list.length; i++) {
      console.log(callback(list[i]))
    }
  }
}
```

---
### [forEach and _.each Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/foreach-and-each-solution/)  (10/3/19)

- We implment _.each to work for both arrays and objects
- Notice we implement (name, index, list) in the callback function

```js
const _ = {};

_.each = function(list, callback) {
  if (Array.isArray(list)) { // if array, use numerical loop
    for (var i = 0; i < list.length; i++) { // loop through the list
      callback(list[i], i, list) // call the callback with a list item
    }
  }
  else { // if object, use for in loop
    for (var key in list) {
      callback(list[key], key, list)
    }
  }
}

_.each(['sally', 'georgie', 'porgie'], function(name, i , list) {
  if (list[i + 1]) {
    console.log(name, 'is younger than', list [i+1])
  }
  else {
    console.log(name, 'is the oldest')
  }
})
```

---
## E) .map() Function
---
### [_.map() vs .map() Functions](https://frontendmasters.com/courses/js-fundamentals-functional-v2/map-vs-map-functions/) (10/5/19)

- _.each does not return anything
- _.map() returns an array every time
- You can use it to copy but it's mostly use to modify an array

- This is actually returning an array of length 3 with values of undefined
```js
_.map([1,2,3], function(v,i,list){console.log(v)})
```

---
### [_.map() Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/map-exercise/) (10/5/19)

- Now we need to make an array of broken items

- **MY ATTEMPT: WORKING**
```js
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item){
  return `broken ${item}`;
};

const _ = {}
_.map = (arr, callback) => {
  let results = [];
  for (let i of arr) {
    results.push(callback(i));
  }
  return results
}

_.map(weapons, makeBroken) // ["broken candlestick", "broken lead pipe", "broken revolver"]
```

---
### [_.map() Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/map-solution/) (10/5/19)

- Visit underscore.js, type following in console
- TIP: You can access the library by going to the library's site and access the dev console
- You can access underscore.js and jQuery's library in this way

- **OFFICIAL SOLUTION**
```js
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item){
  return `broken ${item}`;
};

_.map(weapons, makeBroken) // ["broken candlestick", "broken lead pipe", "broken revolver"]
```

---
### [_map() vs. _each()](https://frontendmasters.com/courses/js-fundamentals-functional-v2/map-vs-each/) (10/5/19)

- map returns an array where each doesn't return anything

```js
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {log(`my name is ${this.name}`);}
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = _.map(suspects, function (name) {
  return CreateSuspectObjects(name);
});

_.each(suspects, function(suspect) {
  suspect.speak()
}
```

---
### [_.map() Exercise, Part 2](https://frontendmasters.com/courses/js-fundamentals-functional-v2/map-exercise-part-2/) (10/5/19)

- **MY ATTEMPT**
```js
const _ = {}
_.map = (arr, callback) => {
  let results = [];
  for (let i of arr) {
    results.push(callback(i));
  }
  return results
}
```

---
### [_.map() Solution, Part 2](https://frontendmasters.com/courses/js-fundamentals-functional-v2/map-solution-part-2/) (10/5/19)

- We are going to implement map
- .map() returns an array, iterates through a list
- You can do this with a loop (METHOD 1) or .each() (METHOD 2)

- **OFFICIAL SOLUTION**
```js
// METHOD 1
const _ = {}
_.map = (list, callback) => {
  let results = [];
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      results.push(callback(list[i], i, list));
    }
  }
  return results;
}

_.map([1,2,3], function(val) { return val + 1;}) // [2,3,4]

// METHOD 2
const _ = {}
_.map = (list, callback) => {
  let results = [];
  if (Array.isArray(list)) {
    _.each(list, function(v, i, list) {
      results.push(callback(v, i, list));
    }
  }
  return results;
}
```

---
## F) .filter() Function
---
### [.filter() Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/filter-exercise/) (10/5/19)

- We now have some data we want to filter
- .filter() will only filter values that return true from the callback

- **MY ATTEMPT: WORKING**
```js
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const _ = {}
_.filter = (arr, callback) => {
  const results = []
  for (let i in arr) {
    if (callback(arr[i], i, arr)) {
      results.push(arr[i])
    }
  }
  return results;
}

const checkPresent = (object, index, array) => {
  return object.present
}

_.filter(videoData, checkPresent)
```

---
### [.filter() Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/filter-solution/) (10/5/19)

- **OFFICIAL SOLUTION**
```js
const _ = {}

// With loop
_.filter = function(arr, cb) {
  // create a new array
  const storage = []
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if value from cb returns true
    if (cb(arr[i], i, arr) === true) {
    // if returns true, push item to array
      storage.push(arr[i])
    }
  }
  //return storage
  return storage
}

// With .each()
_.filter = function(arr, cb) {
  const storage = []
  _.each(arr, function(item, i, list) {
    if (cb(item, i, arr)) {
      storage.push(item)
    }
  })
  return storage
}
```

---
### [.filter() Application Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/filter-application-exercise/) (10/5/19)

- We now apply to our data to see who was present that night
- We adapt our code to check for present key-value

---
### [.filter() Application Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/filter-application-solution/) (10/5/19)

- **OFFICIAL SOLUTION**
- We also don't write with .map because it returns an array of the same length
- So using .map doesn't match with our aim since we want to return a shorter array with suspects
```js
// With loop
_.filter = function(arr, cb) {
  // create a new array
  const storage = []
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if value from cb returns true
    if (cb(arr[i], i, arr) === true) {
    // if returns true, push item to array
      storage.push(arr[i])
    }
  }
  //return storage
  return storage
}

// With .each()
_.filter = function(arr, cb) {
  const storage = []
  _.each(arr, function(item, i, list) {
    if (cb(item, i, arr)) {
      storage.push(item)
    }
  })
  return storage
}

_.filter(videoData, function(suspectObject) {
  return suspectObject.present;
})
```

---
## G) Function In-Depth
---
### [Anatomy of a Function](https://frontendmasters.com/courses/js-fundamentals-functional-v2/anatomy-of-a-function/) (10/6/19)

- Defining a function is static and has not been run
- Invocation/call-time is when we as
- Parameters are just variables, they don't hold a value until it is called
- Arguments are the actual values
- Parameters and Arguments are used interchangeably

```js
var add = function(a, b) {
  return a + b
};

add(3, 4, 5);
```

---
### [Function Scavenger Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/function-scavenger-exercise/) (10/6/19)

- Find: Definitions, Fn Names, Invocations, Arguments, Parameters, Fn Bodies, Return Values, Side Effects

```js
var nameImprover = function (name, adj) {
  return 'Col ' + name + ' Mc' + adj + ' pants';
};

$('body').hide();

myArr.forEach(function(val){ console.log(val);});

$('button').on('click', function(){
  console.log('Don\'t press my buttons!');
});
```

---
### [Function Scavenger Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/function-scavenger-solution/) (10/6/19)

- Definitions: nameImprover, function(val), function()
- Names: nameImprover, hide(), forEach(), on(), log(), $()
- Body: brackets after functions (3)
- Invocations: .log(), hide(), forEach(), on(), $()
- Parameters: name, adj, val
- Arguments: 'body', 'button', 'Don\'t press my buttons!', 'click', function(val){ console.log(val);}
- Return: return
- Side Effects: console.log(val), jQuery hide()

---
### [ES6 Arrow Functions](https://frontendmasters.com/courses/js-fundamentals-functional-v2/es6-arrow-functions/) (10/7/19)

- Arrow functions have syntax and some different behaviors
- It binds `this` to its parent context, it doesn't have its own value for `this`
- This replaces the need for `.bind()`
- Arrow functions also don't have `arguments`
- Arrow functions have automatic return function

```js
var nameImprover = (name, adj) => {
  return `Col ${name} Mc ${adj} pants`;
};

$('body').hide();

myArr.forEach(val => console.log(val));

$('button').on('click', () => {
  console.log('Don\'t press my buttons!');
});

```

---
### [Projecting Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/projecting-exercise/) (10/7/19)

- We are going to do "projecting"
- We take a value out of a data structure and turn it into another data structure

- [LINK](http://jsbin.com/duvafoc/edit)
- Filter and then map this data structure to get the names of the final suspects to send back to the team

- **MY ATTEMPT: WORKING**
```js
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const results = videoData.filter(obj => obj.present).map(person => person.name)

console.log(results);
```

---
### [Projecting Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/projecting-solution/) (10/7/19)

- **OFFICIAL SOLUTION**
- This is a common pattern we see for getting data you need and transforming to data that you need
```js
_.filter = function(arr, cb) {
  const storage = []
  _.each(arr, function(item, i, list) {
    if (cb(item, i, arr)) {
      storage.push(item)
    }
  })
  return storage
}

const suspects = _.filter(videoData, function(suspectObject) {
  return suspectObject.present;
})

const suspectsNames = _.map(suspects, suspect => {
  return suspect.name;
})
```

---
### [Spread Operator](https://frontendmasters.com/courses/js-fundamentals-functional-v2/spread-operator/) (10/7/19)

- A tuple a data structure is a collection of arrays that have 2 values
- No one will not be picked up since there is no "e" parameter
- We use the spread operator and this adds an additional inner array

```js
// Without Spread Operator
const createTuple = (a, b, c, d) => {
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
// => ??
// => [['It', 'could'], ['be', 'anyone']]

// With Spread Operator
const createTuple = (a, b, c, d) => {
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
// => ??
// => [['It', 'could'], ['be', ['anyone', 'no one']]
```

---
### [Arguments Keyword](https://frontendmasters.com/courses/js-fundamentals-functional-v2/arguments-keyword/) (10/7/19)

- `arguments` is a pseudoarray but does not have access to array methods
- We use arguments keyword to get all the arguments even though it wasn't referenced in the parameter
- So this would return all 5 strings

- *Arrow function returns nothing from arguments since it doesn't have arguments keyword*
- A normal function would have arguments
- Notice in the regular function, we are using the spread operator, so this will return all arguments, regardless of parameter specification
- In fact, `arguments` will return all arguments whether you spread it or not in the parameter
- The parameter part is mainly for being used in the function, it's separate from `arguments` keyword
```js
// ARROW FUNCTION
const createTuple = (a, b, c, d) => {
  console.log(arguments); // => arguments is not defined
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');

// REGULAR FUNCTION
const createTuple = function(a, b, c, ...d) {
  console.log(arguments); // => ['It', 'be', 'could', 'anyone', 'no one']
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
```

---
### [Default Parameters](https://frontendmasters.com/courses/js-fundamentals-functional-v2/default-parameters/) (10/7/19)

- Default values sets a default value if none is given
- Notice that `arguments` is only concerned with what is being passed in, NOT the parameters

```js
const add = function(a , b = 2) {
   console.log(arguments); //logs [3]
   return a + b;
};
add(3); //5??
```

---
### [ES5 Rewrite Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/es5-rewrite-exercise/) (10/7/19)

- **MY ATTEMPT: WORKING**
```js
const add = function(a , b = 2){
   console.log(arguments); //logs [3]
   return a + b;
};
add(3); //5??

// REWRITE
const add = function(a, b) {
  var b = b
  if (!b) { b = 2}
  console.log(arguments); //logs [3]
  return a + b
}

add(3); // 5
```

---
### [ES5 Rewrite Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/es5-rewrite-solution/) (10/7/19)

- **OFFICIAL SOLUTION**
- The most common way is to use the `||` operator
```js
const add = function(a, b) {
  b = b || 2
  console.log(arguments); //logs [3]
}
add(3); // 5
```

---
### [Array-Like Object](https://frontendmasters.com/courses/js-fundamentals-functional-v2/array-like-object/) (10/7/19)

- This takes all the arguments and puts in in `arr`
- Then it pushes billards string into `arr`
- Then joins all the strings with a ' '
- The Array.prototype.slice.call takes the arguments object into an array

```js
const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments); // ['was', 'it', 'in']
  arr.push('the billiards room?'); // ['was', 'it', 'in', 'the billiards room']
  return arr.join(' '); // ['was', 'it', 'in', 'the billiards room?']
};
constructArr('was', 'it', 'in'); // "was it in the billiards room?"
```

---
### [Array.from](https://frontendmasters.com/courses/js-fundamentals-functional-v2/array-from/) (10/9/19)

- Instead of using `Array.prototype.slice.call`, we can use `Array.from`
- We use this so we can access arrays methods like .push() and .join()
- `Array.from` also takes iterables and makes it into arrays
- In the past, you had to use `_.from()`

---
### [_.from() Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/from-exercise/) (10/9/19)

- COOL TIP: You can use debugger in the chrome console, then you can step through, you can also restart the stack, can hover over variables

- **MY ATTEMPT**
```js
const from = arr => {
  const results = Array.prototype.slice.call(arr);
  return arr
}

// Object that will be passed in
// {0: true, length: 1, push: x}
```

---
### [_.from() Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/from-solution/) (10/9/19)

- functions are also object so you can add properties to them

- **OFFICIAL SOLUTION**
```js
const from = arr => {
  return Array.prototype.slice.call(arr)
}
```

---
## H) Scope
---
### [Scope Walkthrough Setup](https://frontendmasters.com/courses/js-fundamentals-functional-v2/scope-walkthrough-setup/) (10/9/19)

- Scope is an area where variables have access to a value
- There is a global, local, nested, precedence, block scopes
- There are certain rules where variables have certain variables have access to variable scopes

- There's a test code which the instructor is running and we will walk through

---
### [Scope Walkthrough, Part 1](https://frontendmasters.com/courses/js-fundamentals-functional-v2/scope-walkthrough-part-1/) (10/11/19)

- Reviewed tests

```js
(function() {
  describe('Scope Exercises', function() {

    var ACTUAL;

    // This reset the value of ACTUAL (to null) before each test is run
    beforeEach(function () {
      ACTUAL = null;
    })

    it('a function has access to its own local scope variables', function () {
      var fn = function () {
        var name = 'inner';
        ACTUAL = name;
      }
      fn();
      expect(ACTUAL == 'inner').to.be.true
    })

    it('inputs to a function are treated as local scope variables', function () {
      var fn = function (name) {
        ACTUAL = name;
      }
      fn('inner')
      expect(ACTUAL === 'inner').to.be.true
    })

    it('block scope can be created with let',
    function () {
      var where = 'outer'
      {
        let where = 'inner'
      }
      ACTUAL = where
    })
    fn();
    expect(ACTUAL === 'outer').to.be.true;
    })

    it('a function has access to the variables contained within the same scope that function was created in',
    function () {
      var name = 'outer';
      var fn = function () {
        ACTUAL = name;
      };
      fn();
      expect(ACTUAL === 'outer').to.be.true
    })

    it('a function\'s local scope variables are not available anywhere outside that function',
    function () {
      var firstFn = function () {
        var localToFirstFn = 'inner';
      };
      firstFn();
      expect(function () {
        ACTUAL = localToFirstFn;
      }).to.throw();
      expect(ACTUAL === null).to.be.true
    })
})()
```

---
### [Scope Walkthrough, Part 2](https://frontendmasters.com/courses/js-fundamentals-functional-v2/scope-walkthrough-part-2/) (10/11/19)

- Reviewed tests

```js
// Continuation of part 1
it('a function\'s local scope variables are not available anywhere outside that function, regardless of the context it\'s called in',
function () {
  var firstFn = function () {
    var localToFirstFn = 'first';
    // Although false, it might seem reasonable to think that the second Fn (which mentions the localToFirstFn variable), should have access to the localToFirstFn variable, since it's being called here from within the scope where that variable is declared.
    secondFn();
  };
  var secondFn = funciton () {
    ACTUAL = localToFirstFn;
  }
  expect(function () {
    // of course, calling the secondFn should throw and error in this case, since secondFN does not have access to the localToFirstFn variable
    secondFn();
  }).to.throw();
  expect(function () {
    // in addition, calling the firstFn (which in turn calls the secondFn) should also throw, since it the calling context of secondFn has no influence over its scope access rules
    firstFn();
  }).to.throw();
  expect(ACTUAL === null).to.be.true;
}

it('if an inner and an outer variable share the same name, and the name is reerenced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope variables inaccessible from anywhere within the inner function block',
function () {
  var sameName = 'outer';
  var fn = function () {
    var sameName = 'inner';
    ACTUAL = sameName;
  };
  fn();
  expect(ACTUAL === 'inner').to.be.true;
)

it('If an inner and an outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used',
function () {
  var sameName = 'outer';
  var fn = function () {
    var sameName = 'inner';
  };
  fn();
  ACTUAL = sameName;
  expect(ACTUAL === '').to.be.true;
})

it('if an inner and an outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used',
function () {
  var sameName = 'outer';
  var fn = function () {
    var sameName = 'inner';
  };
  fn();
  ACTUAL = sameName;
  expect(ACTUAL === 'outer').to.be.true;
})

it('a new variable scope is created for every call to a function, as exemplified with a counter',
function () {
  var fn = function () {
    // the `||` symbol here is being used to set a default value for innerCounter. If innerCounter already contains a truthy value, then the value in that variable will be unchanged. If it is falsey however (such as if it were completely uninitialized), then this line will set it to the default value of 10.
    var innerCounter = innerCounter || 10;
    innerCounter = innerCounter + 1;
    ACTUAL = innerCounter
  }

  fn();
  expect(ACTUAL === 11).to.be.true;
  fn(); // when you call it again, it gets a brand new scope, so 11 again
  exepect(ACTUAL === 11).to.be.true;
})

it('a new variable scope is created for each call to a function, as exemplified with uninitialized string variables',
function () {
  // this is a longer form of the same observation as above, using strings instead of numbers;
  var fn = function () {
    var localVariable;
    if (localVariable === undefined) {
      // the variable wil lbe initialized for the first time during this call to fn
      ACTUAL = 'alpha';
    } else if (localVariable === 'initialized') {
      // the variable has already been initialized by a previous call to fn
      ACTUAL = 'omega';
    }
    // now that actual has been set, we wil linitialize localVariable to refer to a string
    localVariable = 'unintialized';
  };

  fn();
  expect(ACTUAL = 'alpha').to.be.true;
  fn(); // a new scope is initialized
  expect(ACTUAL = 'alpha').to.be.true;
})
```

---
### [Scope Walkthrough, Part 3](https://frontendmasters.com/courses/js-fundamentals-functional-v2/scope-walkthrough-part-3/) (10/12/19)

- Reviewed tests
- `var` does funny things with hoisting so it's recommended to add all variables at the top of the function
- The last test actual creates a tunnel into the function to refer to `innerIncrementingFn` but then exits right away

```js
it('an inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names',
function () {
  var outerName = 'outer';
  var fn = function () {
    var innerName = 'inner';
    ACTUAL = innerName + outerName;
  };
  fn();
  expect(ACTUAL === 'innerouter').to.be.true;
})

// TH: There's an interesting case if you add var since the same name was initialized already
it('between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying those variables has a lasting effect between calls to the inner function.',
function () {
  var outerCounter = 10;

  var fn = function () {
    outerCounter = outerCounter + 1; // if add var in front, it's undefined + 1 = NaN
    ACTUAL = outerCounter;
  };

  fn();
  expect(ACTUAL === 11).to.be.true;
  fn();
  expect(ACTUAL === 12).to.be.true;
})

it('the rule about retaining access to variables from an outer scope still applies, even after the outer function call (that created the outer scope) has returned',
function () {
  var outerFn = function () {
    // NOTE: the contents of this function is the same as the entire body of the previous test
    var counterInOuterScope = 10;

    var innerIncrementingFn = function () {
      counterInOuterScope = counterInOuterScope + 1;
      ACTUAL = counterInOuterScope;
    };

    innerIncrementingFn();
    expect(ACTUAL === 11).to.be.true;
    innerIncrementingFn();
    expect(ACTUAL === 12).to.be.true;
    // Here, we retain a reference to the newly created inner function for later, by assigning it to the global scope (window)
    window.retainedInnerFn = innerIncrementingFn;
  }

  // before we run outerFn, there will be no innerFn exported to the global scope
  expect(window.retainedInnerFn).to.equal.undefined;
  // running this outer funciton should have the same effect as running the whole previous test, with the addition of pacing the innerFn somewhere that we can reach it after outerFn has returned
  outerFn;
  expect(window.retainedInnerFn).to.be.a('function');
  // even though the outerFn has returned once the only call to it was completed a couple of lines above, the inner function remains available in the global scope, and still has access to the variables of that containing scope where it was first created.
  window.retainedInnerFn();
  expect(ACTUAL === 13).to.be.true;
})
```

---
### [Scope Takeaways](https://frontendmasters.com/courses/js-fundamentals-functional-v2/scope-takeaways/) (10/12/19)

- Let and const can be used to create block scope
- A new execution context is created every time the function is run

---
## I) Callbacks
---
### [Higher-Order Functions & Callbacks](https://frontendmasters.com/courses/js-fundamentals-functional-v2/higher-order-functions-callbacks/) (10/13/19)

- Higher order functions and callbacks enable us to do functional programming
- Functions and callbacks are like data because we can pass them around without invoking them

- **Takes a function as an input (argument)**
```js
element.addEventListener("change", () => {
  console.log("Our evidence is updated")
})
```

- **Returns a function as the output**
```js
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  }
}
```

- **Callbacks** are functions that we pass to functions
```js
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse; // You need to add () to invoke it to console.log
}

ifElse(true,
  () => { console.log(true) }
  () => { console.log(false) }
)

// REWRITE
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse;
}

const logTrue = () => { console.log(true);};
const logFalse = () => { console.log(false);};

ifElse(true, logTrue, logFalse);
```

---
### [Passing Arguments](https://frontendmasters.com/courses/js-fundamentals-functional-v2/passing-arguments/) (10/13/19)

- We pass a function as an argument
```js
var increment = function(n){ return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square); //25

doMathSoIDontHaveTo(4, increment); // 5
```

---
### [Translate into ES6 Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/translate-into-es6-exercise/) (10/13/19)

- Translate the previous lesson into ES6
- **MY ATTEMPT**
```js
const increment = (n) => n + 1
const square = (n) => n * n
const doMathSoIDontHaveTo = (n, func) => func(n)

doMathSoIDontHaveTo(5, square); //25

doMathSoIDontHaveTo(4, increment); // 5
```

---
### [Translate into ES6 Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/translate-into-es6-solution/) (10/13/19)

- **OFFICIAL SOLUTION**
```js
const increment = n => { return n + 1 }
const square = n => { return n * n }
const doMathSoIDontHaveTo = (n, func) => { return func(n) }
```

---
### [Passing Arguments, Part 2](https://frontendmasters.com/courses/js-fundamentals-functional-v2/passing-arguments-part-2/) (10/13/19)

- How do we pass arguments?
- With the rest operator, you can
- Before ES6, you had to call the arguments object and convert it to an array
- You would have to use `apply` in the past
-
```js
const ifElse = (condition, isTrue, isFalse, p) => {
  return condition ? isTrue(p) : isFalse(p)
}

ifElse(true, fn1, fn2, 'HI')

// With rest operator
const ifElse = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(...args) : isFalse(...args)
}

ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA')

// Pre-ES6
const ifElse = (condition, isTrue, isFalse) => {
  const args = [].slice.call(arguments,3)

  return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
};


const logTrue = (msgs) => { console.log(msgs); };
const logFalse = (msgs) => { console.log(msgs); };

ifElse(true, logTrue, logFalse, 'a', 'b');
```

---
### [_.reduce() Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/reduce-exercise/) (10/15/19)

- [Lodash reduce](https://lodash.com/docs/4.17.15#reduce)
- [Lodash forEachRight](https://lodash.com/docs/4.17.15#forEachRight)

- Challenging: implement _.reduce()
- Relaxed: implement _.forEachRight()

- **MY ATTEMPT: WORKING**
```js
// _.reduce()
const _ = {}
_.reduce = (arr, cb, acc = 0) => {
  for (let i of arr) {
    let results = cb(i, acc)
    acc = results
  }
  return acc
}
_.reduce([1,2,3], function(num, sum) {
  return num + sum
}, 3)

// _.forEachRight()
_.forEachRight = (arr, cb) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    cb(arr[i])
  }
}

_.forEachRight([1,2,3], function(item) {
  console.log(item)
})
```

---
### [_.reduce() Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/reduce-solution/) (10/15/19)

- **OFFICIAL SOLUTION**
- This solution is better than mines because I'm modifying the original argument
```js
//loop through list
  //call the cb with arr[i], prev/initial
  // save the return value
//return result
var reduce = function(list, cb, initial) {
  let memo = initial;
  for (var i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0]
    } else {
      memo = cb(list[i], memo);
    }
  }
  return memo;
}

reduce([1,2,3], (v, sum) => v + sum) // 6
reduce([2,3,5], (v, sum) => v + sum) // 6
```

---
### [Empty Room Exercise](https://frontendmasters.com/courses/js-fundamentals-functional-v2/empty-room-exercise/) (10/15/19)

- [Data](https://jsbin.com/pazixim/edit?js)
- We have some new data
- We need to figure out which room no one claims to be the night of the murder from this data set

- **MY ATTEMPT: WORKING**
```js
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

function filterOut(arr) {
  let results = new Set()
  for (let i of arr) {
    for (let j of i.rooms) {
      if (Object.values(j)[0] === false){
        results.add(Object.keys(j)[0])
      } else {
        results.delete(Object.keys(j)[0])
      }
    }
  }
  return Array.from(results)
}

filterOut(newDevelopment) // [ 'ballroom', 'library', 'conservatory', 'billiard room' ]
```

---
### [Empty Room Solution](https://frontendmasters.com/courses/js-fundamentals-functional-v2/empty-room-solution/) (10/15/19)

- **OFFICIAL SOLUTION**
```js
const notInRoom = (suspect, memo) => {
  const emptyRooms = reduce(suspect.rooms, (room, memo) => {
    if (room === false) memo.push(room)
    return memo
  }, [])

  return emptyRooms;
}

notInRooms = _.map(newDevelopment, notInRoom)

_.intersection(...notInRooms) // => ['kitchen', 'ballroom']
```

---
## J) Functional Utilities
---
### [Currying](https://frontendmasters.com/courses/js-fundamentals-functional-v2/currying/) (10/15/19)

- We are going to talk about currying and composition
- Currying is when you create a function that can be called at later times with multiple arguments
```js
_.curry(func, [arity=func.length])

var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]
```

---
### [Composing](https://frontendmasters.com/courses/js-fundamentals-functional-v2/composing/) (10/15/19)

- When you take 2 functions and combine them
```js
const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exclaim  = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exclaim);

blame('you');

=> 'I think it could be... YOU!'
```

---
## K) Advanced Scope: Closure
---
### [Closure](https://frontendmasters.com/courses/js-fundamentals-functional-v2/closure/) (10/15/19)

- This calls a function inside of another function
```js
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = () => {
    alert(x);
  };
  alerter();
};

myAlert()
```

---
### [Closure](https://frontendmasters.com/courses/js-fundamentals-functional-v2/closure-part-2/) (10/15/19)

- alerter will be called in 1000ms, so the console.log will get logged first
- alerter is not blocking
```js
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = () => {
    alert(x);
  };

  setTimeout(alerter, 1000)
  console.log('what happens first? this log or the alert?')
};

myAlert();
```

---
### [Creating Closure](https://frontendmasters.com/courses/js-fundamentals-functional-v2/creating-closure/) (10/15/19)

- funcAlert and funcAlert2 will become the alerter function basically
- the last funcAlert() will just reach into the myAlert function to run ONLY the alerter function
```js
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  let count = 0;
  const alerter = () => {
    alert(`${x} ${++count}`);
  };

  return alerter;
};

const funcAlert = myAlert(); // Creates the parent execution context
const funcAlert2 = myAlert(); // Creates another execution context, separate from funcAlert
funcAlert(); // 1
funcAlert(); // 2, if we run again, the alerter function still has the child execution context but won't recreate the parent execution context, there for this second time count will equal 2

funcAlert2(); // 1
funcAlert2(); // 2
```

---
### [Closure Demonstration](https://frontendmasters.com/courses/js-fundamentals-functional-v2/closure-demonstration/) (10/15/19)

- **1ST EXAMPLE**
```js
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 2);
  };

};

const didGreenDoItWithA = newClue('Green')

didGreenDoItWithA('candlestick') // false
didGreenDoItWithA('lead pipe') // false
```

- **2ND EXAMPLE**
- When we call count, it retains access to it's parent scope and increments n every time
```js
// ES5
function countClues() {
  var n = 0;
  return {
    count: function() { return ++n; },
    reset: function() { return n = 0; }
  };
};

counter = countClues()
counter.count() // 1
counter.count() // 2

//ES6 equivalent
const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => n = 0
  };
};

const c = countClues(), d = countClues();

c.count();
d.count();
c.reset();
c.count();
d.count();
```

---
### [Closure Recipe](https://frontendmasters.com/courses/js-fundamentals-functional-v2/closure-recipe/) (10/15/19)

- To recap, a closure happens when you have a child function inside of a parent function where the child function retains access to the scope variables even after the parent function has been executed
- Step 1: Create your parent function
- Step 2: Define some variable in the parent's local scope
- Step 3: Define a function inside the parent function
- Step 4: Return that function from inside the parent function
```js
// RECIPE
function checkscope() { // Step 1
  var innerVar = "local scope"; // Step 2

  function innerFunc() { // Step 3
    return innerVar;
  };

  return innerFunc // Step 4
}
```


- **EXECUTION**
- The execution needs to be stored in a variable so that we can call it again later
```js
var test = checkscope(); // Runs parent function
test; // Should be inner function
test(); // Runs the inner function
```

- **GOTCHA**
- I thought that the `who` variable didn't get hoisted
- But it works because we are executing the function later and by then, the `who` was already declared and initialized in the parent scope
- So it's important to know how things execute
```js
const findSomeone = () => {

  const speak = () => {
    console.log(who);
  };

  let who = 'Why hello there, Prof Plum!';

  return speak;
};

const someoneSpeak = findSomeone() // => 'Why hello there, Prof Plum!'
```

- **ANOTHER EXAMPLE WITH TIMER**
- You can use a closure to hide away functionality
- Users can't mess with methods or variables

```js
const makeTimer = () => {
  let elapsed = 0;

  const stopwatch = () => { return elapsed; };

  const increase = () => elapsed++;

  setInterval(increase, 1000);

  return stopwatch;

};

let timer = makeTimer();
timer()
timer()
```

- **SAME TIMER EXAMPLE WITH LOGS**
```js
const makeTimer = () => {
  console.log('initialized');
  let elapsed = 0;
  console.log(elapsed);

  const stopwatch = () => {
    console.log('stopwatch');
    return elapsed;
  };

  const increase = () => elapsed++;

  setInterval(increase, 1000);

  return stopwatch;

};

const timer = makeTimer();
```

---
### [Currying and Composing Exercises](https://frontendmasters.com/courses/js-fundamentals-functional-v2/currying-and-composing-exercises/) (10/15/19)

- **CURRYING EXERCISE: MY ATTEMPT**
- Implement curry() that only takes up to 2 arguments
- Don't quite understand it based on example given from lecture
```js
const _ = {}
_.curry = function(a, b) {
  return [a, b]
}

let curried = _.curry(a, b)

curried(1)(2)
```

- **COMPOSE EXERCISE**
- Create your own compose function
```js
const hello = () => {
  return `My name is...`
}

const person = (name) => {
  const uppercase = name.split("")[0].toUpperCase()
  return `${name.split("")[0].toUpperCase() + Array.from(name).splice(1).join("")}`
}

const compose = (str1) => {
  return hello() + person(str1)
}

compose("tim")
```

---
### [Currying and Composing Solutions](https://frontendmasters.com/courses/js-fundamentals-functional-v2/currying-and-composing-solutions/) (10/15/19)

- **CLASS SOLUTION: CURRY**
- `curry` takes in another function to be called at a later time
- We define an instance with `curried`
- When we call `curried` the first time with 4, it gets saved in the scope of the `curry` function
- By the time we run `curried` again with 7, it remembers the 4 since that was in the parent scope
```js
const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2)
    }
  }
}

const abc = function(a, b) {
  return [a, b]
}

let curried = curry(abc)

curried(4)(7) // => [4, 7]
```

- **CLASS SOLUTION: COMPOSE**
- compose basically takes together 2 functions and combines the results of those functions together
- `curry` takes in all the args and combines it at the end where `compose` makes intermittent changes as needed
```js
const compose = (fn1, fn2) => {
  return (arg) => {
    const result = fn2(arg)
    return fn1(result)
  }
}

const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exclaim  = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = compose(consider, exclaim);

blame('you'); // 'I think it could be... YOU!'
```

---
## L) Wrapping Up "JavaScript: From Fundamentals to Functional JS" (10/15/19)

- How do we apply these skills?
- Creating utility methods in your code makes your functional programming better

# Introduction to Data Structures for Interviews /w Bianca Gandolfo
- [Course Home](https://frontendmasters.com/courses/data-structures-interviews/)
---
## A) Introduction
---
### [Series Overview](https://frontendmasters.com/courses/data-structures-interviews/series-overview/) (10/21/19)

- [Slides](https://slides.com/bgando/intro-to-ds-1)

- Course is part 2 of a 4 part series
- Part 1 was practical algorithms
- Part 2 are data structures
- Part 3 is trees
- Part 4 is graphs

---
### [Interview Process](https://frontendmasters.com/courses/data-structures-interviews/interview-process/) (10/21/19)

- **WHAT TO EXPECT**
- Submit resume/application - resume, skimmer, manual reading, or submitted by recommendation
- Coding Challenge - HackerRank, create a demo app, add a feature to a demo app
- Recruiter Phone Screen - friednly, marketing company, questions about why are leaving, what you are working on, what you want next
- Technical Phone Screen - Code in a collabedit or google doc, pair program on adding a feature to a codebase, high-level questions about your domain and projects
- Onsite Interview - Similar to above execpt in person and 3-6 hours long

- New grad roles are more data structure centric
- Small startups aren't as concerned with DS and don't have resources to train you as a big company, sometimes a bit harder

- **HOW TO OVERACHIEVE IN THE PROCESS**
- Resume/Application - ask for a recommendation
- Coding Challenge - make your indendation, brackets, modular, and code is clean
- Recruiter Phone Screen - Read the engineering blog and relevant press about the company, Ask engaging questions, have highlights ready
- Technical Phone Screen - Have a conversational tone, communicate the entire way, be able to discuss previous projects in-depth
- Onsite Interview - Know your DS, your language of choice, and be their friend

---
### [Common Interview Mistakes](https://frontendmasters.com/courses/data-structures-interviews/common-interview-mistakes/) (10/21/19)

- Relavant experience is buried, grammar issues, no role fit
- Messy, unorganized code, didn't solve the challenge, missed details
- Communication-based: Offended recruiter, didn't seem interested in company
- Inability to describe pas project high-level implementation details, not communicative, frustrated
- Though-process was not clear, lack of CS fundamentals, communications

---
### [Interview Questions Q&A](https://frontendmasters.com/courses/data-structures-interviews/interview-questions-q-a/) (10/21/19)

- Why should we hire you? Unique strengths, able to break down complex projects to digestible pieces
- Talk about how your strength plays into that company's needs
- What do you think about the online resume? LinkedIn, Github, make your web presence consistent, old blogs
- Resources? Cracking the coding interview and Front End Masters
- Onsite interview and handling an unknown problems? It's more about knowing concepts and breaking it down than knowing the answer

- There's going to be questions about language specific questions like closures and prototypal inheritance
- Logic and Math questions, Language Specifics, Domain Questions, Recursion

---
### [Data Structures](https://frontendmasters.com/courses/data-structures-interviews/data-structure/) (10/21/19)

- One technique you can use is using common data structure patterns you already know
- Reversing a linked list
- Reason the problem based on the data structures that you know
- Understanding the time and space complexity helps you reason how to carry different operations

- **COMMON DATA STRUCTURES**
- Array and strings are for ordered data, words
- Hash Tables are for optimization
- Linke Lists for data insert/delete
- Stacks/Queues for creative auxilary DS
- Trees, Heaps for ierachical data
- Graphs for complex relationships
---
### [Course Overview](https://frontendmasters.com/courses/data-structures-interviews/course-overview/) (10/21/2019)

- We are covering background, implementation, analysis, and gain experience & intuition about these 4 data structures: stack/queue, linked list, hash tables, array/string

- **RULES**
- #1 Don't aim to memorize, this will not help!
- #2 Find themes, but don't jump to conclusions
- #3 practice with a timer, speed matters
- #3.5 actually practice, reading doesn't count
- #4 communicate and be nice

---
## B) Data Structures Overview
---
### [Types of Data Structures](https://frontendmasters.com/courses/data-structures-interviews/types-of-data-structures/) (10/22/19)

- Javascript doesn't have a lot of data structures out of the box pre-ES6
- We will learn about data structure time and space complexity, how to implement them
- We are covering stacks, queues, linked lists, hash tables, arrays, strings

- Linked lists can be stored anywhere in memory, it doesn't have to be contiguous
- A key feature of hash tables is that it uses a hashing function to create a random integer
- Arrays and strings can be thought of be the same, however strings are not mutable
---
### [Stacks & Queues](https://frontendmasters.com/courses/data-structures-interviews/stacks-queues/) (10/22/19)

- [Interactive Stack visualization](https://slides.com/bgando/intro-to-ds-1#/1)
- [Interactive Queue visualization](https://www.cs.usfca.edu/~galles/visualization/QueueArray.html)

- Both are ordered data structures which have different methods to store and retrieve items
- Both are fast operations and constant time for access
- However, for shifting it can be more even though Bianca says it can be optimized for modern browsers

- Stacks are last-in, first-out and uses push and pop
- You can implement a stack using an array
- An example of a stack is using the back button
```js
const stack = [1,2,3,4];

stack.push(5);
// [1,2,3,4,5]

stack.pop();
// -> 5
// [1,2,3,4]
```

- Queues are first-in, and first-out
```js
const queue = [1,2,3,4];

queue.enqueue(5);
// [1,2,3,4,5]

queue.dequeue();
// -> 1
// [2,3,4,5]
```

---
### [Linked List Introduction](https://frontendmasters.com/courses/data-structures-interviews/linked-list-introduction/) (10/22/19)

- Linked list organizes items sequentially, with each item storing a pointer to the next
- Javascript has dynamic arrays but linked lists is important in languages where memory has to be pre-allocated

- PRO: fast operations on the ends, flexible sizes, deletions are cheap
- CON: costly lookups

- Prototypal Inheritance means objects are shared so if you mutate something, it could have consequences affecting other components that use the same object

- Shallow and Deep Copy in JS talks about how deep to the children and copy them recursively

---
### [Linked List Demo](https://frontendmasters.com/courses/data-structures-interviews/linked-list-demo/) (10/22/19)

- [Linked List Visualization](https://visualgo.net/en/list?slide=1)

- Linked Lists are often the underlying data structure for a stack or queue
- A singly-linked list can only point forward and can't go backwards, unliked a doubly-linked list
```js
const linkedlist = {
  head: {
    value: 1
    next: {
      value: 2
      next: {
        value: 3
        next: null
      }
    }
  }
}
```

---
### [Linked List Use Cases](https://frontendmasters.com/courses/data-structures-interviews/link-list-use-cases/) (10/22/19)

- Most common use case is "Least Recently Used" cache
- Used in searches, popular videos

- We explicitly set null for next and previous values in a linked list instead of undefined

---
### [Draw Stacks, Queues & Linked Lists](https://frontendmasters.com/courses/data-structures-interviews/draw-stacks-queues-linked-lists/) (10/24/19)

- Draw the following data structures: Stack, Queue, Linked List

---
### [Stacks, Queuees & Linked Lists Drawings](https://frontendmasters.com/courses/data-structures-interviews/stacks-queues-linked-lists-drawings/) (10/24/19)

- Various pictures were tweeted to Bianca

---
### [Hash Tables](https://frontendmasters.com/courses/data-structures-interviews/hash-tables/) (10/24/19)

- A hash table organizes data for quick look up on values for a given key
- PROS: fast lookups, flexible keys
- CONS: slow worst-case lookups, unordered, single-directional lookups
- Previously, keys were strings but with ES6, you can use functions and objects as keys

- A hashing function takes a key and hashes it to a numerical value within a specified range, which might be a memory address under the hood
- For the same input, it always gives the same output
- So you can use the same key to find a value quickly in a hash table
- The range is usually specified during implementation of a hashing table
- If the hash table is half full, you double it and found to be most efficient strategy
- You then rehash the values to the new doubled hash table which doesn't require a new hashing function to redistribute
- There are many strategies for doubling the hash table depending on the use casebut half is generally the most optimal
- There's a higher chance of higher collision if there's more than half full

- Nobody is going to ask you implement a hashing function, but you just needs to reason about it

---
### [Hash Tables Use Cases, Arrays & Strings](https://frontendmasters.com/courses/data-structures-interviews/hash-tables-use-cases-arrays-strings/) (10/28/19)

- A set doesn't save a value, only the property name
- The key could be a string, object, function
- A map is a combination of a set and a object
- Under the hood, Maps and Sets are implemented as a hash table

- **ARRAY/STRING**
- organizes items sequentially in memory
- PROS: fast lookups, fast appends
- CONS: slow insert, slow deletes
- strings are not mutable, you are copying a string most of the time
- You can't set the values of a string
- It's better at converting a string into an array to take advantage of array methods

---
### [Draw Hash Tables, Array & Strings](https://frontendmasters.com/courses/data-structures-interviews/draw-hash-tables-array-strings/) (10/28/19)

- There are more drawings of data structures but not shown in this video

---
## C) Stack Data Structures
---
### [Overview & Stack Exercise](https://frontendmasters.com/courses/data-structures-interviews/overview-stack-exercise/) (11/9/19)

- Big O Cheatsheet tables

- **STACK EXERCISE**
- [Stack Prompt Replit](https://repl.it/@bgando/stack-prompt)
- [Stack Prompt Fork](https://repl.it/@timh1203/stack-prompt)

- The `_` represents an internal private property and is a common convention
- We need to implement the methods in this data structure
- We need to implement constant time operations for all 3 operations

- *MY IMPLEMENTATION*
```js
/** Class representing a Stack. */
class Stack {

  constructor() {
    this._storage = {};
		this._count = 0;
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
		this._storage[this._count] = value;
		this._count++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
		const popped = this._storage[this._count-1];
		delete this._storage[this._count-1];
		this._count--;
		return popped;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
		return this._storage[this._count-1];
  }
}

const myStack = new Stack();

myStack.push("tim")
myStack.push("juan")
myStack.push("brian")
myStack.pop();
myStack.peek();
console.log(myStack)
```

---
### [Exercise Prep Q&A](https://frontendmasters.com/courses/data-structures-interviews/exercise-prep-q-a/)

-

---
### [Stack: Push & Pop Methods](https://frontendmasters.com/courses/data-structures-interviews/stack-push-pop-methods/)

-

---
### [Stack: Edge Cases](https://frontendmasters.com/courses/data-structures-interviews/stack-edge-cases/)

-

---
### [Stack: Peek Method](https://frontendmasters.com/courses/data-structures-interviews/stack-peek-method/)

-

---
### [Stack: Q&A](https://frontendmasters.com/courses/data-structures-interviews/stack-q-a/)

-

---
## D) Queue Data Structures
---
## E) Linked List Data Structures
---
## F) Hash Table Data Structures
---
## G) Common Interview Questions
---
## H) Course Review
