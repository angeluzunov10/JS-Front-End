function calc() {
    // TODO
    let input1 = document.getElementById('num1');
    let input2 = document.getElementById('num2');

    let firstNumber = Number(input1.value);
    let secondNumber = Number(input2.value);

    let sum = document.getElementById('sum');
    sum.value = firstNumber + secondNumber;
}