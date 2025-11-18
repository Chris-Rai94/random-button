import "./style.css";

// find a random id from the db.js file
import data from "./db.js";

const button = document.querySelector("button");
const nameDisplay = document.querySelector("p");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const randomPerson = data[Math.floor(Math.random() * data.length)];
  nameDisplay.textContent = randomPerson.name;
  body.style.backgroundColor = `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`;
});
