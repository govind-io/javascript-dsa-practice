// function minSubArrayLen(arr, sum) {
//   let start = 0;
//   let end = 0;
//   let currSum = 0;
//   let minLength = arr.length + 1;

//   while (start < arr.length) {
//     if (currSum < sum && end < arr.length) {
//       currSum += arr[end];
//       end++;
//     } else if (currSum >= sum) {
//       currSum -= arr[start];
//       const currLength = end - start;
//       minLength = Math.min(currLength, minLength);
//       start++;
//     } else {
//       break;
//     }
//   }

//   return minLength > arr.length ? 0 : minLength;
// }

// console.log(
//   minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4,3] is the smallest subarray
//   minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5,4] is the smallest subarray
//   minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
//   minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
//   minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
//   minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
//   minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
// ); // 0

// function findLongestSubstring(str) {
//   let frequency = {};
//   let start = 0;
//   let end = start;
//   let maxLength = 0;

//   while (end < str.length) {
//     const letter = str[end];
//     const existing = frequency[letter];

//     if (existing && existing.index >= start) {
//       const currLength = end - start;

//       maxLength = Math.max(currLength, maxLength);

//       start = existing.index + 1;
//     } else if (end === str.length - 1) {
//       const currLength = str.length - start;
//       maxLength = Math.max(currLength, maxLength);
//     }

//     frequency[letter] = { index: end };
//     end++;
//   }

//   return maxLength;
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
