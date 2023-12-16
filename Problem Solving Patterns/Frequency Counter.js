//Two arrays
//must be same length

// const arr1 = [1, 2, 3];
// const arr2 = [1, 9];
//false

// const arr1 = [1, 2, 3];
// const arr2 = [4, 1, 9];
//true

// const arr1 = [1, 2, 1];
// const arr2 = [4, 4, 1];
//false

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   const squareFrequency = {};

//   for (let i = 0; i < arr1.length; i++) {
//     const square = arr2[i];

//     if (squareFrequency[square]) {
//       squareFrequency[square] += 1;
//     } else {
//       squareFrequency[square] = 1;
//     }
//   }

//   for (element of arr1) {
//     const square = Math.pow(element, 2);

//     if (!squareFrequency[square]) return false;

//     squareFrequency[square] -= 1;

//     if (squareFrequency[square] < 0) return false;
//   }

//   return true;
// }

// console.log(same(arr1, arr2));

// function sameFrequency(num1, num2) {
//   const num1_digits = {};

//   for (let i = num1; i > 0; i = Math.floor(i / 10)) {
//     num1_digits[i % 10]
//       ? (num1_digits[i % 10] += 1)
//       : (num1_digits[i % 10] = 1);
//   }

//   for (let i = num2; i > 0; i = Math.floor(i / 10)) {
//     if (!num1_digits[i % 10]) {
//       return false;
//     } else {
//       num1_digits[i % 10] -= 1;
//     }
//   }

//   return true;
// }

// const areThereDuplicates = (...args) => {
//   const argCounter = {};
//   for (let i = 0; i < args.length; i++) {
//     const arg = args[i];

//     if (argCounter[arg]) return true;

//     argCounter[arg] = true;
//   }

//   return false;
// };

// function findLongestSubstring(str) {
//   let i = 0;
//   let frequency = {};

//   for (let j = 0; j < str.length; j++) {
//     const letter = str[j];

//     if (frequency[letter]) {
//       frequency = {};
//     } else {
//       frequency[letter] = true;
//     }
//   }
// }

// console.log(
//   findLongestSubstring(""), // 0
//   findLongestSubstring("rithmschool"), // 7
//   findLongestSubstring("thisisawesome"), // 6
//   findLongestSubstring("thecatinthehat"), // 7
//   findLongestSubstring("bbbbbb"), // 1
//   findLongestSubstring("longestsubstring"), // 8
//   findLongestSubstring("thisishowwedoit")
// ); // 6
