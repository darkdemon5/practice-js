// const email = "h@hitesh.ai"

if (
  function name() {
    return false;
  }
) {
  console.log("has email");
} else {
  console.log("don't have email");
}

//Falsy values :- the values which are considered false in if and else

//false, 0, -0, BigInt 0n(you write 0n in bigInt), "", null, undefined, NaN

//Truthy values :- values that are considered true in if and else

// "0"(this is string), 'false'(this is string), " "(This has space so this is true), [](empty array is true), {}(empty object is true),
//function(){}(empty function is true)

//how to check array is empty
const arr = [];

if (arr.length === 0) {
  console.log("array is empty");
}

//how to check object is empty
const arra = {};
if (Object.keys(arra).length === 0) {
  console.log("object is empty");
}
