import { arraysAreEqual, randomArray } from "../Utils.js";

function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      let current = arr[j];
      let next = arr[j + 1];

      if (current > next) {
        arr[j] = next;
        arr[j + 1] = current;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

const arrayToSort = randomArray(10);
const sortedArray = bubbleSort(arrayToSort);

console.log({ sortedArray, isEqual: arraysAreEqual(sortedArray, arrayToSort) });
