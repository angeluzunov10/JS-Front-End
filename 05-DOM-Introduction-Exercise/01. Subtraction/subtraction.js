function subtract() {
    //TODO
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let result = document.getElementById('result');

    let subtractionResult = Number(firstNumber) - Number(secondNumber);

    result.textContent = subtractionResult.toString();
}