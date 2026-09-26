// "use strict"
// console.log("Wait a minute");
// age = 20
// console.log(age);
// console.log("window: ", window);
var gender = "Male";
console.log("window: ", window);

const student = {
    name: "ali haider",
    age: 28,
    gender: "male",
    isTeacher: true,
    address: {
        city: "karachi",
        country: "Pakistan",
    },
    hobbies: ["coding", "playing"],
    greet: function () {
        console.log(`hello, ${this.name}`);
    }
}
student.name = "hasnain"
student.kuch = "bhi"
let country = "Pakistan";
const zipCode = 74900;

(function () {
    var city = "karahci";

    console.log(city, "city");

})()