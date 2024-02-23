// argument example

function add(a,b){
    console.log(arguments);
    return a+b;
}

console.log(add(1,2,3,4,5,6,7,8,9,10)); // 3

// arguments is an array-like object. It contains all the arguments passed to the function. We can access the arguments using the index of the arguments. For example:

function add(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    console.log(arguments[5]);
    console.log(arguments[6]);
    console.log(arguments[7]);
    console.log(arguments[8]);
    console.log(arguments[9]);
    return a+b;
}

console.log(add(1,2,3,4,5,6,7,8,9,10)); // 3

