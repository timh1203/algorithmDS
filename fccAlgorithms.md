# Free Code Camp
- https://www.freecodecamp.org/

# 2) Javascript Algorithms And Data Structures Certification (300 hours)

## A) Basic Javascript

---

## B) ES6

---

## C) Regular Expressions

---

## D) Debugging

---

## E) Basic Data Structures

---

## F) Basic Algorithm Scripting

---

### Convert Celsius to Fahrenheit
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit
```js
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
// Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.
function convertToF(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);
```

---

### Reverse a String
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
```js
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```

---

### Factorialize a Number
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number/
```js
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function factorialize(num) {
  if (n === 0) return 1;
  return num * factorialize(num - 1);
}

factorialize(5);
```

---

### Find the Longest Word in a String
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
```js
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWordLength(str) {
  let longestLength = 0;
  str.split(' ').forEach(word => {
    if (word.length > longestLength) longestLength = word.length;
  })
  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

---

### Return Largest Numbers in Arrays
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
```js
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

---

### Confirm the Ending
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
```js
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
function confirmEnding(str, target) {
  if ((str.substring(str.length - target.length)) === target) return true;
  return false;
}

confirmEnding("Bastian", "n");
```

---

### Repeat a String Repeat a String
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
```js
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  let newStr = "";

  while (num > 0) {
    newStr += str;
    num--;
  }

  return newStr;
}

repeatStringNumTimes("abc", 3);
```

---

### Truncate a String
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
```js
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

---

### Finders Keepers
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
```js
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
function findElement(arr, func) {
  return arr.find(ele => func(ele));
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

---

### Boo who
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
```js
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
function booWho(bool) {
  return (typeof bool === "boolean") ? true : false;
}

booWho(null);
```

---

### Title Case a Sentence
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
```js
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');
}

titleCase("I'm a LITTLE tea pot");
```

---

### Slice and Splice
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
```js
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

---

### Falsy Bouncer
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
```js
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
  return arr.filter(item => !!item == true);
}

bouncer([7, "ate", "", false, 9]);
```

---

### Where do I Belong
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
```js
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  const sorted = arr.sort((a, b) => a - b);
  const found = sorted.findIndex(item => item >= num)
  if (arr.length === 0 || num === sorted[0]) return 0
  else if (found > 0) return found
  else return sorted.length;
}

getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([2, 5, 10], 15); // 3
getIndexToIns([], 35); // 0
getIndexToIns([3, 10, 5], 3); // 0
```

---

### Mutations
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
```js
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
function mutation(arr) {
  const root = arr[0].toLowerCase();
  const check = arr[1].toLowerCase();
  for (let letter of check) {
    if (!root.includes(letter)) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
mutation(["Alien", "line"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
```

---

### Chunky Monkey
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
```js
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
```

---

## G) Object Oriented Programming

---

### Create a Basic JavaScript Object (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-basic-javascript-object
```js
let dog = {
  name: "Brian",
  numLegs: 4
};
```

---

### Use Dot Notation to Access the Properties of an Object (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object
```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name);
console.log(dog.numLegs);
```

---

### Create a Method on an Object (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object
```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return "This dog has " + dog.numLegs + " legs."}
};

dog.sayLegs();
```

---

### Make Code More Reusable with the this Keyword (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/make-code-more-reusable-with-the-this-keyword
- we use `this` keyword instead because the variable name can change
```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
```

---

### Define a Constructor Function (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function
- Constructors follow conventions:
1) Names are capitalize
2) Use `this` to set properties and refer to the new object that was created
3) Defines properties and behaviors instead of returning a value like other functions
```js
function Dog() {
  this.name = "Brian";
  this.color = "White";
  this.numLegs = 4;
}
```

---

### Use a Constructor to Create Objects (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects
```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
const hound = new Dog();
```

---

### Extend Constructors to Receive Arguments (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments
```js
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog("York", "Gray");
```

---

### Verify an Object's Constructor with instanceof (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof
```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
const myHouse = new House(4)
myHouse instanceof House;
```

---

### Understand Own Properties (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties
```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}
```

---

### Use Prototype Properties to Reduce Duplicate Code (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");
```

---

### Iterate Over All Properties (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
  else {
    prototypeProps.push(prop);
  }
}
```

---

### Understand the Constructor Property (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property
- better to use `instanceOf` than `constructor` (this can be overwritten)
```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  }
  else {
    return false;
  }
}
```

---

### Change the Prototype to a New Object (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object
```js
function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function() {
    console.log("eating");
  },
  describe: function() {
    console.log("describing");
  }
};
```

---

### Remember to Set the Constructor Property when Changing the Prototype (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/remember-to-set-the-constructor-property-when-changing-the-prototype
- you have to redefine the constructor since setting the prototype erases the constructor property
```js
function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog, // You need to add constructor back in
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

