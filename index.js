/**1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
**/

let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const lengthDisplay = document.getElementById("length-display");
const volumeDisplay = document.getElementById("volume-display");
const massDisplay = document.getElementById("mass-display");

inputEl.addEventListener('input', function(){
  inputEl.value = inputEl.value.replace(/[^0-9.]/g, '');
});

inputBtn.addEventListener('click', function(){
  console.log("clicked button")
  const meterResult = (inputEl.value * 3.281).toFixed(3);
  const feetResult = (inputEl.value / 3.281).toFixed(3);

  const literResult = (inputEl.value * 0.264).toFixed(3);
  const gallonResult = (inputEl.value / 0.264).toFixed(3);

  const kiloResult = (inputEl.value * 2.204).toFixed(3);
  const poundResult = (inputEl.value / 2.204).toFixed(3);

  if(inputEl.value === ""){
    lengthDisplay.textContent = ""
    volumeDisplay.textContent = ""
    massDisplay.textContent = ""

  } else{
    lengthDisplay.textContent = `${inputEl.value} meters = ${meterResult} feet | ${inputEl.value} feet = ${feetResult} meters`
    volumeDisplay.textContent = `${inputEl.value} liters = ${literResult} gallons | ${inputEl.value} gallons = ${gallonResult} liters`
    massDisplay.textContent = `${inputEl.value} kilos = ${kiloResult} pounds | ${inputEl.value} pounds = ${poundResult} kilos`

    inputEl.value = ""
  
    
  }
  })