//////////////////
// Diff Two Arrays
// https://www.freecodecamp.org/challenges/diff-two-arrays
//////////////////
// Method 1
var arr1 = [1, 2, 3, 5];
var arr2 = [1, 2, 3, 4, 5];
var array = arr1.concat(arr2).sort(); // [1,1,2,2,3,3,4,5,5]
var newArr = [];

for (var i = 0; i < array.length; i++) {
  if ((array[i] !== array[i-1]) && (array[i] !== array[i+1])) {
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

//////////////////
// Roman Numeral Converter
// https://www.freecodecamp.org/challenges/roman-numeral-converter
//////////////////

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
    one.push(arr[arr.length-1]);
  }
  
  if (arr.length === 2) {
    one.push(arr[arr.length-1]);
    ten.push(arr[arr.length-2]);
  }

  if (arr.length === 3) {
    one.push(arr[arr.length-1]);
    ten.push(arr[arr.length-2]);
    hundred.push(arr[arr.length-3]);
  }

  if (arr.length === 4) {
    one.push(arr[arr.length-1]);
    ten.push(arr[arr.length-2]);
    hundred.push(arr[arr.length-3]);
    thousand.push(arr[arr.length-4]);
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

/////////////////////
// Wherefore art thou (12/23/2017)
// https://www.freecodecamp.org/challenges/wherefore-art-thou
/////////////////////

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
  
  return collection.filter(function(obj) {
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
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
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

/////////////////////
// Search and Replace (12/24/2017)
// https://www.freecodecamp.org/challenges/search-and-replace
/////////////////////
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

/////////////////////
// Pig Latin (12/26/2017)
// https://www.freecodecamp.org/challenges/pig-latin
/////////////////////
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

/////////////////////
// DNA Pairing (12/27/2017)
// https://www.freecodecamp.org/challenges/dna-pairing
/////////////////////
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
      newArr.push(['A','T'])
      n++;
    } else if (splitStr[n] === 'C') {
      newArr.push(['C','G']);
      n++;
    } else if (splitStr[n] === 'T') {
      newArr.push(['T','A']);
      n++;
    } else if (splitStr[n] === 'G') {
      newArr.push(['G','C']);
      n++
    }
  }
  
  return newArr;
}

pairElement("GCG");
pairElement("ATCGA")
pairElement("TTGAG")
pairElement("CTCTA")

/////////////////////
// Missing Letters (12/27/2017)
// https://www.freecodecamp.org/challenges/missing-letters
/////////////////////
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let arr = [];
  let num;
  
  for (let index in str) {
    arr.push(str.charCodeAt(index));
  }
  
  num = arr[0];
  
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] === num) {
      num = arr[i]+ 1;
    } 
  }

  if (arr[arr.length-1] === num) {
    return undefined;
  } else {
    return String.fromCharCode(num);
  }
}

fearNotLetter("abd");
fearNotLetter("abcdefghjklmno")
fearNotLetter("bcd")
fearNotLetter("yz")

/////////////////////
// Boo Who (12/28/2017)
// https://www.freecodecamp.org/challenges/boo-who
/////////////////////
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

/////////////////////
// Sorted Union (1/19/2017)
// https://www.freecodecamp.org/challenges/sorted-union
/////////////////////
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

/////////////////////
// Convert HTML Entities (1/19/2017)
// https://www.freecodecamp.org/challenges/convert-html-entities
/////////////////////
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

/////////////////////
// Spinal Tap Case (1/20/2017)
// https://www.freecodecamp.org/challenges/spinal-tap-case
/////////////////////
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

/////////////////////
// Sum All Odd Fibonacci Numbers (1/21/2017)
// https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers
/////////////////////
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
function sumFibs(num) {
	var arr = generateArray(num);
	
	arr.forEach( (numeral, i) => {
		if(numeral % 2 === 0) {
			arr.splice(i, 1)	
		}
	})

	let newArr = arr.reduce( (acc, val) => acc + val)
	
	return newArr;
}

function generateArray(num) {
	let arr = [1,1]
	
	while (true) {
		let count = arr[arr.length-1] + arr[arr.length-2];
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

/////////////////////
// Sum All Primes (1/22/2017)
// https://www.freecodecamp.org/challenges/sum-all-primes
/////////////////////
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
	let total = arr.reduce( (acc, val) => acc + val);
}	

sumPrimes(10);
sumPrimes(977);

