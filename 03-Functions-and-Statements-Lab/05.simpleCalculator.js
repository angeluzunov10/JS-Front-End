function calculate(num1, num2, operator) {
    let operationsMap = {
        multiply: (num1, num2) => num1 * num2,
        divide: (num1, num2) => num1 / num2,
        add: (num1, num2) => num1 + num2,
        subtract: (num1, num2) => num1 - num2
    }   

    let action = operationsMap[operator];

    console.log(action(num1, num2))
}