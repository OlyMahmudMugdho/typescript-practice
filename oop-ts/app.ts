class Person {
    private name: string;
    private age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }
}

const mugdho = new Person("Mugdho", 23);
console.log(mugdho.getName())