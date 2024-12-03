//1. Execution Order of the Code Block

const ex1 = () => console.log("ex1");
const ex2 = () => console.log("ex2");

const ex = () => {
  console.log("ex");     // 1. Logs "ex"
  setTimeout(ex1, 1000); // 2. Schedules "ex1" to log after 1000ms
  ex2();                 // 3. Logs "ex2" immediately
};

ex(); 