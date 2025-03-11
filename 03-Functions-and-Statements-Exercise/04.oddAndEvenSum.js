function oddAndEvenSum(number) {
    number = String(number);
    let evenSum = 0;
    let oddSum = 0;

    for (let digit of number) {
        digit = Number(digit);
        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}