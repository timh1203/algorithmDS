# codeLog

- **RULES**
- Code minimum an hour every day for the next 100 days.
- Tweet your progress every day with the #100DaysOfCode hashtag.
- Encourage at least 2 people who are also doing the challenge each day.

---
## Day: //
### Today's Progress:
-
### Thoughts:
-
### Link(s) to Work:
-

---
## Day23: 12/11/19
### Today's Progress:
- Working on "Count Triplets" from Hash Tables section of Interview Prep Kit
### Thoughts:
- Got the basic cases working but having difficulty when `r` is 1
### Link(s) to Work:
- [HackerRank Problems: Sherlock and Anagrams](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day22: 12/10/19
### Today's Progress:
- Finished "Sherlock and Anagrams" from Hash Tables section of Interview Prep Kit
- Finished "CSS Grid" section of Responsive Web Design Certification (22 challenges)
### Thoughts:
- The algorithm was a tough one, had to get help
- Used substring method and object to store the substring partials
- CSS Grid section helped me review a lot of concepts
### Link(s) to Work:
- [HackerRank Problems: Sherlock and Anagrams](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)
- [FreeCodeCamp Profile](https://www.freecodecamp.org/timh1203)

---
## Day21: 12/9/19
### Today's Progress:
- Working on "Sherlock and Anagrams" from Hash Tables section of Interview Prep Kit
- Finished "Responsive Web Design Principles" section of Responsive Web Design Certification (4 challenges)
- Finished "CSS Flexbox" section of Responsive Web Design Certification (17 challenges)
### Thoughts:
- Tough problem and solution not working 100% yet
### Link(s) to Work:
- [HackerRank Problems: Sherlock and Anagrams](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)
- [FreeCodeCamp Profile](https://www.freecodecamp.org/timh1203)

---
## Day20: 12/8/19
### Today's Progress:
- Finished "Applied Accessibility" section of Responsive Web Design Certification (22 challenges)
### Thoughts:
- Learning about using different html tags properly: `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`
- New things I learned: `<audio>`, `<source>`, `<figure>`, `<figcaption>`, `<fieldset>`, `<legend>`, `<time>`, `<datetime>`
- Setting for hiding elements meant for only screen readers:
```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```
- <button> "accesskey" attribute helps allow quick navigation with keyboard shortcuts
### Link(s) to Work:
- [FreeCodeCamp Profile](https://www.freecodecamp.org/timh1203)

---
## Day19: 12/7/19
### Today's Progress:
- Solved "Two Strings" from Hash Tables section of Interview Prep Kit
### Thoughts:
- This challenge was not difficult, it was worth it not to overthink the solution
- I just check for letters from string1 in string2, instead of worrying about all combinations of substrings
### Link(s) to Work:
- [HackerRank Problems: Two Strings](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day18: 12/6/19
### Today's Progress:
- Solved "Ransom Note" from Hash Tables section of Interview Prep Kit
- Finished "Applied Visual Design" section of Responsive Web Design Certification (52 challenges)
### Thoughts:
- The problem wasn't too difficult
- I learned differences between `.find()`, `.findIndex()`, `.filter()`, `.indexOf()`, `.lastIndexOf()`, `.includes()`, `.some()`
- I also learned that I should check for negative returns IE `exists !== -1`
- I'll have to make a blog post of this
- I learned so many things in the Applied Visual Design section including bezier curves, animations, gradients, keyframes, and creating complex shapes
- Definitely have to review this section again since it has so many cool stuff
### Link(s) to Work:
- [HackerRank Problems: Ransom Note](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)
- [FreeCodeCamp Profile](https://www.freecodecamp.org/timh1203)

---
## Day17: 12/5/19
### Today's Progress:
- Solved "Minimum Swaps 2" from Array section of Interview Prep Kit
- Finished "Basic CSS" section of Responsive Web Design Certification (44 challenges)
### Thoughts:
- Algorithm was confusing initially but I wrote it out on paper
- It started making more sense and I wrote this algorithm accordingly
- `indexOf` takes a second argument to start searching from second argument
- `indexOf` returns the first matching index which the element can be found (IE string, number), or else returns -1
- EXAMPLE: `array.indexOf('bison')`
- `findIndex` returns the first matching index in array matching the condition, or else returns -1
- EXAMPLE: `array.findIndex(item => item > 13)`
- Learned CSS variables: declartion => `--penguin-skin: gray;`, usage =>`background: var(--penguin-skin), black;`
- Declaring CSS variable in root
```css
  :root {
    --penguin-belly: pink;
  }
```
### Link(s) to Work:
- [HackerRank Problems: Minimum Swaps 2](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)
- [FreeCodeCamp Profile](https://www.freecodecamp.org/timh1203)

---
## Day16: 12/4/19
### Today's Progress:
- Solved New Years Chaos from Array section of Interview Prep Kit
### Thoughts:
- I solved the problem successfully but output type causes not all 100% cases to pass
- Found that splice was useful but didn't remove & insert with a for loop
- Note: splice works by how many to remove, slice works by removing up to an index
### Link(s) to Work:
- [HackerRank Problems: New Years Chaos](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day15: 12/3/19
### Today's Progress:
- Solved Left Rotation from Array section of Interview Prep Kit
- Reviewed Bubble Sort Coding Concept
- Finish the demo short of ejecting, [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
### Thoughts:
- The HackerRank problem was not as difficult as I thought
- Bubble sort makes more sense and still fresh in my mind, naive is more intuitive than refined approach for me
- The typescript demo went into adding redux and it totally blew me away!
- Definitely need to work on a project to familiarize the ecosystem: Typescript, Redux, React Router
### Link(s) to Work:
- [HackerRank Problems: Left Rotation](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)
- [codeNotes: Bubble Sort](https://github.com/timh1203/codeNotes/blob/master/codingConcepts.md)
- [My Typescript Repo](https://github.com/timh1203/typescript-react-starter)

---
## Day14: 12/2/19
### Today's Progress:
- Array section of Interview Prep Kit: 2D Array - DS
- Worked on [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
- Researched about speech-to-text and translation APIs
### Thoughts:
- Finally solved the 2d Array problem
- Learned how to work with 2D arrays in JS
- See this helpful [Link](https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript)
### Link(s) to Work:
- [HackerRank Problems: 2D Array](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)
- [My Typescript Repo](https://github.com/timh1203/typescript-react-starter)

---
## Day13: 12/1/19
### Today's Progress:
- Started on Array section of Interview Prep Kit
- Working on problem "2D Array - DS"
### Thoughts:
- Attempted make sense of the problem
- It's complex and I'm still working on it
### Link(s) to Work:
- [HackerRank Problems: 2D Array](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day12: 11/30/19
### Today's Progress:
- Worked on Warm-up Challenges: Repeated String
### Thoughts:
- This was a tough one due to all the edge cases and JS loose typing
- I used RegExp `string.match(/a/g)` to check for all cases
- The problem lies in if it returns `null` if none are found
- Therefore, one has to put a `OR` operator before taking the length
- Otherwise you will get can't read length of null error
- IE `(s.match(/a/g) || []).length`
### Link(s) to Work:
- [HackerRank Problems: Repeated String](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day11: 11/29/19
### Today's Progress:
- Worked on Warm-up Challenges: Jumping on the Clouds
### Thoughts:
- I figured doing a while loop through the end is most efficient
- As it progresses, it checks if it can jump 2 times first, then 1
- I would ask further in an interview if they want me to check any edge cases
### Link(s) to Work:
- [HackerRank Problems: Jumping on the Clouds](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day10: 11/28/19
### Today's Progress:
- Worked on Warm-up Challenges: Counting Valleys
### Thoughts:
- This challenge seemed hard at first but the solution was more simple than I had originally thought
- I thought I would have to keep track of the time it goes down, then make sure the ascent number equals out
- All I had to do was check the sea level and the ascent direction is up
- You'll understand if you look at my cold
### Link(s) to Work:
- [HackerRank Problems: Counting Valleys](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day9: 11/27/19
### Today's Progress:
- Worked on Warm-up Challenges: Sock Merchant
### Thoughts:
- I had a difficult time at first since I didn't think of sorting the input first
- Once it's sorted, it's easy to determine the number of matching socks
- This is good practice because HackerRank makes you think from different angles
### Link(s) to Work:
- [HackerRank Problems: Sock Merchant](https://github.com/timh1203/codeNotes/blob/master/hackerRank.md)

---
## Day8: 11/26/19
### Today's Progress:
- Finished day 10 and completed "10 Days of Javascript" on HackerRank
- Went through [Typescript's 5 minute tutorial](https://www.typescriptlang.org/docs/home.html)
### Thoughts
- The calculator javascript code wasn't as difficult
- I remember in the past that using eval() method was easy but unsecure
- This was just a matter of splitting the numbers and operation sign, converting to binary, then do the operation, and converting back to base-10
- Typescript seems easy with the tutorial but I need to explore further
- I'd like to practice more emmet abbreviations as well > [Useful Cheatsheet](https://docs.emmet.io/cheat-sheet/)
### Link(s) to Work:
- [Day 9: Binary Calculator](https://www.hackerrank.com/challenges/js10-binary-calculator?hr_b=1)
- [typescriptin5mins tutorial](https://github.com/timh1203/typescriptin5mins)

---
## Day7: 11/25/19
### Today's Progress:
- Worked through "10 Days of Javascript" on HackerRank, day 9
- Implemented display to show numbers when clicked on button
- Not finished yet
### Thoughts
- I tried adding click event listeners after looping through a `querySelectorAll` but didn't work
- End up having to manually attaching an event listener to each selector manually
### Link(s) to Work:
- [Day 9: Binary Calculator](https://www.hackerrank.com/challenges/js10-binary-calculator?hr_b=1)

---
## Day6: 11/24/19
### Today's Progress:
- Worked through "10 Days of Javascript" on HackerRank, day 8
### Thoughts
- It was cool to jump back into some vanilla javascript for once
- The challenges themselves weren't too interesting
mselves weren't toointeresting
### Link(s) to Work:
- [Day 8: Create a Button](https://www.hackerrank.com/challenges/js10-create-a-button)
- [Day 8: Buttons Container](https://www.hackerrank.com/challenges/js10-buttons-container)

---
## Day5: 11/23/19
### Today's Progress:
- Worked through "10 Days of Javascript" on HackerRank, day 7
- Read through articles about regular expressions
### Thoughts
- Define regex pattern by setting to a new variable or use `new RegExp(/pattern/flags)`
- Regex literal:`const re = /\d+/g`
- Regex object: `const re = new RegExp('\\d+', 'g')`
- A character class is used in brackets to define one or more characters (Use ., \d, \D, \w, \W, \s, \S)
- Boundaries are used to set limits around the string (Use ^, S, \b, \B)
- RegExp methods (test, exec) or string methods (match, search, split, replace)
- Capturing groups use parentheses and remembers the match
- use `\1` to backreference the first capture group
- See [article](https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex)
### Link(s) to Work:
- [Day 7: Regular Expressions I](https://www.hackerrank.com/challenges/js10-regexp-1/problem)
- [Day 7: Regular Expressions II](https://www.hackerrank.com/challenges/js10-regexp-2/problem)
- [Day 7: Regular Expressions III](https://www.hackerrank.com/challenges/js10-regexp-3/problem)

---
## Day4: 11/21/19
### Today's Progress:
- Worked through "10 Days of Javascript" on HackerRank, day 6
- Read through articles about bitwise operators and javascript dates
### Thoughts
- Learned about Bitwise Operators and conversion between binary/decimal
- From decimal to binary, use `(n).toString(2)`
- From binary to decimal, use `parseInt(n, 2)`
- Learn to use `new Date()`, then using `date.getDay()` to get numeral of day of the week
### Link(s) to Work:
- [Day 6: Bitwise Operators](https://www.hackerrank.com/challenges/js10-bitwise/problem)
- [Day 6: JavaScript Dates](https://www.hackerrank.com/challenges/js10-date)

---
## Day3: 11/20/19
### Today's Progress:
- Worked through "10 Days of Javascript" on HackerRank, day 5
- Read through articles about inheritance, template literals, and arrow functions
### Thoughts
- I think doing exactly what it asks is better
- One can get lost in the instructions provided
### Link(s) to Work:
- [Day 5: Inheritance](https://www.hackerrank.com/challenges/js10-inheritance)
- [Day 5: Template Literals](https://www.hackerrank.com/challenges/js10-template-literals/problem)
- [Day 5: Arrow Functions](https://www.hackerrank.com/challenges/js10-arrows/problem)

---
## Day2: 11/19/19
### Today's Progress:
- Worked through "10 Days of Javascript" on HackerRank, up to day 4
- Read through some of the resources on topics about classes and objects
### Thoughts
- Learned about classes, constructor, prototype, static, inheritance, extends, super
### Link(s) to Work:
https://www.hackerrank.com/challenges/js10-objects/problem
- [Day 4: Create a Rectangle Object](https://www.hackerrank.com/challenges/js10-objects)
- [Day 4 Count Objects](https://www.hackerrank.com/challenges/js10-count-objects)
- [Day 4: Classes](https://www.hackerrank.com/challenges/js10-class/problem)

---
## Day1: 11/18/19
### Today's Progress:
- Worked through "10 Days of Javascript" on HackerRank, up to day 4 (started with day0)
### Thoughts
- I learned about the difference between syntax, runtime, and logic errors.
- Reviewed try/catch/finally and throw error handling.
- HackerRank can be confusing on input/output.
### Link(s) to Work:
- [Day 0: Hello, World!](https://www.hackerrank.com/challenges/js10-hello-world)
- [Day 0: Data Types](https://www.hackerrank.com/challenges/js10-data-types)
- [Day 1: Arithmetic Operators](https://www.hackerrank.com/challenges/js10-arithmetic-operators)
- [Day 1: Functions](https://www.hackerrank.com/challenges/js10-function)
- [Day 1: Let and Const](https://www.hackerrank.com/challenges/js10-let-and-const)
- [Day 2: Conditional Statements: If-Else](https://www.hackerrank.com/challenges/js10-if-else)
- [Day 2: Conditional Statements: Switch](https://www.hackerrank.com/challenges/js10-switch)
- [Day 2: Loops](https://www.hackerrank.com/challenges/js10-loops)
- [Day 3: Arrays](https://www.hackerrank.com/challenges/js10-arrays)
- [Day 3: Try, Catch, and Finally](https://www.hackerrank.com/challenges/js10-try-catch-and-finally)
- [Day 3: Throw](https://www.hackerrank.com/challenges/js10-throw)
---
