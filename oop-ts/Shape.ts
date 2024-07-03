interface Shape {
    edges: number;
    getArea: () => number;
}

export class Triangle implements Shape {
    edges: number = 3;
    height!: number;
    base!: number;

    getArea(): number {
        return 0.5 * this.base * this.height;
    }

    public setHeight(height: number) {
        return this.height;
    }

    public setBase(base: number) {
        return this.base;
    }

}