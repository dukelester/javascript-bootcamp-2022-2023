// Do not return anything from the contructor

class Triangle {
  constructor(side1, side2, side3) {
    [side1, side2, side3].forEach((side) => {
      if (!Number.isFinite(side) || side < 0) {
        throw new Error('Side must be a positive real number!');
      }
    });
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    return (this.side1 * this.side2) / 2;
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  display() {
    console.log(`A triangle of Side1 => ${this.side1} Side2 => ${this.side2} Side3 => ${this.side3}`);
  }
}

const myTri = new Triangle(34, 20, 90);
myTri.display();
console.log(myTri.calculateArea());
console.log(myTri.calculatePerimeter());

module.exports = Triangle;
