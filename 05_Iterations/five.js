//For each

const arr = [1, 2, 3, 4, 5];

// arr.forEach(function name(params) {
//     console.log(params);

// })
// arr.forEach(function (params) {
//     console.log(params);

// })
// arr.forEach((params) => {
//     console.log(params);

// })

// function name(params) {
//     console.log(params);
// }

// arr.forEach(name)

// name = (i) => {
//     console.log(i);
// }

// arr.forEach(name)
//  arr.forEach((i, index, arr) =>{
//     console.log(i, index, arr);
//  })

const myArr = [
  {
    langName: "Java",
    langShort: "ja",
  },
  {
    langName: "Javascript",
    langShort: "js",
  },
  {
    langName: "Python",
    langShort: "py",
  },
];

myArr.forEach((item) => {
  console.log(item.langName);
  console.log(item.langShort);
});
