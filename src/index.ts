let message: string = "Welcome to TypeScript";
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

let firstName: string = "Paul";
let age: number = 27;
let isStudent: boolean = false;

let country = "USA";
// country = 25 // Error - inferred it's number so it sticks with a number
country = "Germany";
console.log(country);

/* 
	? Any type
	! use sparingly if ever
	* disables type checking for that value
*/

let currentYear: any = "2025";
currentYear = 2026;

// console.log(currentYear.toLowerCase()) // Error - we weren't warned and used String method on Number

/* 
	? Unknown type
	* allows different values
	* requires MANUAL checking prior to use
	* safer than any
*/

let data: unknown = "Hello";

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

let scores: number[] = [90, 85, 100];

let active: Array<boolean> = [true, false];

console.log(scores, active);

let student: {
	name: string;
	age: number;
	enrolled: boolean;
} = {
	name: "Paul",
	age: 27,
	enrolled: false,
};

/* 
	? Type Aliases
	* allow us to define data type structure
	* we then assign it to any object we get or pass
	* starts with keyword `type`
	* use Capitalization to define it
*/

// define data type alias
type Car = {
	make: string,
	model: string,
	year: number,
	miles: number
}

// pass it as data type itself
let bmwM5: Car = {
	make: "BMW",
	model: "M5",
	year: 2025,
	miles: 20000
}

let bmwM2: Car = {
	make: "BMW",
	model: "M2",
	year: 2025,
	miles: 1200
}
// bmwM5.year = "2025" // Error

// let garage: Car[] = [bmwM5, bmwM2]
let garage: Array<Car> = [bmwM5, bmwM2]

let carsBeforeBreakInMiles = garage.filter(car => car.miles <= 1200)
console.log(carsBeforeBreakInMiles)

/* 
	? Challenge
	* create an object called user
	* it should take fullName, email, password, and isAdmin
	* first three should be strings, last one boolean
	* define a type alias and reuse it on at least 3 users
	* pass the users into userS array which should only accept users
	* console log the array
	* test to ensure that any other data type you pass breaks your build
*/

type User = {
	fullName: string,
	email: string,
	password: string,
	isAdmin: boolean,
}

let user1: User = {
	fullName: "Paul",
	email: "paul@codecademy.com",
	password: "dbLocal",
	isAdmin: true
}

let user2: User = {
	fullName: "David",
	email: "david@codecademy.com",
	password: "dbLocal",
	isAdmin: true
}

let user3: User = {
	fullName: "Sihin",
	email: "sihin@codecademy.com",
	password: "dbLocal",
	isAdmin: false
}

let users: Array<User> = [user1, user2, user3]

/* 
	? Functions & Return Types
	* parameters :dataType
	* return data type after parameter parens
	* someFx(param: paramDataType): returnDataType
	* can have void return when not returning anything
	! parameter data types do not guarantee a value
*/

function addNums(a: number, b: number): number {
	return a + b
	// return `${a + b}` // Error - expects number not a string
}

console.log(addNums(2, 5))
// console.log(addNums(2, "5")) // Error

function greetStudent(name: string): void {
	console.log(`Greetings, ${name}`)
}

greetStudent("Sihin")

let isAdmin = (user: User): boolean => {
	return user.isAdmin
}

/* 
	? Optional parameters & Default parameters
	* a way to build a function with parameters that may or may not be required
	* defined by ? before their type definition
	* ex: name?: string
	
	* allow us to set default value if none provided
	* treated like default but not empty and doesn't need to be accounted for in logic
*/

let logMessage = (message: string, user?: User): void => {
	if (user) {
		console.log(message, user)
		return
	}
	console.log(message)
}

logMessage("Something went wrong")
logMessage("something went wrong", user1)



function calculateTax(price: number, tax: number = 0.07): number {
	return price * tax
}

console.log(calculateTax(10))

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

function calculateAverage(scores: Array<number>): number {
	if (!scores.length) {
		return 0
	}

	let total = scores.reduce((sum, score) => sum + score, 0)
	return total / scores.length
}

console.log(calculateAverage([25, 50, 80, 122]))
console.log(calculateAverage([]))

/* 
	? Interfaces & Type Aliases (again)
	* defines an expected shape of an object
	* just like a type alias
	* we use interfaces for object contracts
	* we use type aliases for unions, primitives, tuples, and objects
		* interface cannot represent those
	* defined using interface keyword
	* takes optional properties
*/

interface Country {
	country: string,
	countryCode: string,
	year: number,
	population: number,
	gdpUSD: number,
	inflation: number,
	unemployment: number,
	addedBy?: string
}

let germany: Country = {
	country: "Germany",
	countryCode: "DE",
	year: 2026,
	population: 25000000,
	gdpUSD: 250000,
	inflation: 3.0,
	unemployment: 3.5
}

console.log(germany)


// interface PromiseInterface = "pending" | "approved" | "rejected"
// Error - not allowed interface can only define single values
type PromiseInterface = "pending" | "approved" | "rejected"
// Type can be union (here), primitive, tuple, or an object

/* 
	? Union Types
	* used when a value can be two possible types
	* ex: a function returning a number or a boolean
	* denoted using pipe symbol |
	* kinda like an OR for data types
	
	? Type Narrowing
*/

let userId: number | boolean = false

userId = 256

userId = false

// userId = "string" // Error

function printUserId(id: number | boolean): void {
	// console.log(id.toFixed(2))
	// ? throws an error because method is for number but not for boolean
	
	if (typeof id === "number") {
		console.log(id.toFixed(2))
	} else {
		console.log(Number(id))
	}
}

printUserId(false)




