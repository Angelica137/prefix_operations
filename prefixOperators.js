/*
Evaluates the prefix expression and calculates the result for the given
variable values.

@param {String} expression - the prefix expression to evaluate.
@param {Object} variables - all the variables in the expression are the keys of
    this object and their corresponding values are the values the variable
    should take
@returns {Number|null} the numerical result of the expression evaluated with the
    given variable values. If the expression is invalid, it will return `null`.
*/
function result_expression(expression, variables) {
  //Enter your code here

  // define what the operan strings mean
  const operands = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };

  // check is expression string is valid
  function checkSpacing(expression) {
    const prevChar = expression[0];
    for (let i = 1; i < expression.length; i++) {
      if (i != " " && i - 1 != " ") {
        return null;
      }
    }
  }
  return expression;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  const [expression, variablesString] = _input.split("\n");
  //UGLY: replaces single quotes with double quotes square brackets to convert the string to valid JSON
  const variables = JSON.parse(
    variablesString.replace(/'/g, '"').replace(/\(/g, "[").replace(/\)/g, "]")
  );
  console.log(result_expression(expression, variables));
});
