//For in

const myObj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObj) {
  console.log(`${key} is shortcut for ${myObj[key]}`);
}

const arr = [1, 2, 3, 4, 5];
//here forIn returns key which are index of array get values use same as object for values
for (const value in arr) {
  console.log(value);
}

//Map is not iterable in forIn
