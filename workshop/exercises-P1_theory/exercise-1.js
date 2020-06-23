// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));

// 1. call decrement, taking 3 and returning 2
// 2. call square, taking 2 and returning 4
// 3. call decrement, taking 4 and returning 3
// 4. call square, taking 3 and returning 9

// 1-2
decrement(decrement(square(square(3))));

// 1. call square, taking 3 and returning 9
// 2. call square, taking 9 and returning 81
// 3. call decrement, taking 81 and returning 80
// 4. call decrement, taking 80 and returning 79

// 1-3
duplicateString(reverseString('hello'));

// 1. call reverseString, taking hello and returning olleh
// 2. call duplicateString, taking olleh and returning olleholleh

// 1-4
reverseString(duplicateString(duplicateString('foo')));

// 1. call duplicateString, taking foo and returning foofoo
// 2. call duplicateString, taking foofoo and returning foofoofoofoo
// 3. call reverseString, taking foofoofoofoo and returning oofoofoofoof