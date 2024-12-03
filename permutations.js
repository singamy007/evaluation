//All Permutations of a String
function permute(str, l, r) {
    if (l === r) {
      console.log(str);
    } else {
      for (let i = l; i <= r; i++) {
        str = swap(str, l, i);
        permute(str, l + 1, r);
        str = swap(str, l, i); // backtrack
      }
    }
  }
  
  function swap(str, i, j) {
    let charArray = str.split('');
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    return charArray.join('');
  }
  
  const str = "abc";
  permute(str, 0, str.length - 1);
  