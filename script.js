function updateTime() {
let a = new Date()
let hours = a.getHours()
let minutes = a.getMinutes()
let day = a.getDay()
let date = a.getDate()
let month = a.getMonth()

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day]

let h = document.getElementById("hours");
let m = document.getElementById("minutes");
let format = document.getElementById("format")
let Day = document.getElementById("day");
let dat = document.getElementById("date");
let mon = document.getElementById("month");

let period = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; // If hours is 0, set it to 12 for 12 AM

h.innerHTML = hours;
m.innerHTML = minutes;
Day.innerHTML = days;
format.innerHTML = period;
mon.innerHTML = month;
dat.innerHTML = date;
}

updateTime();
setInterval(updateTime, 1000);