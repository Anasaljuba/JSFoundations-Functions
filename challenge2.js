/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`)
}

greet("Anas")

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  
  return (1===(n%2))
  
}
isOdd(5)
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  let num = n % 2 ;
  let check;
  if (num === 0){
    check = (n/2)

  }else { check = (n/2)-0.5
    
  }
  return check
}
oddsSmallerThan(11)

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  let num = n % 2 
  
  if (num === 0){
    return(n*2)
  }else {
    return(n*n)
  }
}
squareOrDouble(7)

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
