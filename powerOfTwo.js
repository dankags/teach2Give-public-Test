//Question 3: Power of Two
function isPowerOfTwo(n) {
    if (n == 0) {
       return false
    }
    return parseInt((Math.ceil((Math.log(n) / Math.log(2))))) == parseInt((Math.floor((Math.log(n) / Math.log(2)))))
  }
  
  // Examples
  console.log(isPowerOfTwo(16)); // returns true
  console.log(isPowerOfTwo(7)); // returns false
  