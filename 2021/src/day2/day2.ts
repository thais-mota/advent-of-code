import { readFileSync } from "fs";
const filePath = "C:/Users/ThaisMota/Documents/Projects/advent-of-code/2021/src/day2/day2.txt";

interface DataType {
    moviment: string;
    value: number;
}

const file: string[] = readFileSync(filePath).toString().replace(/\r\n/g, "\n").split("\n");
let input: DataType[] = [];
file.forEach((data) => {
    let separatedString = data.split(" ");
    let dataType: DataType = {
        moviment: separatedString[0],
        value: Number(separatedString[1])
    }
    input.push(dataType);
});

const part1 = (input: DataType[]) => {
    let horizontalPosition: number = 0;
    let depth: number = 0;

    for (let i of input) { 
        if (i.moviment === "forward") {
            horizontalPosition += i.value
        } else if (i.moviment === "down") {
            depth += i.value;
        } else if (i.moviment === "up") {
            depth -= i.value;
        }
    }

    return horizontalPosition * depth;
}

const part2 = (input: DataType[]) => {
    let horizontalPosition: number = 0;
    let depth: number = 0;
    let aim: number = 0;

    for (let i of input) { 
        if (i.moviment === "forward") {
            horizontalPosition += i.value
            depth += aim * i.value;
        } else if (i.moviment === "down") {
            aim += i.value;
        } else if (i.moviment === "up") {
            aim -= i.value;
        }
    }

    return horizontalPosition * depth;
}

console.log("Part 1: " + part1(input));
console.log("Part 2: " + part2(input));