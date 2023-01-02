//TODO The JavaScript Objects

/**
 * Describe the objects ==> An unorderd collections of elements in a key:value pairs
 * Compare the objects with arrays
 *
 * Objects are unordered, needed for unordered data, use the keys to get the values of the elements.
 * access and update the values and keys of an object
 */

const country = 'England';
const movie = {
    title: 'Titanic"',
    rating: 3.6,
    director: 'duke lester macknon',
    yearOfRelease: 2007,
    revenue: 34567890,
    country: country
};

console.log(movie.rating, movie.director.toUpperCase(), movie.yearOfRelease,
    movie.revenue, movie.country, // always use the dot notation
    );
console.log(movie['rating'], movie['country']);
movie.country = 'Germany';
movie['rating'] = 9.7;
console.log(movie.country, movie.rating);
console.log(delete movie.revenue);
console.log(movie, '/n/n');

console.log('\n \t More on the Objects \n')

const user = {
    userName: 'lester4672',
    phoneNumber: '0788929922',
    location: 'Juja, Kiambu',
    age: 34,
};

console.log(user.age, user.userName, user.location);
user.isAdmin = true;
user.isSuperUser = true;

delete user.age;
user.fullName = function userFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
};

user.occupation = {
    salary: 'USD 56000',
    payment: 'Bank Transfer',
    bankName: 'Brains Bank Limited',
    address: 'Pakistan',
    allowances: [ 'medical allowance', 'house allowance', 'transport allowance'],
};

console.log(user, user.fullName('duke', 'lester'));

for ( let property in user) {
    console.log(property, user[property]);
};

const userDetails = {
    name: 'duke leser',
    age: 25,
    steps: 'Life is long',
    working() {
        console.log(` ${this.name.toUpperCase()} is a programmer....`);
        return {
            ocuupation: 'computer programmer',
            course: 'Maths and computer science',
            salary: '$ 6000 / Month',
            company: 'AWS',
            age: this.age,
            steps: this.steps,
            name: userDetails.name  // instead of using the this
        };
    },
};

console.log(userDetails, userDetails.working());
userDetails.working();

function User(name, location, age, occupation) {
    this.name = name;
    this.location = location;
    this.age = age;
    this.occupationn = occupation;
    this.isAdmin = false;
    this.isSuperUser = false;
    this.isActive = true;

};

const newEmployee = new User('jason sakaja', 'Nairobi', 33, 'Governor');
const worker = new User('Ken Mwangi', 'Juja', 23, 'Hustler');
console.log(newEmployee, worker, worker.age, worker.location, worker.occupationn);

