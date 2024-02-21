//spread operator

//spread operator is used to split up array elements or object properties.

//Example 1

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

//Output: [1, 2, 3, 4]

//Example 2

const person = {
    name: 'Badar',
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);