//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//How to execute a funtion quickly we use iife

//we use iife for restraining pollustion that comes from global scope

// (function ba1() {
//     console.log("DB CONNECTED1");
// })();
// function df(){
//     console.log("running");

// }
// df();

(function ba() {
  //This is named iffe
  console.log("DB CONNECTED");
})();

//to run iife funtion below normal function add semicolon, same for stack iife functions

(() => {
  console.log("DB CONNECTED1");
})();

//can also run arrow funtion

//can also pass values
(function ba(name) {
  console.log(`DB CONNECTED ${name}`);
})("yash");