---

### Understand Where an Object’s Prototype Comes From (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from
```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);

```

---

### Understand the Prototype Chain (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain
- `supertype` and `subtype` are classifications
```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
```

---

### Use Inheritance So You Don't Repeat Yourself (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself
```js
function Cat(name) {
  this.name = name; 
}

function Bear(name) {
  this.name = name; 
}

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom")
  },
};
```

---

### Inherit Behaviors from a Supertype (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype
- using `new` is once way to create an instance but there are some disadvantages when using this syntax for inheritance
- instead, use `Object.create(obj)` to create a new object, and sets obj as the new object's prototype.
```js
function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 
```

---

### Set the Child's Prototype to an Instance of the Parent (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent
```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
```

---

### Reset an Inherited Constructor Property (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property
- When an object inherits its `prototype` from another object, it also inherits the `supertype`'s constructor property.
```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
```

---

### Add Methods After Inheritance (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance
```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
}
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
```

---

### Override Inherited Methods (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/override-inherited-methods
- JS searches along the prototype chain for a method starting with the child
- even if there is the same method higher up on the chain, JS will stop once it finds the first
```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird."
}
// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

---

### Use a Mixin to Add Common Behavior Between Unrelated Objects (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects
```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
const glideMixin = function(obj) {
    obj.glide = function() {
        console.log("gliding!")
    }
}

glideMixin(bird);
glideMixin(boat);
```

---

### Use Closure to Protect Properties Within an Object from Being Modified Externally (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally
```js
function Bird() {
  const weight = 15;
  
  this.getWeight = function() {
    return weight;
  }
}
```

---

### Understand the Immediately Invoked Function Expression (IIFE) (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife
```js
(function () {
    console.log("A cozy nest is ready");
})();
```

---

### Use an IIFE to Create a Module (4/16/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module
```js
const funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    },
  }
})()
```

---

## H) Functional Programing

---

### Learn About Functional Programming (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming
```js
/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); // :(

// Add your code above this line

console.log(tea4TeamFCC);
```

---

### Understand Functional Programming Terminology (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/understand-functional-programming-terminology
```js
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

---

### Understand the Hazards of Using Imperative Code (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/understand-the-hazards-of-using-imperative-code
```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());

alert(finalTabs.tabs);
```

---

### Avoid Mutations and Side Effects Using Functional Programming (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/avoid-mutations-and-side-effects-using-functional-programming
```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  
  let copiedVal = fixedValue
  return copiedVal += 1

  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
```

---

### Pass Arguments to Avoid External Dependence in a Function (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/pass-arguments-to-avoid-external-dependence-in-a-function
```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (val) {
  return val += 1
  
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```

---

### Refactor Global Variables Out of Functions (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions
```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (list, bookName) {
	const newList = [...list]
  newList.push(bookName);
	return newList
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (list, bookName) {
	const newList = [...list]
  if (bookList.indexOf(bookName) >= 0) {
    newList.splice(bookList.indexOf(bookName), 1);
    return newList
    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);
// console.log(newBookList);
// console.log(newerBookList);
// console.log(newestBookList);

// ALTERNATIVE
function add (list,bookName) {
  return [...list, bookName];
}

function remove (list,bookName) {
  if (list.indexOf(bookName) >= 0) {
    return list.filter((item) => item !== bookName);
    }
}
```

---

### Use the map Method to Extract Data from an Array (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array
```js
// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line

var rating = [];

watchList.map(each => {
	rating.push({
		title: each["Title"],
		rating: each["imdbRating"]
	})	
})

// Add your code above this line

console.log(rating); 
```

---

### Implement map on a Prototype (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype
```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(item => newArray.push(callback(item)))
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

---

### Use the filter Method to Extract Data from an Array (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array
```js
// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line

var filteredList = watchList
  .map(item => {
		return {
			"title": item["Title"],
			"rating": item["imdbRating"],
		}
	})
  .filter(item => parseFloat(item.rating) >= 8.0);

// Add your code above this line

console.log(filteredList); 
```

---

### Implement the filter Method on a Prototype (4/15/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype
```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(item => callback(item) ? newArray.push(item) : '')
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

---

