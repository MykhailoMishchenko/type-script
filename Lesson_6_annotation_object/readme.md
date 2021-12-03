# **Аннотации для объектов** 

```
const profile = {
    name: "Joe",
    age: 25,
    coordinates: {
        latitude: 1,
        longitude: 20
    },
    setAge(age: number): void {
        this.age = age
    }
};

const {
    age
}: {age: number} = profile;

const { coordinates: { latitude, longitude } }: {coordinates: {latitude: number, longitude: number}} = profile;
```