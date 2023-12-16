import { arraysAreEqual, randomArray } from "../Utils.js";

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currValue > arr[j]) {
        arr[j + 1] = currValue;
        break;
      }
      arr[j + 1] = arr[j];
    }
  }
  return arr;
}

const arrayToSort = randomArray(10);
const sortedArray = insertionSort(arrayToSort);

console.log({ sortedArray, isEqual: arraysAreEqual(sortedArray, arrayToSort) });
