// Challenge 1
let now = new Date();
console.log(now);

// Challenge 2
let milliSeconds = now.getMilliseconds();
console.log(milliSeconds);

// Challenge 3
let day = now.getDay();
console.log(day);

// Challenge 4
let year = now.getFullYear();
console.log(year);

//Challenge 5
let month = now.getMonth();
console.log(month);

//Challenge 6
let h2 = document.querySelector("h2");
let date = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
month = months[now.getMonth()];

h2.innerHTML = `Today is ${day}, ${month} ${date}, ${year}.`;

// Challenge 7
function formatDate(date) {
  let yearCurrent = date.getFullYear();
  let dateCurrent = date.getDate();

  let daysCurrent = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let dayCurrent = daysCurrent[date.getDay()];

  let monthsCurrent = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let monthCurrent = monthsCurrent[date.getMonth()];
  let formattedDate = `It is ${dayCurrent}, ${monthCurrent} ${dateCurrent}, ${yearCurrent}.`;
  return formattedDate;
}

let dateToGuess = new Date("1912/01/06");
console.log(formatDate(dateToGuess));
