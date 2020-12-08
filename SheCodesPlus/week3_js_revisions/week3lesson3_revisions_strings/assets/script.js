let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";

console.log(country.replace(" ", "-"));

city = city.trim();
console.log(city);

console.log(attraction.toLowerCase());

console.log(place.toUpperCase());

let sentence = `I went to visit the ${attraction} in ${city}, right next to my ${place.toLowerCase()}. Now, I'm getting ready for my trip to ${country}!`;
console.log(sentence);
