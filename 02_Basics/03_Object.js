//Singleton
// Object.create //This contructor might create singleton

//Sysmbol Creation
const key1 = Symbol("key1");

//Object Literals
const JsUser = {
  name: "Yash",
  "full name": "yash sagvekar",
  [key1]: "key1", //This is how you declare symbol in object
  age: 18,
  location: "Rtn",
  email: "yash@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);//double quoted keys are only access like this
// console.log(JsUser[key1]); //This is how you print symbol in object

// JsUser.email = "yash@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser)

// JsUser.email = "yash@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function () {
  console.log("Hello Baby!!!");
};

JsUser.greetings2 = function () {
  console.log(`Hello Baby!!! ${this.name}`); //Use this to address the object
};
console.log(JsUser.greetings());
console.log(JsUser.greetings2());
