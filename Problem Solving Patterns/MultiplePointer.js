//Problem - 1
//The below solution only works for sorted arrays, for non sorted arrays a better solution will be to use frequencyCounter Pattern
// // const arr = [-5, -4, -3, -2, -1, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // [
// //   [-5, 5],
// //   [-4, 4],
// //   [-3, 3],
// //   [-2, 2],
// //   [-1, 1],
// //   [0, 0],
// // ];

// function zeroSumPair(ar) {
//   let leftPointer = 0;
//   let rightPointer = ar.length - 1;

//   const zeroSumPairs = [];

//   while (rightPointer - leftPointer > 0) {
//     const sum = ar[leftPointer] + ar[rightPointer];

//     if (sum === 0) {
//       zeroSumPairs.push([ar[leftPointer], ar[rightPointer]]);
//       rightPointer -= 1;
//       leftPointer += 1;
//       continue;
//     }

//     if (sum > 0) {
//       rightPointer -= 1;
//     } else {
//       leftPointer += 1;
//     }
//   }

//   return zeroSumPairs;
// }

// console.log(zeroSumPair(arr));

//Problem - 2
// const arr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 999, 999, 999, 999];
// 10

// function countUniqueValues(arr) {
//   let uniqueValues = 0;

//   let index = 0;
//   for (item of arr) {
//     if (arr[index] !== arr[index + 1]) {
//       uniqueValues += 1;
//     }

//     index += 1;
//   }

//   return uniqueValues;
// }

// console.log(countUniqueValues(arr));

//Reverse all characters in a string
// function isCharacter(str) {
//   const charCode = str.charCodeAt(0);
//   const isCharacter =
//     (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);

//   return isCharacter;
// }

// function ReverseLettersOnly(str) {
//   let leftPointer = 0;
//   let rightPointer = str.length - 1;
//   str = str.split("");

//   while (rightPointer - leftPointer > 0) {
//     const left = str[leftPointer];
//     const right = str[rightPointer];

//     if (!isCharacter(left)) {
//       leftPointer += 1;
//     }

//     if (!isCharacter(right)) {
//       rightPointer -= 1;
//     }

//     if (isCharacter(left) && isCharacter(right)) {
//       str[rightPointer] = left;
//       str[leftPointer] = right;
//       leftPointer += 1;
//       rightPointer -= 1;
//     }
//   }

//   return str.join("");
// }

// console.log(ReverseLettersOnly("ABC-D"));

// function isSubsequence(str1, str2) {
//   //store indexes of all the elements of the str1 in str2
//   let currIndex = 0;
//   let currSearchTerm = str1[currIndex];

//   for (let i = 0; i < str2.length; i++) {
//     const letter = str2[i];
//     if (letter === currSearchTerm) {
//       currIndex += 1;
//       currSearchTerm = str1[currIndex];
//     }

//     if (currIndex === str1.length) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(
//   isSubsequence("hello", "hello world"), // true
//   isSubsequence("sing", "sting"), // true
//   isSubsequence("abc", "abracadabra"), // true
//   isSubsequence("abc", "acb")
// ); // false (order matters)
