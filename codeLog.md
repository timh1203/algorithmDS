# codeLog

- **RULES**
- Code minimum an hour every day for the next 100 days.
- Tweet your progress every day with the #100DaysOfCode hashtag.
- Encourage at least 2 people who are also doing the challenge each day.

---
## Day:
### Today's Progress:
### Thoughts:
### Link(s) to Work:

---
## Day96: 2/27/20
### Today's Progress:
- Finished 3 subchapter of course: FEM Course => Deep JavaScript Foundations
### Thoughts:
- Let about using var, let, and const in the right places
- `const` carries more confusion than benefits
- `var` should be used for function scopes, `let` should be used for block scopes for semantic reasons
- Kyle recommends `var` > `let` > `const` in your code
- This is weird syntax but use let and block scope where you want to isolate the amount of exposure
```js
function formatStr(str) {
  {
    let prefix, rest
    prefix = str.slice(0,3)
    rest = str.slice(3)
  }

  if (/^FOO:/.test(str)) {
    return str
  }

  return str.slice(4)
}
```
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day95: 2/26/20
### Today's Progress:
- Finished 2 subchapter of course: FEM Course => Deep JavaScript Foundations
### Thoughts:
- Learned about function scoping, block scoping, and using IFFEs
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day94: 2/22/20
### Today's Progress:
- Finished 2 subchapter of course: FEM Course => Deep JavaScript Foundations
### Thoughts:
- Learned about lexical scope
- Away this weekend, so taking it easy
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day93: 2/21/20
### Today's Progress:
- Finished 1 subchapter of course: FEM Course => Deep JavaScript Foundations
### Thoughts:
- Started working on function problems
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day92: 2/20/20
### Today's Progress:
- Finished 4 subchapter of course: FEM Course => Deep JavaScript Foundations
- Went to onsite interview
- Next.js Blog => Worked on gear & resources section
### Thoughts:
- Prefer Function Declarations > Named Function Expressions > Anonymous function expressions
- Function declarations are generally more semantic, self-referencing, and easier to debug than function expressions
- If you must write a function expressions, prefer to do a named function expression
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day91: 2/19/20
### Today's Progress:
- Finished 3 subchapter of course: FEM Course => Deep JavaScript Foundations
- Prepared for an onsite interview by researching company, answering common questions, and evaluating previous works
### Thoughts:
- Continued working through ideas with lexical scope
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day90: 2/18/20
### Today's Progress:
- Finished 7 subchapter of course: FEM Course => Deep JavaScript Foundations
- Leetcode => Solved "Merge Two Sorted Lists" and "Remove Duplicates from Sorted Array"
- Cracking the Coding Interview => Reading up and through negotiation section
### Thoughts:
- Learned about how JS compiles the code before execution
- Strict mode does not allow auto-global creations
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Leetcode](https://leetcode.com/timh1203/)

---
## Day 89: 2/17/20
### Today's Progress:
- Finished 2 subchapter of course: FEM Course => Deep JavaScript Foundations
### Thoughts:
- `Shadowing` is a when there are 2 variables of the same name in different scopes
- In a lexically scoped language like JS, all of the scopes and identifiers are determined at compiled time, not at run time. They are used at run time.
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day88: 2/16/20
### Today's Progress:
- Finished 3 subchapter of course: FEM Course => Deep JavaScript Foundations
### Thoughts:
- By understanding our types and coercion, we don't have to depend on static typed systems
- Although typescript/flow is helpful for teams, it also has high entry and verbose code when using complex features
- Typl is a system that Kyle Simpson created, it's the middle ground between vanilla and typed systems
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day87: 2/14/20
### Today's Progress:
- Finished 5 subchapter of course: FEM Course => Deep JavaScript Foundations
- Took a coding assessment for a company
- Next.js Blog => started on Discord section
### Thoughts:
- I learned about Kyle's opinion on TypeScript and I agree that there should be a middle ground
- I still think that if you want to write a more typed language, then ReasonML
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day86: 2/13/20
### Today's Progress:
- Finished 2 subchapter of course: FEM Course => Deep JavaScript Foundations
- Completed a logic test as part of interview process and got invited to the next round
- Went to Built-In meetup to network and job search
- Loquela => worked on it a little bit with Juan
### Thoughts:
- Learned a lot by checking different corner cases and understanding implicit coercion
- Learned that it's good to talk to people at the event too, networked and found another lead
- Logic test was fair but there were definitely some curveball
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day85: 2/12/20
### Today's Progress:
- Finished 6 subchapter of course: FEM Course => Deep JavaScript Foundations
- Next.js Blog => finished playlists section
- Phone interview today
### Thoughts:
- Summary of double equals:
- If the types are the same, will use ===
- If null or undefined are equal
- If non-primitives, will use ToPrimitive
- Prefer: ToNumber
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day84: 2/11/20
### Today's Progress:
- Finished 3 subchapter of course: FEM Course => Deep JavaScript Foundations
- Next.js Blog => Succesfully deployed to Zeit, finished home, started on about and playlists
### Thoughts:
- Learned about the double and triple equality checks
- Double equals allows coercion when the types are different, Triple equals does **NOT** allow coercion when types are different and not compare them at all
- The main difference between double and triple is if we allow coercion to occur, not that they don't check for types
- For double equals, null and undefined is indistinguishable
- It's not a useful distinction like in this case:
```js
var workshop1 = { topic: null }
var workshop2 = {}

// WRITE THIS...
if (workshop1.topic == null &&workshop2.topic === null) { // .. }

// INSTEAD OF THIS...
if (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined) &&
) { // .. }
```
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day83: 2/10/20
### Today's Progress:
- Finished 4 subchapter of course: FEM Course => Deep JavaScript Foundations
- Next.js Blog => Fixed api call to youtube from page component instead and render data to page, attempted to deploy to Zeit Now but not working yet
### Thoughts:
- A way to check for empty strings and non-empty strings is `el.trim() != ""`
- We tend to believe that implicit coercion is magic and magic thought up as bad, instead think of it as abstractions (not all tend to be bad)
- `getInitialProps` is run on both the server and the client alone, it works great for api call
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day82: 2/9/20
### Today's Progress:
- Finished 5 subchapter of course: FEM Course => Deep JavaScript Foundations
- Next.js Blog => add new sections and stylings, used new parallax and gradient techniques
### Thoughts:
- Use JS quirks as an opportunity to educate or else, it's a lazy excuse not to learn, teach, or just being clever (aka one-lining)
- Code comments should not be written with the "how" or "what", but more of the "why"
- Still understanding this one: "JavaScript's dynamic typing is not a weakness, it's one of its strong qualities"
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day81: 2/8/20
### Today's Progress:
- Work on blog page and added styles to form and footer
### Thoughts:
- Tired today from tech meetup group, prioritizing rest
### Link(s) to Work:
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day80: 2/7/20
### Today's Progress:
- Finished 4 subchapter of course: FEM Course => Deep JavaScript Foundations
- Work on loquela to code the landing page
- Worked on blog page and made environmental variables work, add youtube uploads, footer, hook contact form
### Thoughts:
- Learned that there's some under the hood coercion with primitives, strings, numbers, and booleans and some of the behavior can be weird like how "-0" coerces to "0" with toString under the hood
- Memory the 7 values in the Falsy table for booleans, anything else is truthy
- Falsy values: NaN, undefined, null, "", 0, -0, false
- Use `newStudents.length > 0` instead of `newStudents.length` since NaN can make it return false
- Use `Boolean(studentsInputElem.value)` instead of `studentsInputElem.value` since a string of white spaces can return true
- Use [Next.js env article](https://www.leighhalliday.com/secrets-env-vars-nextjs-now)
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day79: 2/6/20
### Today's Progress:
- Finished Types chapter of course: FEM Course => Deep JavaScript Foundations
- Work on blog site for adding youtube video feed
- Met with Loquela group for landing page flow
- Met local hacker group to plan events for area
### Thoughts:
- To check if something is NaN, you can check `x !== x`
- To check if something is -0, you can check `x === 0 && (1 / x) === -Infinity`
- Was able to get videos to pull from youtube but working on dotenv with nextjs
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day78: 2/5/20
### Today's Progress:
- Finished 3 subchapters of course: FEM Course => Deep JavaScript Foundations
- Long interview and travel time today so not much progress as usual
### Thoughts:
- Interviewers liked that I showed interested in their company, seeing things from their point of view and how I can come in and help them out, and asking good questions like opportunities for growth laterally/vertically
- Practicing interviewing skills and "presentation" is important as coding to get you the job too
- Learned that there is "undeclared", "undefined", and "uninitialized" AKA temporal dead zone (TDZ)
- NaN and -0 are important special values we need to consider
- NaN is checked with `Number.isNan()` and -0 is checked with Object.is()
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day77: 2/4/20
### Today's Progress:
- Finished 6 subchapters of course: FEM Course => Deep JavaScript Foundations
- Reviewed code concepts for interview
### Thoughts:
- Learned the little nuances of JS: `typeof null` returns object, `typeof [1,2,3]` returns object but we can use `Array.isArray()` to confirm
- BigInt is working in the browser but not Replit
```js
// 2 ways to declare
const bigint = 9007199254740991n

const bigint2 = BigInt(9007199254740991)

console.log(typeof bigint) // "bigint"
console.log(typeof bigin2) // "bigint"
```
- Learned about `isNan()` vs `Number.isNan()`, [Samantha Ming explains](https://medium.com/dailyjs/better-nan-check-with-es6-number-isnan-517861d32be3)
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day76: 2/3/20
### Today's Progress:
- Finished 3 subchapters and the course: FEM Course => JavaScript: The Hard Parts
- Worked on blog website for social icons, globalstyles, web fonts
- Brainstormed ideas for UI flow for landing page and home page
### Thoughts:
- Excited to review these concepts and take other hard parts course
- For blog site, `public` folder is where I can store all my constants and files, `static` was said to be deprecated
- For Loquela, the landing page will have a signup/signin/guest flow and the home page will be where users can interact with the app
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day75: 2/2/20
### Today's Progress:
- Finished 3 subchapters about Prototypes in from FEM Course => JavaScript: The Hard Parts
- Re-recorded Execution context video
- Worked on blog website for video and importing fonts
### Thoughts:
- `hasOwnProperty` is a method on the Object.prototype that checks if that object has that property, returns boolean
- We can use arrow functions or call to make proper binding
```js
function userCreator(name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function() {
  const add1 = () => { this.score++; } // Option 1
  add1()
  // const add1 = function() { // Option 2
  //   this.score++;
  // }
  // add1.call(this)
 }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```
- Useful link for working with [nextjs apps](https://leerob.io/blog/things-ive-learned-building-nextjs-apps)
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Execution Context](https://youtu.be/6POX72a6WD0)
- [Next.js Blog](https://github.com/timh1203/tdNet2)

---
## Day74: 2/1/20
### Today's Progress:
- Finished 7 subchapters about Prototypes in from FEM Course => JavaScript: The Hard Parts
- Created video about execution context and javascript series
- Worked on blog website on the nav bar
### Thoughts:
- Although OOP paradigm is easy to reason about, we also don't want to repeat ourselves by storing multiple functions on each instance
- A special nuance is that the backpack also stores the deleted object name on the backpack when you make a new instance of the object IE `newUser`
- Explaining a concept during a video is more challenging than just passively listening about it
- Another way to think about it is if we use the `this` keyword in the increment function
```js
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  }
  return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
```

- With the nextjs blog, I learned how to style `Link` tags in next.js
```js
<Link href="/login" passHref>
  <TopbarLink>Login</TopbarLink>
</Link>

const TopbarLink = styled.a`
// your style
`;
```

### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Next.js Blog](https://github.com/timh1203/tdNet2)
- [JavaScript Series](https://youtu.be/JWrd5aiHfP4)
- [Execution Context](https://youtu.be/VyxBMBnCERE)

---
## Day73: 1/31/20
### Today's Progress:
- Finished section on Promises in from FEM Course => JavaScript: The Hard Parts
- Did a production push on Loquela today and did sprint #2 planning for next week
- Read 2 chapters Cracking the Coding Interview, up to Chapter 6
- Made a video for my admin v2 project in my portfolio and added url to portfolio site
### Thoughts:
- Async behavior can be confusing but if you understand the Call Stack, Microtask Queue, and Callback Queue, then you are 1 step closer
- *Any task sent to the browser is inserted in the Callback Queue IE setTimeout()*
- *Any function attached to a promise is inserted in the Microtask Queue IE display()*
- Even though Javascript is single-threaded, async JS allows us to build fast non-blocking applications for the modern web
- We are going to use Figma for designing and making a design to pick on Monday
- Specifically, thinking about how the web app is going to look and what the experience is like practicing the language
- Since the tenavox app is blocked by the Auth0 wall specific to @tenavox.com domain, I made a video for potential recruiters
- With the book, I learned about the behavioral aspect of the interview process, S.A.R. and elevator pitch
- Also, I learned that the interview starts long before the onsite because there is much preparation to be done
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Loquela Home](https://loquela.cc/)
- [Admin v2 project](https://youtu.be/o4Kd1pOrdlI)

---
## Day72: 1/30/20
### Today's Progress:
- Finished 3 chapters on Promises in from FEM Course => JavaScript: The Hard Parts
- Pair programmed in Loquela to add more packages and successfully deployed to subdomain
- Took a ReactJS coding test for a company to implement a calculator component
### Thoughts:
- Fetch really is an incredible facade function because it does so much under the hood
- The 2 prong approach of fetch stores a Promise object on the global memory and also sends the command to the Web Browser
- For tomorrow, Loquela team will meet to do a production push, select UI design tool, and create the layout for the UI
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Loquela Home](https://loquela.cc/)
- [Loquela Subdomain](https://dev.loquela.cc/)

---
## Day71: 1/29/20
### Today's Progress:
- Worked on closure exercises from FEM Course => JavaScript: The Hard Parts
- Finished Asynchronous JS section of FEM Course => JavaScript: The Hard Parts
- Pair programmed with friend on Loquela to implement Jest, resolve merge conflicts, and review Redux architecture
- Attempted to work with subdomain deployment for Loquela
- Worked on blog site to add structure for pages
### Thoughts:
- If you want practice with closure, try [Course Closure Exercise](http://csbin.io/closures)
- Recommended article to [understand closure](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Loquela Project](https://github.com/loquela-espanol)

---
## Day70: 1/28/20
### Today's Progress:
- Worked on closures with FEM Course
- Pair Programmed with friend on Loquela Project to implement redux, eslint, dotenv
- Started reading Cracking the Coding Interview yesterday
### Thoughts:
- Closure is not a great term because it's just an umbrella term
- Better terms: Persistent Lexically Scoped Referenced Data (P.L.S.R.D) or Closed Lid Variable Environment (C.O.V.E)
- "Backpack" might be acceptable too if you watched the lesson :)
- We will start with Redux but refactor to hooks down the line
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Loquela Project](https://github.com/loquela-espanol)

---
## Day69: 1/27/20
### Today's Progress:
- Finished higher order components and arrow functions
- Pair programmed with friend to deploy front end on netlify
- Went to a coding meeting to learn about startups
### Thoughts:
- Arrow functions help legibility but not readability
- They are syntactic sugar which abstracts the under-the-hood mechanisms crucial for us as engineers to learn deeply
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)
- [Loquela Project](https://loquela.cc/)

---
## Day68: 1/26/20
### Today's Progress:
- Worked on FEM Course for JS: The Hard Parts, up to chapter 4
### Thoughts:
- HOC are used to maintain DRY principle
- Worked on Dev concepts video for execution context/call stack/higher order components
### Link(s) to Work:
- [devFEMJavaScript](https://drive.google.com/open?id=1AVfp60-x_lwDoLPb7dNPU3b61w3hetdU)

---
## Day67: 1/25/20
### Today's Progress:
- Finished up FCC Product Landing Page and submitted project
- Read about how to deploy nextjs on subdomain for dev branch
### Thoughts:
- I wanted to quickly finish this project to get started on Loquela
- Add some color styles and pushed changes
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day66: 1/24/20
### Today's Progress:
- Add working carousel with logic to transition and google fonts
### Thoughts:
- I didn't use any packages and just implemented a basic carousel
- Used [article](https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na) for carousel
- Used [article](https://leerob.io/blog/things-ive-learned-building-nextjs-apps) for google font loading
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day65: 1/23/20
### Today's Progress:
- Worked on rearranging sectinos on FCC Landing Page Project
- Brainstorming and checking out ways to improve the look for the website
- Had onsite interview
### Thoughts:
- I'm thinking about doing a carousel for the big images, adding color slants
- Prepared the carousel component for tomorrow
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day64: 1/22/20
### Today's Progress:
- Worked on usage section of FCC Landing Page Project
- Review more programming concepts for job interview
- Went to a winter job fair in Austin, TX
### Thoughts:
- I feel like I still don't fully know JS and React, but going to try my best on the interview
- I never thought I would get an interview with this big finance company, but consistent hard work and putting in stellar effort might get you there
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)
- [Dev Concepts](https://drive.google.com/file/d/1TG_67DVOBvNJiu-xZJQ-_dDSTL609aAO/view?usp=sharing)

---
## Day63: 1/21/20
### Today's Progress:
- Worked on media query for 768px of FCC Landing Page Project
- Reviewed concepts about javascript prototype, inheritance, and composition
- Went to a tech meetup: Build a Job-Winning LinkedIn Profile
### Thoughts:
- With sass, I will do the media query under each element
- That helps keep it together instead of doing a big media query for the whole component
- Classes are syntactical sugar on top of javascript prototypes
- There's many ways to write inheritance so one should get familiar
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)
- [Dev Concepts](https://drive.google.com/file/d/1TG_67DVOBvNJiu-xZJQ-_dDSTL609aAO/view?usp=sharing)

---
## Day62: 1/20/20
### Today's Progress:
- Update portfolio website for twitter link and project link
- Pair-programmed with a dev friend on Loquela Project
### Thoughts:
- We set up create react app and taught my friend about the Scrum Workflow
- We went over how to work with other devs with master, dev, and feature branches
### Link(s) to Work:
- [Loquela Repo](https://github.com/loquela-espanol)

---
## Day61: 1/19/20
### Today's Progress:
- Reviewed Algorithms and Javascript knowledge to prepare for interview
- Worked on FCC Landing Page App and finished up to user story #14 to add a sticky navbar and gradient border bottom
- Started tdNet2 nextjs project
### Thoughts:
- Call is just like bind in the way it takes arguments, however apply takes an array as a second argument
- Creating a gradient color bottom used a background instead of `border-bottom: 5px solid linear-gradient(blue, green)`
- I had `autofocus` on one of the form inputs and that caused a page jump bug (live and learn)
- Decided that I want to stick with styled components over doing Sass so I can get better at it
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day60: 1/18/20
### Today's Progress:
- Worked on FCC Landing Page App and finished up to user story #13
- Learned how to create react forms with a custom React Hook
- Read opinions on PostgreSQL, MongoDB, Apollo GraphQL to prepare for upcoming app
### Thoughts:
- A hooksLib file holds the function to take care of form values and resuable across many components
- I also used async/await just to practice the syntax
- [Custom React Hook Article](https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html)
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)
- [Loquela Organization](https://github.com/loquela-espanol)

---
## Day59: 1/17/20
### Today's Progress:
- Worked on FCC Landing Page App and finished up to user story #12
- Set up loquela organization and Taiga board for spanish practice tool
### Thoughts:
- I think using emmet to make forms is faster and I always have to think through the form attributes
- labels should have `htmlFor`
- inputs should have `id`, `name`, `type`, `placeholder`, and optional `required`
- Learned that I can do an input with `type` of submit and `value` of Submit
- Had meet with another dev to pick tech stack, decide work tools, and deploy basic repos
### Link(s) to Work:
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)
- [Loquela Organization](https://github.com/loquela-espanol)

---
## Day58: 1/16/20
### Today's Progress:
- Finished FEM Complete Intro to React Course, v5 with learning about Portals
- Worked on FCC Landing Page App and finished up to user story #7
- Built out section linking to 3 sections, embedded product video with react-youtube npm package
### Thoughts:
- Learned how portals work by creating a component separate from the deeply nested structure of the DOM
- Still don't quite understand the use cases for portals in practice
- `react-youtube` was an easy to use youtube embedder package
### Link(s) to Work:
- [FEM Course Notes](https://drive.google.com/file/d/15IoqcpBLhpRSFJUVVM5o3O3Py3phM7Gw/view?usp=sharing)
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day57: 1/15/20
### Today's Progress:
- Finished Context section on FEM Complete Intro to React Course, v5
- Finished FEM Complete Intro to React Course, v5 with learning about Portals
- Worked on FCC Landing Page App and finished up to user story #7
- Built out section linking to 3 sections, embedded product video with react-youtube npm package
### Thoughts:
- Learned how to create context, use context with hooks, and persisting context with hooks
- SVG are really cool lossless image types but learning the viewport and viewbox is necessary
- [Viewport and Viewbox Article](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844)
### Link(s) to Work:
- [FEM Course Notes](https://drive.google.com/file/d/15IoqcpBLhpRSFJUVVM5o3O3Py3phM7Gw/view?usp=sharing)
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day56: 1/14/20
### Today's Progress:
- Finished Error Boundaries section on FEM Complete Intro to React Course, v5
- Worked a little bit on FCC project
- Worked on building header and using SVG images and learning to work with them
### Thoughts:
- Error boundaries helps captures data without crashing your program
- Error Boundary works only when it's a HOC
- Can't do error boundaries without classes, can't do it in hooks
- In hooks, there is no equivalent `static getDerivedStateFromError` or `componentDidCatch`
### Link(s) to Work:
- [FEM Course Notes](https://drive.google.com/file/d/15IoqcpBLhpRSFJUVVM5o3O3Py3phM7Gw/view?usp=sharing)
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day55: 1/13/20
### Today's Progress:
- Finished Class Components section on FEM Complete Intro to React Course, v5
- Set up Nextjs and typescript for FCC Product Landing Page project
### Thoughts:
- Learned about creating an image carousel, context, and implementation
- Learned that the plus sign turns item into a number: `active: +event.target.dataset.index`
- Yarn uses `yarn add typescript --dev` to add to dev dependencies [Link](https://yarnpkg.com/lang/en/docs/cli/install/)
### Link(s) to Work:
- [FEM Course Notes](https://drive.google.com/file/d/15IoqcpBLhpRSFJUVVM5o3O3Py3phM7Gw/view?usp=sharing)
- [FCC Product Landing Page](https://github.com/timh1203/fccProductLandingPage)

---
## Day54: 1/12/20
### Today's Progress:
- Finished the rest of the videos on AWS deployment
### Thoughts:
- Learned about Nginx production setup and setting up a production database
### Link(s) to Work:

---
## Day54: 1/11/20 (Forgot to report)
### Today's Progress:
- Ran a production build for app
- Ran the express to serve up the client on 1 command
### Thoughts:
- We make it a single app by transfering the build folder to the server folder
- We check if it's a production build and then serves up index.html
- Server is running but running html code as text
- Learned `sudo chmod 777 <folder name>` helps grant permissions for a folder on AWS EC2, probably local as well
- The majority of
- PM2 (npm library) is an production process manager for node apps that reruns our app if it crashes, needs to be installed globally on our EC2
### Link(s) to Work:

---
## Day53: 1/10/20
### Today's Progress:
- Creating a RDS database on AWS and appropriate tables
### Thoughts:
- After creating a database, you also have to create a security group for the db
- Use `sudo amazon-linux-extras install postgresql9.6` to install package on Amazon AMI
- Use `psql --version` to check if installed correctly
- Use `psql -d vpcalphadb -h vpcalphadb.ce8bphwbwlja.us-east-2.rds.amazonaws.com -p 5432 =U timh1203 -p 5432 -U timh1203` to connect to DB
- Used create table commands to make new tables on Amazon PSQL DB
### Link(s) to Work:

---
## Day52: 1/9/20
### Today's Progress:
- Took assessment to get Frontend badge at hired.com
- Work on AWS learning to create VPC, subnets, route tables, internet gateways, and security groups with inbound rules
### Thoughts:
- The 2d array programming question was difficult
- Concept was easy but implementation was more challenging
- AWS requires that we have 2 private subnets available
- EC2 instance is a virtual computer like your home but will act as our web server
- SSH is how we log into out Linux EC2 server, Putty is a GUI for SSH
- [Helpful Link to fix SSH error](https://99robots.com/how-to-fix-permission-error-ssh-amazon-ec2-instance/)
- `sudo nano` is the mini editor in the SSH shell
### Link(s) to Work:

---
## Day51: 1/8/20
### Today's Progress:
- Worked through understanding general AWS architecture
### Thoughts:
- Hardware is virtualized in cloud computing (routers, switches, internet gateways)
- An IPv4 address has 4 bytes, each byte is 8 bits (octet), an octet can be 2^8 (0-255), 256^4 = 4.3 billion combos of IP addresses
- A VPC (virtual Private Cloud) is a an all-in-one virtual resource which houses web servers, databases, file servers, and message servers
- A subnet is a small section of the entire VPC, divided for performance and security reasons
- Subnet masks use CIDR notation, which has the first 24 bits as unusable and the remaining 8 bits are used as host addresses
- Subnet maks should have increments of 8 (8, 16, 24)
### Link(s) to Work:

---
## Day50: 1/7/20
### Today's Progress:
- Worked on full stack app to implement admin panel but decided to skip
- Opted to learn AWS instead and learned about Elastic Beanstalk
### Thoughts:
- Decided to skip the admin part because it writes on top of existing app
- Would rather learn AWS deployment as I'm sure I can set up an admin dashboard
- Learned that Elastic Beanstalk is a quick deploy and we can use a free tier
- Then terminated the instance so we won't be charged
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day49: 1/6/20
### Today's Progress:
- Worked on full stack app
- Fixed delete and reply to routes
- Set up auth0 for admin app
### Thoughts:
- The admin app is used by the admin in order to control users and messages
- The admin app uses a separate application and database on Auth0
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day48: 1/5/20
### Today's Progress:
- Not much time today but worked on fixing the private message feature
- Able to pass messages to PSQL db and save
- Able to retrieve messages from db and display
### Thoughts:
- I need to be careful about the order in server routes
- I had this reversed
- IE `(req, res, next)`
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day47: 1/4/20
### Today's Progress:
- Worked on full stack app and added private messaging features
- Debugging why the messages aren't passing to the server
### Thoughts:
- You can pass a state component with react-router's Link and can be used by the the child
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day 46: 1/3/20
### Today's Progress:
- Worked on full stack app and implemented user profile and user post routes
### Thoughts:
- Ran into some error about a redux method, but turns out it was just an error in method name
- The error was: "Invariant Violation: Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined."
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day45: 1/2/20
### Today's Progress:
- Worked on full stack app and implemented on adding Text Search functionality
- Learned about TSvector and TSquery as a search pattern for PSQL databases
### Thoughts:
- TSvector - a list of lexemes (word variants for past tense and plural)
- TSquery - allows search and compare of lexemes
- TS is more effective than LIKE% solution
- `ALTER TABLE posts ADD COLUMN search_vector TSVECTOR` is a command used to add a new column in the table
- `to_ts_vector()` is a psql command to convert data into a vector on the database
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day44: 1/1/20
### Today's Progress:
- Worked on full stack app and added unauthorized redirect to signup page
- Fixed the like post feature
- Add moment to format the time
### Thoughts:
- I had to drop tables in the database and run the create table commands again to get the new columns
- Unauthorized redirect checks the is_authenticated boolean and sends the user to signup if they haven't
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day43: 12/31/19
### Today's Progress:
- Worked on full stack app and adding like button with some styles
### Thoughts:
- Some parts of PSQL schema is not working so I have to work on fixing it or learning more
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day42: 12/30/19
### Today's Progress:
- Worked on full stack app and adding keyframe animations for posts and comments
### Thoughts:
- Instead of redirecting via history page, you can scroll to top with `window.scroll({ top: 0, left: 0, behavior: 'smooth' })`
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day41: 12/29/19
### Today's Progress:
- Worked on full stack app by adding more animation and fixing pagination component
### Thoughts:
- Pagination can be done different ways
- This case, all the results are paginated on the client side
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day40: 12/28/19
### Today's Progress:
- Worked on full stack app by adding animations, additional component functions
- Started working on adding the pagination component
### Thoughts:
- I found that exporting the redux dispatch functions the same name works better
- I spent the longest time trying to fix it but that's what ultimately ended up working
- Therefore I just changed the action name in the end to match
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day39: 12/27/19
### Today's Progress:
- Worked on full stack app by fixing client/server communications
### Thoughts:
- Reviewed differences about req.params vs req.query and fixed bug in my app
- [Helpful Link](https://stackoverflow.com/questions/14417592/node-js-difference-between-req-query-and-req-params)
- Learned that you should always be running the app when you're developing
- It's easy to get mixed up between res and req, I've done it here
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day38: 12/26/19
### Today's Progress:
- Worked on full stack app by adding AddPost, Posts, ShowPosts components
### Thoughts:
- There's a lot of things going on between the state component, redux state, and db state
- Take the time to understand how things are moving and how information is being passed along
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day37: 12/25/19
### Today's Progress:
- Worked on full stack app and added comments and users route endpoints
### Thoughts:
- Learned `ON CONFLICT DO NOTHING` was a psql command to help prevent overwriting in the db
- Practiced more of the different routes that are common
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day36: 12/24/19
### Today's Progress:
- Work on full stack app to build server api endpoints
### Thoughts:
- Learned about general CRUD endpoints that deal with psql database and psql commands
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day35: 12/23/19
### Today's Progress:
- Work on full stack app to connect client and server
- Setup a local database for psql, dotenv, actions&reducers, and saving db profile
### Thoughts:
- Learned that I was able to make requests from server because of proxy
- This helps prevents CORS issues because client and server essentially originate from the same `localhost:5000`
- Learned that ORM sequelize is a middle man and has its own language
- I would rather have SQL skills transfer than ORM skills, more resources for SQL than ORM, more granular control
- Redux Form, a popular library, is also another level of complexity isn't needed
- Useful psql commands: `CREATE DATABASE <db name>:`, `\c <dbname>`, `\dt`
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day34: 12/22/19
### Today's Progress:
- Work on full stack app to connect client and server
### Thoughts:
- Learned how to use "proxy" in client package.json to connect client and server together (Cool!)
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day33: 12/21/19
### Today's Progress:
- Started new react app with react, node, psql, and aws
### Thoughts:
- I signed up for an AWS account and installed PSQL and Express Generator
- Went through information about node and different npm packages
### Link(s) to Work:
- [react-node-postgresql-aws-2019](https://github.com/timh1203/react-node-postgresql-aws-2019)

---
## Day 32: 12/20/19
### Today's Progress:
- Finished building the react app with hooks, reducer, and context
### Thoughts:
- Wow, I learned a great deal going through this and cool to see how everything fits together
- My understanding is that `useReducer` is used to sync data with the redux store, therefore making data global scoped
- `useContext` is used to access the global data and have state persist between components
- My question now: How and should I even use hooks/reducer/context to replace Redux?
### Link(s) to Work:
- [react-redux-auth0-hooks-2019 Repository](https://github.com/timh1203/react-redux-auth0-hooks-2019)

---
## Day31: 12/19/19
### Today's Progress:
- Continue with building the react app, learned about context API, react hooks, useState(), useEffect(), useReducer()
### Thoughts:
- Started a new repository for comparison purposes with normal react/redux pattern
- Learned how to make a global state with context and useReducer()
- If I had to say, Hooks is so much easier to set up than redux in my opinion but I still have not used Hooks in production yet
- Context is a way to pass down data to deeply nested children components
### Link(s) to Work:
- [react-redux-auth0-hooks-2019 Repository](https://github.com/timh1203/react-redux-auth0-hooks-2019)

---
## Day30: 12/18/19
### Today's Progress:
- Finished on "Merge Two Sorted Lists" from Leetcode
- Continue with building the react app, learned about social logins, user profile, and silent authentication patterns
### Thoughts:
- This problem used singly linked-list which made conceptually challenging for code implementation
- Finished the section on authentication and learned a lot about how authentication flow is suppose to work
- Again, rushed through it at the workplace since we were under time constraints
- To see the proper flow helps tremendously in seeing how all the parts fit together
### Link(s) to Work:
- [LeetCode Problems: Merge Two Sorted Lists](https://drive.google.com/file/d/1MCM-DWH43pob1UaVw-mmD1q57RQ972Gv/view?usp=sharing)
- [react-redux-auth0-2019 Repository](https://github.com/timh1203/reactapp2019)

---
## Day29: 12/17/19
### Today's Progress:
- Finished on "Valid Parentheses" from Leetcode
- Continue with building the react app, learned about react router and auth0 patterns
### Thoughts:
- Understood the concept but didn't know how to translate to code right away
- Picked up a lot reviewing how to do auth0 again
- It felt rushed the first time since I had to produce for work but now I can take time
### Link(s) to Work:
- [LeetCode Problems: Valid Parentheses](https://drive.google.com/file/d/1MCM-DWH43pob1UaVw-mmD1q57RQ972Gv/view?usp=sharing)
- [react-redux-auth0-2019 Repository](https://github.com/timh1203/reactapp2019)

---
## Day28: 12/16/19
### Today's Progress:
- Finished on "Longest Common Prefix" from Leetcode
- Continue with building the react app, learned redux pattern
- Updated my portfolio website with project from engineering position
### Thoughts:
- It feels good to review the setup for redux since it's always extensive
- I learned the difference between calling an action creator object vs an action creator function
### Link(s) to Work:
- [LeetCode Problems: Longest Common Prefix](https://drive.google.com/file/d/1MCM-DWH43pob1UaVw-mmD1q57RQ972Gv/view?usp=sharing)
- [react-redux-auth0-2019 Repository](https://github.com/timh1203/reactapp2019)

---
## Day27: 12/15/19
### Today's Progress:
- Finished on "Roman to Integer" from Leetcode
- Started a new react app to learn patterns
### Thoughts:
- This algorithm was one I have done in the past for freeCodeCamp
- Create-react-app was deprecated, I used `yarn create react-app <appname>` instead
- Review react syntax that I might see in older codebases
- Learn a couple of new patterns for conditional rendering and working with arrays
### Link(s) to Work:
- [LeetCode Problems: Roman to Integer](https://drive.google.com/file/d/1MCM-DWH43pob1UaVw-mmD1q57RQ972Gv/view?usp=sharing)
- [react-redux-auth0-2019 Repository](https://github.com/timh1203/reactapp2019)

---
## Day26: 12/14/19
### Today's Progress:
- Finished "Build a survey form" project and submitted
- Finished on "Palindrome Number" from Leetcode
### Thoughts:
- Rechecked all the user stories
- Preparing what to do tomorrow
### Link(s) to Work:
- [Survey Form CodePen](https://codepen.io/timh1203/pen/KKwMdNy) or [Github Repository](https://github.com/timh1203/buildASurveyForm)
- [LeetCode Problems: Palindrome Number](https://drive.google.com/file/d/1MCM-DWH43pob1UaVw-mmD1q57RQ972Gv/view?usp=sharing)

---
## Day25: 12/13/19
### Today's Progress:
- Finished on "Reverse Integer" from Leetcode
- Worked on "Build a survey form" project, finished all the basic styles
### Thoughts:
- Decide to switch up to another platform
- Learned about `Math.sign(x)` which returns 1/-1 depending if negative number
- Reviewed a lot of things from CSS that I haven't use in awhile like selectors and learned something new, `background-blend-mode`
### Link(s) to Work:
- [LeetCode Problems: Reverse Integer](https://drive.google.com/file/d/1MCM-DWH43pob1UaVw-mmD1q57RQ972Gv/view?usp=sharing)
- [Survey Form CodePen](https://codepen.io/timh1203/pen/KKwMdNy) or [Github Repository](https://github.com/timh1203/buildASurveyForm)

---
## Day24: 12/12/19
### Today's Progress:
- Finished on "Count Triplets" from Hash Tables section of Interview Prep Kit
- Worked on "Build a survey form" project, finished all user stories (16 total user stories)
### Thoughts:
- This algorithm was truly hard for me and had to get some help
- I learned the use of JS ES6 Maps which was pretty cool
- I didn't expect how usefulness of a data structure
- Reviewed different form types besides text: `number`, `checkbox`, `radio`
- There's many other types I didn't use but are interested in: `date`, `datetime-local`, `file`, `range`, `tel`, `url`, `week`, and the list goes on
- Now just have to style my app
### Link(s) to Work:
- [HackerRank Problems: Count Triplets](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
- [Survey Form CodePen](https://codepen.io/timh1203/pen/KKwMdNy) or [Github Repository](https://github.com/timh1203/buildASurveyForm)

---
## Day23: 12/11/19
### Today's Progress:
- Working on "Count Triplets" from Hash Tables section of Interview Prep Kit
- Started on "Build a survey form" project, finished 6 user stories (16 total user stories)
### Thoughts:
- Got the basic cases working but having difficulty when `r` is 1
- So far so good on the project, I'm trying to be mindful to use the new html tags that I learned in the previous lessons like `<main>` or `<section>`
### Link(s) to Work:
- [HackerRank Problems: Sherlock and Anagrams](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
- [Survey Form CodePen](https://codepen.io/timh1203/pen/KKwMdNy)

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
- [HackerRank Problems: Sherlock and Anagrams](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
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
- [HackerRank Problems: Sherlock and Anagrams](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
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
- [HackerRank Problems: Two Strings](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)

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
- [HackerRank Problems: Ransom Note](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
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
- [HackerRank Problems: Minimum Swaps 2](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
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
- [HackerRank Problems: New Years Chaos](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)

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
- [HackerRank Problems: Left Rotation](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
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
- [HackerRank Problems: 2D Array](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)
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
- [HackerRank Problems: 2D Array](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)

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
- [HackerRank Problems: Repeated String](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)

---
## Day11: 11/29/19
### Today's Progress:
- Worked on Warm-up Challenges: Jumping on the Clouds
### Thoughts:
- I figured doing a while loop through the end is most efficient
- As it progresses, it checks if it can jump 2 times first, then 1
- I would ask further in an interview if they want me to check any edge cases
### Link(s) to Work:
- [HackerRank Problems: Jumping on the Clouds](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)

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
- [HackerRank Problems: Counting Valleys](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)

---
## Day9: 11/27/19
### Today's Progress:
- Worked on Warm-up Challenges: Sock Merchant
### Thoughts:
- I had a difficult time at first since I didn't think of sorting the input first
- Once it's sorted, it's easy to determine the number of matching socks
- This is good practice because HackerRank makes you think from different angles
### Link(s) to Work:
- [HackerRank Problems: Sock Merchant](https://drive.google.com/file/d/1yfNI7wwBBUpap3eU4d9Q9jEv8RSpDkcP/view?usp=sharing)

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
