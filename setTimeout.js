//Fix setTimeout Inside for Loop
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
  
  // Output: Logs 10 ten times because `var` is function-scoped.
  