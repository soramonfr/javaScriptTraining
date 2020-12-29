// Challenge 1
function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(showPosition);

// Challenge 2
