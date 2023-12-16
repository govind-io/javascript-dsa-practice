// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid; // Target found, return its index
//     } else if (arr[mid] < target) {
//       left = mid + 1; // Target lies to the right of mid
//     } else {
//       right = mid - 1; // Target lies to the left of mid
//     }
//   }

//   return -1; // Target not found in array
// }

// function searchSubString(str, subStr) {
//   let counter = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== subStr[0]) continue;

//     let contains = true;

//     for (let j = 0; j < subStr.length; j++) {
//       if (str[i + j] !== subStr[j]) {
//         contains = false;
//         break;
//       }
//     }

//     if (contains) {
//       counter += 1;
//     }
//   }

//   return counter;
// }
