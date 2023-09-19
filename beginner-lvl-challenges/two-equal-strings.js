// Check if the 2 strings have the same and equal value/characters

let str1 = "codehere";
let str2 = "odecerehp";

// Function to check if both the strings are same
const checkStrings = (str1, str2) => {
  // Using split() to make this string an array, then .sort() is used to sort this array of characters and then using join
  // to convert this array back to a string with sorted value
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2 ? "equal" : "not equal";
};

console.log("The strings are", checkStrings(str1, str2));
