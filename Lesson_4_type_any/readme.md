# **Тип any**
- Такой же тип, как например 'string' или 'number'
- Это значит, что TS понятия не имеет, что это и не может проверить на содержание ошибок
- **Нужно избегать переменных с типом 'any' любой ценой**

## `Как делать не стоит`
```
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}
```

## `Как правильно`
```
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}
```