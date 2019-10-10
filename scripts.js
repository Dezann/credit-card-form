const numberField = document.querySelector("#card-number")
const nameField = document.querySelector("#name")
const expirationField = document.querySelector("#expiration")
const securityCodeField = document.querySelector("#security-code")

const nameInput = document.querySelector("#name-input")
const numberInput = document.querySelector("#number-input")
const expirationInput = document.querySelector("#expiration-input")
const securityCodeInput = document.querySelector("#security-code-input")

let fieldArr = []

fieldArr.push({ input: nameInput, field: nameField })
fieldArr.push({ input: numberInput, field: numberField })
fieldArr.push({ input: expirationInput, field: expirationField })
fieldArr.push({ input: securityCodeInput, field: securityCodeField })

fieldArr.forEach(el => {
    el.input.addEventListener('input', () => {
        if (el.input.value.length == 0) {
            el.field.innerHTML = 'John Paul';
        } else {
            el.field.innerHTML = el.input.value;
        }
    })
})
