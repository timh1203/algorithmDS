# Coding Bat
- https://codingbat.com/python

---

## Warmup-1 sleep_in
- https://codingbat.com/prob/p173401
```py
# The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
# sleep_in(False, False) → True
# sleep_in(True, False) → False
# sleep_in(False, True) → True
# sleep_in(True, True) → True

def sleep_in(weekday, vacation):
  if weekday == False and vacation == False: return True
  
  elif weekday == True and vacation == False: return False
  
  elif weekday == False and vacation == True: return True
  
  else: return True
```

---

## Warmup-1 monkey_trouble
- https://codingbat.com/prob/p120546
```py
# We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble.
# monkey_trouble(True, True) → True
# monkey_trouble(False, False) → True
# monkey_trouble(True, False) → False
# monkey_trouble(False, True) → False

def monkey_trouble(a_smile, b_smile):
  if a_smile == True and b_smile == True: return True
  
  elif a_smile == False and b_smile == True: return False
  
  elif a_smile == True and b_smile == False: return False
  
  else: return True
```

---

## Warmup-1 sum_double
- https://codingbat.com/prob/p141905
```py
# Given two int values, return their sum. Unless the two values are the same, then return double their sum.
# sum_double(1, 2) → 3
# sum_double(3, 2) → 5
# sum_double(2, 2) → 8

def sum_double(a, b):
  if (a == b):
    return 2 * (a + b)
  else:
    return a + b
```

---

## Warmup-1 diff21
- https://codingbat.com/prob/p197466
```py
# Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
# diff21(19) → 2
# diff21(10) → 11
# diff21(21) → 0

def diff21(n):
  if n <= 21:
    return 21-n
  else:
    return (n-21) * 2
```

---

## Warmup-1 parrot_trouble
- https://codingbat.com/prob/p166884
```py
# We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return True if we are in trouble.
# parrot_trouble(True, 6) → True
# parrot_trouble(True, 7) → False
# parrot_trouble(False, 6) → False

def parrot_trouble(talking, hour):
  if talking and hour < 7:
    return True
  elif talking and hour > 20:
    return True
  else:
    return False

# ALTERNATE
# Need extra parenthesis around the or clause
# since and binds more tightly than or.
# and is like arithmetic *, or is like arithmetic +
def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))
```

---

## Warmup1 makes10
- https://codingbat.com/prob/p124984
```py
# Given 2 ints, a and b, return True if one if them is 10 or if their sum is 10.
# makes10(9, 10) → True
# makes10(9, 9) → False
# makes10(1, 9) → True

def makes10(a, b):
  if a == 10 or b == 10:
    return True
  elif a + b == 10:
    return True
  else:
    return False
```

---

## Warmup1 near_hundred
- https://codingbat.com/prob/p124676
```py
# Given an int n, return True if it is within 10 of 100 or 200. Note: abs(num) computes the absolute value of a number.
# near_hundred(93) → True
# near_hundred(90) → True
# near_hundred(89) → False
def near_hundred(n):
  if 89 < n < 111 or 189 < n < 211:
    return True
  else:
    return False

# ALTERNATE
def near_hundred(n):
  return (abs(100-n) <= 10) or (abs(200-n) <= 10)
```

---

## Warmup1 pos_neg
- https://codingbat.com/prob/p162058
```py
# Given 2 int values, return True if one is negative and one is positive. Except if the parameter "negative" is True, then return True only if both are negative.
# pos_neg(1, -1, False) → True
# pos_neg(-1, 1, False) → True
# pos_neg(-4, -5, True) → True
def pos_neg(a, b, negative):
  if negative:
    return (a<0 and b<0)
  else:
    return (a<0 and b>0) or (a>0 and b<0)
```

---

## Warmup1 not_string
- https://codingbat.com/prob/p189441
```py
# Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.
# not_string('candy') → 'not candy'
# not_string('x') → 'not x'
# not_string('not bad') → 'not bad'
def not_string(str):
	if str.startswith("not"):
		return str
	else:
		return "not " + str

# ALTERNATE
def not_string(str):
  if len(str) >= 3 and str[:3] == "not":
    return str
  return "not " + str
  # str[:3] goes from the start of the string up to but not
  # including index 3
```

