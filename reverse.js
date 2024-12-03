//Reverse Words in a Sentence
function reverseWords(sentence) {
    // Split the sentence into words, reverse the array of words, and join them back into a string
    return sentence.split(' ').reverse().join(' ');
  }
  
  // Input from user
  const sentence = prompt("Enter a sentence to reverse its words:");
  
  const reversedSentence = reverseWords(sentence);
  console.log(`Original Sentence: ${sentence}`);
  console.log(`Reversed Sentence: ${reversedSentence}`);
  