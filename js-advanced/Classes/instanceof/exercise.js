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
  static calculate(object){
    if(object instanceof Square){
      let squareArea = object.side * object.side;
      return squareArea
    }else if(object instanceof Rectangle){
      let rectangleArea = object.width * object.height;
      return rectangleArea;
    }else if(object instanceof Circle){
      let circleArena = Math.PI * Math.pow(object.radius, 2);
      return circleArena;
    }else{}
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));