---

## Warmup1 missing_char
- https://codingbat.com/prob/p149524
```py
# Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..len(str)-1 inclusive).
# missing_char('kitten', 1) → 'ktten'
# missing_char('kitten', 0) → 'itten'
# missing_char('kitten', 4) → 'kittn'
def missing_char(str, n):w
	return str[0:n] + str[n+1:]

# ALTERNATE
def missing_char(str, n):
  front = str[:n]   # up to but not including n
  back = str[n+1:]  # n+1 through end of string
  return front + back
```

---

## Warmup1 front_back
- https://codingbat.com/prob/p153599
```py
# Given a string, return a new string where the first and last chars have been exchanged.
# front_back('code') → 'eodc'
# front_back('a') → 'a'
# front_back('ab') → 'ba'
def front_back(str):
  if len(str) <= 1:
    return str
  elif len(str) == 2:
    return (str[len(str)-1] + str[0])
  else:
	  return (str[len(str)-1] + str[1:len(str)-1] + str[0])

# ALTERNATE
def front_back(str):
  if len(str) <= 1:
    return str
  
  mid = str[1:len(str)-1]  # can be written as str[1:-1]
  
  # last + mid + first
  return str[len(str)-1] + mid + str[0]
```

---

## Warmup1 front3
- https://codingbat.com/prob/p147920
```py
# Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
# front3('Java') → 'JavJavJav'
# front3('Chocolate') → 'ChoChoCho'
# front3('abc') → 'abcabcabc'
def front3(str):
  if len(str) < 3:
    return (str * 3) 
  else:
    return (str[:3] * 3)

# ALTERNATE
def front3(str):
  # Figure the end of the front
  front_end = 3
  if len(str) < front_end:
    front_end = len(str)
  front = str[:front_end]
  return front + front + front 
  
  # Could omit the if logic, and write simply front = str[:3]
  # since the slice is silent about out-of-bounds conditions.
```

---

## Warmup2 string_times
- https://codingbat.com/prob/p193507
```py
# Given a string and a non-negative int n, return a larger string that is n copies of the original string.
# string_times('Hi', 2) → 'HiHi'
# string_times('Hi', 3) → 'HiHiHi'
# string_times('Hi', 1) → 'Hi'
def string_times(str, n):
  return str * n;

# ALTERNATE
def string_times(str, n):
  result = ""
  for i in range(n):  # range(n) is [0, 1, 2, .... n-1]
    result = result + str  # could use += here
  return result
```

---

## Warmup2 front_times
- https://codingbat.com/prob/p165097
```py
# Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;
# front_times('Chocolate', 2) → 'ChoCho'
# front_times('Chocolate', 3) → 'ChoChoCho'
# front_times('Abc', 3) → 'AbcAbcAbc'
def front_times(str, n):
  return str[:3]*n

# ALTERNATE
def front_times(str, n):
  front_len = 3
  if front_len > len(str):
    front_len = len(str)
  front = str[:front_len]
  
  result = ""
  for i in range(n):
    result = result + front
  return result
```

---

## Warmup2 string_bits
- https://codingbat.com/prob/p113152
```py
# Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
# string_bits('Hello') → 'Hlo'
# string_bits('Hi') → 'H'
# string_bits('Heeololeo') → 'Hello'
def string_bits(str):
  result = ""
  if len(str) < 1:
    return ''
  elif len(str) < 3:
    result = str[0]
  else:
    for i in range(len(str)):
      if i % 2 == 0:
        result += str[i]
      else:
        continue
  return result

# ALTERNATE
def string_bits(str):
  result = ""
  # Many ways to do this. This uses the standard loop of i on every char,
  # and inside the loop skips the odd index values.
  for i in range(len(str)):
    if i % 2 == 0:
      result = result + str[i]
  return result
```

---

