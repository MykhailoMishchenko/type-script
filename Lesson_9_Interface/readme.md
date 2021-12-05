# **Interface**

## `Что это?`
Interface создает новый тип, описывая названия свойств и типы значений объекта

## `Пример`
```
interface Reportable {
    summary(): string;
};

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary(): string {
        return `Name ${this.name}`
    }
};

const cola = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `Cols has ${this.sugar} grams of sugar`
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
};

printSummary(oldCivic);
printSummary(cola);
```

## `oldCivic` <- `Reportable` -> `cola`
Два объекта "oldCivic", "cola" должны соответсвовать Reportable интерфейсу для работы с printSummary (**Должны иметь свойство в данном случае summary(), которое возвращает строку**)
## `Interface Reportable` 
Reportable это "первартник" для `printSummary`

## `Основная стратегия повторно используемого кода в TS`
1) Создание функций, которые принимают параметры, типизированные при помощи интерфейсов
2) Объекты/Классы могут "имплементировать" нужный интерфейс для работы с функцией  