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

## C) Optimization with Caching

---

## D) Recursion

---

## E) Divide and Conquer

---

## F) Greedy Algorithms

---

## G) Dynamic Algorithms
