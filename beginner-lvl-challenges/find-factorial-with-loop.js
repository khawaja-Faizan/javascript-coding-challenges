let number = 5;

function findFactorial(num) {
  let count = num;
  for (let i = num; i > 1; i--) {
    count = count * (i - 1);
  }
  return count;
}

console.log(`factorial of ${number} is`, findFactorial(number));
