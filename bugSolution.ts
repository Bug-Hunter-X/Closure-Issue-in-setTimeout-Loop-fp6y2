function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Use an IIFE to capture the current value of 'i'
    setTimeout(() => {
      console.log(i);
    }, 1000 * i); // Added delay for better visualization
  }
}

printNumbers2(5); // This will now print 1 through 5 correctly.