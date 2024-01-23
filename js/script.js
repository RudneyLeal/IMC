import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { AlertError2 } from "./alert-error2.js"
import { calculateIMC, notANumber } from "./utils.js"

// variáveis - variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => {
    AlertError.close();
    AlertError2.close();
}
inputHeight.oninput = () => {
    AlertError.close();
    AlertError2.close();
}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    if(weight == "") {
        AlertError2.open();
        return;
    }

    if(height == "") {
        AlertError2.open();
        return;
    }

    AlertError.close()
    AlertError2.close()

    let result = calculateIMC(weight, height)
    displayResultMessage(result);
}

function displayResultMessage(result) {
    let  message = `seu IMC é de ${result}`
    
    Modal.message.innerText = message;
    Modal.open();
}
