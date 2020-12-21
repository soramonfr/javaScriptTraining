// Challenge 1
// Log li with id special
console.log(document.querySelector("li#special"));

// Challenge 2
// Log all li with class of country
console.log(document.querySelectorAll("li.country"));

// Challenge 3
// Add class special to the li with id special
let liSpecial = document.querySelector("li#special");
liSpecial.classList.add("special");
console.log(liSpecial.className);

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
liSpecial.innerHTML = "Japan 🍙";
