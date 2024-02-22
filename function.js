// write an examplee on function declaration, function expression and arrow function


// Function Declaration

function add(a, b) {
    const add = a + b;
    console.log(add);
}

add(2, 3);

// Function Expression

const add = function(a, b) {

    const add = a + b;
    console.log(add);
}

add(2, 3);

// Arrow Function

const add = (a, b) => {

    const add = a + b;
    console.log(add);
}   

add(2, 3);

// give examples on all types of arrow function

// 1. Arrow function with no parameter

const add = () => {
    console.log('Hello World');
}   

add();

// 2. Arrow function with single parameter

const add = a => {
    console.log(a);
}

add(2);

// 3. Arrow function with multiple parameters

const add = (a, b) => {
    const add = a + b;
    console.log(add);
}

add(2, 3);
