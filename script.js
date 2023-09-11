"use strict"

const dayElement = document.querySelector('.Day');
const hourElement = document.querySelector('.Hour');
const minuteElement = document.querySelector('.Minute');
const secondElement = document.querySelector('.Second');

const countDown = ()=>{
const currentDate = new Date();
const halloweenDate = new Date("October 31, 2023 00:00:00");

let timeLeft = halloweenDate - currentDate;

const seconds = Math.floor(timeLeft / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);

let remainingHours = hours % 24;
let remainingMinutes = minutes % 60;
let remainingSeconds = seconds % 60; 

dayElement.textContent = days;
hourElement.textContent = remainingHours;
minuteElement.textContent = remainingMinutes;
secondElement.textContent  = remainingSeconds;
}

setInterval(countDown,1000)