function SayMyName() {
  console.log("Y");
  console.log("A");
  console.log("S");
  console.log("H");
}

// SayMyName()

// function addNums(num1, num2){
//     console.log(num1+num2);
// }
function addNums(num1, num2) {
  // console.log(num1+num2);
  // let result = num1+num2;
  // return result;

  return num1 + num2;
}

const result = addNums(2, 6);

// console.log("Result: ", result);

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter your name");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

function calculateCartprice(...num1) {
  return num1;
}

// console.log(calculateCartprice(200,300,400));

const user = {
  userName: "yash",
  price: 199,
};

// function printObject(anyObject){
//     console.log(`Name is ${anyObject.userName} and price ${anyObject.price}`);
// }

// printObject(user)

const myArray = [122, 445, 6664, 7779];

function getSecondValue(getArray) {
  return getArray[1];
}

console.log(getSecondValue(myArray));
