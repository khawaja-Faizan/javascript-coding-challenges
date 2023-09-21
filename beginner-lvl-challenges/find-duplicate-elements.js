// Find duplicate elements in an array.
const arr = [1, 2, 8, 2, 9, 8, 4];

const duplicate = arr.filter(
  (element, index, array) => array.indexOf(element) !== index
  // The indexof() function checks the arrays to find the first element that matches the passed argument
  // and returns its index
);
console.log(duplicate);
