export function validateSequence(array, sequence) {
  let seqIdx = 0;
  let arrIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] == sequence[seqIdx]) {
      seqIdx += 1;
    }
    arrIdx += 1;
  }

  return sequence.length === seqIdx;
}

const data = { array: [1, 1, 6, 1], sequence: [1, 1, 1, 6] };
// {"array": [1, 1, 1, 1, 1], "sequence": [1, 1, 1]}

// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 22, 25, 6, -1, 8, 10]
// }
// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12]
// }
//{"array": [1, 1, 1, 1, 1], "sequence": [1, 1, 1]}

// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12]
// }

// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [4, 5, 1, 22, 25, 6, -1, 8, 10]
// }

// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 22, 23, 6, -1, 8, 10]
// }

// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 22, 22, 25, 6, -1, 8, 10]
// }

// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 22, 22, 6, -1, 8, 10]
// }

// {"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, -1]}

// {"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, -1, 10]}

// {"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, -2]}

// {"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [26]}
// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 25, 22, 6, -1, 8, 10]
// }

// {"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [5, 26, 22, 8]}
// {"array": [1, 1, 6, 1], "sequence": [1, 1, 1, 6]}
// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [1, 6, -1, 10, 11, 11, 11, 11]
// }
// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 10]
// }

console.log("validate seq -> ");
console.log(validateSequence(data.array, data.sequence));
