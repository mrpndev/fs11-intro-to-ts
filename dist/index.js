"use strict";
let message = "Welcome to TypeScript";
// message = 123 // Compile Error: number not assignable to string
console.log(message);
/*
    ? Running TS file
    * we need to compile it
    * run `npx tsc`
    * it creates a .js file int the /dist folder
    * run that file using `node` command
*/
/*
    ? Data Types & Inference
    * syntax: variable: dataType
    * inference: TS doesn't require defining every variable
    * it examines the data type and will make an assumption
*/
let firstName = "Paul";
let age = 27;
let isStudent = false;
let country = "USA";
// country = 25 // Error - inferred it's number so it sticks with a number
country = "Germany";
console.log(country);
/*
    ? Any type
    ! use sparingly if ever
    * disables type checking for that value
*/
let currentYear = "2025";
currentYear = 2026;
// console.log(currentYear.toLowerCase()) // Error - we weren't warned and used String method on Number
/*
    ? Unknown type
    * allows different values
    * requires MANUAL checking prior to use
    * safer than any
*/
let data = "Hello";
// console.log(data.toUpperCase()) // Error - attempting to use method without manual checks
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
/*
    ? Arrays & Objects in TS
    * :number[] - defines numbers inside the array
    * can be defined as :Array<number>
    
    * objects look like two objects + destructure
        * first object holds data types for each property
        * second object holds the values
*/
let scores = [90, 85, 100];
let active = [true, false];
console.log(scores, active);
let student = {
    name: "Paul",
    age: 27,
    enrolled: false,
};
// pass it as data type itself
let bmwM5 = {
    make: "BMW",
    model: "M5",
    year: 2025,
    miles: 20000
};
let bmwM2 = {
    make: "BMW",
    model: "M2",
    year: 2025,
    miles: 1200
};
// bmwM5.year = "2025" // Error
// let garage: Car[] = [bmwM5, bmwM2]
let garage = [bmwM5, bmwM2];
let carsBeforeBreakInMiles = garage.filter(car => car.miles <= 1200);
console.log(carsBeforeBreakInMiles);
let user1 = {
    fullName: "Paul",
    email: "paul@codecademy.com",
    password: "dbLocal",
    isAdmin: true
};
let user2 = {
    fullName: "David",
    email: "david@codecademy.com",
    password: "dbLocal",
    isAdmin: true
};
let user3 = {
    fullName: "Sihin",
    email: "sihin@codecademy.com",
    password: "dbLocal",
    isAdmin: false
};
let users = [user1, user2, user3];
/*
    ? Functions & Return Types
    * parameters :dataType
    * return data type after parameter parens
    * someFx(param: paramDataType): returnDataType
    * can have void return when not returning anything
    ! parameter data types do not guarantee a value
*/
function addNums(a, b) {
    return a + b;
    // return `${a + b}` // Error - expects number not a string
}
console.log(addNums(2, 5));
// console.log(addNums(2, "5")) // Error
function greetStudent(name) {
    console.log(`Greetings, ${name}`);
}
greetStudent("Sihin");
let isAdmin = (user) => {
    return user.isAdmin;
};
/*
    ? Optional parameters & Default parameters
    * a way to build a function with parameters that may or may not be required
    * defined by ? before their type definition
    * ex: name?: string
    
    * allow us to set default value if none provided
    * treated like default but not empty and doesn't need to be accounted for in logic
*/
let logMessage = (message, user) => {
    if (user) {
        console.log(message, user);
        return;
    }
    console.log(message);
};
logMessage("Something went wrong");
logMessage("something went wrong", user1);
function calculateTax(price, tax = 0.07) {
    return price * tax;
}
console.log(calculateTax(10));
/*
    ? Challenge
    * create a function called calculateAverage
    * it will take many scores as a single data type as a parmeter
    * within feel free to use reduce to calculate total
    * assign it to total variable
    * the reducer should take sum and score and 0 accumulator
    * add sum and score together within the reduce function
    * once done return the value of total divided by scores.length
*/
function calculateAverage(scores) {
    if (!scores.length) {
        return 0;
    }
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(calculateAverage([25, 50, 80, 122]));
console.log(calculateAverage([]));
let germany = {
    country: "Germany",
    countryCode: "DE",
    year: 2026,
    population: 25000000,
    gdpUSD: 250000,
    inflation: 3.0,
    unemployment: 3.5
};
console.log(germany);
// Type can be union (here), primitive, tuple, or an object
/*
    ? Union Types
    * used when a value can be two possible types
    * ex: a function returning a number or a boolean
    * denoted using pipe symbol |
    * kinda like an OR for data types
    
    ? Type Narrowing
*/
let userId = false;
userId = 256;
userId = false;
// userId = "string" // Error
function printUserId(id) {
    // console.log(id.toFixed(2))
    // ? throws an error because method is for number but not for boolean
    if (typeof id === "number") {
        console.log(id.toFixed(2));
    }
    else {
        console.log(Number(id));
    }
}
printUserId(false);
