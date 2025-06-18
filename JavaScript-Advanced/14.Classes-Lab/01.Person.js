class Person { // Each person will have firstName, lastName, age and email as data
    // Property declarations - they define what data (properties) every Person object will have, but they don’t assign values yet
    firstName;
    lastName;
    age;
    email

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName; // this.firstName refers to the object's property // firstName refers to the constructor parameter, which is temporary and local
        this.lastName = lastName;
        this.age = age;
        this.email = email; 
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
    
}

const person = [
    new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
    new Person('Tea', 'Ivanova', 25, 'tea@yahoo.com'),
    new Person('John', 'Stoyanov', 32, 'stoyanov@gmail.com'),
];

console.log(person.join('\n')); // .join is going to call the method toString()