//Reduce

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNums = myNum.reduce((acc, curVal) => {
  //   console.log(`acc: ${acc} and currVal ${curVal}`);

  return acc + curVal;
}, 0);
// console.log(myNums);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const checkoutPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`Your total price is: Rs. ${checkoutPrice.toLocaleString()} Only`);
