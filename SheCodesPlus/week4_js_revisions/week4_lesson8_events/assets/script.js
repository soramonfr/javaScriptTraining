// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

function alertTemperature(evt) {
    alert("It is 18 degrees");
}

let temperatureAlert = document.querySelector("#temperature-alert");
temperatureAlert.addEventListener("click", alertTemperature);

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function sayTemperature(evt) {
    temperatureBtn.innerHTML = "18 degrees";
}

let temperatureBtn = document.querySelector("#temperature-btn");
temperatureBtn.addEventListener("click", sayTemperature);