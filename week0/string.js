// instead of **** put your name and last name;

const firstName = 'Sasha';
const lastName = 'Makarevych';

// 1. concat first and last name, to create full name e.g (Vitalii Danchul)
const fullName = firstName + " " + lastName;

console.log('1: ', fullName);

// 2. log fullName third character. Please, use more than one solution
console.log('2.1: ', fullName[2]);
console.log('2.2: ', fullName.charAt(2));
console.log('2.3', fullName.slice(2, 3));


// 3. replace all vowels in fullName with number
const number = 10;
const replaced = fullName.replace(/[aeiou]/g, number);

console.log('3: ', replaced);


// 4. check if replaced string on position 8 ends with number 10

console.log('4: ', replaced.slice(8, 10) == "10" ); // (??)

// 5. log part of fullName from 3 to 7 character

console.log('5: ', fullName.slice(3, 8));

// 6. Divide replaced string by number 10

console.log('6:', replaced.split("10"))

// 7. Write function capitalize(), to capitalize first letter of string 
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}
const lowerCased = 'new york';

console.log('7:', capitalize(lowerCased));

// 8. Write insert function, that will accept main string, string to insert and position to insert
// Change **** with your name 
function insert(string, substr, position) {
    return string.slice(0, position) + substr + string.slice(position);
}


const mainString = 'Hello, my name is , I want to learn Node.js';
console.log('8:' , insert(mainString, fullName, 18));

// 9. Write your own reverse() function. (do not use .reverse())

function reverse(str) {
    let result = "";
    for (i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log('9:', reverse('my random string'));


