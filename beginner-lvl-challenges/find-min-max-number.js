// Create a function to finf the minimum and the maximum number in an array.
const array = [1, 49, 35, 68, 445, 24, 0];

const findMaxMinNumber = (array, type) => {
  // Reduce method basically return callback function with 2 values
  // 1 previous and 2 current
  return array.reduce(function (pre, cur) {
    if (type === "max") {
      return pre > cur ? pre : cur;
    } else {
      return pre < cur ? pre : cur;
    }
  });
};

console.log("Maximum number is:" + findMaxMinNumber(array, "max"));
console.log("Minimum number is:" + findMaxMinNumber(array, "min"));
