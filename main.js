//**********************************************************************//
// Question 1 - Show me how to calculate the average price of all items.
//**********************************************************************//

var prices = items.map(function (object) {
 return object.price;
})

var sum = prices.reduce(function(a, b) {
  return a + b;
});

var answer1_averagePrice = (sum / prices.length);

// console.log(answer1_averagePrice); Displays result of previous functions

// Brit showed me this way to "golf" the code if I wanted to link the 3 different
// pieces of code together

var answer1 = items.map(function (object) {
  return object.price;
}).reduce(function (a, b) {
  return a + b;
}) / items.length;

document.getElementById("answer1").innerHTML = "The average prices is $" + Math.round(answer1 * 100) / 100;
// The *100 / 100 allows you to Math.round the number and retain the first 2 decimal points.
// Math.round on it's own will only return a whole number.


//**********************************************************************//
// Question 2 - Show me how to get an array of items that
// cost between $14.00 and $18.00 USD
//**********************************************************************//
