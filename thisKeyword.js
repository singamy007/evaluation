//. How Does this Work Inside a Class Method
class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person = new Person("Alice");
  person.sayHello(); // Output: Hello, my name is Alice
  