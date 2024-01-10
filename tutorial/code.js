class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
       
       
    }
    Setmodel(){
        return this.model;
    }
}

let car1 = new Car("BMW", 2023);

console.log(car1.Setmodel());



