//Class Instance Method vs. Static Method
class Example {
    constructor(name) {
      this.name = name;
    }
  
    // Instance method
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  
    // Static method
    static description() {
      console.log("This is a static method");
    }
  }
  
  const example = new Example("John");
  example.greet();           // Output: Hello, John
  Example.description();     // Output: This is a static method
  