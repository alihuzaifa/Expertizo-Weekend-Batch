// var element = document.getElementById("clock");

// setInterval(clock, 1000);

// function clock() {
//   var date = new Date();
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var seconds = date.getSeconds();
//   element.innerHTML = hours + " " + minutes + " " + seconds;
// }

// clock();

//

// var firstName = "Ali";
// var lastName = "Huzaifa";
// var greetMessage = "Hello " + firstName + " " + lastName;
// console.log(greetMessage);

// var note = "Lorem ipsum dolor sit amet
//  consectetur adipisicing elit. Tempore officiis
//   eligendi dignissimos! Nisi quibusdam cupiditate magnam
//    debitis modi quas voluptatum dolore sapiente soluta quo, optio ad labore! Odio, obcaecati explicabo.";

// var firstName = "Ali";
// var lastName = "Huzaifa";
// var greetMessage = `Hello

// ${firstName}

// ${lastName}`;
// var greetMessage = "Hello     " + firstName + "

// " + lastName;
// console.log(greetMessage);

var inputEl = document.getElementById("notes");
var listEl = document.getElementById("list");
var btn = document.getElementById("btn");

var notes = [];
var editIndex = -1;

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

function editNote(index) {
  var text = notes[index];
  inputEl.value = text;
  btn.innerHTML = "Update Note";
  editIndex = index;
}

function renderNotes() {
  listEl.innerHTML = "";
  for (var i = 0; i < notes.length; i++) {
    var item = notes[i];
    listEl.innerHTML += `<li>
        <p>
          ${item}
        </p>
        <div class="btns">
          <button onclick="deleteNote(${i})">Delete</button>
          <button onclick="editNote(${i})">Edit</button>
        </div>
      </li>`;
  }
}

renderNotes();

function addNote() {
  var note = inputEl.value;
  if (editIndex === -1) {
    // Add process
    if (note === "") {
      alert("Please fill the value");
    } else {
      notes.push(note);
    }
  } else {
    // Update Process
    notes.splice(editIndex, 1, note);
    btn.innerHTML = "Add Note";
    editIndex = -1;
  }

  // Reset
  inputEl.value = "";
  renderNotes();
}
