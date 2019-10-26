
# Coding Concepts
---
## Bubble Sort
---
## Insertion Sort
---
## Merge Sort
---
## Quick Sort
---
## Stack
---
## Queue
---
## Array List
---
## Linked List
---
## Binary Tree
---
## Functions
- 8/20/19 [Function Declarations VS Function Expressions in JavaScript](https://www.youtube.com/watch?v=gjLn95skIKE)by All Things JavaScript

---
## This keyword
- [WTF is THIS: Understanding the "this" keyword in JavaScript](https://www.youtube.com/watch?v=zE9iro4r918) by Tyler McGinnis

---
## Call/Apply/Bind

- 8/21/19 [javaScript call apply and bind](https://www.youtube.com/watch?v=c0mLRpw-9rI) by TechSith
- 8/21/19 [JavaScript Practical Applications of Call, Apply and Bind functions](https://www.youtube.com/watch?v=AYVYxezrMWA) by TechSith
- 8/21/19 [call, apply and bind method in JavaScript](https://www.youtube.com/watch?v=75W8UPQ5l7k) by Akshay Saini

---
## Currying (bind method, closure method)
- 10/16/19 [Currying in Javascript | JS Interview Questions](https://www.youtube.com/watch?v=vQcCNpuaJO8) by Akshaky Saini
- 10/16/19 [JavaScript Currying function ( method ) explained Tutorial](https://www.youtube.com/watch?v=oU3LzOO0OGA) by TechSith

---
## Composition
- 10/16/19 [JavaScript Composition vs Inheritance](https://www.youtube.com/watch?v=7HolHe7Gqbw) by Tyler McGinnis
- 10/16/19 [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA) by Fun Fun Function

---
## Closure
- 8/20/19 [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0) by Tyler McGinnis
- 10/16/19 [Javascript Closure tutorial ( Closures Explained )](https://www.youtube.com/watch?v=71AtaJpJHw0) by TechSith
- 10/16/19 [Closures in JavaScript | Inside a loop, inner function and setTimeoout](https://www.youtube.com/watch?v=-xqJo5VRP4A) by TechSith

---
## Maps, Weakmaps, Sets, Weaksets
- 10/16/19 [JavaScript Maps & WeakMaps](https://www.youtube.com/watch?v=sXV_31fwetY) by TechSith

---
## Callbacks, Promises, Async/Await
- 10/26/19 [dotJS 2017 - Wes Bos - Async + Await](https://www.youtube.com/watch?v=9YkUCxvaLEk)
- 10/24/19 [The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await](https://www.youtube.com/watch?v=gB-OmN1egV8) by Tyler McGinnis
- 10/22/19 [Javascript Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU) by Web Dev Simplified
- 10/25/19 [Async Await JavaScript ES7](https://www.youtube.com/watch?v=IGoAdn-e5II) by TechSith

- **BASIC PROMISE**
- The promise resolves after 2 seconds and console.log success
```js
function onSuccess () {
  console.log('Success!')
}

function onError () {
  console.log('💩')
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve() // or can call reject
  }, 2000)
})

promise
  .then(onSuccess)
  .catch(onError)
```

- **PROMISE CHAINS**
- The promise resolves after 2 seconds
- Even though the log functions are console.logs, they are also automatically returned as promises because they are part of the promise chain
- `throw new Error()` helps set off the .catch in the promise chain
```js
function getPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000)
  })
}

function logA () {
  console.log('A')
}
function logB () {
  console.log('B')
}

function logCandThrow () {
  console.log('C')

  throw new Error()
}

function catchError () {
  console.error('Error')
}

getPromise()
  .then(logA)
  .then(logB)
  .then(logCandThrow)
  .catch(catchError)
```

- **ASYNC/AWAIT**
```js
function double(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}

function triple(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 3)
    }, 2000)
  })
}

async function add(num1, num2) {
  const doubled = await double(num1) // Takes 1 second
  const tripled = await triple(num2) // Takes 2 seconds

  return doubled + tripled // Returns after total of 3 seconds
}

add(2, 3)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

- **PROMISE ALL**
```js
function double(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}

function triple(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 3)
    }, 1000)
  })
}

async function add(num1, num2) {
  const doubledPromise = await double(num1)
  const tripledPromise = await triple(num2)
  const [doubled, tripled] = await Promise.all([doubledPromise, tripledPromise])

  return doubled + tripled
}

add(2, 3).then(res => console.log(res))
```

- **ERROR HANDLING**
1) Try/Catch
```js
async function displayData() {
  try {
    const wes = await axios.get()
    console.log(wes)
  }
  catch (err) {
    console.error(err)
  }
}
```

2) HOC function
- Can write it standard JS or ES6 Arrow function
```js
async function displayData() {
    const wes = await axios.get()
    console.log(wes)
}

// Standard JS
function handleError(fn) {
  return (...params) => {
    return fn(...params).catch(err => console.error(`Oops:`, err))
  }
}

handleError(displayData)

// With ES6 Arrow function
const handleError = fn => (...params) => fn(...params).catch(err => console.error(`Oops:`, err))
```

3) Catch upon Calling
```js

add(2, 3)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

4) Throwing error to next function in Express
5) Listen for unhandledRejection event

---
## Memoization
---
## Hooks
---
## Monads
---
## Observables
---
