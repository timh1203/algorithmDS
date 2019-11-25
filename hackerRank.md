# [Hacker Rank](https://www.hackerrank.com/)
- [HackerRank Sandbox](https://repl.it/@timh1203/HackerRank-Sandbox)

## [Day 0: Hello, World!](https://www.hackerrank.com/challenges/js10-hello-world) (11/18/19)
- [Javascript Basics](https://www.hackerrank.com/challenges/js10-hello-world/topics/javascript-basics)
```js
/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor.
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}
```

---
## [Day 0: Data Types](https://www.hackerrank.com/challenges/js10-data-types) (11/18/19)
- [Data Types](https://www.hackerrank.com/challenges/js10-data-types/topics/javascript-data-types)
```js
/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(Number(firstInteger) + Number(secondInteger))

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

    console.log(Number(firstDecimal) + Number(secondDecimal))

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString)
}
```

---
## [Day 1: Arithmetic Operators](https://www.hackerrank.com/challenges/js10-arithmetic-operators) (11/18/19)
- [Arithmetic Operators](https://www.hackerrank.com/challenges/js10-arithmetic-operators/topics/javascript-arithmetic-operators)
```js
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width

    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length * 2) + (width * 2)
    return perimeter;
}
```

---
## [Day 1: Functions](https://www.hackerrank.com/challenges/js10-function) (11/18/19)
- [Functions in Javascript](https://www.hackerrank.com/challenges/js10-function/topics/javascript-function)
- [Recursion](https://www.hackerrank.com/challenges/js10-function/topics/recursion)
```js
/*
 * Create the function factorial here
 */
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n-1);
}
```

---
## [Day 1: Let and Const](https://www.hackerrank.com/challenges/js10-let-and-const) (11/18/19)
- [Variable Declartion Keywords](https://www.hackerrank.com/challenges/js10-let-and-const/topics/javascript-let-const-var)
```js
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    const r = readLine()
    // Print the area of the circle:
    console.log(PI * Math.pow(r, 2))
    // Print the perimeter of the circle:
    console.log(2 * PI * r)
}
```

---
## [Day 2: Conditional Statements: If-Else](https://www.hackerrank.com/challenges/js10-if-else) (11/18/19)
- [If-Else Conditional Statements](https://www.hackerrank.com/challenges/js10-if-else/topics/javascript-conditional-if-else)
```js
function getGrade(score) {
    let grade;
    // Write your code here
    if (score <= 5) grade = 'F'
    else if (score <= 10) grade = 'E'
    else if (score <= 15) grade = 'D'
    else if (score <= 20) grade = 'C'
    else if (score <= 25) grade = 'B'
    else if (score <= 30) grade = 'A'

    return grade;
}
```

---
## [Day 2: Conditional Statements: Switch](https://www.hackerrank.com/challenges/js10-switch) (11/18/19)
- [Switch Conditional Statements](https://www.hackerrank.com/challenges/js10-switch/topics/javascript-conditional-switch)
- [String Basics](https://www.hackerrank.com/challenges/js10-switch/topics/javascript-strings)
```js
function getLetter(s) {
    let letter;
    // Write your code here
    let n = s[0];

    switch (n) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;

        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;

        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        default:
            letter = "D";
            break;
    }
    return letter;
}
```

---
## [Day 2: Loops](https://www.hackerrank.com/challenges/js10-loops) (11/18/19)
- [Loops](https://www.hackerrank.com/challenges/js10-loops/topics/javascript-loops)
```js
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonants = []
    for (let i = 0; i < s.length; i++) {
        if ((/^[aeiou]/).test(s[i])) {
            console.log(s[i])
        }
        else {
            consonants.push(s[i])
        }
    }
    consonants.forEach(letter => console.log(letter))
}
```

---
## [Day 3: Arrays](https://www.hackerrank.com/challenges/js10-arrays) (11/18/19)
- [Arrays in Javascript](https://www.hackerrank.com/challenges/js10-arrays/topics/javascript-arrays)
```js
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const sorted = nums.sort((a,b) => a-b)
    const lastIndex = sorted.length-1

    for (let i = nums.length-2; i >= 0; i--) {
        if (sorted[lastIndex] !== sorted[i]) return sorted[i]
    }
}
```

---
## [Day 3: Try, Catch, and Finally](https://www.hackerrank.com/challenges/js10-try-catch-and-finally) (11/18/19)
- [String Basics](https://www.hackerrank.com/challenges/js10-try-catch-and-finally/topics/javascript-strings)
- [Error Handling](https://www.hackerrank.com/challenges/js10-throw/topics/javascript-errors)
```js
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join("")
    }
    catch (e) {
        console.log(e.message)
    }
    finally {
        console.log(s)
    }
}
```

---
## [Day 3: Throw](https://www.hackerrank.com/challenges/js10-throw) (11/18/19)
- [Error Handling](https://www.hackerrank.com/challenges/js10-throw/topics/javascript-errors)
```js
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) return "YES"
    else if (a === 0) throw new Error("Zero Error")
    else if (a < 0) throw new Error("Negative Error")
}
```

---
## [Day 4: Create a Rectangle Object](https://www.hackerrank.com/challenges/js10-objects) (11/19/19)
- [Objects in Javascript](https://www.hackerrank.com/challenges/js10-objects/topics/javascript-objects)
```js
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    const results = {
        "length": a,
        "width": b,
        "perimeter": 2 * (a+b),
        "area": a*b
    }

    return results
}

```

---
## [Day 4 Count Objects](https://www.hackerrank.com/challenges/js10-count-objects) (11/19/19)
- [Javascript: Iterating Over Arrays](https://www.hackerrank.com/challenges/js10-count-objects/topics/javascript-iterating-over-arrays)
```js
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let matches = 0;

    for (let o of objects) {
        if (o.x === o.y) matches++;
    }

    return matches;
}
```

---
## [Day 4: Classes](https://www.hackerrank.com/challenges/js10-class/problem) (11/19/19)
- [Classes in Javascript](https://www.hackerrank.com/challenges/js10-class/topics/javascript-classes)
```js
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    perimeter() {
        return this.sides.reduce((acc, curr) => acc+curr, 0)
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
```

---
## [Day 5: Inheritance](https://www.hackerrank.com/challenges/js10-inheritance) (11/20/19)
- [Classes in Javascript](https://www.hackerrank.com/challenges/js10-inheritance/topics/javascript-classes)
- Notice in the Square class that all sides are equal, so you only need 1 side
```js
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return this.w * this.h
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s)
        this.w = s
        this.h = s
    }
}
```

---
## [Day 5: Template Literals](https://www.hackerrank.com/challenges/js10-template-literals/problem) (11/20/19)
- [Javascript: Template Literals](https://www.hackerrank.com/challenges/js10-template-literals/topics/javascript-template-literals)
```js
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const A = expressions[0]
    const P = expressions[1]

    const s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4
    const s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4

    const arr = [s1, s2].sort((a,b) => a-b)

    return arr
}
```

---
## [Day 5: Arrow Functions](https://www.hackerrank.com/challenges/js10-arrows/problem) (11/20/19)
- [Arrow Functions in Javascript](https://www.hackerrank.com/challenges/js10-arrows/topics/javascript-arrow-functions)
```js
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(n => n % 2 === 0 ? n * 2 : n * 3)
}
```

---
## [Day 6: Bitwise Operators](https://www.hackerrank.com/challenges/js10-bitwise/problem) (11/21/19)
- [Bitwise Operators in Javascript](https://www.hackerrank.com/challenges/js10-bitwise/topics/javascript-bitwise-operators)
```js
    let results = 0;

    for (let i = n; i > 0; i--) {
        for (let j = i-1; j > 0; j--) {
            if ((i & j) < k && (i & j) > results) {
                results = (i&j)
            }
        }
    }

    return results
```

---
## [Day 6: JavaScript Dates](https://www.hackerrank.com/challenges/js10-date) (11/21/19)
- [Dates in Javascript](https://www.hackerrank.com/challenges/js10-date/topics/javascript-dates)
```js
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date(dateString)
    const numeral = date.getDay()

    dayName = daysOfWeek[numeral]

    return dayName;
}
```

---
## [Day 7: Regular Expressions I](https://www.hackerrank.com/challenges/js10-regexp-1/problem) (11/23/19)
- [Regular Expressions in Javascript](https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex)
```js
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).*\1$/i

    /*
     * Do not remove the return statement
     */
    return re;
}
```

---
## [Day 7: Regular Expressions II](https://www.hackerrank.com/challenges/js10-regexp-2/problem) (11/23/19)
- [Regular Expressions in Javascript](https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex)
```js
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */
    const re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([A-Za-z])+$')

    /*
     * Do not remove the return statement
     */
    return re;
}
```

---
## [Day 7: Regular Expressions III](https://www.hackerrank.com/challenges/js10-regexp-3/problem) (11/23/19)
- [Regular Expressions in Javascript](https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex)
```js
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = new RegExp('(\\d)+', 'g')

    /*
     * Do not remove the return statement
     */
    return re;
}
```

---
## [Day 8: Create a Button](https://www.hackerrank.com/challenges/js10-create-a-button) (11/24/19)
- [Button Basics in Javascript](https://www.hackerrank.com/challenges/js10-create-a-button/topics/javascript-button-basics)

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Button</title>
  <link rel="stylesheet" href="css/button.css" type="text/css">
</head>

<body>
  <button id="btn">0</button>
  <script src="js/button.js" type="text/javascript"></script>
</body>

</html>
```
```css
#btn {
  width: 96px;
  height: 48px;
  font-size: 24px;
}
```
```js
let btn = document.querySelector('#btn')
btn.addEventListener('click', () => btn.innerHTML++)
```


---
## [Day 8: Buttons Container](https://www.hackerrank.com/challenges/js10-buttons-container) (11/24/19)
- [Button Containers in Javscript](https://www.hackerrank.com/challenges/js10-buttons-container/topics/javascript-button-container)

```html
<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
</head>

<body>
  <div id="btns">
    <button id="btn1">1</button>
    <button id="btn2">2</button>
    <button id="btn3">3</button>
    <button id="btn4">4</button>
    <button id="btn5">5</button>
    <button id="btn6">6</button>
    <button id="btn7">7</button>
    <button id="btn8">8</button>
    <button id="btn9">9</button>
  </div>
  <script src="js/buttonsGrid.js" type="text/javascript"></script>
</body>

</html>
```
```css
#btns {
  width: 75%;
}

#btn1,
#btn2,
#btn3,
#btn4,
#btn5,
#btn6,
#btn7,
#btn8,
#btn9 {
  width: 30%;
  height: 48px;
  font-size: 24px;
}
```
```js
const btn5 = document.querySelector('#btn5')
const btns = document.getElementsByTagName('button')

btn5.addEventListener('click', () => {
  const firstPlace = btns[0].innerHTML
  const secondPlace = btns[1].innerHTML
  const thirdPlace = btns[2].innerHTML
  const sixthPlace = btns[5].innerHTML
  const ninthPlace = btns[8].innerHTML
  const eigthPlace = btns[7].innerHTML
  const seventhPlace = btns[6].innerHTML
  const fourthPlace = btns[3].innerHTML

  btns[0].innerHTML = fourthPlace
  btns[1].innerHTML = firstPlace
  btns[2].innerHTML = secondPlace
  btns[5].innerHTML = thirdPlace
  btns[8].innerHTML = sixthPlace
  btns[7].innerHTML = ninthPlace
  btns[6].innerHTML = eigthPlace
  btns[3].innerHTML = seventhPlace
})
```

---
## [Day 9: Binary Calculator](https://www.hackerrank.com/challenges/js10-binary-calculator?hr_b=1) (11/25/19)
- [Day 9: Binary Calculator](https://www.hackerrank.com/challenges/js10-binary-calculator/topics/javascript-calculator)
```html
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Binary Calculator</title>
  <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
</head>

<body>
  <div>
    <div id="res"></div>
    <div id="btns">
      <button id="btn0">0</button>
      <button id="btn1">1</button>
      <button id="btnClr">C</button>
      <button id="btnEql">=</button>
      <button id="btnSum">+</button>
      <button id="btnSub">-</button>
      <button id="btnMul">*</button>
      <button id="btnDiv">/</button>
    </div>
  </div>
  <script src="js/binaryCalculator.js" type="text/javascript"></script>
</body>

</html>
```
```css
body {
  width: 33%;
}

#res {
  background-color: lightgray;
  border: 1px solid black;
  height: 48px;
  font-size: 20px;
}

#btn0,
#btn1 {
  background-color: lightgreen;
  color: brown;
}

#btnClr,
#btnEql {
  background-color: darkgreen;
  color: white;
}

#btnSum,
#btnSub,
#btnMul,
#btnDiv {
  background-color: black;
  color: red;
}

#btns > * {
  width: 25%;
  height: 36px;
  font-size: 18px;
  margin: 0px;
  float: left;
}
```
```js
let res = document.querySelector('#res')
let display = ''
let btns = document.querySelectorAll('button')

const btn0 = document.querySelector('#btn0')
const btn1 = document.querySelector('#btn1')
const btnClr = document.querySelector('#btnClr')
const btnEql = document.querySelector('#btnEql')
const btnSum = document.querySelector('#btnSum')
const btnSub = document.querySelector('#btnSub')
const btnMul = document.querySelector('#btnMul')
const btnDiv = document.querySelector('#btnDiv')

btn0.addEventListener('click', function () {
  display += this.innerHTML
  res.innerHTML += this.innerHTML
})
btn1.addEventListener('click', function () {
  display += this.innerHTML
  res.innerHTML += this.innerHTML
})
btnSum.addEventListener('click', function () {
  display += this.innerHTML
  res.innerHTML += this.innerHTML
})
btnSub.addEventListener('click', function () {
  display += this.innerHTML
  res.innerHTML += this.innerHTML
})
btnMul.addEventListener('click', function () {
  display += this.innerHTML
  res.innerHTML += this.innerHTML
})
btnDiv.addEventListener('click', function () {
  display += this.innerHTML
  res.innerHTML += this.innerHTML
})
```

---
## []() (//)
-
```js
```

---
