// Make two variables called first and last,
// then log them out together as your name.

// 1. Make first variable
let first = "Marsalis";

// 2. Make last variable
let last = "Anderson";

// 3. Log them out, but there needs to be a space between
console.log(first);
console.log(last);

var button = document.querySelector("button");

function logName() {
  console.log(first + " " + last);
}

function appendName() {
  let p = document.createElement("p");
  console.log(p);
}

button.addEventListener("click", logName);

didAppend = false;
function appendName() {
  if (didAppend) return;

  let p = document.createElement("p");

  p.innerText = first + " " + last;

  document.body.appendChild(p);

  didAppend = true;
}

button.addEventListener("click", appendName);

let hobbies = ["Video games", "Music", "Walking"];

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

hobbies.forEach((hobby) => {
  console.log(hobby);
});
