// 8 ways to get undefined

let first;
// console.log(first);
// 1. Declare a variable but do not assign a value to it

function second(a,b){
    const total = a+b;
}
// console.log(second());

// 2. Declare a function but do not return a value from it

function third(a,b,c,d){
    const total = a+b+c+d;
    // console.log(a,b,c,d);
}

third(1,2);
// 3. Declare a function but do not pass all the required arguments to it

function noNegative(a,b){
    if(a<0 || b<0){
        return;
        // ki return korbe bhai????
    }
    return a+b;
}

// console.log(noNegative(1,-2));
// 4. Declare a function and return from it without returning a value

const fifth = {id: 2, name: 'ponchom', age: 20};
// console.log(fifth.hobbies);

// 5. Access a property of an object that does not exist

const sixth = [1,2,3,4,5];
// console.log(sixth[5]);

// 6. Access an index of an array that does not exist

const sixtharray = [1,2,3,4,5];
delete sixtharray[2];
// console.log(sixtharray[2]); use splice instead of delete to remove an index from array for example: sixtharray.splice(2,1);

// 7. Delete an index of an array and then access it

const seventh = null;
// console.log(seventh);

// 8. Declare a variable and assign it the value of null

const eighth = undefined;
// console.log(eighth);

// 9. Declare a variable and assign it the value of undefined

// console.log(typeof undefined); //undefined
// console.log(typeof null); //object
// console.log(undefined == null); //true

