var num1 = parseFloat(prompt("Enter first number: "));

var num2 = parseFloat(prompt("Enter second number: "));

var operator = prompt("Enter your operand here: ");
var num3;
switch (operator) {
  case "+":
    num3 = num1 + num2;
    break;
  case "-":
    num3 = num1 - num2;
    break;
  case "*":
    num3 = num1 * num2;
    break;
  case "/":
    num3 = num1 / num2;
    break;
  default:
    console.log("Invalid operand entered");
}
console.log("answer is " + num3);
