# React Redux App With TS

`Плюсы`
- Намного проще избежать очень распространенных опечаток, таких как неправильные типы action
- Дает разработчикам лучшее понимание типов передаваемых данных
- Намного проще делать рефакторинг

`Минусы`
- Не самые лучшие файлы определения типа (особенно для Redux)
- Огромное количество Generics
- Очень много импортов, так как почти все (action creator, action reducer, store, component) должны знать о разных типах
- Redux по своей сути функциональный по своей природе, трудно интегрировать с классами TS