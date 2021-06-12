
// 1. Write function to get random value in range from -100 to 100
const random = (min, max) => { return Math.random() * (max - min) + min};

console.log('1: ', random(-100, 100))

// 2. Write function to check is positive random number, 
function isPositive(number) {
    return number > 0;
}

console.log('2: ', isPositive(random(-100, 100)));
// output should be boolean

// 3. Write function, which create Array of random numbers. Array length = 6;
function createRandomArray(length) {
    const array = [];
    for(let i = 0; i < length; i++) {
        array.push(random(0, 100));
    }
    return array;
}

function getArraySum(array) {
    return array.reduce((sum, element)=>{return sum += element});
}
// Result of function should be sum of array elements

const randArr = createRandomArray(6);
console.log('3:', randArr, getArraySum(randArr));

// 4. Write function to create random color
function getRandomColor() {
    return {
        red: Math.floor(random(0, 256)),
        green: Math.floor(random(0, 256)), 
        blue: Math.floor(random(0, 256)),
        toString() {
            return `rgb(${this.red}, ${this.green}, ${this.blue})`;
        }
    }
}
console.log('4: ', getRandomColor());
// output rgb(*, *, *);

// 5. Write function to find out if a number is a natural number or not
function isNatural(...params) {
    return !params.some((element) => !(Math.floor(element) === element && element > 0));
}

console.log('5: ', isNatural(10, 22, -23, 5.4));
console.log(isNatural(10));
console.log(isNatural(5.4));

// 6. Create function isDivideBy(number, firstDivider, secondDivider). Check if an integer number is divisible by each out of two arguments
function isDivisibleBy(number, firstDivider, secondDivider) {
    return !(number % firstDivider) && !(number % secondDivider);
}
/**
 * (45, 1, 6)    ->  false
 * (45, 5, 15)   ->  true
 * 
 * (-12, 2, -6)  ->  true
 * (-12, 2, -5)  ->  false
 */

console.log('6: ', isDivisibleBy(45, 1, 6));
console.log(isDivisibleBy(45, 5, 15));