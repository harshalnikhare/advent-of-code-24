import path from "path";
import { getBothArrays, getInput, splitInputArray } from "../common/common";

function sortInputArray(arr: number[][]): number[][] {
  let { arr1, arr2 } = getBothArrays(arr);

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const finalArr = [];
  for (let i = 0; i < arr1.length; i++) {
    finalArr.push([arr1[i], arr2[i]]);
  }

  return finalArr;
}

function getSummation(arr: number[][]): number {
  return arr.reduce((acc, curr) => {
    acc += Math.abs(curr[0] - curr[1]);
    return acc;
  }, 0);
}

console.log(
  getSummation(
    sortInputArray(
      splitInputArray(getInput(path.join(__dirname, "input-2.txt"))),
    ),
  ),
);
