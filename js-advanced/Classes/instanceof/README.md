# instanceof Operator

Define una clase llamada AreaCalculator. En su interior, crea un método estático que te permita calcular el área de la figura geométrica pasada como parámetro. El método te permitirá calcular el área del cuadrado, el rectángulo y el círculo.

class Square {
constructor(side) {
this.side = side;
}
}

class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}
}

class Circle {
constructor(radius) {
this.radius = radius;
}
}

class AreaCalculator {
// ...
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
