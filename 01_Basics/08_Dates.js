//Dates 

let d = new Date()

// console.log(d.toDateString());

// let m = new Date(1996, 0, 12);

console.log(d.getMonth() +1);



let myTimeStamp = Date.now();

// console.log(myTimeStamp);

// console.log(d.getTime());

// //conver Miliseconds into seconds
// console.log(Math.floor(Date.now()/1000), " Seconds");


let d1 = new Date();

console.log(d1.toLocaleString('default', {
    month:"long"
}));

console.log(d1.toLocaleString('default', {
    day:"2-digit",
}));





