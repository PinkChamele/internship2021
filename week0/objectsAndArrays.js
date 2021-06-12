const obj = {
    a: 1,
    b: 2
};

// 1. Log count of keys in object
console.log('1: ', Object.keys(obj).length)

// 2. Create new object from "obj" and add to newly created param "c" with value "3".
// Original "obj" shouldn't be modified

const obj2 = Object.assign({}, obj);
obj2.c = 3;
console.log(obj); // output {a: 1, b: 2};
console.log(obj2) // should return {a: 1, b: 2, c: 3}

// 3.Check if is given input is array (Please, use more than one solution)
const input1 = 'array';
const input2 = ['array'];

console.log('3', Array.isArray(input1));
console.log('3.1', input1 instanceof Array);
console.log('3.2', input2.length !== undefined); // input2.length = 2; -> doesn't work
console.log('3.3', input1.constructor === Array); // input1.constructor = undefined; -> doesn't work
console.log('3.4', Object.getPrototypeOf(input2) === Array.prototype)

// 4. Remove duplicates from array (Try to find more than one solution)
function removeDuplicates(array) {
    return [...new Set(array)];
}

const array = ['A', 'B', 'A', 'C', 'B']; 
const set = new Set(array);
console.log('4:', Array.from(set));
console.log('4.1', array.filter((el, index, arr) => arr.indexOf(el) == index));


// 5. Merge two arrays, also remove duplicates
const array1 = ['A', 'B', 'F', 'C', 'B']; 
const array2 = ['A', 'D', 'E', 'D', 'F']; 


console.log('5', removeDuplicates(array1.concat(array2)));

// 6. Write function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
function removeFalsy(array) {
    return array.filter((el) => !!el);
}

console.log('6: ', removeFalsy([10, null, -12, false, undefined, '', 0, 234]));

// 7. Get random item from array
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log('7:', getRandom([10, 22, 'Super', null, undefined, 0, false, 111]));

// 8. Sort the array in the ascending order
function sort(array) {
    return array.sort((el1, el2) => el1 - el2);
}

console.log('8: ', sort([11, 21, 13, 88, 2, 4, 77]));

/** 9. Get sorted array from 8 task, and write function, that creates object: 
 * {
 *     even: [88, 2, 4],
 *     odd: [11, 21, 13, 77]
 * }
 *  */ 
function separateNumbers(array) {
    const obj = {
        even: [],
        odd: []
    };
    for (const element of array) {
        if (element % 2 == 0) {
            obj.even.push(element);
        }
        else {
            obj.odd.push(element);
        }
    }
    return obj;
}

console.log('9: ',  separateNumbers([88, 2, 4, 11, 21, 13, 77]));
