function solve(array) {
    let oddNumsSum = 0;
    let evenNumsSum = 0;

    for (let number of array) {
        if (number % 2 == 0) {
            evenNumsSum += number;
        } else {
            oddNumsSum += number
        }
    }

    console.log(evenNumsSum - oddNumsSum)
}