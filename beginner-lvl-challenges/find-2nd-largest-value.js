// Find the 2nd largest value in an array.
let array = [2, 6, 1, 87, 56, 99];

const secondLargestNumber = (arr) => {
  //Get the first largest number and splice/remove it from the array
  let firstLargestValue = Math.max(...arr);
  let index = arr.indexOf(firstLargestValue);
  arr.splice(index, 1);
  // Fnd the largest number again and that will be your 2nd largest number
  let secondLargestValue = Math.max(...arr);
  return secondLargestValue;
};

console.log(secondLargestNumber(array));
