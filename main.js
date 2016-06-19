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

document.getElementById("answer1").innerHTML = "The average price is $" + Math.round(answer1 * 100) / 100;
// The *100 / 100 allows you to Math.round the number and retain the first 2 decimal points.
// Math.round on it's own will only return a whole number.

//**********************************************************************//
// Question 2 - Show me how to get an array of items that
// cost between $14.00 and $18.00 USD
//**********************************************************************//

// Empty array to hold final values

var finalArray = [];

//*****************************
//Method 1 using filter and map
//*****************************

//Use filter to pull all of the objects between $14-18

// var finalArray = items.filter(function (item) {
//   return (item.price > 14 && item.price < 18);
// });
//
// Use map to pull only the prices from the filtered items.
//
// var titles = finalArray.map(function (item) {
//   return item.title;
// });

//*****************************
//Method 2 using forEach
//*****************************

// Loop through the array and selectively add the title to the finalArray.
items.forEach(function (item) {
  if (item.price > 14 && item.price < 18) {
    finalArray.push(item.title);
  };
});

// Sets initial text of answer
document.getElementById("answer2").innerHTML = "Items that cost between $14.00 USD and $18.00 USD:<p>"

// Loops through finalArray to write out each item's title
finalArray.forEach(function (title) {
  document.getElementById("answer2").innerHTML += title + "<br />";
});

//***************************************************//
// Question 3: Which item has a "GBP" currency code?
// Display it's name and price.
//***************************************************//

//Empty array to hold items with GBP currency code
var GBParray = [];

items.forEach(function (item) {
  if (item.currency_code === "GBP") {
    GBParray.push([item.title, item.price]);
  }
});
console.log(GBParray);

GBParray.forEach(function (item) {
  document.getElementById("answer3").innerHTML = item[0] + " costs &pound;" + item[1] + "<br />";
});


//**************************************************************//
// Question 4: Display a list of all items who are made of wood.
//**************************************************************//

//Loop through items and immediately concatinate to answer4 field
items.forEach(function (item) {
  if (item.materials.indexOf('wood') !== -1) {
    document.getElementById("answer4").innerHTML += item.title + " is made of wood. <br />";
  };
});

//**************************************************************//
// Question 5: Display a list of all items who are made of wood.
//**************************************************************//
