// arrays

console.group("Array")

var favoriteFruits = ["apple", "orange", "strawberry"];
console.log("favoriteFruits", favoriteFruits)

var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
console.log("carsInParkingLot", carsInParkingLot)

var employees = ["Billy", "Bob", "Joe"];
console.log("employees", employees)

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
console.log("primeNumbers", primeNumbers)

const gr = () => {
    return ~~(+Math.random() * 100 + 1)
}

var randomNumber = [gr(), gr(), gr(), gr(), gr(), gr(), gr(), gr()];
console.log("randomNumber", randomNumber);

var differentVars = [2, "any type works", undefined, null, true, 2.51];
console.log("differentVars", differentVars)

var myArray = ["zero", "one", "two"];
console.log(myArray[0]); // 0 is the first element of an array
// in this case, the value would be "zero"
myArray = ["John Doe", "Billy"];

var elementNumber = 1;
console.log(myArray[elementNumber]); // Billy

console.groupEnd();

console.group("Objects");

myObject = {};

john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };

billy = {
    firstname: "Billy",
    lastname: undefined,
    fullname: "Billy"
};


console.log(john.fullname); // John Doe
console.log(billy.firstname); // Billy

console.groupEnd();