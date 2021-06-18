// 0. Create function that will accept (10, 20) params and return their sum.

//const { call } = require("function-bind");

// Main goal - use all possible variants to declare functions
function sum(firstNum, secondNum) {
	return firstNum + secondNum;
}

const sum1 = (firstNum, secondNum) => firstNum + secondNum;

const sum2 = function (firstNum, secondNum) {
	return firstNum + secondNum;
};

const sum3 = new Function(["a", "b"], "return a + b;");

console.group("sum");
console.log(sum(1, 3));
console.log(sum1(2, 2));
console.log(sum2(2, 8));
console.log(sum3(3, 5));
console.groupEnd("sum");

// 1. Create self-invoked anonymous function, that will return if the day after tomorrow is odd, or even.
// HINT: function accepts one argument: new Date(); 
// output example 15.06.2021, 11:19:22 is odd date
(function (day) {

	day.setDate(day.getDate() + 2);
	let dateString = day.toString("dd.MM.yyyy, hh:mm:ss");

	if (day.getDate() % 2 == 0) {
		console.log(dateString + " is even date");
	} else {
		console.log(dateString + " is odd date");
	}
})(new Date());

// 2. Rewrite this function to ES6/ES2015
/*
var Intern = function (name, age) {
    this.name = name;
    this.age = age;
    this.homework = {
        status: 'Resolved',
        rating: '100%'
    }
}

Intern.prototype.getHomework = function () {
    return `${this.name} resolved homework with status ${this.homework.status}`;
}
*/
class Intern {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.homework = {
			status: "Resolved",
			rating: "100%"
		};
	}

	getHomework () {
		return `${this.name} resolved homework with status ${this.homework.status}`;
	}

}

const intern = new Intern("Sashko", 18);

console.log(intern.getHomework());

// 3. Write multiply function. Two arguments - random numbers.
// But sometimes, we don't have second argument, and result is = random number * 12
// HINT: Read about default parameters in functions.

/**
 * example output
 * (19, 29) => 551
 * (23) => 276
 */
function multiply(firstNumber, secondNumber = 12) {
	return firstNumber * secondNumber;
}

console.group("multipy");
multiply(19, 29);
multiply(23);
console.groupEnd("multipy");

/**
 * 4. Write function, that modify first argument to example output with delay 2 seconds
 * 
 * example:
 * yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) }); output: { a: 2, b: 3 }
 * HINT: read about callbacks
 */

function yourFuncName(options, callback) {
	setTimeout(() => {
		const data = {};

		for (let [key, value] of Object.entries(options)) {
			if (typeof value != "object" && typeof value != "function") {
				value++;
			}
			data[key] = value;
		}
		callback(data);
	}, 1000);
}

yourFuncName({ a: 1, b: 2 }, (data) => { console.log(data); });
/**
 * 5. Imagine, that we have 2 requests to database, first is getUsers() that return data in 1 second,
 * and second is createUser() that resolves in 2 seconds. 
 * Your goal, is to modify createUser() with callback, and return 3 users
 */

const users = [
	{
		name: "Daniel",
		age: 22,
	},
	{
		name: "Michael",
		age: 32,
	},
];

function getUsers() {
	setTimeout(() => {
		users.forEach((user) => {
			console.log("user:", user);
		});
	}, 1000);
}

function createUser(user, callback) {
	setTimeout(() => {
		users.push(user);

		callback(users.slice(-3));
	}, 2000);
}
getUsers();
createUser({ name: "Vitalii", age: 24 }, (users) => console.log(users));
