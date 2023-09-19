// Rotate an array n times
let array = [1, 2, 3, 4, 5];
let n = 3;

// After rotating this array n=3 times the result should be: [3,4,5,1,2]
// 1st rotation = [5,1,2,3,4]
// 2nd rotation = [5,4,1,2,3]
// 3rd rotation = [5,4,3,1,2]

const handleArrayRotations = (array, num) => {
  // Create a loop that will run n times
  for (let i = 1; i <= num; i++) {
    let lastVal = array.pop(); // Remove the last value from the array and store it in a variable.
    array.unshift(lastVal); // Add the removed value to the 0th index of the array
    console.log("Rotation #", i, array);
  }
};

handleArrayRotations(array, n);
