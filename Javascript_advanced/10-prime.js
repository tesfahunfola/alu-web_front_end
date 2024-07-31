function countPrimeNumbers() {
    let primes = [];
    let i = 2;
  
    function findPrimes() {
      while (i <= 100) {
        if (primes.every((prime) => i % prime !== 0)) {
          primes.push(i);
        }
        i++;
      }
    }
  
    findPrimes();
    return primes.length;
  }
  
  function measureExecutionTime() {
    const startTime = performance.now();
    const executionTimes = [];
  
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      executionTimes.push(executionTime);
    }
  
    const totalTime = executionTimes.reduce((acc, curr) => acc + curr, 0);
    console.log(`Execution time of calculating prime numbers 100 times was approximately ${totalTime} milliseconds.`);
  }
  
  measureExecutionTime();