## Warmup2 string_splosion (4/15/19)
- https://codingbat.com/prob/p118366
```py
# Given a non-empty string like "Code" return a string like "CCoCodCode".
# string_splosion('Code') → 'CCoCodCode'
# string_splosion('abc') → 'aababc'
# string_splosion('ab') → 'aab'
def string_splosion(str):
	result = ""
	for i in range(len(str)):
		result += str[0:i+1]
	return result
```

---

## Warmup2 last2 (4/15/19)
- https://codingbat.com/prob/p145834
```py
# Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).
# last2('hixxhi') → 1
# last2('xaxxaxaxx') → 1
# last2('axxxaaxx') → 2
def last2(str):
	count = 0
	lastTwo = str[-2:]

	if len(str) < 2:
		return 0

	for i in range(len(str)-2):
		sub = str[i:i+2]
		if sub == lastTwo:
			count += 1
	return count


print(last2('hixxhi')) # 1
print(last2('xxaxxaxxaxx')) # 3
```

---

## Warmup2 array_count9 (4/15/19)
- https://codingbat.com/prob/p166170
```py
# Given an array of ints, return the number of 9's in the array.
# array_count9([1, 2, 9]) → 1
# array_count9([1, 9, 9]) → 2
# array_count9([1, 9, 9, 3, 9]) → 3
def array_count9(nums):
	count = 0
	for i in nums:
		if i == 9:
			count += 1
	return count

print(array_count9([1,9,9,3,9]))
```

---

## Warmup2 array_front9 (4/15/19)
- https://codingbat.com/prob/p110166
```py
# Given an array of ints, return True if one of the first 4 elements in the array is a 9. The array length may be less than 4.
# array_front9([1, 2, 9, 3, 4]) → True
# array_front9([1, 2, 3, 4, 9]) → False
# array_front9([1, 2, 3, 4, 5]) → False
def array_front9(nums):
	for i in nums[:4]:
		if i == 9:
			return True
	
	return False

print(array_front9([1,2,9,3,4]))
```

---

## Warmup2 array123 (4/15/19)
- https://codingbat.com/prob/p193604
```py
# Given an array of ints, return True if the sequence of numbers 1, 2, 3 appears in the array somewhere.
# array123([1, 1, 2, 3, 1]) → True
# array123([1, 1, 2, 4, 1]) → False
# array123([1, 1, 2, 1, 2, 3]) → True
def array123(nums):
	for i in range(len(nums)-2):
		if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
			return True
	return False

print(array123([1,1,2,3,1]))
```

---

## Warmup2 string_match
- https://codingbat.com/prob/p182414
```py
# Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.
# string_match('xxcaazz', 'xxbaaz') → 3
# string_match('abc', 'abc') → 2
# string_match('abc', 'axc') → 0
def string_match(a, b):
	matches = 0
	for i in range(len(a)-1):
		if a[i:i+2] == b[i:i+2]:
			matches += 1
	return matches

print(string_match('xxcaazz', 'xxbaaz'))
```

---

## String1 hello_name (4/16/19)
- https://codingbat.com/prob/p115413
```py
# Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
# hello_name('Bob') → 'Hello Bob!'
# hello_name('Alice') → 'Hello Alice!'
# hello_name('X') → 'Hello X!'
def hello_name(name):
  return 'Hello ' + name + '!'
```

---

## String1 make_abba (4/16/19)
- https://codingbat.com/prob/p182144
```py
# Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
# make_abba('Hi', 'Bye') → 'HiByeByeHi'
# make_abba('Yo', 'Alice') → 'YoAliceAliceYo'
# make_abba('What', 'Up') → 'WhatUpUpWhat'
def make_abba(a, b):
  return a + b + b + a
```

---

## String1 make_tags (4/16/19)
- https://codingbat.com/prob/p132290
```py
# The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
# make_tags('i', 'Yay') → '<i>Yay</i>'
# make_tags('i', 'Hello') → '<i>Hello</i>'
# make_tags('cite', 'Yay') → '<cite>Yay</cite>'
def make_tags(tag, word):
  return '<' + tag + '>' + word + '</' + tag + '>'
```

