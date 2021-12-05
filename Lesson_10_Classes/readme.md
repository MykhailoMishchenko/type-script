# **Classes**
`Шаблон для создания объектов - с полями (значения) и методами (функции) для отображения "чего-то" в приложении`

## `Модификаторы в TS`
- public

Этот метод может быть вызван **откуда угодно в любое время**

- private

Этот метод может быть вызван **только другими методами внутри того же класа**
- protected

Этот метод может быть вызван другими методами внутри того же класса или другими методами внутри класса наследника

1) Как классы работают с методами (методами)
```
class Vehicle {
    public stop(): void{
        console.log("I've stopped");
    }
    private beep(): void{
        console.log("Beeep")
    }
    protected UseHeadlights(): void {
        console.log("on")
    }
};

class Car extends Vehicle{
    private drive(): void {
        console.log("Car is driving");
        this.beep() // TS: Property 'beep' is private and only accessible within class 'Vehicle'.
        this.UseHeadlights();
    }
    startDrivingProcess(): void {
        this.drive();
    }
}

const vehicle = new Vehicle();
vehicle.stop();


const car = new Car();
// car.drive(); // TS: Property 'drive' is private and only accessible within class 'Car'.
car.startDrivingProcess(); // console.log("Car is driving")
car.stop();

```
2) Как классы работают с полями (значениями)
```
class Vehicle {
    constructor(public color: string) {}
};

class Car extends Vehicle{
    constructor (public wheels: number, color: string) {
        super(color)
    }
}

const vehicle = new Vehicle("red");
// vehicle.drive();
console.log(vehicle.color) // red

const car = new Car(4, "silver");
```