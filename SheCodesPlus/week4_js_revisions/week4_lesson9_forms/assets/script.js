// Challenge 1

function alertMsg() {
    alert("Hooray!");
}

let challenge1Btn = document.querySelector("#special-button");
challenge1Btn.addEventListener("click", alertMsg);

// Challenge 2

function alertPwd(event) {
    event.preventDefault();
    let pwdInput = document.querySelector("#password-input");
    alert(`Your password is ${pwdInput.value}`);
}

let form = document.querySelector("#password-form");
form.addEventListener("submit", alertPwd);

// Challenge 3

function alertInfos(event) {
    event.preventDefault();
    let emailInput = document.querySelector("#email-input");
    alert(`Your email is ${emailInput.value}`);
    let usernameInput = document.querySelector("#username-input");
    alert(`Your username is ${usernameInput.value}`);
}

let signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", alertInfos);