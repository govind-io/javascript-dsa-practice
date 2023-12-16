function fibbonacci(
  n,
  solutions = {
    1: 1,
    2: 1,
  }
) {
  if (solutions[n]) return solutions[n];

  solutions[n] =
    (solutions[n - 1] ? solutions[n - 1] : fibbonacci(n - 1, solutions)) +
    (solutions[n - 2] ? solutions[n - 2] : fibbonacci(n - 2, solutions));

  return solutions[n];
}

console.log(fibbonacci(1000));
