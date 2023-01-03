const Triangle = require('./triangle');

const myTriangle = new Triangle(45, 8, 9);
console.log(myTriangle);

class RightAngledTriangle extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    if (side1 ** 2 + side2 ** 2 === side3 ** 2) return;
    throw new Error('This is not a right angled triangle since the Hypotenuse is wrong!');
  }

  isRightAngled() {
    return true;
  }

  display() {
    return super.display();
  }
}

const rightTriangle = new RightAngledTriangle(3, 4, 5);
console.log(rightTriangle.display());
console.log(rightTriangle.isRightAngled());
