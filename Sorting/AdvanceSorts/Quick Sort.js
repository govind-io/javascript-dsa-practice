import { arraysAreEqual, randomArray } from "../Utils.js";

// //this implementation overflows for more than 1000000 elements
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = Math.floor(arr.length / 2);
//   const pivotElem = arr[pivot];

//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === pivot) continue;

//     const currElement = arr[i];
//     if (pivotElem > currElement) {
//       left.push(currElement);
//     } else {
//       right.push(currElement);
//     }
//   }

//   return [...quickSort(left), arr[pivot], ...quickSort(right)];
// }

// const arrayToSort = randomArray(1000000);
// const sortedArray = quickSort(arrayToSort);

// console.log({
//   sortedArray,
//   isEqual: arraysAreEqual(sortedArray, arrayToSort),
// });

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     const pivot = pivotHelper(arr, left, right);
//     quickSort(arr, left, pivot - 1);
//     quickSort(arr, pivot + 1, right);
//   }
//   return arr;
// }

// function pivotHelper(arr, start = 0, end = arr.length - 1) {
//   // 1. Take the first element as the pivot.
//   const pivot = arr[start];
//   let pivotIndex = start;

//   // 2. Helper function to swap elements in the array.
//   function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//   // 3. Loop through the array from start to end.
//   for (let i = start + 1; i <= end; i++) {
//     // 4. If the current element is less than the pivot, increment pivotIndex and swap.
//     if (arr[i] < pivot) {
//       pivotIndex++;
//       swap(arr, i, pivotIndex);
//     }
//   }

//   // 5. Finally, swap the pivot with the element at pivotIndex to put it in its correct position.
//   swap(arr, start, pivotIndex);

//   // 6. Return the pivotIndex.
//   return pivotIndex;
// }

// const arrayToSort = randomArray(1000000);
// const sortedArray = quickSort(arrayToSort);

// console.log({
//   sortedArray,
//   isEqual: arraysAreEqual(sortedArray, arrayToSort),
// });
