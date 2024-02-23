const numbers = [1,5,6,4,15];

const players = [75,65,45,85,45,55];

const selected = players.find(player => player > 50);
console.log(selected);

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
