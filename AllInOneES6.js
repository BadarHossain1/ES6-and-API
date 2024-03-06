
const student = {
    name: 'Dip ekta  ',
    age: 28,
    position: 'Senior'
}

// 1: Template String

const about = `My Name is ${student.name}. I am ${student.age} years old. I am a ${student.position} Instructor. I have ${numbers.length} students in my class.`

// 2: Arrow Function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x + y + z;
const doMath = (x,y) => {
    const sum = x + y;
    return sum * 2;
}

// 3: Spread Operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [...numbers, 11, 12, 13, 14, 15];


// Array Methods

const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'samsung', color: 'black'},
    {name: 'watch', price: 300, brand: 'casio', color: 'golden'},
    {name: 'sunglass', price: 30, brand: 'rayban', color: 'black'},
    {name: 'camera', price: 3000, brand: 'canon', color: 'black'}
    
]

const brands = products.map(product => product.brand);

products.forEach(product => console.log(product));


// 3: Filter

const cheap = products.filter(product => product.price <= 5000);

// 4: Find

const special = products.find(product => product.name === 'laptop');
