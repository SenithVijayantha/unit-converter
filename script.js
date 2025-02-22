/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("unit-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
let feet = 0;
let meters = 0;
let gallons = 0;
let liters = 0;
let pounds = 0;
let kilos = 0;

convertBtn.addEventListener("click", function() {
    // console.log("button clicked");
    let passingValue = Number(inputEl.value);
    // console.log(inputEl);
    calcLength(passingValue);
    calcMass(passingValue);
    calcVolume(passingValue);

    lengthEl.textContent = `${passingValue} meters = ${feet.toFixed(3)} feet | ${passingValue} feet = ${meters.toFixed(3)} meters`;
    volumeEl.textContent = `${passingValue} liters = ${gallons.toFixed(3)} gallons | ${passingValue} gallons = ${liters.toFixed(3)} liters`;
    massEl.textContent = `${passingValue} kilos = ${pounds.toFixed(3)} pounds | ${passingValue} pounds = ${kilos.toFixed(3)} kilos`;
})  

function calcLength(value) {
    feet = value * 3.281;
    meters = value / 3.281;
    
}

function calcMass(value) {
    gallons = value * 0.264;
    liters = value / 0.264;
    
}

function calcVolume(value) {
    pounds = value * 2.204;
    kilos = value / 2.204;
    
}