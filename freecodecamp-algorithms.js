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

/////////////////////
// Smallest Common Multiple (1/24/2018)
// https://www.freecodecamp.org/challenges/smallest-common-multiple
/////////////////////
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
	let sorted = arr.sort();
	let range = [];
	let lcm;
	
	// Get all numbers in the range
	for (var i = sorted[0]; i <= sorted[1]; i++){
		range.push(i);	
	}
	
	// Find the lowest common multiple for all numbers in the range
		let iterator = 1;
		let count = arr[1]*iterator;
		
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
			count = arr[1]*iterator;
		}
	}
}

smallestCommons([1,5]); // 60
smallestCommons([5, 1]) // 60
smallestCommons([1, 13]) // 360360
smallestCommons([23, 18]) // 6056820

/////////////////////
// Finders Keepers (1/25/2018)
// https://www.freecodecamp.org/challenges/finders-keepers
/////////////////////
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

function findElement(arr, func) {
	let filtered = arr.filter(func);
	return filtered[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

/////////////////////
// Drop it (1/25/2018)
// https://www.freecodecamp.org/challenges/drop-it
/////////////////////
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

dropElements([1, 2, 3], function(n) {return n < 3; }); //[1, 2, 3]
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // [3,4]
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // [1,0,1]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // []

/////////////////////
// Steamroller (1/27/2018)
// https://www.freecodecamp.org/challenges/steamroller
/////////////////////
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
	return arr.reduce( (acc, val) => {
		return acc.concat( Array.isArray(val) ? steamrollArray(val) : val);
	}, []);
}

steamrollArray([[1], 2, [[3], [4]]]); // [1, 2, 3, 4]
steamrollArray([[["a"]], [["b"]]]); // ["a", "b"]
steamrollArray([1, [], [3, [[4]]]]) // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]) // [1, {}, 3, 4]

/////////////////////
// Binary Agents (1/29/2018)
// https://www.freecodecamp.org/challenges/binary-agents
/////////////////////
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

/////////////////////
// Everything Be True (1/29/2018)
// https://www.freecodecamp.org/challenges/everything-be-true
/////////////////////
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

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // true

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // false

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") // false

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") // false

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") // true

truthCheck([{"single": "yes"}], "single") // true

truthCheck([{"single": ""}, {"single": "double"}], "single") // false

truthCheck([{"single": "double"}, {"single": undefined}], "single") // false

truthCheck([{"single": "double"}, {"single": NaN}], "single") // false