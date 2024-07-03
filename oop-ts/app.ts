class Person {
    private name: string;
    private age: number;
    private hobby: string;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setHobby(hobby: string) {
        this.hobby = hobby;
    }

    public getHobby(): string {
        return this.hobby;
    }
}

const mugdho = new Person("Mugdho", 23);
console.log(mugdho.getName())
mugdho.setHobby("Learning Arabic")
console.log(mugdho.getHobby())