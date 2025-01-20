// alert("Hello World");
// Alert("Hello World");

// var date = new Date();

// var convertDateIntoString = date.toString();
// console.log(convertDateIntoString);
// console.log(date.getDay());
// console.log(date.getMonth());
// var date = new Date();
// var days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var day = date.getDay();
// console.log(days[day]);
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getTime());

// var currentDate = new Date();
// var birthDate = new Date("August 30, 2002");
// var currentDateMilliSecond = currentDate.getTime();
// var birthDateMilliSecond = birthDate.getTime();
// // miiliseconds / 1000 ==> seconds / 60 ==> minutes / 60 ===> hour
// var result =
//   (currentDateMilliSecond - birthDateMilliSecond) / 1000 / 60 / 60 / 24;
// console.log(Math.ceil(result));

// var date = new` Date();
// date = "1234";`
// var number = 1;
// number = 5;
// console.log(number);

// var date = new Date();
// date.setFullYear(2020);
// date.setMonth(6);
// console.log(date);

// SetInterval
// SetTimeout

var count = 0;
var timeFunc = setTimeout(timer, 1000);
function timer() {
  console.log(count);
  clearTimeout(timeFunc);
}

// var timerFunc = setInterval(timer, 1000);

// function timer() {
//   count++;
//   if (count === 5) {
//     clearInterval(timerFunc);
//   }
//   console.log(count);
// }
