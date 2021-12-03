# **Массивы**

## `Типы данных в массивах`

### `Что в уроке`
1) Определение + Обзор 
## `Typed Arrays (Типизированные массивы)`
Массивы, в которых каждый элемент - это значение определенного типа.
2) Для чего нужно указывать типы в массивах
- TS может сделать сделать вывод типа, когда извлекает значение из массива
```
const colors = ["red", "green", "yellow"]; // colors: string[]

const fruitsByColor = [
    ["tomato"],
    ["apple"],
    ["lemon"]
]; // fruitsByColor: string[][]

const color = colors[0] // color: string
const colorOne = colors.pop() //  colorOne: string
 
// если мы инициализируем пустой массив, то нужно писать типа для него
const colors: string[] = []
```
- TS может предотвратить добавление несовместимых типов в массив
```
const colors = ["red", "green", "yellow"];

colors.push(true); // TS: Argument of type 'boolean' is not assignable to parameter of type 'string'
```
- Мы можем получить помощь используя функции 'map', 'forEach', 'reduce'
```
colors.map((color: string): string => color.toUpperCase()) // подсказывает с методами
```
- Гибкость - массивы всё же могут содержать значения разных типов
```
const importantDate = [new Date(), "2021-11-11"]; // importantDate: (string | Date)[]

importantDate.push("2021-10-10");
importantDate.push(new Date());
importantDate.push(10); // TS: Argument of type 'number' is not assignable to parameter of type 'string | Date'.
```
3) Когда используется
- Каждый раз, когда нам нужно представить коллекцию записей в случайном порядке




