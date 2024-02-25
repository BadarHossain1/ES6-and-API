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
    status: 'Developer'

};

const newPerson = {
    ...person,
    age: 28,
    address: {
        city: 'Karachi',
        country: 'Pakistan'
    
    }
};

console.log(newPerson);

const {age: newAge} = newPerson;
console.log(newAge); //Output: 28

const{address:{city: newCity}} = newPerson; //Output: Karachi //Nested object destructuring 




const arr=[1, 2, 3, 4, 5];

const [a, b, ...rest] = arr;
console.log(a,b,rest);

//Output: 1 2 [3, 4, 5]

//rest operator is used to merge a list of function arguments into an array.





