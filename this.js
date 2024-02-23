class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}


const Badar = new Person('Badar', 20);
console.log(Badar);
Badar.sleep();

