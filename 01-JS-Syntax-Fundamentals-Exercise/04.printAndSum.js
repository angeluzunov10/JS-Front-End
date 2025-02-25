function printAndSum(start, end) {
    let sum = 0;
    let numbers = '';

    for (let i = start; i <= end; i++) {
        numbers += i;
        if (i != end) {
            numbers += ' ';
        }

        sum += i;
    }
    
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}