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