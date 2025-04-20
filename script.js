const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
if(inputBox.value === ''){
alert("Invalid input");
}
else{
let li = document.createElement("li");
li.innerHTML = inputBox.value;
listContainer.appendChild(li);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);
}
inputBox.value="";
}
inputBox.addEventListener("keydown",function(event){
if (event.key == "Enter"){
addTask();
}
});

listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
e.target.classList.toggle("checked");
}
else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
}
}, false);
const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("days");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const today = date.getDate();

const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

monthYear.innerText = `${months[month]} ${year}`;

  // Weekday headers
weekDays.forEach(day => {
const div = document.createElement("div");
div.classList.add("day");
div.innerText = day;
daysContainer.appendChild(div);
});

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Blank slots
for (let i = 0; i < firstDay; i++) {
const blank = document.createElement("div");
blank.classList.add("date");
daysContainer.appendChild(blank);
}

// Dates
for (let i = 1; i <= daysInMonth; i++) {
const dateDiv = document.createElement("div");
dateDiv.classList.add("date");
dateDiv.innerText = i;
if (i === today) {
dateDiv.classList.add("today"); // Highlight today
}
daysContainer.appendChild(dateDiv);
}
