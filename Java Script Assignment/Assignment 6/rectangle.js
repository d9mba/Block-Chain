
"use strict";

class Rectangle {
    constructor(lenght, width) {
        this.lenght = lenght;
        this.width = width;
    }

    area() {
        const area = this.lenght * this.width;
        return area;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}

const rectangle = new Rectangle(4, 6);
const areaRectangle = rectangle.area();
console.log(areaRectangle);

const square = new Square(7);
const areaSquare = square.area();
console.log(areaSquare);