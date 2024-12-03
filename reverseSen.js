//reverse Words

function reverseWords(sentence) {
    let words = [];
    let word = "";
  
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        words.push(word);
        word = "";
      } else {
        word += sentence[i];
      }
    }
    words.push(word);
  
    let reversedSentence = "";
    for (let j = words.length - 1; j >= 0; j--) {
      reversedSentence += words[j];
      if (j !== 0) {
        reversedSentence += " ";
      }
    }
  
    return reversedSentence;
  }
  
  const sentence = "Hello World from VS Code!";
  const result = reverseWords(sentence);
  console.log(`Original Sentence: ${sentence}`);
  console.log(`Reversed Sentence: ${result}`);
  