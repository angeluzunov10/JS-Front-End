function sameNumbers(num) {
    let sum = 0;
    let same = true;
    let asString = num.toString();
    let firstDigit = asString[0]
    for (let digit of asString) {
        if (digit != firstDigit) {
            same = false
        }
        sum += Number(digit);
    }

    console.log(same)
    console.log(sum)
}