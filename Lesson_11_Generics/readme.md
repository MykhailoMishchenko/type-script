# **Generics**
- Как аргумент функции, но для типов в определениях классов/функций
- Позволяет нам определить тип свойства/аргумента/возвращаемого значения в будущем
- Часто используется при написании повторно используемого кода

```
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get (index: number): T {
        return this.collection[index]
    }
};

const arr = new ArrayOfAnything([1,2,3,4]) // TS: arr: ArrayOfAnything<number>
```


```
function printAnything<T>(arr: T[]):void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything([1,2,3,4,5]) // TS: arr: number[]): void
printAnything(["str",2,3,4,5]) // TS: arr: (string | number)[]): void
```

`Ограничения`


```
class Human {
    print(){
        console.log("I am a Human")
    }
}

class Robot {
    print(){
        console.log("I am a Robot")
    }
}

interface Printable {
    print(): void;
}

function printAny<T extends Printable> (arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}

printAny<Human | Robot>([new Human(), new Robot()])
```