---

## String1 make_out_word (4/16/19)
- https://codingbat.com/prob/p129981
```py
# Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>".
# make_out_word('<<>>', 'Yay') → '<<Yay>>'
# make_out_word('<<>>', 'WooHoo') → '<<WooHoo>>'
# make_out_word('[[]]', 'word') → '[[word]]'
def make_out_word(out, word):
  return out[:2] + word + out[-2:]
```

---

## String1 extra_end (4/16/19)
- https://codingbat.com/prob/p148853
```py
# Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
# extra_end('Hello') → 'lololo'
# extra_end('ab') → 'ababab'
# extra_end('Hi') → 'HiHiHi'
def extra_end(str):
  return str[-2:] * 3

# ALTERNATE
def extra_end(str):
  end = str[-2:]
  return end + end + end
```

---

## String1 first_two (4/16/19)
- https://codingbat.com/prob/p184816
```py
# Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "".
# first_two('Hello') → 'He'
# first_two('abcdefg') → 'ab'
# first_two('ab') → 'ab'
def first_two(str):
  if len(str) <= 2:
    return str
  return str[:2]

# ALTERNATE
def first_two(str):
  if len(str) >= 2:
    return str[:2]
  else:
    return str
```

---

## String1 first_half (4/16/19)
- https://codingbat.com/prob/p107010
```py
# Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
# first_half('WooHoo') → 'Woo'
# first_half('HelloThere') → 'Hello'
# first_half('abcdef') → 'abc'
def first_half(str):
  half = len(str)/2
  return str[:half]

# ALTERNATE
```

---

## String1 without_end (4/16/19)
- https://codingbat.com/prob/p138533
```py
# Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
# without_end('Hello') → 'ell'
# without_end('java') → 'av'
# without_end('coding') → 'odin'
def without_end(str):
  return str[1:-1]
```

---

## String1 combo_string (4/16/19)
- https://codingbat.com/prob/p194053
```py
# Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
# combo_string('Hello', 'hi') → 'hiHellohi'
# combo_string('hi', 'Hello') → 'hiHellohi'
# combo_string('aaa', 'b') → 'baaab'
def combo_string(a, b):
  if len(a) < len(b):
    return a + b + a
  return b + a + b

```

---

## String1 non_start (4/16/19)
- https://codingbat.com/prob/p127703
```py
# Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
# non_start('Hello', 'There') → 'ellohere'
# non_start('java', 'code') → 'avaode'
# non_start('shotl', 'java') → 'hotlava'
def non_start(a, b):
  return a[1:] + b[1:]
```

---

## String1 left2
- https://codingbat.com/prob/160545
```py
# Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.
# left2('Hello') → 'lloHe'
# left2('java') → 'vaja'
# left2('Hi') → 'Hi'
def left2(str):
  if len(str) == 2:
    return str
  return str[2:] + str[:2]

# ALTERNATE
def left2(str):
  return str[2:] + str[:2]
```

---

## List1 first_last6 (4/17/19)
- https://codingbat.com/prob/p181624
```py
# Given an array of ints, return True if 6 appears as either the first or last element in the array. The array will be length 1 or more.
# first_last6([1, 2, 6]) → True
# first_last6([6, 1, 2, 3]) → True
# first_last6([13, 6, 1, 2, 3]) → False
def first_last6(nums):
	if nums[0] == 6 or nums[-1] == 6:
		return True
	return False

print(first_last6([1,2,6]))

# ALTERNATE
def first_last6(nums):
  return (nums[0]==6 or nums[-1]== 6)
```

---

## List1 same_first_last (4/17/19)
- https://codingbat.com/prob/p179078
```py
# Given an array of ints, return True if the array is length 1 or more, and the first element and the last element are equal.
# same_first_last([1, 2, 3]) → False
# same_first_last([1, 2, 3, 1]) → True
# same_first_last([1, 2, 1]) → True
def same_first_last(nums):
	return len(nums) > 0 and nums[0] == nums[-1]

same_first_last([1,2,1])
```

---

