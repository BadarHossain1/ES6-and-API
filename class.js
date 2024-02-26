const products = [
    { name: 'laptop', price: 1000 },
    { name: 'desktop', price: 1500 },
    { name: 'phone', price: 500 },
    { name: 'tablet', price: 800 },
    { name: 'watch', price: 300 }
]

class Product{
    
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }

}

const lenovo = new Product('le le le lenovo');
 console.log(lenovo);
lenovo.speak('Oba kita kou?');


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    teach(){
        console.log(`I am teaching ${this.subject}`);
    }
}

const RanaSir = new Teacher('Rana sir', 'Data Communication');
console.log(RanaSir)


