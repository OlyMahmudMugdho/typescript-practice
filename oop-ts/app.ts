class Person {
    private name: string;
    private age: number;

    public constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const mugdho = new Person("Mugdho", 23);
console.log(mugdho)