var element1 = document.getElementById("1");
var element2 = document.getElementById("2");
var element3 = document.getElementById("3");
var element4 = document.getElementById("4");
var element5 = document.getElementById("5");
var element6 = document.getElementById("6");
var element7 = document.getElementById("7");
var element8 = document.getElementById("8");
var element9 = document.getElementById("9");

var count = 1;

function textShow() {
  if (count % 2 === 0) {
    return "X";
  } else {
    return "O";
  }
}

function reset() {
  element1.innerHTML = "";
  element2.innerHTML = "";
  element3.innerHTML = "";
  element4.innerHTML = "";
  element5.innerHTML = "";
  element6.innerHTML = "";
  element7.innerHTML = "";
  element8.innerHTML = "";
  element9.innerHTML = "";
  count = 1;
}
// 123 456 789 147 258 369 159 357
function win() {
  var box1 = element1.innerHTML;
  var box2 = element2.innerHTML;
  var box3 = element3.innerHTML;
  var box4 = element4.innerHTML;
  var box5 = element5.innerHTML;
  var box6 = element6.innerHTML;
  var box7 = element7.innerHTML;
  var box8 = element8.innerHTML;
  var box9 = element9.innerHTML;

  if (
    (box1 === "O" && box2 === "O" && box3 === "O") ||
    (box1 === "X" && box2 === "X" && box3 === "X")
  ) {
    alert("Win");
    reset();
  } else if (
    (box4 === "O" && box5 === "O" && box6 === "O") ||
    (box4 === "X" && box5 === "X" && box6 === "X")
  ) {
    alert("Win");
    reset();
  } else if (
    (box7 === "O" && box8 === "O" && box9 === "O") ||
    (box7 === "X" && box8 === "X" && box9 === "X")
  ) {
    alert("Win");
    reset();
  } else if (
    (box1 === "O" && box4 === "O" && box7 === "O") ||
    (box1 === "X" && box4 === "X" && box7 === "X")
  ) {
    alert("Win");
    reset();
  } else if (
    (box2 === "O" && box5 === "O" && box8 === "O") ||
    (box2 === "X" && box5 === "X" && box8 === "X")
  ) {
    alert("Win");
    reset();
  } else if (
    (box3 === "O" && box6 === "O" && box9 === "O") ||
    (box3 === "X" && box6 === "X" && box9 === "X")
  ) {
    alert("Win");
    reset();
  } else if (
    (box1 === "O" && box5 === "O" && box9 === "O") ||
    (box1 === "X" && box5 === "X" && box9 === "X")
  ) {
    alert("Win");
    reset();
  } else if (
    (box3 === "O" && box5 === "O" && box7 === "O") ||
    (box3 === "X" && box5 === "X" && box7 === "X")
  ) {
    alert("Win");
    reset();
  }
}

function game(param) {
  var text = textShow();

  if (param === 1 && element1.innerHTML === "") {
    element1.innerHTML = text;
    count++;
  } else if (param === 2 && element2.innerHTML === "") {
    element2.innerHTML = text;
    count++;
  } else if (param === 3 && element3.innerHTML === "") {
    element3.innerHTML = text;
    count++;
  } else if (param === 4 && element4.innerHTML === "") {
    element4.innerHTML = text;
    count++;
  } else if (param === 5 && element5.innerHTML === "") {
    element5.innerHTML = text;
    count++;
  } else if (param === 6 && element6.innerHTML === "") {
    element6.innerHTML = text;
    count++;
  } else if (param === 7 && element7.innerHTML === "") {
    element7.innerHTML = text;
    count++;
  } else if (param === 8 && element8.innerHTML === "") {
    element8.innerHTML = text;
    count++;
  } else if (param === 9 && element9.innerHTML === "") {
    element9.innerHTML = text;
    count++;
  }

  win();

  if (count === 10) {
    alert("Reset");
    reset();
  }
}