## List1 make_pi (4/17/19)
- https://codingbat.com/prob/p113659
```py
# Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.
# make_pi() → [3, 1, 4]
def make_pi():
  return [3,1,4]
```

---

## List1 common_end (4/17/19)
- https://codingbat.com/prob/p147755
```py
# Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
# common_end([1, 2, 3], [7, 3]) → True
# common_end([1, 2, 3], [7, 3, 2]) → False
# common_end([1, 2, 3], [1, 3]) → True
def common_end(a, b):
  sameFirst = a[0] == b[0]
  sameLast = a[-1] == b[-1]
  return sameFirst or sameLast
```

---

## List1 sum3 (4/17/19)
- https://codingbat.com/prob/p191645
```py
# Given an array of ints length 3, return the sum of all the elements.
# sum3([1, 2, 3]) → 6
# sum3([5, 11, 2]) → 18
# sum3([7, 0, 0]) → 7
def sum3(nums):
  return nums[0] + nums[1] + nums[2]
```

---

## List1 rotate_left3 (4/17/19)
- https://codingbat.com/prob/p148661
```py
# Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
# rotate_left3([1, 2, 3]) → [2, 3, 1]
# rotate_left3([5, 11, 9]) → [11, 9, 5]
# rotate_left3([7, 0, 0]) → [0, 0, 7]
def rotate_left3(nums):
  return nums[1:] + [nums[0]]
```

---

## List1 reverse3 (4/17/19)
- https://codingbat.com/prob/p192962
```py
# Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.
# reverse3([1, 2, 3]) → [3, 2, 1]
# reverse3([5, 11, 9]) → [9, 11, 5]
# reverse3([7, 0, 0]) → [0, 0, 7]
def reverse3(nums):
  return [nums[2], nums[1], nums[0]]
```

---

## List1 max_end3 (4/17/19)
- https://codingbat.com/prob/p135290
```py
# Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.
# max_end3([1, 2, 3]) → [3, 3, 3]
# max_end3([11, 5, 9]) → [11, 11, 11]
# max_end3([2, 11, 3]) → [3, 3, 3]
def max_end3(nums):
  max = nums[0]
  if max < nums[-1]:
    max = nums[-1]
  return [max, max, max]

# ALTERNATIVE
def max_end3(nums):
  big = max(nums[0], nums[2])
  nums[0] = big
  nums[1] = big
  nums[2] = big
  return nums
```

---

## List1 sums2(4/17/19)
- https://codingbat.com/prob/p192589
```py
# Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.
# sum2([1, 2, 3]) → 3
# sum2([1, 1]) → 2
# sum2([1, 1, 1, 1]) → 2
def sum2(nums):
  if len(nums) < 1:
    return 0
  elif len(nums) < 2:
    return nums[0]
  else:
    return nums[0] + nums[1]
```

---

## List1 middle_way(4/17/19)
- https://codingbat.com/prob/p171011
```py
# Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.
# middle_way([1, 2, 3], [4, 5, 6]) → [2, 5]
# middle_way([7, 7, 7], [3, 8, 0]) → [7, 8]
# middle_way([5, 2, 9], [1, 4, 5]) → [2, 4]
def middle_way(a, b):
  return [a[1], b[1]]
```

---

## List1 make_ends (4/17/19)
- https://codingbat.com/prob/p124806
```py
# Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.
# make_ends([1, 2, 3]) → [1, 3]
# make_ends([1, 2, 3, 4]) → [1, 4]
# make_ends([7, 4, 6, 2]) → [7, 2]
def make_ends(nums):
  if len(nums) == 1:
    return [nums[0], nums[0]]
  return [nums[0], nums[-1]]
```

---

## List1 has23 (4/17/19)
- https://codingbat.com/prob/p177892
```py
# Given an int array length 2, return True if it contains a 2 or a 3.
# has23([2, 5]) → True
# has23([4, 3]) → True
# has23([4, 5]) → False
def has23(nums):
  if 2 in nums or 3 in nums:
    return True
  return False
```

---

## 
- https://codingbat.com/prob/
```py
```
