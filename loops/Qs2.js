// Write a JS program to find the no of digits in a number.

let num = 287152;
let count = 0;
let copy = num;
while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);
