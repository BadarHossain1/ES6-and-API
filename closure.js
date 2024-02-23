function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());

//closure is a function that has access to its outer function scope even after the outer function has finished executing.
// In JavaScript, closures are created every time a function is created, at function creation time.
// To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.
// The inner function will have access to the variables in the outer function scope, even after the outer function has finished executing.
// In the example above, the inner function has access to the roast variable of the outer function.
// The inner function has access to the outer function's variables even after the outer function has finished executing.
// The inner function has access to the outer function's parameters even after the outer function has finished executing.
