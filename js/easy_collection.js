"use strict"
document.addEventListener("DOMContentLoaded", () => document.write(easyTask14()));


function easyTask14(n = 7) {
  //fibonacci through recursion
    return n <= 1 ? n : easyTask14(n - 1) + easyTask14(n - 2);
}

function easyTask13(num = 7) {
  //fibonacci through temp variable 
  let current = 1, prev = 0, temp;
  let i = 1;
    while (i < num){
      temp = current + prev;
      prev = current;
      current = temp;
      i++;
    }
  return current;
}

function easyTask12(num = 7) {
  //fibonacci through array
  let arr = [0, 1];
  for (let i = 1; i < num; i++){
    arr.push(arr[i]+ arr[i-1]);
  }
  return arr;
}

function easyTask11(num = 10) {
  //isPrime through recursion
  function recursion(del = 2) {
    if (del > num / 2)
      return true;
    return num % del ? recursion(++del) : false;
  }
  return recursion();
}

function easyTask10(num = 4) {
  //isPrime function
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function easyTask9(num = 6) {
  //factorial through recursion
  let n = num;
  return n === 1 ? n : num *= easyTask9(num - 1);
}

function easyTask8(number = 9) {
  //This task is about multiplying a given number by eight if it is an even number and by nine otherwise. (CodeWars)
  return number % 2 == 0 ? number * 8 : number * 9;
}

function easyTask7(str = ' Words will be separated by only one space') {
  //Replace the first letter of each word with a large one.
  Array.prototype.toUpperCaseFirstСharacter = function () {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
      arr[i] === ' ' ? arr[i + 1] = arr[i + 1].toUpperCase() : null;
    }
    return arr;
  }
  return str.split('').toUpperCaseFirstСharacter().join('');

}

function easyTask6(str = 'Simple graphics editor running on SVG') {
  //Return longest word
  const arrWords = str.split(' ');
  let maxLength = 0,
    outWord;
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length > maxLength) {
      maxLength = arrWords[i].length;
      outWord = arrWords[i];
    }
  }
  return outWord;
}

function easyTask5() {
  //Return amount of arguments array
  const arg = arguments.length !== 0 ? arguments : [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  let sum = 0;
  const _forEach = [].forEach;
  _forEach.call(arg, ((item) => sum += item));
  return sum;
}

function easyTask4(str = 'Visual Studio Code') {
  //Return length of longest word
  const arrWords = str.split(' ');
  const arrLengths = arrWords.map((item) => item.length);
  return Math.max.apply(null, arrLengths);
}

function easyTask3(str = 'Amelie Lens all night long @ Labyrinth Club 2017') {
  //Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
  Array.prototype.taskChange = function () {
    const input = this;
    let output = [];
    for (let j of input) {
      if (j !== ' ') {
        j = j.charCodeAt(0);
        j++;
        j = String.fromCodePoint(j);
        if ((j === 'a') || (j === 'e') || (j === 'i') || (j === 'o') || (j === 'u')) {
          j = j.toUpperCase();
        }
      }
      output.push(j);
    }
    return output;
  }
  return str.split('').taskChange().join('');
}

function easyTask2(str = 'Hello World and World') {
  //String reverse
  return str.split("").reverse().join("");
}

function easyTask1(num = 10) {
  //Factorial
  let count = num;
  let output = 1;
  while (count !== 1) {
    output *= count;
    --count;
  }
  return output;
}