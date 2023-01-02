// The class is a blueprint for an object. It consists all the properties of an object
class MyStudent {
  constructor(fullName, age, grade, location) {
    this.fullName = fullName;
    this.age = age;
    this.grade = grade;
    this.location = location;
  }

  showGrade() {
    console.log(`Student's grade is ${this.grade}`);
  }

  showFullName() {
    console.log(`My full name is ${this.fullName.toUpperCase()}`);
  }

  showLocation() {
    console.log(`My location address is  ${this.location}`);
  }

  showAge() {
    console.log(`My age is ${this.age}`);
  }
}

const student1 = new MyStudent('duke lester', 28, 'A', 'Juja');
console.log(student1, student1.age, student1.fullName, student1.grade);
student1.showAge();
student1.showFullName();
student1.showGrade();
student1.showLocation();
console.log(MyStudent.prototype, MyStudent);
