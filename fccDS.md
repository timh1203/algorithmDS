# Data Structures and Algorithms in Javascript with Beau Carnes
- [Youtube 1:52:54](https://www.youtube.com/watch?v=t2CEgPsws3U)

## STACKS
- think of a stack of books or browser history back button

- **STACK: BASIC ARRAY**
- check for palindromes using array method
```js
let letters = [];
let word = "racecar";
let reversed = "";

// builds word in letters array stack
for (let i=0; i<word.length; i++) {
  letters.push(word[i]);
}

// pops letters off the letters array stack
for (let i=0; i<word.length; i++) {
  reversed += letters.pop();
}

// check if reversed matches
if (word === reversed) {
  console.log(`${word} IS a palindrome.`);
}
else {
  console.log(`${word} is a NOT a palindrome.`);
}
```

- **STACK: JS IMPLEMENTATION**
- you could just use an array as a stack normally
- this is just a way to show you how it works under the hood
- uses push, pop, peek, size
```js
let Stack = function() {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
		return this.storage;
  }

  this.pop = function() {
    if (this.count === 0) return undefined;

    this.count--;
    let popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;
  }

  this.peek = function() {
    return this.storage[this.count-1];
  }

  this.size = function() {
    return this.count;
  }
}

const newStack = new Stack();
console.log(newStack.push("a"));
console.log(newStack.push("b"));
console.log(newStack.peek());
console.log(newStack.size());
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.size());
```

## SETS