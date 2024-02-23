const products = [  
    { name: 'laptop', price: 1000, brand: 'lenovo' },
    { name: 'phone', price: 500, brand: 'nokia' },
    { name: 'watch', price: 100, brand: 'casio' }

]

//map

const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product => product.price);
console.log(prices);

//for each

products.forEach(product => console.log(product.name));

//filter

const expensive = products.filter(products => products.price>100);
console.log(expensive);

//find

const affordable = producta.find(p=>p.price<100);
console.log(affordable);

//reduce

const total = products.reduce((acum, current) => acum+current,0);
console.log(total);

