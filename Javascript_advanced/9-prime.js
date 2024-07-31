function countPrimeNumbers() {
    const startTime = performance.now();
    let primes = [];
  
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
  
    return primes.length;
  }
  
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  countPrimeNumbers();