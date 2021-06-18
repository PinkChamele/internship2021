const request = require("request-promise-native");

const getUsers = async () => {
	//return new Promise((resolve, reject) => {
	let response = await request("https://jsonplaceholder.typicode.com/users");//, (error, response, body) => {

	return JSON.parse(response);

	//});
};

(async function () {
	try {
		let data = await getUsers();

		console.log(data);
	} catch (error) {
		console.error(error);
	}
})();

// 1. Rewrite getUsers to async/await
/**
 *  2. Add another request to url - https://jsonplaceholder.typicode.com/comments.
 *  Make two requests, and return all values
 *  Hint: Promise.all
 * */
const getComments = async () => {
	//return new Promise((resolve, reject) => {
	let response = await request("https://jsonplaceholder.typicode.com/comments");//, (error, response, body) => {

	return JSON.parse(response);

	//});
};

Promise.all([getComments(), getUsers()])
	.then(([comments, users]) => { console.log(comments, users); })
	.catch((error) => { console.error(error); });


/**
 * 3. Read about Promice.race
 * Try to use it on previous two requests
 */
Promise.race([getComments(), getUsers()])
	.then((data) => { console.log(data); })
	.catch((error) => { console.log(error); });

/**
 * 4. Read about Promice.any
 * Try to use it on previous two requests
 */
Promise.any([getComments(), getUsers()])
	.then((data) => { console.log(data); })
	.catch((error) => { console.log(error); });