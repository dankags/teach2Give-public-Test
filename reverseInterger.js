//Question 5: Reverse Integer
function reverseInteger(num) {
    // Checking if the number is negative
    let isNegative = num < 0;
  
    // Converting the number to a string and remove the sign if negative
    let numStr = Math.abs(num).toString();
  
    // Reversing the digits
    let reversedStr = numStr.split("").reverse().join("");
  
    // Converting the reversed string back to an integer
    let reversedNum = parseInt(reversedStr,10);
  
    // Returning the reversed number with the correct sign
    return isNegative ? -reversedNum : reversedNum;
}
  
console.log(reverseInteger(500));
console.log(reverseInteger(-56));
console.log(reverseInteger(-90));
console.log(reverseInteger(91));
