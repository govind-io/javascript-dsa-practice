function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequency = {};

  for (let i = 0; i < arr1.length; i++) {
    const curr = arr1[i];
    const isExisting = frequency[curr];

    if (isExisting) {
      frequency[curr] += 1;
    } else {
      frequency[curr] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const curr = arr2[i];
    const isExisting = frequency[curr];

    if (!isExisting) return false;

    frequency[curr] -= 1;
  }

  return true;
}

function randomArray(length = 10) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

export { randomArray, arraysAreEqual };