### Return Part of an Array Using the slice Method (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method
```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line

  return anim.slice(beginSlice, endSlice)

  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

---

### Remove Elements from an Array Using slice Instead of splice (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice
```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  
  return cities.slice(0,3);
  
  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

---

### Combine Two Arrays Using the concat Method (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-method
```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line
  
  return original.concat(attach)
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

---

### Add Elements to the End of an Array Using concat Instead of push (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/add-elements-to-the-end-of-an-array-using-concat-instead-of-push
```js
function nonMutatingPush(original, newItem) {
  // Add your code below this line

  return original.concat(newItem);
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

---

### Use the reduce Method to Analyze Data (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data
```js
// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line
let averageRating = evalMovie(watchList)

function evalMovie(watchList) {
	let movies = []
	let total =	watchList
		.filter(movie => movie.Director === "Christopher Nolan")
		.reduce((acc, curr) => {
			movies.push(curr)
			acc += Number(curr.imdbRating)
			return acc
		}, 0)
	
	return total / movies.length
}

// Add your code above this line

console.log(averageRating); 


// ALTERNATE
// Add your code below this line

var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;

// Add your code above this line

console.log(averageRating); 
```

---

### Sort an Array Alphabetically using the sort Method (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method
```js
function alphabeticalOrder(arr) {
  // Add your code below this line
  
  return arr.sort()
  
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

---

### Return a Sorted Array Without Changing the Original Array (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array
```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  
  return [].concat(arr).sort()

  // Add your code above this line
}
nonMutatingSort(globalArray);
```

---

### Split a String into an Array Using the split Method (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method
```js
function splitify(str) {
  // Add your code below this line
  return str.split(/\W/)
  
  // Add your code above this line
}
splitify("Hello World,I-am code");
```

---

### Combine an Array into a String Using the join Method (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method
```js
function sentensify(str) {
  // Add your code below this line
  
  return str.split(/\W/).join(' ')
  
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
```

---

### Apply Functional Programming to Convert Strings to URL Slugs (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs
```js
// Add your code below this line
function urlSlug(title) {
	return title.trim().split(/\s+/).join('-').toLowerCase()
}
// Add your code above this line
var winterComing = urlSlug("Winter Is Coming"); // Should be "winter-is-coming"

// ALTERNATE 1
function urlSlug(title) {
  return title.split(/\W/).filter(obj=> obj !== '').join('-').toLowerCase();
}
var winterComing = urlSlug("Winter Is Coming"); // Should be "winter-is-coming"

// ALTERNATE 2
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}
var winterComing = urlSlug("Winter Is Coming"); // Should be "winter-is-coming"
```

---

### Use the every Method to Check that Every Element in an Array Meets a Criteria (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
```js
function checkPositive(arr) {
  // Add your code below this line
  
  return arr.every(item => item > 0)
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

---

### Use the some Method to Check that Any Elements in an Array Meet a Criteria (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
```js
function checkPositive(arr) {
  // Add your code below this line
  
  return arr.some(item => item > 0)
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

---

### Introduction to Currying and Partial Application (4/13/19)
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application
```js
function add(x) {
  // Add your code below this line
  
  return function addY(y) {
    return function addZ(z) {
      return x+y+z
    }
  }
  
  // Add your code above this line
}
add(10)(20)(30);
```

--- 

## I) Intermediate Algorithm Scripting

---

### Diff Two Arrays
- https://www.freecodecamp.org/challenges/diff-two-arrays
```js
// Method 1
var arr1 = [1, 2, 3, 5];
var arr2 = [1, 2, 3, 4, 5];
var array = arr1.concat(arr2).sort(); // [1,1,2,2,3,3,4,5,5]
var newArr = [];

for (var i = 0; i < array.length; i++) {
  if ((array[i] !== array[i - 1]) && (array[i] !== array[i + 1])) {
    newArr.push(array[i]);
  }
}

// Method 2
var arr1 = [1, 2, 3, 5];
var arr2 = [1, 2, 3, 4, 5];
var array = [];

function difference(arr1, arr2) {
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      array.push(arr2[i]);
    }
  }
}
```

---

### Roman Numeral Converter
- https://www.freecodecamp.org/challenges/roman-numeral-converter
```js
// Attempt 1
1984
["1", "9", "8", "4"]

314
["3", "1", "4"]

14
["1", "4"]

4
["4"]

var roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "L", "C", "D", "M"]
var regular = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "50", "100", "500", "1000"]

