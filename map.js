const numbers = [1, 2, 3, 4, 5];

function square(num) {
    console.log(num, 'is being squared')
    return num * num;
}

const result = numbers.map(square);
const doubled = numbers.map(num => num * 2);
console.log(doubled);
console.log(result); // [1, 4, 9, 16, 25]

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const firstNames = friends.map(frnd => frnd.split(' ')[0]);

console.log(firstNames);   