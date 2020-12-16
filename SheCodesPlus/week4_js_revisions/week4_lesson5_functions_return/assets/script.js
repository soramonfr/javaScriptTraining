// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

// function isWindy(speed) {
//   if (speed > 5) {
//     alert("It is windy");
//   } else {
//     alert("It is not windy");
//   }
// }

// function isWindy(speed) {
//   if (speed > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// if (isWindy(4)) {
//   alert ("It is windy");
// } else {
//   alert ("It is not windy");
// }


// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true
let wind = prompt("What is the wind speed?");
let unit = prompt("What is the unit? (metric or imperial)")

function isWindy2(speed, unit) {
  if ((speed > 5 && unit === "metric")) {
    return true;
  } else {
    return false;
  }
}

if (isWindy2(wind, unit)) {
  alert ("It is windy");
} else {
  alert ("It is not windy");
}

// Révisions table de vérité
// ET (&&)
// A | B | Result
// 0   0   0
// 1   0   0
// 0   1   0
// 1   1   1 

// OU (||)
// A | B | Result
// 0   0   0
// 1   0   1
// 0   1   1
// 1   1   1 

// OU EXCLUSIF (XOR)
// A | B | Result
// 0   0   0
// 1   0   1
// 0   1   1
// 1   1   0

// Opérateurs logiques
// A && B || C
// C || (A && B) <=> C ou A ET C ou B
