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

let form = document.querySelector("form");
form.addEventListener("submit", alertPwd);

// Challenge 3

