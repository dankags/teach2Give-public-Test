//Question 4: Capitalize Words
function capitalizeWords(input) {
    // Spliting the input string into an array of words
    let words = input.split(" ");
  
    // Mapping through each word, capitalize the first letter, and join the rest of the word
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Joining the capitalized words back into a single string
    return capitalizedWords.join(" ");
}
  console.log(capitalizeWords("hello its daniel"))