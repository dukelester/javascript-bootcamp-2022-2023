const cat = {
  name: 'Blue',
  breed: 'Scottish',
  age: 10,
  dance(dance) {
    console.log('This is ', this);
    console.log(`${this.name} likes the ${dance} dance`);
  },

};

// console.log(cat);
cat.dance('mondoko');
console.log(this);
