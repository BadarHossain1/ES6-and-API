const numbers = [1,5,6,4,15];

const players = [75,65,45,85,45,55];

const selected = players.filter(player => player > 50);
console.log(selected);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
