const user = {
  username: "yash",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the jungle`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

function chai() {
  let username = "hitesh";
  console.log(username);
  console.log(this);
}

// chai()

const demo = () => {
  const username = "yash";
  console.log(this);
};

// demo()

// const addTwo = (n1, n2) => {
//     return n1+n2
// }
// const addTwo = (n1, n2) => n1+n2
// const addTwo = (n1, n2) => (n1+n2)

// const addTwo = (n1, n2) => {
//     username: "yash"
// }

const addTwo = (n1, n2) => ({
  username: "yash",
});

console.log(addTwo(2, 7));
