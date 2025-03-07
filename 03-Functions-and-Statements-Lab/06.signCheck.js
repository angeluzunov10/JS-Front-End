function check(numOne, numTwo, numThree) {
    let nums = [numOne, numTwo, numThree];
    let negativeNums = 0;

    for (let number of nums ) {
        number = number.toString();
        if (number[0] == '-') {
            negativeNums += 1;
        }
    }

    if (negativeNums % 2 == 0) {
        console.log('Positive')    
    } else {
        console.log('Negative')
    }

    
}


check(5, 12, -15)