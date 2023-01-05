const fullName = 'lester dlester'; // The order 1 => O(1)
console.log(fullName);

// Linear => O(n)
const linearFunction = (n) => {
  for (let k = 0; k < n; k += 1) {
    console.log(k);
  }
};
linearFunction(8);

// Quadratic => O(n^2)
const quadraticFunction = (n) => {
  for (let i = 0; i < n; i += 1) {
    console.log('I in first loop => ', i);
    for (let m = i; m < n; m += 1) {
      console.log('m in second loop => ', m);
      console.log(m * i);
    }
  }
};

quadraticFunction(8);

// Cubic => O(n^3)
const cubicFunction = (n) => {
  for (let i = 0; i < n; i += 1) {
    console.log(`The I from loop 1 => ${i}`);
    for (let m = i; m < n; m += 1) {
      console.log(`The m from loop 2 => ${m}`);
      console.log(m * i);
      for (let k = m; k < n; k += 1) {
        console.log(`The K from loop 3 => ${k}`);
        console.log(k * m * i);
      }
    }
  }
};

cubicFunction(8);

// Logarithimic algorithm O(log n)
const logarithmicFunction = (num) => {
  for (let k = 2; k < num; k *= 2) {
    console.log(k);
  }
};

logarithmicFunction(2000000);