function convertToRoman(num) {
  var thousand = [];
  var hundred = [];
  var ten = [];
  var one = [];
  var arr = num.toString().split("");
  var newArr = [];

  if (arr.length === 1) {
    one.push(arr[arr.length - 1]);
  }

  if (arr.length === 2) {
    one.push(arr[arr.length - 1]);
    ten.push(arr[arr.length - 2]);
  }

  if (arr.length === 3) {
    one.push(arr[arr.length - 1]);
    ten.push(arr[arr.length - 2]);
    hundred.push(arr[arr.length - 3]);
  }

  if (arr.length === 4) {
    one.push(arr[arr.length - 1]);
    ten.push(arr[arr.length - 2]);
    hundred.push(arr[arr.length - 3]);
    thousand.push(arr[arr.length - 4]);
  }

  for (var i = 1; i > arr.length; i--) {
    switch (arr[3]) {
      case "1":
        newArr.push("I");
        break;
      case "2":
        newArr.push("II");
        break;
      case "3":
        newArr.push("III");
        break;
      case "4":
        newArr.push("IV");
        break;
      case "5":
        newArr.push("V");
        break;
      case "6":
        newArr.push("VI");
        break;
      case "7":
        newArr.push("VII");
        break;
      case "8":
        newArr.push("VIII");
        break;
      case "9":
        newArr.push("IX");
        break;
    }
  }

}

// Attempt 2
function convertToRoman(num) {
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var regular = ["1000", "900", "500", "400", "100", "90", "50", "40", "10", "9", "5", "4", "1"];
  var romanStr = "";

  for (var i = 0; i < regular.length; i++) {
    while (num >= regular[i]) {
      romanStr += roman[i];
      num -= regular[i];
    }
  }
  return romanStr;
}
```

---

### Wherefore art thou (12/23/2017)
- https://www.freecodecamp.org/challenges/wherefore-art-thou
```js
// My unsuccessful tries
var collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
var source = { last: "Capulet" }

var newSource = Object.keys(source); // last
var newCollection =
  Object.keys(collection)
    .map(key => Object.keys(key));

for (var property in collection) {
  if (collection.hasOwnProperty(property)) {
    console.log(property, collection[property]);
  }
}

// My sucessful tries
function whatIsInAName(collection, source) {
  const newSource = Object.keys(source);

  return collection.filter(function (obj) {
    for (var key of newSource) {
      if (obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  })
}

// Question
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
  whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
    whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
      whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].

// Solution
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// We filter through the array using .filter().
// Using a for loop we loop through each item in the object.
// We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
// We return false if the above if statement is correct. Otherwise, we return true;
```

---

### Search and Replace (12/24/2017)
- https://www.freecodecamp.org/challenges/search-and-replace
```js
// My sucessful tries
function myReplace(str, before, after) {
  let newStr, newAfter;

  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    newAfter = after.charAt(0).toUpperCase();
    newAfter += after.slice(1);
    newStr = str.replace(before, newAfter);
  } else {
    newStr = str.replace(before, after);
  }
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
```

---

### Pig Latin (12/26/2017)
- https://www.freecodecamp.org/challenges/pig-latin
```js
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let firstVowel = str.search(/[aeiou]/gi);
  let former = str.substr(-str.length, firstVowel);
  let latter = str.substr(firstVowel);

  for (var i = 0; i < str.length; i++) {
    if (str[0] === vowels[i]) {
      console.log(vowels[i]);
      return `${str}way`;
    }
  }

  return `${latter}${former}ay`;
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("glove");
translatePigLatin("paragraphs");
translatePigLatin("eight");
```

---

### DNA Pairing (12/27/2017)
- https://www.freecodecamp.org/challenges/dna-pairing
```js
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  var splitStr = str.split("");
  var newArr = [];
  n = 0;

  while (n < splitStr.length) {
    if (splitStr[n] === 'A') {
      newArr.push(['A', 'T'])
      n++;
    } else if (splitStr[n] === 'C') {
      newArr.push(['C', 'G']);
      n++;
    } else if (splitStr[n] === 'T') {
      newArr.push(['T', 'A']);
      n++;
    } else if (splitStr[n] === 'G') {
      newArr.push(['G', 'C']);
      n++
    }
  }

  return newArr;
}

pairElement("GCG");
pairElement("ATCGA")
pairElement("TTGAG")
pairElement("CTCTA")
```

---

### Missing Letters (12/27/2017)
- https://www.freecodecamp.org/challenges/missing-letters
```js
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let arr = [];
  let num;

  for (let index in str) {
    arr.push(str.charCodeAt(index));
  }

  num = arr[0];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] === num) {
      num = arr[i] + 1;
    }
  }

  if (arr[arr.length - 1] === num) {
    return undefined;
  } else {
    return String.fromCharCode(num);
  }
}

