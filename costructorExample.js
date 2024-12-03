//10. Explain the super and constructor Keywords Inside a Class
class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calls the parent class's constructor
      this.breed = breed;
    }
    speak() {
      super.speak(); // Calls the parent class's speak method
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Max", "Golden Retriever");
  dog.speak();
  