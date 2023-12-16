function fibbonacci(n) {
  const sequence = [1, 1];
  for (let i = 3; i <= n; i++) {
    const newTerm = sequence[0] + sequence[1];
    sequence[0] = sequence[1];
    sequence[1] = newTerm;
  }

  return sequence[1];
}

console.log(fibbonacci(10000));
