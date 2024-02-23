class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log(`${this.name} is moving`);
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice)
    {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    move(){
        console.log(`${this.name} is moving with ${this.color} color`);
    }
}

class Truck extends Vehicle{
    constructor(name, price, weight)
    {
        super(name, price);
        this.weight = weight;
    }
    move(){
        console.log(`${this.name} is moving with ${this.weight} weight`);
    }
}

const volvo = new Bus('volvo', 100000, 50, 100);
console.log(volvo);
volvo.move();