fearNotLetter("abd");
fearNotLetter("abcdefghjklmno")
fearNotLetter("bcd")
fearNotLetter("yz")
```

---

### Boo Who (12/28/2017)
- https://www.freecodecamp.org/challenges/boo-who
```js
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho("true")
```

---

### Sorted Union (1/19/2017)
- https://www.freecodecamp.org/challenges/sorted-union
```js
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
function uniteUnique(...args) {
  let arr = [];
  let output = args.reduce((acc, val) => {
    return acc.concat(val);
  }, []);

  for (let item of output) {
    if (arr.includes(item) === false) {
      arr.push(item);
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
```

---

### Convert HTML Entities (1/19/2017)
- https://www.freecodecamp.org/challenges/convert-html-entities
```js
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  str = str.replace(/&/gi, '&amp;');
  str = str.replace(/</gi, '&lt;');
  str = str.replace(/>/gi, '&gt;');
  str = str.replace(/"/gi, '&quot;');
  str = str.replace(/'/gi, '&apos;');
  return str;
}

convertHTML("Dolce & Gabbana");
```

---

### Spinal Tap Case (1/20/2017)
- https://www.freecodecamp.org/challenges/spinal-tap-case
```js
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_]/gi, ' ')
    .replace(/\s/gi, "-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('AllThe-small Things');
```

---

### Sum All Odd Fibonacci Numbers (1/21/2017)
- https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers
```js
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
function sumFibs(num) {
  var arr = generateArray(num);

  arr.forEach((numeral, i) => {
    if (numeral % 2 === 0) {
      arr.splice(i, 1)
    }
  })

  let newArr = arr.reduce((acc, val) => acc + val)

  return newArr;
}

function generateArray(num) {
  let arr = [1, 1]

  while (true) {
    let count = arr[arr.length - 1] + arr[arr.length - 2];
    if (count <= num) {
      arr.push(count);
    } else {
      return arr;
    }
  }
}

sumFibs(4); // 5

sumFibs(10); // 10

sumFibs(1000); // 1785
```

---

### Sum All Primes (1/22/2017)
- https://www.freecodecamp.org/challenges/sum-all-primes
```js
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
  let arr = [];
  let sqrt = Math.floor(Math.sqrt(num));

  // Make array of all numbers up to num
  for (let i = 2; i <= num; i++) {
    arr.push(i);
  }

  // Delete composite numbers in array
  for (let i = 2; i <= sqrt; i++) {
    for (let j = 1; j <= arr.length; j++) {
      if (arr[j] % i === 0 && arr[j] !== i) {
        arr.splice(j, 1);
      }
    }
  }

  // Sum all numbers in array
  let total = arr.reduce((acc, val) => acc + val);
}

sumPrimes(10);
sumPrimes(977);
```

---

### Smallest Common Multiple (1/24/18)
- https://www.freecodecamp.org/challenges/smallest-common-multiple
```js
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  let sorted = arr.sort();
  let range = [];
  let lcm;

  // Get all numbers in the range
  for (var i = sorted[0]; i <= sorted[1]; i++) {
    range.push(i);
  }

  // Find the lowest common multiple for all numbers in the range
  let iterator = 1;
  let count = arr[1] * iterator;

  function divisibleBy(value) {
    if (count % value === 0) {
      return true;
    }
  }

  while (lcm === undefined) {
    if (range.every(divisibleBy)) {
      lcm = count;
      return lcm;
    } else {
      iterator++;
      count = arr[1] * iterator;
    }
  }
}

smallestCommons([1, 5]); // 60
smallestCommons([5, 1]) // 60
smallestCommons([1, 13]) // 360360
smallestCommons([23, 18]) // 6056820
```

---

### Finders Keepers (1/25/18)
- https://www.freecodecamp.org/challenges/finders-keepers
```js
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

function findElement(arr, func) {
  let filtered = arr.filter(func);
  return filtered[0];
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; });
```

---

### Drop it (1/25/18)
- https://www.freecodecamp.org/challenges/drop-it
```js
// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  let newArr = [];
  for (let i in arr) {
    let result = func(arr[i]);

    if (result === true) {
      newArr = arr.slice(i);
      break;
    }
  }
  return newArr;
}

