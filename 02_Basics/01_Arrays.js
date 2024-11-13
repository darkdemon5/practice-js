//Array

const arr = [1,2,3,4,5];

// console.log(arr[3]);

const arr1 = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13)

// console.log(arr1);

//Array methods

// arr.push(6);
// arr.push(7);
// arr.pop()

// arr.unshift(9); //pushes data at begining of the array
// arr.shift(); //pops data at begining of the array

// console.log(arr.includes(4));
// console.log(arr.indexOf(4));

//join
const myarr = arr.join()
// console.log(myarr);

//Slice and Splice

console.log("A ", arr);

const arr3 = arr.slice(1,3)
console.log(arr3);
console.log("B ", arr)


const arr4 = arr.splice(1,3)  //difference between slice and splice is splice does inlcude end index, while slice does not
console.log(arr4);           //Seconds difference is that slice works as copy-paste and splice works as cut-paste
console.log("C ", arr);


// console.log(arr);




