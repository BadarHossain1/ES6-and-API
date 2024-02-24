// write a simple example of reduce

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((prev, current) => {
    console.log('prev', prev);
    console.log('current', current);
    return previous + current;
}, 0);

console.log(sum);

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)