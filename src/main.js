import "./style.css";

// find a random id from the db.js file
import data from "./db.js";
const randomNumber = () => Math.random() * 100;
const button = document.querySelector("button");
const nameDisplay = document.querySelector("p");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const randomPerson = data[Math.floor(Math.random() * data.length)];
  nameDisplay.textContent = randomPerson.name;
  //body.style.backgroundColor = `hsl(${Math.random() * 360}, ${randomNumber()}%, ${randomNumber()}%)`;
  button.classList.add("transform", "scale-95");
  setTimeout(() => {
    button.classList.remove("transform", "scale-95");
  }, 100);
});

// change the color scheme when dark mode radio button is clicked
const darkModeRadio = document.getElementById("dark");
const lightModeRadio = document.getElementById("light");

darkModeRadio.addEventListener("change", () => {
  body.classList.remove("bg-gray-100");
  body.classList.add("bg-green-900", "text-white");
});

lightModeRadio.addEventListener("change", () => {
  body.classList.remove("bg-green-900", "text-white");
  body.classList.add("bg-green-400");
});
