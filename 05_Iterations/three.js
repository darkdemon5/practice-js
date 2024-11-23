//For of

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  // console.log(val);
}

const greeting = "Hello World!";

for (const greet of greeting) {
  if (greet == " ") continue;
  // console.log(`Each word is ${greet}`);
}

//Maps

const map = new Map();

map.set("IN", "India");
map.set("US", "United State of America");
map.set("Fr", "France");

// console.log(map);

for (const [key, value] of map) {
  console.log(key + " :- " + value);
}

//objects can't be iterated in "for of"
