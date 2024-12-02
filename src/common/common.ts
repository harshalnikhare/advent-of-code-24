import fs from "fs";

export function getInput(filePath: string): string[] {
  return fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .filter((row) => row);
}

export function splitInputArray(arr: string[]): number[][] {
  return arr
    .map((row) => row.split("   "))
    .map((row) => {
      const [first, second] = row;
      return [Number(first), Number(second)];
    });
}

export function getBothArrays(arr: number[][]) {
  const arr1 = [...arr.map((row) => row[0])];
  const arr2 = [...arr.map((row) => row[1])];
  return { arr1, arr2 };
}
