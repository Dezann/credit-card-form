const cardNumber = document.querySelector("#card-number")
const name = document.querySelector("#name")
const expiration = document.querySelector("#expiration")
const SecurityCode = document.querySelector("#security-code")

const nameInput = document.querySelector("#name-input")
const numberInput = document.querySelector("#number-input")
const expirationInput = document.querySelector("#expiration-input")
const securityCodeInput = document.querySelector("#security-code-input")


nameInput.addEventListener('input', () => {
    if (nameInput.value.length == 0) {
        name.innerHTML = 'John Paul';
    } else {
        name.innerHTML = nameInput.value;
    }
});

numberInput.addEventListener('input')
