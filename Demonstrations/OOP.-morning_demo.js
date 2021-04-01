// Object Oriented Programming (OOP)
​
// Encapsulation - all data, functions, etc are neatly stored inside
// Abstraction - hiding information like private variables
// Inheritance - new classes can be created based on other classes (child inheriting parent properties class)
// Polymorphism - changing or overwriting the parent class functions/methods
​
// DRY - Don't Repeat Yourself
​
// let dog = {
//   name: "Mickey",
//   color: "brown",
//   species: "terrier",
//   bark: function () {
//     return `${this.name} says woof!`;
//   },
// };
​
// console.log(dog.bark());
// console.log(dog.name);
// console.log(dog.species);
​
// function Dog(name, color, species) {
//   this.name = name;
//   this.color = color;
//   this.species = species;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
// }
​
class Dog {
  constructor(name, color, species, age) {
    this.name = name;
    this.color = color;
    this.species = species;
    this.age = age;
  }
​
  bark() {
    return `${this.name} says woof!`;
  }
​
  // getters - get information about the object
  get getSpecies() {
    return this.species;
  }
​
  // setters - set information about the object
  set setAge(age) {
    this.age = age;
  }
}
​
Dog.prototype.dance = function () {
  return `${this.name} is dancing!`;
};
​
let dogOne = new Dog("Mickey", "brown", "terrier");
let dogTwo = new Dog("Lucky", ["white", "black"], ["pomeranian", "husky"]);
​
// console.log(dogOne.getSpecies);
// console.log(dogOne.species);
dogOne.setAge = 10;
// console.log(dogOne.age);
​
// console.log(dogTwo.dance());
// console.log(dogOne.bark());
// console.log(dogTwo.bark());
// console.log(dogTwo.species);
​
class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
​
  hunt() {
    return `${this.name} went hunting!`;
  }
​
  dance() {
    return `${this.name} is dancing!`;
  }
​
  birthday() {
    this.age++;
  }
​
  isAlive() {
    if (this.age > 12) {
      return `${this.name} is dead!`;
    }
    return `${this.name} is alive!`;
  }
}
​
let someAnimal = new Animals("Birdy", 4);
​
class Cat extends Animals {
  constructor(name, age, species, color) {
    super(name, age);
    this.species = species;
    this.color = color;
  }
​
  meow() {
    return `${this.name} says meow!`;
  }
​
  birthday() {
    this.age += 3;
  }
}
​
let myCat = new Cat("Kitty", 12, "domestic shorthair", "beige");
// console.log(myCat.meow());
// console.log(myCat.isAlive());
// console.log(myCat.birthday());
// console.log(myCat.isAlive());
// console.log(myCat.age);
​
class Character {
  constructor(name, type, age, strength, hitpoints) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
​
  printStats() {
    return `${this.name} ${this.strength} ${this.hitpoints}`;
  }
​
  attack(player) {
    player.hitpoints -= this.strength;
  }
​
  isAlive() {
    if (this.hitpoints <= 0) {
      return `${this.name} is dead!`;
    }
    return `${this.name} is alive!`;
  }
}
​
let playerOne = new Character("Ryu", "Warrior", 25, 10, 100);
​
let playerTwo = new Character("Ken", "Mage", 20, 5, 50);
// console.log(playerTwo);
// console.log(playerTwo.isAlive());
// playerOne.attack(playerTwo);
// playerOne.attack(playerTwo);
// playerOne.attack(playerTwo);
// playerOne.attack(playerTwo);
// playerOne.attack(playerTwo);
​
// console.log(playerTwo.printStats());
// console.log(playerTwo.isAlive());
​
// let arr = [10];
// let arrTwo = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.length);
​
let arrOne = new Array(1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5);
console.log(arrOne.length);
console.log(arrOne);
​
let mySet = new Set(arrOne);
console.log(mySet.has(10));
​
let myMap = new Map();
​
myMap.set("sherlock", {
  email: "example@something.com",
  address: "1234 somewhere",
});
​
console.log(myMap.get("sherlock"));