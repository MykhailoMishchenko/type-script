# **Функции** 

## `Стрелочные функции`
- Если мы возвращаем что-то, то нужно указывать тип **(): type =>**  
```
const add = (a: number, b: number): number => {
    return a + b;
};
```
- TS не будет ругаться, если мы не укажем тип для return, но это плохая практика
```
const subtract = (a: number, b: number) => {
    return a - b;
};
```

## `Функциональное выражение`
```
function divide(a: number, b: number): number {
    return a / b;
}
```

## `Анонимные функции`
```
const multiply = function (a: number, b: number): number {
    return a * b;
};
```

## `Разница между void & never`
- Если указать 'void' в return можно поместить null & undefined
```
const logger = (message: string): void => {
    console.log(message);
    return null && undefined; //можно
    return message // нельзя
};
```
- Если указать 'never' и сделать return, то TS будет ругаться
```
const throwError =(message: string): never => {
    throw new Error(message);
};
```

## `Деструктуризация в функциях`
1) Без деструктуризации
```
const todayWeather = {
    date: new Date(),
    weather: "sunny"
};

const logWeather = (forecast: { date: Date, weather: string}): void => {
    console.log(`${forecast.date} ${forecast.weather}`);
};

logWeather(todayWeather);
```
2) Деструктуризация
```
const todayWeather = {
    date: new Date(),
    weather: "sunny"
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(`${date} ${weather}`)
};

logWeather(todayWeather);
```
