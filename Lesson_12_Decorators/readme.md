# **Decorators**
- Функции, которые можно использовать для модификации/изменения различных свойств/методов в классе
- Не то же самое, что декораторы в JS
- Используются только с классами
- Понимания порядка, в котором запускаются декораторы, является ключом к их пониманию

`Декораторы для свойства, метода, аксессора`
- Первый аргумент - прототип объекта
- Второй аргумент - это ключ свойства / метода / аксессора к объекту
- Третий аргумент - дескриптор свойства
- Декораторы применяются при запуске кода для этого класса ( а не при создании экземпляра класса)

`Аргументы`
1. target
2. key
3. desc - **PropertyDescriptor**
   - writable - можно ли изменить это свойство
   - enumerable - можно ли итерировать это свойство при помощи "for...in"
   - value - текущее значение
   - configurable - определить свойства можно изменить и свойство можно удалить

`Без Decorator Factory`

```
class Car {
    color: string = "Red";

    get formattedColor(): string {
     return `This car color is ${this.color}`
    }

    @logError
    drive(): void {
        throw new Error()
        console.log("I am driving")
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
        try {
            method();
        } catch (error) {
            console.log("Damn! Car is crashed")
        }
    }
}

const car = new Car();
car.drive()
```

`With Decorator Factory`
```

class Car {
    color: string = "Red";

    get formattedColor(): string {
        return `This car color is ${this.color}`
    }

    @logError("Damn! Car is crashed")
    drive(): void {
        throw new Error()
        console.log("I am driving")
    }
}

const logError = (errorMessage: string) => (target: any, key: string, desc: PropertyDescriptor): void => {
    const method = desc.value;
    desc.value = function () {
        try {
            method();
        } catch (error) {
            console.log(errorMessage)
        }
    }
}


const car = new Car();
car.drive()
```

`Decorator для свойств объекта`
```
class Car {

    @testDecorator
    color: string = "Red";

    @testDecorator
    get formattedColor(): string {
        return `This car color is ${this.color}`
    }
    
}

function Decorator (target: any, key: string) {
    console.log(key); // color, formattedColor
}
```

`Decorator для параметров функций`

```
class Car {

    @testDecorator
    color: string = "Red";

    @testDecorator
    get formattedColor(): string {
        return `This car color is ${this.color}`
    }
    
    drive(@parameterDecorator speed: string, @parameterDecorator isStopped: boolean): void {
        if (speed === "fast") console.log("its a fast car!")
        else console.log("its slow car")
    }
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index); // drive 1, drive 0
}
```

`Decorator для всего класса`

```
@Decorator
class Car {

    color: string = "Red";

    get formattedColor(): string {
        return `This car color is ${this.color}`
    }
    
    drive(speed: string, isStopped: boolean): void {
        if (speed === "fast") console.log("its a fast car!")
        else console.log("its slow car")
    }
}

function Decorator(constructor: Function) {
    console.log(constructor) // [class Car]
}
```