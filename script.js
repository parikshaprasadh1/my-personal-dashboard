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
function updateClock() {
const now = new Date();
let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds = now.getSeconds().toString().padStart(2, '0');
document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
// Initial call + interval
updateClock();
setInterval(updateClock, 1000);

function addNote(){
const cont = document.getElementById("image-container");
const wrapper = document.createElement("li");
wrapper.classList.add("note-wrapper");
const img = document.createElement("img");
img.src="images/sticky.png";
img.classList.add("note-image");
const cls = document.createElement("span");
cls.innerHTML = "\u00d7";
cls.classList.add("cls-btn");
cls.onclick = function(){
cont.removeChild(wrapper);
}
const textArea=document.createElement("textarea");
textArea.classList.add("note-text");
textArea.placeholder="Type here...";
wrapper.appendChild(img);
wrapper.appendChild(cls);
wrapper.appendChild(textArea);
cont.appendChild(wrapper);
}
