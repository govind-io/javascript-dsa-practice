import { arraysAreEqual, randomArray } from "../Utils.js";

function SplitArray(arr) {
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return [left, right];
}

function MergeSortedArrays(arr1, arr2) {
  const sortedArray = [];

  let a1 = 0;
  let a2 = 0;

  while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] > arr2[a2]) {
      sortedArray.push(arr2[a2]);
      a2++;
    } else {
      sortedArray.push(arr1[a1]);
      a1++;
    }
  }

  while (a1 < arr1.length) {
    sortedArray.push(arr1[a1]);
    a1++;
  }

  while (a2 < arr2.length) {
    sortedArray.push(arr2[a2]);

    a2++;
  }

  return sortedArray;
}

function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const [left, right] = SplitArray(arr);

  const sortedLeft = MergeSort(left);
  const sortedRight = MergeSort(right);

  return MergeSortedArrays(sortedLeft, sortedRight);
}

const arrayToSort = randomArray(10);
const sortedArray = MergeSort(arrayToSort);

console.log({
  sortedArray,
  isEqual: arraysAreEqual(sortedArray, arrayToSort),
});
