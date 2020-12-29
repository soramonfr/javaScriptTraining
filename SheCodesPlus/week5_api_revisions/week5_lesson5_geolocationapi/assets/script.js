// Challenge 1
function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(showPosition);

// Challenge 2 & 3
function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `The current temperature of your location is 🌡${temperature} celsius degrees.`;
}
function getTemperature(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "c3713b1bcebb5ce5f896fa8a7eec12ab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    axios.get(`${apiUrl}&APPID=${apiKey}`).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(getTemperature);

