// Using the constructor ==> A method which is automatically called when an object is initialized.

class Person {
  constructor(name, age, occupation, address) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.address = address;
  }

  fullName() {
    return this.name.toUpperCase();
  }

  display() {
    console.log(this.name, this.address, this.age, this.occupation);
  }
}

const jane = new Person('Jane Smith', 23, 'actress', '567 St Kamena');
console.log(jane);
jane.display();
console.log(jane.fullName());
