// Challenge 1
function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(showPosition);

// Challenge 2
function showTemperature(response) {
    console.log(response);
    let latitude = showPosition(position.coords.latitude);
    let longitude = showPosition(position.coords.longitude);
}

let apiKey = "c3713b1bcebb5ce5f896fa8a7eec12ab";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
axios.get(`${apiUrl}&APPID=${apiKey}`).then(showTemperature);
