
const student = {
    name: 'Dip ekta  ',
    age: 28,
    position: 'Senior'
}

// 1: Template String

const about = `My Name is ${student.name}. I am ${student.age} years old. I am a ${student.position} Instructor.`

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


// Array destructuring

const numbers1 = [42,65];

// const x = numbers1[0];
// const y = numbers1[1];

const [x, y] = numbers1;

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}

const [first, second] = boxify(90, 34);

// Object Destructuring

const {name, price} = {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'};
console.log(name, price);

const employee = {  
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 60,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch; //optional chaining operator (?.)