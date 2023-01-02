// Object reviews

const obj = {};
const obj2 = new Object();
console.log(obj, obj2);
obj.color = '#562202';
obj['name'] = 'color';
console.log(obj);
console.log(Object.keys(obj), Object.entries(obj));
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

const triangle = {
    a: 7,
    b: 10,
    hypotenuse: function () {
        return Math.sqrt(this.a**2 + this.b**2);
    },
    area: function() {
        return (this.a * this.b ) / 2;
    },
    perimeter: function() {
        return this.hypotenuse() + this.a + this.b
    }
}

console.log(triangle.a, triangle.b, triangle.area(), triangle.hypotenuse(), triangle.perimeter())