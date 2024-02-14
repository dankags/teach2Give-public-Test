//Question 3: Power of Two
function isPowerOfTwo(n) {
    if (n == 0) {
       return false
   }
   let bool=true
   while (n !== 0) {
      n /= 2;
      //check if the number after being divided by 2 is equal 1 and breaks the loop 
      // meaning if n === 1 then n is of power of 2
      if (n === 1) { break }
      //checks if n after being divided by 2 its remainder is 0 if not the bool is set to false
      //which means that the n number is not of power of two and then it breaks
      if (n % 2 !== 0) {
         bool=false
         break;
       }
   }
   return bool
  
  }
  
  // Examples
  console.log(isPowerOfTwo(16)); // returns true
console.log(isPowerOfTwo(17)); // returns false
  