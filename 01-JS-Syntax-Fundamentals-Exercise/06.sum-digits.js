function sum(num) {
    // initialize sum
    let sum = 0;

    // convert input to string
    let asString = num.toString();

    // for every character of the string
    // - convert to number
    // - add to sum
    for (let digit of asString) {
        sum += Number(digit);
    }

    // print resulting sum   
    console.log(sum)
}