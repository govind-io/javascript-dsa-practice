/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function insertAtI(num1, i, num) {
  for (let index = num1.length - 1; index > i + 1; index--) {
    num1[index] = num[index - 1];
  }

  num1[i] = num;
}

var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    const elem1 = nums1[i];
    const elem2 = nums2[j];
    if (elem1 <= elem2) {
      i++;
    } else {
      insertAtI(nums1, i, elem2);
      console.log({ nums1 });
      j++;
      i++;
    }
  }

  // while (j <= n) {
  //     nums1[m + n - j] = nums2[j];
  //     j++;
  // }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
