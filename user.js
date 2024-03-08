const dt = require("./today");

const thisYear = dt.dateTime().toString().split(" ")[3];

exports.userName = () => {
  let num = parseInt(thisYear);
  let birthYear = 1994;
  return `My name is Benson. I am ${num - birthYear} years old`;
};

