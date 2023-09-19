// Check how many copies of same value are there in an array:
let array = ["aaa", "bbb", "ccc", "aaa", "bbb"];

let obj = {};

for (let i = 0; i < array.length; i++) {
  // Create a constant for the value against current index
  const element = array[i];
  // Check if the element is already in the obj then add 1 agaist it
  if (obj[element]) {
    obj[element] = obj[element] + 1;
  }
  // Add the element if no such element is in the obj
  else {
    obj[element] = 1;
  }
}

console.log("result:", obj);
