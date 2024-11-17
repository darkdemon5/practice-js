// const tinderUser = new Object() //This is a singleton object
// console.log(tinderUser);

const tinderUser = {} //This is not singleton object

tinderUser.id = "124abc"
tinderUser.name = "Yash"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"yash",
            lastname:"sagvekar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2} //Stores objects not the key and values

// const obj3 = Object.assign({}, obj1, obj2, obj4) //{}: Represnts empty target, all remaining are just source

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const arr = [
    {
        id: 123,
        email:"yame@gmail.com"
    },
    {
        id: 123,
        email:"yame@gmail.com"
    },
    {
        id: 123,
        email:"yame@gmail.com"
    },
    {
        id: 123,
        email:"yame@gmail.com"
    },
    {
        id: 123,
        email:"yame@gmail.com"
    },
]


// console.log(arr[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

//This is called object destructring
const {courseInstructor: instructor} = course;

console.log(instructor);



