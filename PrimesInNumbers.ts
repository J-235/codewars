// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
// "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

export const primeFactors = (n:number): string => {
  
  let result = '';
  
  for(let i = 2; i <= n; i++) {
    let count = 0;
    while(n % i === 0) {
      n /= i;
      count++;
    }
    if(count === 1) result += `(${i})`;
    if(count > 1) result += `(${i}**${count})`;
    if(isPrime(n)) {
      result += `(${n})`;
      break;
    }
  }
  return result;
}

export function isPrime(num: number): boolean {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false;
  }
  return true;
}
