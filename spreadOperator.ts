// spread operator
// we can use spread operator on arrays and objects, it is used to pull
// the all items from array/object comma separated and could be assigned or logged

// Example 1:
const myArr = ["Cooking", "Sports", "Driving"];

const secondArr = ["empty", ...myArr]; // first way is spreading any array at the time of declaration

secondArr.push(...myArr); //second way is spreading in push method

// Example 2:
const personDetail = {
  name: "John Doe",
  age: 30,
  height: 5.8,
};

const john = {
  ...personDetail,
};
