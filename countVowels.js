function countVowels(sentence) {
    // Defining the vowels
    const vowels = "aeiouAEIOU";
  
    // Initializing a counter for vowels
    let count = 0;
  
    // Iterating through each character in the sentence
    for (let char of sentence) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    // Returning the total count of vowels
    return count;
}
  
console.log(countVowels("Hello World")); 