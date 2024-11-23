const name = "Yash";
const repoCount = 2;

console.log(name + repoCount + " value"); //Old and non - professional way of concatinating a string

//New and easy way of contatinating string
console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const lorem = new String("babyJohn"); // By using this method you change string, from primitive to non - primitive
//It creates a object of string.

console.log(lorem.toUpperCase());

console.log(lorem.charAt(5));

console.log(lorem.indexOf("b"));

console.log(lorem.substring(1, 5));

console.log(lorem.at(4));

const gh = "    Yash     ";

console.log(gh);
console.log(gh.trim());
