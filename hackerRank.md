# [Hacker Rank](https://www.hackerrank.com/)

## Day 0: Hello, World! (11/18/19)
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
## Day 0: Data Types (11/18/19)
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
## Day 1: Arithmetic Operators (11/18/19)
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
## Day 1: Functions (11/18/19)
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
## Day 1: Let and Const (11/18/19)
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
## Day 2: Conditional Statements: If-Else (11/18/19)
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
## Day 2: Conditional Statements: Switch (11/18/19)
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
## Day 2: Loops (11/18/19)
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
## Day 3: Arrays (11/18/19)
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
## Day 3: Try, Catch, and Finally
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
## Day 3: Throw (11/18/19)
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
##
```js
```

---
