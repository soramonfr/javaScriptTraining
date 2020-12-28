// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

function alertTemperature(evt) {
    alert("It is 18 degrees");
}

let temperatureAlert = document.querySelector("#temperature-btn");
temperatureAlert.addEventListener("click", alertTemperature);

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
