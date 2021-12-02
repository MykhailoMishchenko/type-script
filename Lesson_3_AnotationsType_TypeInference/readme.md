# **Анотации Типов и Вывод Типов**

## `Type Annotations, Type Inference`
`(Переменные, функции, объекты)`
- Определение + Обзор
- Примеры
- Для Чего это нужно
- Когда используется

Type Annotations - код, который мы добавляем для TS, чтобы он понял, значение какого типа будут содержаться в переменной. (Мы как разработчики, указываем тип для TS)

Когда использовать?
- Когда переменная объявляется, а инициализируется позже
- Когда создается переменная, вывод о типе которой не может быть сделан
- Когда функция возвращает тип 'any' и нам нужно уточнить тип

### Переменные
```
const oranges: number = 5; // : number - анотация типа
let speed: string = "fast";
let hasDog: boolean = true;

let nothing: null = null;
let nothingAll: undefined = undefined;
```

### Встроенные объекты
```
let now: Date = new Date();
```
### Массивы
```
let colors: string[] = ["red", "green", "blue"]; //массив строк, другие значение он хранить не может.
let numbers: number[] = [1, 2, 3, 4, 5];
let results: boolean[] = [true, true, false];
```
### Классы
```
class Car {

}

let mazda: Car = new Car();
```
### Объекты
```
let coordinates: { x: number; y: number } = {
    x: 10,
    y: 20
}
```
### Функции

````
const fn: (i: number) => void = (i: number) => {
    console.log(i)
}
````

Type Inference - TS пытается сам определить, значение какого типа будут содержаться в переменной. (TS сам угадывает тип)