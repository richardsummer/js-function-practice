(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

function max(num1, num2) {
  if(num1 > num2) {
  } else {
    return num2;
  }
}

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

let a = 45;
let b = 24;
let c = 2;

function maxOfThree(a, b, c) {
  if(a > b && a > c) {
    return a;
  } if(b > a && b > c) {
    return b;
  } if (c > a && c > b) {
    return c;
  }
}

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

function isVowel(x) {
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
    return true;
  }
  return false;
}

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

function rovarspraket(text) {
  let translation = '';

  const textArray = text.split("");

  for(let i = 0; i < textArray.length; i++) {
    if(isVowel(textArray[i]) || textArray[i] === " ") {
      translation += textArray[i];
    } else {
      translation += textArray[i] + 'o' + textArray[i];
    }
    // Another option:
    
    // const isConsonant = 'bcdfghjklmnpqrstvwxyz'.includes(textArray[i]);
    // if(isConsonant) {
    //   translation += textArray[i] + 'o' + textArray[i];
    // } else {
    //   translation += textArray[i];
    // }
  }
  return translation;
}


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

function sum(arr) {
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

function multiply(arr) {
  let result = 1;

  for(let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
}
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

function reverse(str) {
  return str.split("").reverse().join("");
}

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

function findLongestWord(arr) {
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > result) {
      result = arr[i].length;
    }
  }

  return result;
}

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

function filterLongWords(arr, i) {
  let longWordsArray = [];

  for(let j = 0; j < arr.length; j++) {
    if(arr[j].length > i) {
      longWordsArray.push(arr[j]);
    }
  }

  return longWordsArray;
}

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

function charFreq(str) {
  const freqCount = {};
  const strArray = str.split("");

  for(let i = 0; i < strArray.length; i++) {

    const char = strArray[i];
    freqCount[char] = freqCount[char] + 1 || 1;
  }

  return freqCount
}

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'function findLongestWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
