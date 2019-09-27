const cardNumber = document.querySelector("#card-number")
const name = document.querySelector("#name")
const expiration = document.querySelector("#expiration")
const SecurityCode = document.querySelector("#security-code")

const nameInput = document.querySelector("#name-input")
const numberInput = document.querySelector("#number-input")
const expirationInput = document.querySelector("#expiration-input")
const securityCodeInput = document.querySelector("#security-code-input")

console.log(card_number, name, expiration)


nameInput.addEventListener('input', function () {
    //Why it doesn't work when I change it to arrow function?
    if (nameInput.value.length == 0) {
        name.innerHTML = 'John Paul';
    } else {
        name.innerHTML = this.value;
    }
});

numberInput.addEventListener('input')