dropElements([1, 2, 3], function (n) { return n < 3; }); //[1, 2, 3]
dropElements([1, 2, 3, 4], function (n) { return n >= 3; }) // [3,4]
dropElements([0, 1, 0, 1], function (n) { return n === 1; }) // [1,0,1]
dropElements([1, 2, 3, 4], function (n) { return n > 5; }) // []
```

---

### Steamroller (1/27/18)
- https://www.freecodecamp.org/challenges/steamroller
```js
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? steamrollArray(val) : val);
  }, []);
}

steamrollArray([[1], 2, [[3], [4]]]); // [1, 2, 3, 4]
steamrollArray([[["a"]], [["b"]]]); // ["a", "b"]
steamrollArray([1, [], [3, [[4]]]]) // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]) // [1, {}, 3, 4]
```

---

### Binary Agents (1/29/18)
- https://www.freecodecamp.org/challenges/binary-agents
```js
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

var binaryArr = [
  "00100000",
  "00100001",
  "00100010",
  "00100011",
  "00100100",
  "00100101",
  "00100110",
  "00100111",
  "00101000",
  "00101001",
  "00101010",
  "00101011",
  "00101100",
  "00101101",
  "00101110",
  "00101111",
  "00110000",
  "00110001",
  "00110010",
  "00110011",
  "00110100",
  "00110101",
  "00110110",
  "00110111",
  "00111000",
  "00111001",
  "00111010",
  "00111011",
  "00111100",
  "00111101",
  "00111110",
  "00111111",
  "01000000",
  "01000001",
  "01000010",
  "01000011",
  "01000100",
  "01000101",
  "01000110",
  "01000111",
  "01001000",
  "01001001",
  "01001010",
  "01001011",
  "01001100",
  "01001101",
  "01001110",
  "01001111",
  "01010000",
  "01010001",
  "01010010",
  "01010011",
  "01010100",
  "01010101",
  "01010110",
  "01010111",
  "01011000",
  "01011001",
  "01011010",
  "01011011",
  "01011100",
  "01011101",
  "01011110",
  "01011111",
  "01100000",
  "01100001",
  "01100010",
  "01100011",
  "01100100",
  "01100101",
  "01100110",
  "01100111",
  "01101000",
  "01101001",
  "01101010",
  "01101011",
  "01101100",
  "01101101",
  "01101110",
  "01101111",
  "01110000",
  "01110001",
  "01110010",
  "01110011",
  "01110100",
  "01110101",
  "01110110",
  "01110111",
  "01111000",
  "01111001",
  "01111010",
  "01111011",
  "01111100",
  "01111101",
  "01111110",
  "01111111",
]

var charArr = [
  " ",
  "!",
  "\"",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  "DEL",
]

function binaryAgent(str) {
  let strToArr = str.split(" ");

  for (let i in strToArr) {
    for (let j in binaryArr) {
      if (strToArr[i] === binaryArr[j]) {
        strToArr.splice(i, 1, charArr[j])
      }
    }
  }

  return strToArr.join('').toString();
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); // "I love FreeCodeCamp!"
```

---

### Everything Be True (1/29/18)
- https://www.freecodecamp.org/challenges/everything-be-true
```js
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  for (let i of Object.values(collection)) {
    if (!i[pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"); // true

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex") // false

truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age") // false

truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastFoward", "onBoat": null }], "onBoat") // false

truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastFoward", "onBoat": true }], "onBoat") // true

truthCheck([{ "single": "yes" }], "single") // true

truthCheck([{ "single": "" }, { "single": "double" }], "single") // false

truthCheck([{ "single": "double" }, { "single": undefined }], "single") // false

truthCheck([{ "single": "double" }, { "single": NaN }], "single") // false
```

---

### Arguments Optional (1/30/18)
- https://www.freecodecamp.org/challenges/arguments-optional
```js
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
function addTogether() {
  if (typeof arguments[0] === "number") {
    if (typeof arguments[1] === "number") {
      return arguments[0] + arguments[1];
    }
    else if (arguments[1] === undefined) {
      let sumTwoAnd = function (y) {
        return addTogether(2, y);
      }
      return sumTwoAnd;
    }
    else if (typeof arguments[2] !== "number") {
      return undefined;
    }
  } else {
    return undefined;
  }
}

addTogether(2, 3); // 5
addTogether(2)(3); // 5
addTogether("http://bit.ly/IqT6zt"); // undefined
addTogether(2, "3"); // undefined
addTogether(2)([3]) // undefined
```

---

### J) JavaScript Algorithms and Data Structures Projects
