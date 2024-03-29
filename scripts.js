const numberField = document.querySelector("#card-number")
const nameField = document.querySelector("#name")
const expirationField = document.querySelector("#expiration")
const securityCodeField = document.querySelector("#security-code")

const nameInput = document.querySelector("#name-input")
const numberInput = document.querySelector("#number-input")
const expirationInput = document.querySelector("#expiration-input")
const securityCodeInput = document.querySelector("#security-code-input")

let fieldArr = [
    {
        name: "nameInput",
        input: nameInput,
        field: nameField,
        placeholder: "John Paul"
    },
    {
        name: "numberInput",
        input: numberInput,
        field: numberField,
        placeholder: "1234 5678 9234 1232"
    },
    {
        name: "expirationInput",
        input: expirationInput,
        field: expirationField,
        placeholder: "14/23"
    },
    {
        name: "securityCodeInput",
        input: securityCodeInput,
        field: securityCodeField,
        placeholder: "2233"
    },
]

let numberInputPrevValue = fieldArr[1].input.value

let flip = () => {
    document.querySelector(".card-wrapper").classList.toggle("card-wrapper-flip")
}

let addSpaces = (input) => {
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (i % 4 === 0) {
            result.push(' ')
        }
        result.push(input[i])
    }
    return result.join("")
}

let disableSpaces = (() => {  //Immediately-invoked Function Expressions (IIFE)
    numberInput.addEventListener("keypress", e => {
        if (e.keyCode === 32) {
            event.preventDefault()
        }
    })
})()

let isNumberInputValid = (e) => {
    console.log(e.target.value)
    console.log(/^[0-9]*$/.test(e.target.value));
    return /^[0-9]*$/.test(e.target.value)
}


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
    let paymentNetwork = document.querySelector("#network-img")
    numberInput.addEventListener("input", e => {
        let firstNumber = numberInput.value.substring(0, 1)
        if (firstNumber < 5) {
            paymentNetwork.src = "mastercard.svg"
        } else {
            paymentNetwork.src = "visa.svg"
        }
    })

})()

fieldArr.forEach(el => {
    el.input.addEventListener('input', (e) => {
        if (el.input.value.length === 0) {
            el.field.innerHTML = el.placeholder || "";
        } else {
            if (el.name === "numberInput") {
                if (isNumberInputValid(e)) {
                    numberInputPrevValue = el.input.value
                    el.field.innerHTML = addSpaces(el.input.value)
                } else {
                    el.field.innerHTML = addSpaces(numberInputPrevValue)
                    return false;
                }
            }
            else if (el.name === "expirationInput") {
                el.field.innerHTML = addSlash(el.input.value)
            }
            else {
                el.field.innerHTML = el.input.value;
            }
        }
    })
})
