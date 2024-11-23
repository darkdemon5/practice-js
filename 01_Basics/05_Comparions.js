// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);

console.log(null > 0); //Not greater than zero o/p false
console.log(null == 0); //Is not equal to zero o/p false
console.log(null >= 0); //But if you see this it is greater than or equal to 0, it is different than above == statement beacuse   o/p true
// The comparisons(< > =< =>) works different than ==. The comparisons convert the null into a number which is 0.
console.log(null <= 0); //o/p true
console.log(null < 0); //o/p false

// === : this is strict check which compares the values and their datatypes eg
console.log("2" === 2);
