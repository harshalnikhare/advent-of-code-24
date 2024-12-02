import path from "path";
import { getBothArrays, getInput, splitInputArray } from "../common/common";

type FreqCounter = { [key: number]: { count: number; times: number } };

function getFreqCounterObj(arr: number[][]) {
  const { arr1, arr2 } = getBothArrays(arr);

  let freqCounter: FreqCounter = {};

  for (let i = 0; i < arr1.length; i++) {
    const curri = arr1[i];
    if (curri in freqCounter) {
      freqCounter[curri] = {
        ...freqCounter[curri],
        times: (freqCounter[curri].times += 1),
      };
    } else {
      freqCounter[curri] = { count: 0, times: 1 };
      for (let j = 0; j < arr2.length; j++) {
        const currj = arr2[j];
        if (currj === curri) {
          freqCounter[currj] = {
            ...freqCounter[currj],
            count: (freqCounter[currj].count += 1),
          };
        }
      }
    }
  }

  return freqCounter;
}
console.log("rtet");

function getSumFromObject(freqCounter: FreqCounter) {
  let total = 0;
  for (const freq in freqCounter) {
    total += Number(freq) * freqCounter[freq].count * freqCounter[freq].times;
  }
  return total;
}

console.log(
  getSumFromObject(
    getFreqCounterObj(
      splitInputArray(getInput(path.join(__dirname, "input-2.txt"))),
    ),
  ),
);
