//There are 2 types of datatypes

//So basically the datatypes are categarize by seeing how the data is accessed 

//If the data is access by value then it is primitive datatype

//If data is access by reference then it is non - primitive

//Primitive datatypes includes

//String, number, BigInt, null, undefined, symbol,boolean

//Non - Primitive datatypes includes

//Array, Objects, functions



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3