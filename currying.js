//Currying in JavaScript
function add(a) {
    return function(b) {
      return a + b;
    };
  }
  
  const add5 = add(5); // Returns a function
  console.log(add5(3)); // Output: 8
  