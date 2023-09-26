let number = 5;

function findFactorialWithWhile(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * findFactorialWithWhile(num - 1);
  }

  return count;
}

console.log(`factorial of ${number} is`, findFactorial(number));
