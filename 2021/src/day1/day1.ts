const { readFileSync } = require("fs");
const filePath = "C:/Users/ThaisMota/Documents/Projects/advent-of-code/2021/src/day1/day1.txt";

const file: string[] = readFileSync(filePath).toString().replace(/\r\n/g, "\n").split("\n");
const input = file.map((data) => Number(data));

export const part1 = (input: number[]) => {
  let counter = 0;
  let previousNumber = input[0];

  for (let i of input) {
    if (i > previousNumber) {
      counter += 1;
    }
    previousNumber = i;
  }

  return counter;
};

export const part2 = (input: number[]) => {
  let counter = 0;
  let previousNumber = input[0] + input[1] + input[2];

  for (let a = 0; a < input.length; a++) {
    let b = a;
    if (input[b] && input[b + 1] && input[b + 2]) {
      let c = input[b] + input[b + 1] + input[b + 2];
      if (c > previousNumber) {
        counter += 1;
      }
      previousNumber = c;
    }
  }

  return counter;
};

console.log("Part 1: " + part1(input));
console.log("Part 2: " + part2(input));