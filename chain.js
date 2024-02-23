//data access

const data = [{id:1, name: 'Badar', address: 'kochu khet'}];

// console.log(data[0].address);

const product = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 50000},
        {id: 2, name: 'hp laptop', price: 60000},
    ]
}

// console.log(product.data[0].price); 

//make a nested object

const person = {    
    name: 'Badar',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

// console.log(person.address.city?.second); //undefined

// optional chaining is used to access nested object properties without getting an error if the property does not exist.
