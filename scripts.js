const numberField = document.querySelector("#card-number")
const nameField = document.querySelector("#name")
const expirationField = document.querySelector("#expiration")
const securityCodeField = document.querySelector("#security-code")

const nameInput = document.querySelector("#name-input")
const numberInput = document.querySelector("#number-input")
const expirationInput = document.querySelector("#expiration-input")
const securityCodeInput = document.querySelector("#security-code-input")

let fieldArr = []

fieldArr.push({ name: "nameInput", input: nameInput, field: nameField, placeholder: "John Paul" })
fieldArr.push({ name: "numberInput", input: numberInput, field: numberField, placeholder: "1234 5678 9234 1232" })
fieldArr.push({ name: "expirationInput", input: expirationInput, field: expirationField, placeholder: "14/23" })
fieldArr.push({ name: "securityCodeInput", input: securityCodeInput, field: securityCodeField, placeholder: "2233" })


let addSpaces = (input) => {
    let result = []
    for (let i = 0; i < input.length; i++) {
        console.log(i % 4)
        if (i % 4 === 0) {
            result.push(' ')
            console.log("tests")
        }
        result.push(input[i])
    }
    return result.join("")
}

let validateNumberInput = (input) => {
    console.log(typeof (input))
    console.log(input)
    console.log(/^[0-9]+$/.test(input));
    if (/^[0-9]+$/.test(input)) {
        return true;
    }
    return false;
}

let disableSpaces = (() => {  //Immediately-invoked Function Expressions (IIFE)
    numberInput.addEventListener("keypress", e => {
        if (e.keyCode === 32) {
            event.preventDefault()
        }
    })
})()

let addSlash = (input) => {
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0 && i != 0) {  //because 0%2 === 0 is true
            result.push("/")
        }
        result.push(input[i])
    }
    return result.join("")
}

let changeNetworkIcon = (() => {
    let paymentNetwork = document.querySelector("network-img")
    let firstNumber = numberField.innerHTML.substring(0, 1)
    //TODO SWITCH
})()

fieldArr.forEach(el => {
    el.input.addEventListener('input', () => {
        if (el.input.value.length === 0) {
            el.field.innerHTML = el.placeholder || "";
        } else {
            if (el.name === "numberInput" && validateNumberInput(el.input.value)) {
                el.field.innerHTML = addSpaces(el.input.value)
            }
            else if (el.name === "expirationInput") {
                el.field.innerHTML = addSlash(el.input.value)
            }
            else { el.field.innerHTML = el.input.value; }
        }
    })
})
