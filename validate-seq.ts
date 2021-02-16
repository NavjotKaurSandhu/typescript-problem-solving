export function validateSequence(arr, seq) {
  let start = 0;
  let result = 0;

  const dt = seq.every(function(element, index) {
    return element === arr[index]; 
  });

  console.log('rs -> ', dt)

  // for (let i = 0; i < seq.length; i++) {
  //   for (let j = start; j < arr.length; j++) {
  //     if (seq[i] === arr[j]) {
  //       // seqStart = i === 0 ? true : false;
  //       start =  j + 1;
  //       result++;
  //     }
  //   }
  // }

  // if (seqStart) {
  //   result = seq.length;
  // }
  // if (result === seq.length) {
  //   return true;
  // }
  return false;
}

const data = 
{"array": [1, 1, 1, 1, 1], "sequence": [1, 1, 1]}


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

console.log('validate seq -> ');
console.log(validateSequence(data.array, data.sequence));
