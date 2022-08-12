function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function addTwoNumber(num1, num2) {
  return num1 + num2;
}
var addTwo = addTwoNumber(2, 2);
console.log(addTwo);

function converHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = converHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var multiply = addAndMultiplyBy5(10, 5);
console.log(multiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var divide = multiplyAndDivideBy5(35, 10);
console.log(divide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circleCircumference = getCircleCircumference(5);
console.log(circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var fullName = getFullName('"Juan ', 'Ramirez"');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var cubeNum = cube(5);
console.log(cubeNum);
