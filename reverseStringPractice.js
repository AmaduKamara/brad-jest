// Reverse String
// const reverseString = (str) => {
//   let reverseString = "";
//   for (let i = 0; i < str.length; i++) {
//     reverseString = str[i] + reverseString;
//   }
//   return reverseString;
// };

// const reverseStr = (str) => {
//   let reverseStr = "";
//   for (let char of str) {
//     reverseStr = char + reverseStr;
//   }
//   return reverseStr;
// };

// const reverseStringHelper = (str) => {
//   let reverseStr = "";
//   str.split("").forEach((char) => (reverseStr = char + reverseStr));
//   return reverseStr;
// };

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

// console.log(reverseString("Amkam"));
// console.log(reverseStr("Amkam"));
// console.log(reverseStringHelper("Amkam"));
console.log(reverseStr("Amkam"));
