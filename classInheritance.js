// eslint-disable-next-line max-classes-per-file
class Animal {
  constructor(name, age, animalType, breed, owner) {
    this.name = name;
    this.age = age;
    this.animalType = animalType;
    this.breed = breed;
    this.owner = owner;
  }

  running() {
    console.log(`${this.name} is running ....`);
  }

  eating(foodType) {
    console.log(`${this.name} is eating ${foodType}`);
  }

  makingSound(soundType) {
    console.log(`${this.name} is making a ${soundType} sound....`);
  }
}

const dog = new Animal('Jiness', 34, 'Carnivore', 'Souther Ess', 'Lester');
console.log(dog);
dog.makingSound('wooow');
dog.eating('meat');

class Rabbit extends Animal {
  sense() {
    console.log(`The rabbit  ${this.name} is sensing danger ...`);
  }
}

const rab = new Rabbit('Jannie', 34, 'Rabbit', 'White stripped', 'lester');
console.log(rab);
rab.eating('Grass');
rab.makingSound('kkkkkaa');
rab.running();
rab.sense();

class OtherAnimal {
  constructor(name, age, furColor) {
    this.name = name;
    this.age = age;
    this.furColor = furColor;
  }
}

class Cat extends OtherAnimal {
  constructor(name, furColor, age) {
    super(name, age, furColor);
    this.name = name;
    this.createdAt = new Date();
  }
}

const cat1 = new Cat('ja', 45, 'white');
console.log(cat1);
