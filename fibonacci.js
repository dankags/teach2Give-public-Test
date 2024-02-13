//Question 2: Fibonacci Sequence
function generateFibonacciNumber(n) {
    let num = 0,
      num2 = 1,
      nextTerm;
  
    console.log(num);
    while (num2 <= n) {
      console.log(num2);
      nextTerm = num + num2;
      num = num2;
      num2 = nextTerm;
    }
  }
  
  generateFibonacciNumber(100);