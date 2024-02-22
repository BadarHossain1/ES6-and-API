// destructuring
// 1. Object destructuring

const person = {
    name: 'Badar',
    age: 28
};

const {name} = person;

console.log(name);
//Output: Badar

//2. Array destructuring

const numbers = [1, 2, 3];

const [a, b] = numbers;


console.log(a);

//Output: 1

console.log(b);

//Output: 2

//3. Destructuring function arguments

function print({name, age}) {

    console.log(name, age);
}

print(person);

//Output: Badar 28


//4. Destructuring function arguments with default value


function print({name, age=30}) {


    console.log(name, age);
}


print(person);





//Output: Badar 28

//5. Destructuring function arguments with default value and function default value

function print({name, age=30} = {}) {

    console.log(name, age);
}

print(person);

//Output: Badar 28

//6. Destructuring function arguments with default value and function default value

function print({name, age=30} = {name: 'Badar'}) {

    console.log(name, age);
}

print();

//Output: Badar 30

//7. Destructuring function arguments with default value and function default value

function print({name, age=30} = {name: 'Badar'}) {

    console.log(name, age);
}

print({name: 'Ali'});

//Output: Ali 30

//8. Destructuring function arguments with default value and function default value

function print({name, age=30} = {name: 'Badar'}) {

    console.log(name, age);
}

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};

// Extract properties from the person object
const { firstName, secondName, age } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 30
