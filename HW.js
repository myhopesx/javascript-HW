function area(length, width) {
  console.log("area of this rectangle is " + length * width);
}
area(30, 20);

//_________________________________________________________

function celsiusToFahrenheit(temprture) {
  console.log("Fahrenheit is " + temprture * 1.8 + 32 + " NN°F");
}

function fahrenheitToCelsius(temprture) {
  console.log("Celsius is " + ((temprture - 32) * 5) / 9 + " NN°C");
}

celsiusToFahrenheit(30);
fahrenheitToCelsius(30);

//_________________________________________________________

let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let index = 0; index < Numbers.length; index++) {
  sum += Numbers[index];
}
console.log("The sum is " + sum);

//________________________________________________________

let arrayOfNumber = [16, 4, 2, 0, 19, 6];
let max = arrayOfNumber[0];
for (let index = 0; index < arrayOfNumber.length; index++) {
  if (arrayOfNumber[index] > max) {
    max = arrayOfNumber[index];
  }
}
console.log("The maximum number is " + max);

//_____________________________________________________________

let orignal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = orignal.length - 1; index > -1; index--) {
  console.log(orignal[index]);
}
//_______________________________________________________________

var NORows = 5;
var triangle = "\n";
for (let i = NORows; i > -1; i--) {
  for (let j = NORows; j >= i; j--) {
    triangle += "*";
  }
  triangle += "\n";
}
console.log(triangle);
