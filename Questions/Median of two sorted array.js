/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function mergeSortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;

  const sortedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  return sortedArray;
}

var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = mergeSortedArray(nums1, nums2);

  const arrayMid = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[arrayMid] + mergedArray[arrayMid - 1]) / 2;
  } else {
    return mergedArray[arrayMid];
  }
};

const nums1 = [1, 2];
const nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
