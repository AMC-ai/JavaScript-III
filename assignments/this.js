/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this inside a function will be the window object 
* 2. the object before the dot is this (left side)
* 3. constructor func this is used to refer to the specific object created.
* 4. call or apply eplicitly defines this
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(name) {
    console.log(`Hello ${name}`);
    console.log(this);
};

sayHello('Audrey');

// Principle 2

// code example for Implicit Binding
const whatAnimal = {
    sound: 'qwak-qwuk-qwuak',
    whatIsIt: function (animal) {
        console.log(`What goes ${this.sound}? What is a ${animal}.`);
    }
};

whatAnimal.whatIsIt('Duck!');

// Principle 3

// code example for New Binding

function theAnimalSays(animal) {
    this.sound = 'RAWR';
    this.creature = animal;
    this.speak = function () {
        console.log(`The ${this.creature} goes ${this.sound}`);
    };
}
const lion = new theAnimalSays('lion');
lion.speak();


// Principle 4

// code example for Explicit Binding
const Person = {
    fullName: 'April Marie',
    sayMyName: function () {
        console.log(`Hi, my name is ${this.fullName}.`);
    }
}

const april = {
    fullName: 'April Clements'
};

Person.sayMyName.call(april)
Person.sayMyName.apply(april, []);


