//Count Total Number of Zeros from 1 up to 50
function countZeros(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      const str = i.toString();
      for (let char of str) {
        if (char === '0') count++;
      }
    }
    return count;
  }
  
  console.log(countZeros(50)); 
  