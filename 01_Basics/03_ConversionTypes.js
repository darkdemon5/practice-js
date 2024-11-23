let id = "33";

console.log(typeof id);

//what if you are receiving a value from frontend or from user
//lets convert it

let valueIsNumber = Number(id); //like this you can convert it to any datatype just type firstletter as capital and round paranthesis

console.log(typeof valueIsNumber);

//what if value has characters in it like 33abc

id = "33abc";

let valueIsNumber2 = Number(id);

console.log(typeof id);
console.log(typeof valueIsNumber2);
//if see the output it will show the type is number but if you see the number itself
//you will see the actual result
console.log(id);
console.log(valueIsNumber2);
//NaN represents Not A Number
//when a non-numerical or a string, gets typecasted by js it stores value as NaN

//lets see other examples

//like null
id = null;
valueIsNumber2 = Number(id);

console.log(typeof id);
console.log(typeof valueIsNumber2);
//if you see the null is an object after conversion it becames number

console.log(id);
console.log(valueIsNumber2);
//if you see the output the converted number is NaN
//we get output again like this

//lets try with undefined
id = undefined;
valueIsNumber2 = Number(id);

console.log(typeof id);
console.log(typeof valueIsNumber2);
//if you see the undefined is an undefined type after conversion it becames number

console.log(id);
console.log(valueIsNumber2);
//if you see the output we again get 0
//we get 0 which is ok but what if value is used for temprature the 0 is not acceptable

//lets try boolean values
id = true;
valueIsNumber2 = Number(id);

console.log(typeof id);
console.log(typeof valueIsNumber2);
//if you see the type of value true is boolean after conversion it becames number

console.log(id);
console.log(valueIsNumber2);
//for true it gives 1 as output and for false it gives 0

let isLoggedIn = "";
let booleanLoggedIn = Boolean(isLoggedIn);

console.log(booleanLoggedIn);
//In this if number 0 then false anything other is true, if string is empty the it is false, if it contains something it is true
