import { arraysAreEqual, randomArray } from "../Utils.js";

function generateEmptyDigitsObj() {
  const digits = {};
  for (let i = 0; i < 10; i++) {
    digits[i] = [];
  }

  return digits;
}

function getNthDigit(num, digit) {
  num = Math.abs(num);
  return Math.floor(num / 10 ** digit) % 10;
}

function radixSort(arr) {
  let digitCount = 0;

  let digits = generateEmptyDigitsObj();

  while (digits[0].length !== arr.length) {
    digits = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      digits[getNthDigit(num, digitCount)].push(num);
    }

    arr = [].concat(...digits);

    digitCount++;
  }

  return arr;
}

const arrayToSort = randomArray(100000000);
const sortedArray = radixSort(arrayToSort);

console.log({
  sortedArray,
  isEqual: arraysAreEqual(sortedArray, arrayToSort),
});
