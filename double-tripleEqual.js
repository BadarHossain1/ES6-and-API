// double equal
console.log(2 == 2); // true
console.log(2 == '2'); // true
console.log(2 == 3); // false

// triple equal

console.log(2 === 2); // true
console.log(2 === '2'); // false
console.log(2 === 3); // false

// double equal checks only the value of the variable. It does not check the type of the variable.  Whereas triple equal checks both the value and the type of the variable. If the value and the type of the variable are the same, then it returns true. Otherwise, it returns false.


//type coercion means converting one data type to another data type. For example, if we compare a number with a string using double equal, then JavaScript converts the string to a number and then compares the two numbers. If we compare a number with a string using triple equal, then JavaScript does not convert the string to a number and then compares the two numbers. It just compares the two numbers. That's why double equal is called loose equality and triple equal is called strict equality.

// type casting is the same as type coercion. It means converting one data type to another data type. For example, if we compare a number with a string using double equal, then JavaScript converts the string to a number and then compares the two numbers. If we compare a number with a string using triple equal, then JavaScript does not convert the string to a number and then compares the two numbers. It just compares the two numbers. That's why double equal is called loose equality and triple equal is called strict equality.


// compare two array

const first = [1,2,3,4,5];
const second = [1,2,3,4,5];

console.log(first == second); // false

console.log(first === second); // false

// compare two object

const third = {id: 1, name: 'Badar', age: 20};
const fourth = {id: 1, name: 'Badar', age: 20};

console.log(third == fourth); // false

console.log(third === fourth); // false

// compare two function

function fifth(){
    console.log('Hello');
}

function sixth(){
    console.log('Hello');
}

console.log(fifth == sixth); // false

console.log(fifth === sixth); // false

// when this comparisons will be true?

// when we compare two variables that are pointing to the same memory location, then the comparison will be true. For example:

const seventh = [1,2,3,4,5];
const eighth = seventh;

console.log(seventh == eighth); // true

