//palindrome
function isPalindrome(word) {
    let length = word.length;

    // Compare characters from the beginning and end of the string
    for (let i = 0; i < length / 2; i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false; // If characters don't match, it's not a palindrome
      }
    }
    
    return true; // If all characters match, it's a palindrome
  }
  
  // Input from user
  const word = prompt("Enter a word to check if it's a palindrome:");
  
  if (isPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
  } else {
    console.log(`${word} is not a palindrome.`);
  }
  