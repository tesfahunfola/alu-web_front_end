function countPrimeNumbers() {
  let primes = [];
  let i = 2;

  function findPrimes(resolve) {
    while (i <= 100) {
      if (primes.every((prime) => i % prime !== 0)) {
        primes.push(i);
      }
      i++;
    }

    if (i <= 101) {
      setTimeout(() => findPrimes(resolve), 0);
    } else {
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      resolve(executionTime);
    }
  }

  const startTime = performance.now();
  return new Promise((resolve) => {
    findPrimes(resolve);
  });
}

function measureExecutionTime() {
  const startTime = performance.now();
  const promises = [];

  for (let i = 0; i < 100; i++) {
    promises.push(countPrimeNumbers());
  }

  Promise.all(promises).then((executionTimes) => {
    const totalTime = executionTimes.reduce((acc, curr) => acc + curr, 0);
    const averageTime = totalTime / 100;
    console.log(`Execution time of calculating prime numbers 100 times was approximately ${averageTime} milliseconds.`);
  });

  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Total execution time: ${executionTime} milliseconds.`);
}

measureExecutionTime();