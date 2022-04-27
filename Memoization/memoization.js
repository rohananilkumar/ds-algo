// 1. can be divided into sub problems
// 2. Recursive Solution
// 3. Are there repetitive sub problems
// 4. Memoize sub problems
// 5. Demand a raise from your boss

let calculation = 0;

function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        calculation++;

        cache[n] = fib(n - 1) + fib(n - 2);
        console.log(cache[n]);
        return cache[n];
      }
    }
  };
}

const fibonacci = fibonacciMaster();

fibonacci(200);
console.log(calculation);
