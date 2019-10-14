const numberField = document.querySelector("#card-number")
const nameField = document.querySelector("#name")
const expirationField = document.querySelector("#expiration")
const securityCodeField = document.querySelector("#security-code")

const nameInput = document.querySelector("#name-input")
const numberInput = document.querySelector("#number-input")
const expirationInput = document.querySelector("#expiration-input")
const securityCodeInput = document.querySelector("#security-code-input")

let fieldArr = []

fieldArr.push({ input: nameInput, field: nameField, placeholder: "John Paul" })
fieldArr.push({ input: numberInput, field: numberField, placeholder: "1234 5678 9234 1232" })
fieldArr.push({ input: expirationInput, field: expirationField, placeholder: "14/23" })
fieldArr.push({ input: securityCodeInput, field: securityCodeField, placeholder: "2233" })

fieldArr.forEach(el => {
    el.input.addEventListener('input', () => {
        if (el.input.value.length == 0) {
            el.field.innerHTML = el.placeholder || "";
        } else {
            el.field.innerHTML = el.input.value;
        }
    })
})
