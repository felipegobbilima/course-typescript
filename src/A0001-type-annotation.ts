/* eslint-disable */

// tipos basicos
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

// Array
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];
let arrayOfStrings2: string[] = ['a', 'b', 'c'];

// Objects
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Felipe',
  age: 22,
};

// Functions
function sum(x: number, y: number):number {
  return x + y;
}
const result = sum(2,3)

const sum2: (x: number, y: number) => number = (x, y) => x + y;
