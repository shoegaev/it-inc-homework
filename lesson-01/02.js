let number1 = Math.floor(Math.random() * 100);
// console.log(
//   `${number1}:Это ${number1 % 2 === 0 ? "четное" : "нечетное"} число`,
// );
if (number1 % 2 === 0) {
  console.log(number1, ":Это четное число");
} else {
  console.log(number1, ":Это нечетное число");
}
