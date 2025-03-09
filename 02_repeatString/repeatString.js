const repeatString = function (word, number) {
  if (number < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < number; i++) {
    string += word;
  }
  return string;
};
repeatString();
console.log(repeatString);
// Do not edit below this line
module.exports = repeatString;
