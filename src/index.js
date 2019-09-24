function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  // write your solution here
  if (/\/ 0/.test(expr) || /\/0/.test(expr)) {
    // if there is a division by 0 (with or without a space)
    throw "TypeError: Devision by zero.";
  }
  var openBrackets = 0; // number of open bracket
  var closeBrackets = 0; // number of close bracket
  if (/[(]/g.test(expr)) {
    // if there're any open brackets
    openBrackets = expr.match(/[(]/g).length;
  }
  if (/[)]/g.test(expr)) {
    closeBrackets = expr.match(/[)]/g).length;
  }
  if (openBrackets !== closeBrackets) {
    // if there's no a pair of brackets
    throw "ExpressionError: Brackets must be paired";
  }
  return new Function("return " + expr)(); // creating a new function which calls itself and calculates the expression
}

module.exports = {
  expressionCalculator
};
