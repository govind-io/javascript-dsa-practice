var reverseBits = function (n) {
  const binaryString = n.toString();

  let reversedBinary = 0;

  for (let i = 0; i < binaryString.length; i++) {
    reversedBinary =
      reversedBinary + 2 ** [binaryString.length - 1 - i] * binaryString[i];
  }

  return reversedBinary;
};
