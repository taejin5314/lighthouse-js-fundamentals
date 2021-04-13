const calculateChange = function (total, cash) {
  // Your code here
  let left = cash - total;
  let change = {};
  if (left / 2000 >= 1) {
    change.twentyDollar = Math.floor(left / 2000);
    left = left - change.twentyDollar * 2000;
  }
  if (left / 1000 >= 1) {
    change.tenDollar = Math.floor(left / 1000);
    left = left - change.tenDollar * 1000;
  }
  if (left / 500 >= 1) {
    change.fiveDollar = Math.floor(left / 500);
    left = left - change.fiveDollar * 500;
  }
  if (left / 200 >= 1) {
    change.twoDollar = Math.floor(left / 200);
    left = left - change.twoDollar * 200;
  }
  if (left / 100 >= 1) {
    change.oneDollar = Math.floor(left / 100);
    left = left - change.oneDollar * 100;
  }
  if (left / 25 >= 1) {
    change.quarter = Math.floor(left / 25);
    left = left - change.quarter * 25;
  }
  if (left / 10 >= 1) {
    change.dime = Math.floor(left / 10);
    left = left - change.dime * 10;
  }
  if (left / 5 >= 1) {
    change.nickel = Math.floor(left / 5);
    left = left - change.nickel * 5;
  }
  if (left > 0) {
    change.penny = left;
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
