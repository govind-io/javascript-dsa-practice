// function power(num, pow) {
//   if (pow == 0) return 1;

//   return num * power(num, pow - 1);
// }

// function factorial(num) {
//   if (num == 0) return 1;

//   return num * factorial(num - 1);
// }

// function productOfArray(arr) {
//   console.log(arr);
//   if (!arr.length) return 1;

//   return arr[0] * productOfArray(arr.slice(1));
// }

// console.log(productOfArray([1, 2, 3])); // 6
//productOfArray([1, 2, 3, 10]); // 60

// function recursiveRange(num) {
//   if (num === 0) return 0;

//   return num + recursiveRange(num - 1);
// }

// function fib(n) {
//   if (n<=2) return 1;

//   return fib(n - 1) + fib(n - 2);
// }

// function reverse(str) {
//   if (!str.length) return "";

//   return reverse(str.slice(1)) + str[0];
// }

// function isPalindrome(str) {
//   // add whatever parameters you deem necessary - good luck!
//   if (str.length <= 1) return true;

//   return (
//     str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
//   );
// }

// function someRecursive(arr, cb) {
//   if (!arr.length) return false;

//   // add whatever parameters you deem necessary - good luck!
//   if (cb(arr[0])) return true;

//   return someRecursive(arr.slice(1), cb);
// }

// // SAMPLE INPUT / OUTPUT
// const isOdd = (val) => val % 2 !== 0;

// console.log(
//   someRecursive([1, 2, 3, 4], isOdd), // true
//   someRecursive([4, 6, 8, 9], isOdd), // true
//   someRecursive([4, 6, 8], isOdd), // false
//   someRecursive([4, 6, 8], (val) => val > 10)
// ); // false

// function flatten(arr) {
//   let flattenedArray = [];

//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       flattenedArray.push(...flatten(element));
//     } else {
//       flattenedArray.push(element);
//     }
//   });

//   return flattenedArray;
// }

// function capitalizeFirst(arr) {
//   const capitalizedArray = [];

//   function capitalizeStringFirstLetter(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }

//   if (arr.length < 1) {
//     return [];
//   }

//   capitalizedArray.push(capitalizeStringFirstLetter(arr[0]));

//   capitalizedArray.push(...capitalizeFirst(arr.slice(1)));

//   return capitalizedArray;
// }

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// function nestedEvenSum(obj) {
//   let sum = 0;

//   const values = Object.values(obj);

//   values.forEach((item) => {
//     console.log(item, typeof item);
//     if (typeof item === "object") {
//       sum += nestedEvenSum(item);
//     } else if (item % 2 == 0) {
//       sum += item;
//     } else {
//       return;
//     }
//   });

//   return sum;
// }

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// nestedEvenSum(obj1); // 6

// function capitalizeWords(arr) {
//   const capitalWords = [];

//   if (arr.length < 1) {
//     return [];
//   }

//   capitalWords.push(arr[0].toUpperCase());
//   capitalWords.push(...capitalizeWords(arr.slice(1)));

//   return capitalWords;
//   // add whatever parameters you deem necessary - good luck!
// }

// function stringifyNumbers(obj) {
//   const newObj = {};

//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//       return;
//     }
//   });

//   return newObj;
// }

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));
// function collectStrings(obj) {
//   const str = [];

//   Object.values(obj).forEach((element) => {
//     if (typeof element === "string") {
//       str.push(element);
//     } else if (typeof element === "object") {
//       str.push(...collectStrings(element));
//     } else {
//       return;
//     }
//   });

//   return str;
// }

// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
