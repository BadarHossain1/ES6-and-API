// hoisting and its examples

// Example 1

//  console.log(a);
//  var a = 10;
//  console.log(a);

// give a function example of hoisting that uses if else

// Example 2

function second(){
    if(true){
        var b = 20;
    }
    console.log(b);
}
second();

// hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

for(var i=0; i<5; i++){
    console.log(i);
}
console.log(i);

// let and const are not hoisted. They are only accessible after they are declared. If we try to access them before they are declared, then JavaScript will throw an error. For example:

// console.log(c);
// let c = 10;
// console.log(c);





