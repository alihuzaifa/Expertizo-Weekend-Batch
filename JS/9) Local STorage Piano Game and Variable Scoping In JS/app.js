// // var element = document.getElementById("clock");

// // setInterval(clock, 1000);

// // function clock() {
// //   var date = new Date();
// //   var hours = date.getHours();
// //   var minutes = date.getMinutes();
// //   var seconds = date.getSeconds();
// //   element.innerHTML = hours + " " + minutes + " " + seconds;
// // }

// // clock();

// //

// // var firstName = "Ali";
// // var lastName = "Huzaifa";
// // var greetMessage = "Hello " + firstName + " " + lastName;
// // console.log(greetMessage);

// // var note = "Lorem ipsum dolor sit amet
// //  consectetur adipisicing elit. Tempore officiis
// //   eligendi dignissimos! Nisi quibusdam cupiditate magnam
// //    debitis modi quas voluptatum dolore sapiente soluta quo, optio ad labore! Odio, obcaecati explicabo.";

// // var firstName = "Ali";
// // var lastName = "Huzaifa";
// // var greetMessage = `Hello

// // ${firstName}

// // ${lastName}`;
// // var greetMessage = "Hello     " + firstName + "

// // " + lastName;
// // console.log(greetMessage);

// var inputEl = document.getElementById("notes");
// var listEl = document.getElementById("list");
// var btn = document.getElementById("btn");

// var notes = [];
// var editIndex = -1;

// function deleteNote(index) {
//   notes.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notes));
//   renderNotes();
// }

// function editNote(index) {
//   var text = notes[index];
//   inputEl.value = text;
//   btn.innerHTML = "Update Note";
//   editIndex = index;
// }

// function renderNotes() {
//   var data = localStorage.getItem("notes");
//   if (data) {
//     var parseData = JSON.parse(data);
//     notes = parseData;
//   }

//   listEl.innerHTML = "";
//   for (var i = 0; i < notes.length; i++) {
//     var item = notes[i];
//     listEl.innerHTML += `<li>
//         <p>
//           ${item}
//         </p>
//         <div class="btns">
//           <button onclick="deleteNote(${i})">Delete</button>
//           <button onclick="editNote(${i})">Edit</button>
//         </div>
//       </li>`;
//   }
// }

// renderNotes();

// function addNote() {
//   var note = inputEl.value;
//   // Add process
//   if (editIndex === -1) {
//     if (note === "") {
//       alert("Please fill the value");
//     } else {
//       notes.push(note);
//     }
//   }
//   // Update Process
//   else {
//     notes.splice(editIndex, 1, note);
//     btn.innerHTML = "Add Note";
//     editIndex = -1;
//   }

//   inputEl.value = "";
//   localStorage.setItem("notes", JSON.stringify(notes));
//   renderNotes();
// }

// function deleteAll() {
//   localStorage.removeItem("notes");
//   notes = [];
//   renderNotes();
// }

// // Local Storage
// // 5MB
// // Browser Access
// // Self Storage
// // Data can only be stored in string only

// // localStorage.setItem("notes", JSON.stringify(["Hello World", "Hello World2"]));
// // var data = localStorage.getItem("notes");
// // localStorage.removeItem("notes");

// var sound1 = new Audio();
// sound1.src = "music/music-1.mp3";

// var sound2 = new Audio();
// sound2.src = "music/music-2.mp3";

// function music1() {
//   sound2.pause();
//   sound1.play();
// }
// function music2() {
//   sound2.play();
//   sound1.pause();
// }

// var number = 10;
// console.log(number);

// if (true) {
//   var number = 20;
//   console.log(number);
// }

// console.log(number);

// var number = 10;
// console.log(number);

// function invoke() {
//   var number = 20;
//   console.log(number);
// }
// invoke();

// console.log(number);

// if (true) {
//   var number = 10;
// }

// console.log(number);

// for (let index = 0; index < 1; index++) {
//   var number = 20;
// }

// console.log(number);

// function invoke() {
//   var number = 10;
//   var number = 20;
//   console.log(number);
// }
// invoke();

var food = "Burger";

// if (food === "Burger") {
// }

// switch (food) {
//   case "Burger":
//     console.log("1 Burger");

//   case "Burger":
//     console.log("1 Coldrink");
//     break;

//   default:
//     console.log("Normal Burger");
//     break;
// }

if (food === "Burger") {
  console.log("1 Burger");
} else if (food === "Burger") {
  console.log("1 Burger");
} else {
  console.log("Normal Burger");
}
