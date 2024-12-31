//
// if (condition) {

// }

// Initilization
// Condition
// Updation
// for (var index = 0; index < 6; index++) {
//   console.log(index);
// }

// innerHtML
// var list = document.getElementById("list");
// console.log(list);

// var list = document.getElementById("list");
// list.innerHTML += "<li>Task 1</li>";
// list.innerHTML += "<li>Task 2</li>";
// list.innerHTML += "<li>Task 3</li>";
// list.innerHTML += "<li>Task 4</li>";
// console.log(list);

// for (var index = 0; index < array.length; index++) {

// }

var fruits = ["Apple", "Banana", "Mango", "Peach"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits.pop();
// fruits.push("Guava");

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

var userCity = prompt("Enter Your City Name");
var cities = [
  "Karachi",
  "Peshawar",
  "Lahore",
  "Islamabad",
  "Quetta",
  "Kashmir",
];
var isFind = "no";
for (var index = 0; index < cities.length; index++) {
  var item = cities[index];
  if (item === userCity) {
    isFind = "yes";
  }
}

if (isFind === "yes") {
  console.log("Cleaned City");
} else {
  console.log("Not Cleaned");
}
