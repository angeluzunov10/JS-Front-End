function multiply(number) {
    let result = 0;

    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        result = number * multiplier;
        console.log(`${number} X ${multiplier} = ${result}`)
    }
}