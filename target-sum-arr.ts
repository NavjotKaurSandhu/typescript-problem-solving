export function twoNumberSum(array: number[], targetSum: number) {
  let resultObj = {};
  for (let i = 0; i < array.length; i++) {
    const y = targetSum - array[i];
    if (y in resultObj) {
      return [y, array[i]];
    } else {
      resultObj[array[i]] = true;
    }
  }
  return [];
}

// export function twoNumberSum(arr: number[], targetSum: number) {
//   for(let i = 0; i < arr.length - 1; i++) {
// 		let fSum = arr[i];
// 		for(let j = i + 1; j < arr.length; j++) {
// 			const resultSum = fSum + arr[j];
//       console.log('result -> ', resultSum);
// 			if (resultSum === targetSum) {
// 			return [fSum, arr[j]];
// 			}
// 		}
// 	}
//  return [];
// }

// const data = { array: [3, 5, -4, 8, 11, 1, -1, 6], targetSum: 10 };
// const data = {"array": [4, 6], "targetSum": 10};
// const data ={"array": [4, 6, 1], "targetSum": 5};
// const data = {"array": [4, 6, 1, -3], "targetSum": 3}
// const data = {"array": [1, 2, 3, 4, 5, 6, 7, 8, 9], "targetSum": 17}
// const data = {"array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 18}
const data = { array: [-7, -5, -3, -1, 0, 1, 3, 5, 7], targetSum: -5 };
// const data = {"array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], "targetSum": 163}
// const data = {"array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 15}
// const data = {"array": [14], "targetSum": 15}
// const data = {"array": [15], "targetSum": 15}
// const data =
// const data =
console.log(twoNumberSum(data.array, data.targetSum));
