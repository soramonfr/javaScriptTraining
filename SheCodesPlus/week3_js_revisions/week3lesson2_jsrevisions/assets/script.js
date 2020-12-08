let firstName = prompt("Hi, what is your name?");
firstName = firstName.trim();

if (firstName.length > 0) {
    alert("Welcome, " + firstName);
} else {
    alert("Don't you have a name?! 😜");
}