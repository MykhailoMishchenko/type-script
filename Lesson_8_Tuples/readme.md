# **Tuple (Кортеж)**

## `Tuple (Кортеж)`
Touple (Кортеж) - Структуры, похожие на массивы, в которых каждый элемент - это какое-то свойство записи
```
const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number]; //создаем type alias

const cola: [string, boolean, number] = ["brown", true, 40]; // такая аннотация превращает массив в кортеж (tuples)

cola[1] = "black"; // TS: Type 'string' is not assignable to type 'boolean'.

const sprite: Drink = ["clear", true, 40];

const coffee: Drink = ["black", false, 0];

// не читаемый код
const carSpecs: [number, number] = [400, 3354]

// доступный
const carSpec = {
  horsePower: 400,
  weight: 3354
};
```