// Challenge 1
let weather = {};
console.log(weather);

// Challenge 2
weather = {
  temperature: 20,
  humidity: 18
};
console.log(weather);

// Challenge 3
console.log(weather.humidity);
console.log(weather.temperature);

// Challenge 4
weather.windSpeed = 5;
console.log(weather.windSpeed);

// Challenge 5
console.log(weather["temperature"]);
console.log(weather["humidity"]);

// Challenge 6
let forecast = [
  {
    day: "Monday",
    temperature: 20
  },
  {
    day: "Tuesday",
    temperature: 26
  },
  {
    day: "Wednesday",
    temperature: 30
  },
  {
    day: "Thursday",
    temperature: 29
  },
  {
    day: "Friday",
    temperature: 15
  },
  {
    day: "Saturday",
    temperature: 22
  },
  {
    day: "Sunday",
    temperature: 24
  }
];
console.log(forecast);

// Test
let sentence = `${forecast[2].day}, the temperature will be ${forecast[2].temperature} degrees.`;
console.log(sentence);