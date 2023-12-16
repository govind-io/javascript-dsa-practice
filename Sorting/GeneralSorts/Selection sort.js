import { arraysAreEqual, randomArray } from "../Utils.js";

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const currentVal = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = currentVal;
    }
  }

  return arr;
}

const arrayToSort = randomArray(10);
const sortedArray = selectionSort(arrayToSort);

console.log({ sortedArray, isEqual: arraysAreEqual(sortedArray, arrayToSort) });
