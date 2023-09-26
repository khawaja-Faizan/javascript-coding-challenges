let number = 5;

function findFactorialWithWhile(num) {
  let count = num;
  while (num > 1) {
    count = count * num - 1;
    num--;
  }
  return count;
}

console.log(`factorial of ${number} is`, findFactorial(number));
